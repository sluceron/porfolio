import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import '../styles/Header.css'
import Lottie from "lottie-react";
import { useTranslation } from 'react-i18next';
import '../i18n';

import logo from '../assets/images/lotties/logo.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const navLinks = [
    { name: 'nav.home', path: '/' },
    { name: 'nav.about', path: '/about' },
    { name: 'nav.gallery', path: '/gallery' },
    { name: 'nav.services', path: '/services' },
    { name: 'nav.contact', path: '/contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
         <Lottie animationData={logo} loop={true} />
        </Link>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'nav-link active' : 'nav-link'}
            >
              {t(link.name)}
            </Link>
          ))}
        </nav>

        <div className="language-switcher">
          <button 
            onClick={() => i18n.changeLanguage('es')}
            style={{ fontWeight: i18n.language === 'es' ? 'bold' : 'normal' }}
          >
            🇪🇸 ESPAÑOL
          </button>
          <button 
            onClick={() => i18n.changeLanguage('en')}
            style={{ fontWeight: i18n.language === 'en' ? 'bold' : 'normal' }}
          >
            🇬🇧 ENGLISH
          </button>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <MobileMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  )
}

export default Header
