import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <a href="#" className="navbar-logo-link" onClick={closeMobileMenu}>
            <Logo />
          </a>

          {/* Desktop Menu */}
          <nav className="navbar-menu">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#solutions">Solutions</a>
            <a href="#sectors">Sectors</a>
            <a href="#why-choose-us">Corporate Profile</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="navbar-cta-group">
            <a href="#contact" className="btn-navbar-cta">Get a Quote</a>
            <button className={`hamburger ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu} aria-label="Toggle Navigation">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-drawer-nav">
          <a href="#home" onClick={closeMobileMenu}>Home</a>
          <a href="#about" onClick={closeMobileMenu}>About Us</a>
          <a href="#solutions" onClick={closeMobileMenu}>Solutions</a>
          <a href="#sectors" onClick={closeMobileMenu}>Sectors</a>
          <a href="#why-choose-us" onClick={closeMobileMenu}>Corporate Profile</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          <a href="#contact" className="btn-mobile-cta" onClick={closeMobileMenu}>Get a Quote</a>
        </nav>
      </div>
      {mobileMenuOpen && <div className="drawer-overlay" onClick={closeMobileMenu}></div>}
    </>
  );
}
