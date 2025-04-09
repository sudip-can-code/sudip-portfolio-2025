
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

interface FooterProps {
  domain: 'webdev' | 'videoediting';
}

const Footer: React.FC<FooterProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Sudip Sunuwar</h2>
            <p className="text-gray-400 mt-2">
              {isWebDev 
                ? "Web Developer | Creating digital experiences" 
                : "Video Editor | Bringing stories to life"}
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Instagram size={20} />
            </a>
            {!isWebDev && (
              <a
                href="#"
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                  "bg-gray-800 hover:bg-gray-700"
                )}
              >
                <Youtube size={20} />
              </a>
            )}
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Sudip Sunuwar. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
