import React from 'react';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="ctabanner-section">
      <div className="ctabanner-container">
        <div className="ctabanner-content">
          <h2 className="ctabanner-title">
            Ready to Transform Your Space with Intelligent AV?
          </h2>
          <p className="ctabanner-desc">
            Discuss your workspace integration needs with our certified CTS engineering team. We provide custom design drafting, acoustics modeling, and hardware configurations.
          </p>
          <a href="#contact" className="btn-ctabanner-action">
            Schedule a Design Consultation
            <svg className="cta-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
