
import React, { useState } from 'react';
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-sm",
      domain === 'webdev' ? 'border-b-2 border-webdev-accent' : 'border-b-2 border-videoediting-accent'
    )}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={cn(
              "text-xl font-bold",
              domain === 'webdev' ? 'webdev-accent' : 'videoediting-accent'
            )}>
              Sudip Sunuwar
            </span>
          </Link>

          {/* Domain Toggle */}
          <DomainToggle domain={domain} onDomainChange={onDomainChange} />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-gray-600">Home</Link>
            <Link to="#projects" className="text-gray-800 hover:text-gray-600">Projects</Link>
            <Link to="#about" className="text-gray-800 hover:text-gray-600">About</Link>
            <Link to="#contact" className="text-gray-800 hover:text-gray-600">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="#projects" 
                className="text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="#about" 
                className="text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="#contact" 
                className="text-gray-800 hover:text-gray-600 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
