import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Portfolio Creativo</h3>
            <p>Diseño inmersivo y narrativo 2025</p>
          </div>

          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <div className="social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Portfolio Creativo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
