import ContactForm from '../components/ContactForm'
import '../styles/Contact.css'
import { useLocation } from 'react-router-dom'

const Contact = () => {
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
        <h1>Contacto</h1>
        <p className="contact-subtitle">
        ¿Tienes un proyecto en mente? <p>Hablemos y hagamos algo increíble juntos</p>
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Información de Contacto</h2>

            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:hola@santiagoluceron.com">hola@santiagoluceron.com</a>
              <h3>Whatsapp</h3>
              <a href="https://api.whatsapp.com/send/?phone=34684769960&text&type=phone_number&app_absent=0">Escríbeme por Whatsapp</a>
            </div>

            <div className="info-item">
              <h3>Redes Sociales</h3>
              <div className="social-links-contact">
                <a href="https://linkedin.com/in/santiagoluceron" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/sluceron" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>

            <div className="info-item">
              <h3>Disponibilidad</h3>
              <p>Disponible para proyectos freelance, colaboraciones y puestos temporales o indefinidos.</p>
              <p>Adaptabilidad total a trabajo presencial, híbrido o remoto.</p>
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
