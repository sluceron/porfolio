import ContactForm from '../components/ContactForm'
import '../styles/Contact.css'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const servicesParam = searchParams.get('services') || ''
  const selectedServices = servicesParam ? servicesParam.split(',') : []

  const serviceNamesMap: Record<string, string> = {
    'web': 'Desarrollo Web',
    'marketing': 'Marketing Digital',
    'seo': 'SEO',
    'branding': 'Branding',
    'design': 'Diseño UI/UX'
  }
  const selectedServiceNames = selectedServices.map(s => serviceNamesMap[s] || s)
  return (

    <div className="contact">
      <section className="contact-hero">
        <h1>{t('contact.hero.title')}</h1>
        <p className="contact-subtitle">
        {t('contact.hero.subtitle')}
        
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>{t('contact.info.title')}</h2>

            <div className="info-item">
              <h3>{t('contact.info.email')}</h3>
              <a href="mailto:hola@santiagoluceron.com">hola@santiagoluceron.com</a>
              <h3>{t('contact.info.whatsapp')}</h3>
              <a href="https://api.whatsapp.com/send/?phone=34684769960&text&type=phone_number&app_absent=0">{t('contact.info.whatsapp')}</a>
            </div>

            <div className="info-item">
              <h3>{t('contact.info.social')}</h3>
              <div className="social-links-contact">
                <a href="https://linkedin.com/in/santiagoluceron" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/sluceron" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="info-item">
              <h3>{t('contact.info.availability')}</h3>
              <p>{t('contact.info.availabilityParagraph1')}</p>
              <p>{t('contact.info.availabilityParagraph2')}</p>
            </div>
          </div>

          <div className="contact-form-wrapper">

            <ContactForm preselectedServices={selectedServiceNames} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
