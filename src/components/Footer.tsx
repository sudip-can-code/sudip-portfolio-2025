
import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Linkedin, Instagram, Youtube, Mail, Phone, Download } from 'lucide-react';

interface FooterProps {
  domain: 'webdev' | 'videoediting';
}

const Footer: React.FC<FooterProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const currentYear = new Date().getFullYear();
  
  const handleDownloadCV = () => {
    alert("CV download feature activated! In a real implementation, this would download your CV.");
  };
  
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
            <div className="flex items-center mt-4 space-x-6">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:sudeepsnwr8@gmail.com" className="hover:text-white transition-colors">sudeepsnwr8@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>9840401157</span>
              </div>
            </div>
          </div>
          
          {/* Resume download */}
          <div className="mb-6 md:mb-0">
            <button
              onClick={handleDownloadCV}
              className={cn(
                "px-5 py-2 rounded-full inline-flex items-center gap-2 transition-all",
                isWebDev 
                  ? "bg-webdev-accent hover:bg-webdev-accent/90 text-black" 
                  : "bg-videoediting-accent hover:bg-videoediting-accent/90 text-black"
              )}
            >
              <Download size={18} /> Download CV
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/sudip-can-code"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/mr_jijicha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                "bg-gray-800 hover:bg-gray-700"
              )}
            >
              <Instagram size={20} />
            </a>
            {!isWebDev && (
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
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
