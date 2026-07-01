import React from 'react';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section id="contact" className="cta-section section">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Ready To Upgrade Your AV Infrastructure?</h2>
            <p className="cta-banner-desc">
              Get in touch with our certified engineers to plan a site analysis, consult on acoustic treatments, or request system upgrades.
            </p>
            <a href="#contact" className="btn btn-accent btn-cta-light">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
