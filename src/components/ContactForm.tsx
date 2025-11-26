import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/ContactForm.css'

interface ContactFormProps {
  preselectedServices?: string[];
}

const ContactForm = ({ preselectedServices = [] }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [startTime] = useState(Date.now());
  const [userInteracted, setUserInteracted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    // Honeypot
    if (data.get("antiBot")) {
      setError("Acción no permitida.");
      return;
    }

    // Tiempo mínimo
    if (Date.now() - startTime < 1500) {
      setError("Operación demasiado rápida. ¿Eres humano?");
      return;
    }

    // Interacción humana
    if (!userInteracted) {
      setError("Interactúa con el formulario antes de enviarlo.");
      return;
    }

    setIsLoading(true)
    setError(null)

    try {
      await emailjs.send(
        'service_kc4d5nr',            // Sustituye por el Service ID de EmailJS
        'template_l8ywbrq',           // Sustituye por el Template ID de EmailJS
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          servicios: preselectedServices.join(', ') || 'No seleccionado'
        },
        'mYRhInMQrTkQiSumR'             // Sustituye por tu Public Key (antes USER_ID)
      )
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError('No se pudo enviar el mensaje. Inténtalo más tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="antiBot"
        style={{ display: "none" }}
        autoComplete="off"
      />
      {preselectedServices.length > 0 && (
        <div className="preselected-services-info">
          <strong>Servicios seleccionados:</strong>
          <ul>
            {preselectedServices.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      )}
      <h2>Envíame un mensaje</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setUserInteracted(true)}
          required
          placeholder="Tu nombre"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setUserInteracted(true)}
          required
          placeholder="tu@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setUserInteracted(true)}
          required
          rows={6}
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitted || isLoading || !userInteracted}>
        {isLoading ? 'Enviando...' : isSubmitted ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
      </button>

      {error && (
        <p className="error-message">
          {error}
        </p>
      )}

      {isSubmitted && (
        <p className="success-message">
          ¡Gracias por contactarme! Te responderé pronto.
        </p>
      )}
    </form>
  )
}

export default ContactForm
