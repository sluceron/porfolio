import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MobileMenu from './MobileMenu'
import '../styles/Header.css'
import Lottie from "lottie-react";

import logo from '../assets/images/lotties/logo.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre mí', path: '/about' },
    { name: 'Galería', path: '/gallery' },
    { name: 'Servicios', path: '/services' },
    { name: 'Contacto', path: '/contact' },

  ]

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
              {link.name}
            </Link>
          ))}
        </nav>

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
