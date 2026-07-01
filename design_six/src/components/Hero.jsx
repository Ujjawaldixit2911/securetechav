import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Premium Audio Visual Integrators</span>
          <h1 className="hero-title">Transforming Spaces Through Intelligent AV Solutions</h1>
          <p className="hero-desc">
            Delivering world-class Audio Visual, Smart Integration, Control Systems, Acoustics, and ICT Infrastructure solutions across enterprises, institutions, and public sectors.
          </p>
          <div className="hero-btns">
            <a href="#solutions" className="btn btn-accent">Explore Solutions</a>
            <a href="#contact" className="btn btn-outline-white">Contact Us</a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-mockup">
            <img src="/assets/sectors/sector-corporate.png" alt="Integrated Executive Boardroom AV Mockup" className="hero-img" />
          </div>
          <div className="hero-badge">
            <div className="badge-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="badge-details">
              <h4>ISO Certified</h4>
              <p>Premium Quality Standard</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
