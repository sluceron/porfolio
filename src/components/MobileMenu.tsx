import { Link, useLocation } from 'react-router-dom'
import { NavLink } from '../types'
import '../styles/MobileMenu.css'
import { useTranslation } from 'react-i18next'

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const location = useLocation()
  const { t, i18n } = useTranslation()

  return (
    <>
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      <nav className={`mobile-menu ${isOpen ? 'active' : ''}`} role="navigation">
        <div className="mobile-menu-content">

          {/* Language Switcher */}
          <div className="mobile-language-switcher">
            <button 
              onClick={() => i18n.changeLanguage('es')}
              style={{ fontWeight: i18n.language === 'es' ? 'bold' : 'normal' }}
            >
              ES
            </button>
            <button 
              onClick={() => i18n.changeLanguage('en')}
              style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal' }}
            >
              EN
            </button>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'mobile-nav-link active' : 'mobile-nav-link'}
              onClick={onClose}
            >
              {typeof link.name === 'string' ? t(link.name) : t(link.name.key)}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default MobileMenu
