import { FaLinkedin, FaGithub } from 'react-icons/fa'
import '../styles/Footer.css'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{t('footer.servicesTitle')}</h3>
            <p>{t('footer.servicesDescription')}</p>
          </div>

          <div className="footer-section">
            <h4>{t('footer.socialNetworks')}</h4>
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
          <p>&copy; {currentYear} Santiago Lucerón. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
