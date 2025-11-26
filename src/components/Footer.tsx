import { FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Servicios Creativos para particulares y empresas</h3>
            <p>Diseño inmersivo y narrativo 2025</p>
          </div>

          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Santiago Lucerón. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
