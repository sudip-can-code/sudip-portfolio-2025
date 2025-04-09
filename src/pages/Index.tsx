
import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [domain, setDomain] = useState<'webdev' | 'videoediting'>('webdev');
  
  const handleDomainChange = (newDomain: 'webdev' | 'videoediting') => {
    setDomain(newDomain);
  };
  
  return (
    <div className={domain === 'webdev' ? 'webdev-theme' : 'videoediting-theme'}>
      <Header domain={domain} onDomainChange={handleDomainChange} />
      <main>
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
