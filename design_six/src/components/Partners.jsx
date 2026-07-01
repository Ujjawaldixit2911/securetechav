import React from 'react';
import './Partners.css';

export default function Partners() {
  const brandLogos = [
    { name: 'Cisco', src: '/static/ciscologo.webp' },
    { name: 'Sony', src: '/static/sonylogo685450c77eseeklogocomwebp@2x.webp' },
    { name: 'JBL', src: '/static/jbllogo.webp' },
    { name: 'Bose', src: '/static/boselogo.webp' },
    { name: 'QSC', src: '/static/qnclogo.webp' },
    { name: 'Sennheiser', src: '/static/senheiserlogo.webp' },
    { name: 'LG', src: '/static/lglogo.webp' },
    { name: 'Christie', src: '/static/christielogo.webp' }
  ];

  // Duplicate the logos array to achieve a seamless scrolling effect
  const marqueeLogos = [...brandLogos, ...brandLogos];

  return (
    <section className="partners-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Ecosystem Partners</span>
          <h2 className="section-title">Allied Hardware Brands</h2>
          <p className="section-desc">We build architectures natively compatible with leading equipment manufacturers.</p>
        </div>

        <div className="partners-slider-container">
          <div className="partners-track">
            {marqueeLogos.map((logo, index) => (
              <div className="partner-logo-item" key={index}>
                <img 
                  src={logo.src} 
                  alt={`${logo.name} logo`} 
                  onError={(e) => {
                    // Fallback using text if webp isn't fully compiled in this sub-path
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="partner-fallback-text" style={{ display: 'none' }}>
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
