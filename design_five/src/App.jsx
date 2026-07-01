import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Sectors from './components/Sectors';
import WhyUs from './components/WhyUs';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Sectors />
        <WhyUs />
        <Projects />
        <Partners />
        <Testimonials />
        <Clients />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
