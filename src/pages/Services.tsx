import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../styles/Services.css'

const servicesList = [
  { id: 'Imprenta y Rotulación', title: { key: 'services.imprenta.title' }, icon: '🖨️', description: { key: 'services.imprenta.description' } },
  { id: 'Branding', title: { key: 'services.branding.title' }, icon: '🎨', description: { key: 'services.branding.description' } },
  { id: 'Content Creator', title: { key: 'services.contentCreator.title' }, icon: '📸', description: { key: 'services.contentCreator.description' } },
  { id: 'Diseño Web', title: { key: 'services.webDesign.title' }, icon: '💻', description: { key: 'services.webDesign.description' } },
  { id: 'Consultoría y Formacion', title: { key: 'services.consulting.title' }, icon: '🎓', description: { key: 'services.consulting.description' } },
  { id: 'Copywriting y Storytelling', title: { key: 'services.copywriting.title' }, icon: '✍️', description: { key: 'services.copywriting.description' } },
]

const Services = () => {
  const history = useHistory()
  const { t } = useTranslation()

  const handleSelect = (id: string) => {
    history.push(`/contact?services=${encodeURIComponent(id)}`)
  }

  return (

    <section className="services">
      <section className="services-hero">
      <h1>{t('services.heroTitle')}</h1>
      <p className="contact-subtitle"> {t('services.heroSubtitle')}
      </p>
      </section>
      <section className="services-container">
        <div className="services-content">
        <div className="services-grid">
          {servicesList.map(service => (
            <div
              key={service.id}
              className="service-card"
              onClick={() => handleSelect(service.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter') handleSelect(service.id) }}
            >
              <div className="card-inner">
                <div className="card-front">
                <div className="service-icon">
                {service.icon}
              </div>
              <h3>{t(service.title.key)}</h3>
                </div>
                <div className="card-back">
                  <p>{t(service.description.key)}</p>
                </div>
              </div>
            </div>


          ))}
        </div>
        </div>
        </section>
      
    </section>
  )
}

export default Services
