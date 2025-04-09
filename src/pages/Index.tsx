
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [domain, setDomain] = useState<'webdev' | 'videoediting'>('webdev');
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulating page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleDomainChange = (newDomain: 'webdev' | 'videoediting') => {
    setDomain(newDomain);
  };
  
  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className={`w-16 h-16 border-4 border-t-transparent rounded-full animate-spin mb-4 mx-auto ${domain === 'webdev' ? 'border-webdev-accent' : 'border-videoediting-accent'}`}></div>
          <h2 className="text-2xl font-bold text-white">Loading...</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className={`bg-black min-h-screen ${domain === 'webdev' ? 'webdev-theme' : 'videoediting-theme'}`}>
      <Header domain={domain} onDomainChange={handleDomainChange} />
      <main className="pt-16">
        <HeroSection domain={domain} />
        <ProjectsSection domain={domain} />
        <AboutSection domain={domain} />
        <ContactSection domain={domain} />
      </main>
      <Footer domain={domain} />
    </div>
  );
};

export default Index;
