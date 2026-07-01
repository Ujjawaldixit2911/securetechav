import React, { useEffect, useRef, useState } from 'react';
import './Sectors.css';

export default function Sectors() {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

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
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const industriesList = [
    {
      title: 'Corporate',
      desc: 'Collaborative boardrooms, huddle rooms, video conferencing spaces, and lobby digital display systems.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      )
    },
    {
      title: 'Education',
      desc: 'Interactive smart classrooms, campus announcements networks, lecture hall systems, and hybrid distance setups.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    },
    {
      title: 'Government',
      desc: 'Secure legislative chambers audio systems, judicial remote reporting networks, and military briefings operations hubs.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: 'Healthcare',
      desc: 'Surgical displays and cameras visual feeds, clinical training amphitheaters, and patient directories.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      title: 'Hospitality',
      desc: 'Smart centralized sound grids for ballrooms, hotel lobby displays, and background music solutions.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16M9 9h6M9 13h6M9 17h6" />
        </svg>
      )
    },
    {
      title: 'Auditorium',
      desc: 'Concert-level line acoustic sound systems, pro stage lights orchestration, and projection layouts.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v1a7 7 0 0 1-14 0v-1" />
        </svg>
      )
    },
    {
      title: 'Stadiums',
      desc: 'High-power public address speaker arrays, massive perimeter displays, and score board control setups.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M6 12a6 6 0 0 1 12 0" />
        </svg>
      )
    },
    {
      title: 'Entertainment',
      desc: 'High-contrast cinema laser projectors, club active sound rigs, and architectural accent facades.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    }
  ];

  return (
    <section id="sectors" className="sectors-section" ref={elementRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Industries We Serve</span>
          <h2 className="section-title">Industry Verticals</h2>
          <p className="section-desc">We design, commission, and maintain bespoke technology configurations across major sectors.</p>
        </div>

        <div className={`sectors-grid reveal ${isVisible ? 'active' : ''}`}>
          {industriesList.map((ind, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">
                {ind.icon}
              </div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
