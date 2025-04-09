
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import DomainToggle from './DomainToggle';

interface HeaderProps {
  domain: 'webdev' | 'videoediting';
  onDomainChange: (domain: 'webdev' | 'videoediting') => void;
}

const Header: React.FC<HeaderProps> = ({ domain, onDomainChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "glass-morphism py-3" : "bg-transparent py-5"
    )}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={cn(
              "text-xl font-bold transition-all duration-300",
              domain === 'webdev' 
                ? 'webdev-accent glow-accent-webdev' 
                : 'videoediting-accent glow-accent-videoediting'
            )}>
              Sudip Sunuwar
            </span>
          </Link>

          {/* Domain Toggle */}
          <DomainToggle domain={domain} onDomainChange={onDomainChange} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 rounded-full glass-morphism" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-6 glass-morphism p-6 rounded-xl mt-4">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a 
                href="#projects" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
