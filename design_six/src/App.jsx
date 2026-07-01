import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Sectors from './components/Sectors';
import WhyUs from './components/WhyUs';
import Configurator from './components/Configurator';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Sectors />
        <WhyUs />
        <Configurator />
        <Projects />
        <Partners />
        <Testimonials />
        <Clients />
        <CTABanner />
      </main>
      <Footer />
      
      {/* Scroll to Top Button */}
      <button 
        id="scrollTopBtn" 
        className={showScrollTop ? 'visible' : ''} 
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  );
}
