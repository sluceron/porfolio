import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import emailjs from '@emailjs/browser'
import '../styles/ContactForm.css'

interface ContactFormProps {
  preselectedServices?: string[];
}

const ContactForm = ({ preselectedServices = [] }: ContactFormProps) => {
  const { t } = useTranslation();

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
      setError(t('contactForm.error.actionNotAllowed'));
      return;
    }

    // Tiempo mínimo
    if (Date.now() - startTime < 1500) {
      setError(t('contactForm.error.tooFast'));
      return;
    }

    // Interacción humana
    if (!userInteracted) {
      setError(t('contactForm.error.noInteraction'));
      return;
    }

    setIsLoading(true)
    setError(null)

    try {
      await emailjs.send(
        'service_kc4d5nr',
        'template_l8ywbrq',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          servicios: preselectedServices.join(', ') || t('contactForm.noService')
        },
        'mYRhInMQrTkQiSumR'
      )
      setIsSubmitted(true)
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setIsSubmitted(false)
      }, 3000)
    } catch (err) {
      setError(t('contactForm.error.sendFail'))
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
          <strong>{t('contactForm.preselected')}:</strong>
          <ul>
            {preselectedServices.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      )}
      <h2>{t('contactForm.title')}</h2>

      <div className="form-group">
        <label htmlFor="name">{t('contactForm.name')}</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onFocus={() => setUserInteracted(true)}
          required
          placeholder={t('contactForm.namePlaceholder')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">{t('contactForm.email')}</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onFocus={() => setUserInteracted(true)}
          required
          placeholder={t('contactForm.emailPlaceholder')}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">{t('contactForm.message')}</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setUserInteracted(true)}
          required
          rows={6}
          placeholder={t('contactForm.messagePlaceholder')}
        />
      </div>

      <button type="submit" className="submit-btn" disabled={isSubmitted || isLoading || !userInteracted}>
        {isLoading ? t('contactForm.sending') : isSubmitted ? t('contactForm.sent') : t('contactForm.send')}
      </button>

      {error && <p className="error-message">{error}</p>}

      {isSubmitted && <p className="success-message">{t('contactForm.thankYou')}</p>}
    </form>
  )
}

export default ContactForm