import React from 'react';
import './Clients.css';

export default function Clients() {
  const clients = [
    { name: 'AIIMS', text: 'A.I.I.M.S' },
    { name: 'IIT Delhi', text: 'I.I.T DELHI' },
    { name: 'DMRC', text: 'DMRC METRO' },
    { name: 'Taj Hotels', text: 'TAJ HOTELS' },
    { name: 'GMR Group', text: 'GMR GROUP' },
    { name: 'HDFC Bank', text: 'HDFC BANK' },
    { name: 'Infosys', text: 'Infosys' },
    { name: 'BSNL Infrastructure', text: 'BSNL TECH' }
  ];

  // Duplicate items to ensure infinite looping without gaps
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="clients-intro-row">
          <span className="clients-tag">Trusted Deployments</span>
          <p className="clients-intro-text">Commissioned by leading organizations across the continent.</p>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {marqueeItems.map((cli, idx) => (
              <div key={idx} className="marquee-item" title={cli.name}>
                <svg className="client-logo-svg" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="140" height="40" rx="4" fill="transparent" />
                  <text 
                    x="50%" 
                    y="50%" 
                    dominantBaseline="middle" 
                    textAnchor="middle" 
                    fontFamily="Inter, sans-serif" 
                    fontSize="13" 
                    fontWeight="800" 
                    fill="currentColor"
                    letterSpacing="1"
                  >
                    {cli.text}
                  </text>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
