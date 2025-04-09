
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

interface HeroSectionProps {
  domain: 'webdev' | 'videoediting';
}

const HeroSection: React.FC<HeroSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className={cn(
      "min-h-screen flex flex-col justify-center relative overflow-hidden bg-webdev-DEFAULT",
    )}>
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className={cn(
          "absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-20 blur-3xl animate-pulse",
          isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
        )}></div>
        <div className={cn(
          "absolute bottom-20 left-[10%] w-96 h-96 rounded-full opacity-10 blur-3xl animate-float",
          isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
        )}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "order-2 md:order-1",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}>
            <h2 className={cn(
              "text-lg md:text-xl font-medium mb-4 animate-delay-200",
              isWebDev ? "text-webdev-accent" : "text-videoediting-accent"
            )}>
              {isWebDev ? "Web Developer" : "Professional Video Editor"}
            </h2>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-delay-300">
              Hi, I'm <span className={cn(
                "text-gradient font-bold",
                isWebDev ? "glow-accent-webdev" : "glow-accent-videoediting"
              )}>Sudip Sunuwar</span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-xl animate-delay-400">
              {isWebDev
                ? "I design and develop responsive, user-friendly websites and applications that deliver exceptional digital experiences."
                : "I transform raw footage into compelling visual stories, enhancing narratives through creative video editing techniques."}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-delay-500">
              <a 
                href="#projects" 
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all",
                  isWebDev 
                    ? "bg-webdev-accent hover:bg-opacity-90 text-black" 
                    : "bg-videoediting-accent hover:bg-opacity-90 text-black"
                )}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full neo-blur text-white hover:bg-white/10 transition-all"
              >
                Get In Touch
              </a>
            </div>
            
            {/* Social links */}
            <div className="flex mt-8 space-x-4">
              <a href="https://github.com/username" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/username" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/username" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com/username" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className={cn(
              "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 animate-float",
              isWebDev ? "border-webdev-accent" : "border-videoediting-accent"
            )}>
              <img 
                src="https://sudipsunuwar.com.np/images/hero.jpg" 
                alt="Sudip Sunuwar" 
                className="w-full h-full object-cover"
              />
              
              <div className={cn(
                "absolute inset-0 opacity-20",
                isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
              )}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
