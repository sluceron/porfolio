import { Link, useLocation } from 'react-router-dom'
import { NavLink } from '../types'
import '../styles/MobileMenu.css'

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  const location = useLocation()

  return (
    <>
      <div 
        className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`}
        onClick={onClose}
      />
      
      <nav className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={location.pathname === link.path ? 'mobile-nav-link active' : 'mobile-nav-link'}
              onClick={onClose}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default MobileMenu
