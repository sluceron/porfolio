import { useHistory } from 'react-router-dom'
import '../styles/Services.css'

const servicesList = [
  { id: 'Imprenta y Rotulación', title: 'Imprenta y Rotulación', icon: '🖨️', description: 'Creación de todo tipo de material impreso: tarjetas, folletos, carteles, rótulos, ropa personalizada y soportes visuales para que tu marca se vea profesional en eventos, locales y presentaciones.' },
  { id: 'Branding', title: 'Identidad Corporativa', icon: '🎨', description: 'Creación y desarrollo de la identidad visual de tu marca: diseño de logotipo, paleta de colores, tipografías y todo lo necesario para transmitir una imagen sólida, coherente y profesional.' },
  { id: 'Content Creator', title: 'Content Creator Digital', icon: '📸', description: 'Producción de fotos, vídeos y contenido visual pensado para redes sociales, con una estética cuidada y adaptada a lo que tu negocio quiere transmitir.' },
  { id: 'Diseño Web', title: 'Diseño Web y Tecnología', icon: '💻', description: 'Creación de páginas web modernas, rápidas y adaptadas a móviles, que explican claramente lo que haces y ayudan a que tus clientes confíen en ti.' },
  { id: 'Consultoría y Formacion', title: 'Consultoría y Formación', icon: '🎓', description: 'Asesoramiento personalizado y formación paso a paso para ayudarte a entender el marketing digital, el diseño y las herramientas que necesitas para mejorar tu proyecto.' },
  { id: 'Copywriting y Storytelling', title: 'Copywriting y Storytelling', icon: '✍️', description: 'Redacción de textos claros, humanos y persuasivos que cuentan la historia de tu marca y hacen que tus clientes entiendan quién eres y por qué elegirte.' },
]

const Services = () => {
  const history = useHistory()

  const handleSelect = (id: string) => {
    history.push(`/contact?services=${encodeURIComponent(id)}`)
  }

  return (

    <section className="services">
      <section className="services-hero">
      <h1>Servicios Creativos para Potenciar tu Marca</h1>
      <p className="contact-subtitle"> Selecciona un servicio para solicitar tu presupuesto personalizado.
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
              <h3>{service.title}</h3>
                </div>
                <div className="card-back">
                  <p>{service.description}</p>
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
