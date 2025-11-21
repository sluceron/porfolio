import { Link } from 'react-router-dom'
import '../styles/Home.css'

const Home = () => {
  return (
    <div className="home responsive-home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Creando experiencias
            <span className="highlight"> digitales únicas</span>
          </h1>
          <p className="hero-description">
            Portfolio inmersivo y narrativo que cuenta historias a través del diseño y la tecnología
          </p>
          <div className="hero-cta">
            <Link to="/about" className="btn btn-primary">
              Sobre mí
            </Link>

            <Link to="/contact" className="btn btn-primary">
              Contactar
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
      </section>

      <section className="intro">
        <div className="intro-container">
          <h2>Bienvenido a mi universo creativo</h2>
          <p>
            Donde el diseño narrativo se encuentra con la innovación tecnológica. 
            Cada proyecto es una historia única que merece ser contada de forma memorable.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
