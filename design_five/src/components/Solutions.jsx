import React, { useEffect, useRef, useState } from 'react';
import './Solutions.css';

export default function Solutions() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const solutionsList = [
    {
      title: 'AV System Integration',
      desc: 'Architectural audio and video engineering unified under simple touch interfaces.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="15" rx="2" />
          <line x1="6" y1="22" x2="18" y2="22" />
          <line x1="12" y1="17" x2="12" y2="22" />
        </svg>
      )
    },
    {
      title: 'Smart Boardrooms',
      desc: 'Seamless meeting automation featuring tabletop control panels and intelligent mic arrays.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: 'Video Conferencing',
      desc: 'Unified collaboration nodes supporting Microsoft Teams, Zoom Rooms, and Webex systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 7l-7 5 7 5V7z" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )
    },
    {
      title: 'Digital Signage Systems',
      desc: 'Centralized network-wide display control grids for lobbies, directories, and notices.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      )
    },
    {
      title: 'Control Hardware Programming',
      desc: 'Custom-coded touch interface panels from industry-standard Crestron, Extron, and AMX cores.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M10 8l-3 4 3 4M14 16l3-4-3-4" />
        </svg>
      )
    },
    {
      title: 'Auditoriums & Broadcast',
      desc: 'High-SPL acoustics, line array configurations, stage lighting, and digital streaming consoles.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" />
        </svg>
      )
    },
    {
      title: 'Stadium Sound & Video',
      desc: 'Weather-resistant large-venue PA setups, digital scoreboard feeds, and safety announcer overrides.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M12 6v12M6 12h12" />
        </svg>
      )
    },
    {
      title: 'ICT Infrastructure',
      desc: 'Structured fiber cabling, network routing, rack management, and system patch configurations.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      )
    }
  ];

  return (
    <section id="solutions" className="solutions-section" ref={sectionRef}>
      <div className="solutions-container">
        <div className="section-header-centered">
          <div className="section-eyebrow">Enterprise Capabilities</div>
          <h2 className="section-title-b2b">Integrations That Scale</h2>
          <p className="section-desc-b2b">We configure reliable AV architectures built upon certified, industry-standard equipment.</p>
        </div>

        <div className={`solutions-grid reveal-fade ${isVisible ? 'visible' : ''}`}>
          {solutionsList.map((sol, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon-box">
                {sol.icon}
              </div>
              <h3 className="solution-title">{sol.title}</h3>
              <p className="solution-desc">{sol.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
