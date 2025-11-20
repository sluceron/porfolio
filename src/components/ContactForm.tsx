import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { ContactFormData } from '../types'
import '../styles/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const serviceID = 'service_kc4d5nr'
    const templateID = 'template_l8ywbrq'
    const publicKey = 'mYRhInMQrTkQiSumR'

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        console.log('Email enviado correctamente')
        setIsSubmitted(true)

        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setIsSubmitted(false)
        }, 3000)
      })
      .catch((error: unknown) => {
        console.error('Error al enviar email:', error)
      })
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Envíame un mensaje</h2>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
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
          required
          rows={6}
          placeholder="Cuéntame sobre tu proyecto..."
        />
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitted}>
        {isSubmitted ? '¡Mensaje Enviado!' : 'Enviar Mensaje'}
      </button>

      {isSubmitted && (
        <p className="success-message">
          ¡Gracias por contactarme! Te responderé pronto.
        </p>
      )}
    </form>
  )
}

export default ContactForm
