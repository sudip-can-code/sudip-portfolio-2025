
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  domain: 'webdev' | 'videoediting';
}

const HeroSection: React.FC<HeroSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  
  return (
    <section className={cn(
      "min-h-[90vh] flex flex-col justify-center relative overflow-hidden",
      isWebDev 
        ? "bg-gradient-to-br from-webdev-DEFAULT to-gray-900" 
        : "bg-gradient-to-br from-videoediting-DEFAULT to-gray-900"
    )}>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h2 className={cn(
            "text-lg md:text-xl font-medium mb-4",
            isWebDev ? "text-webdev-accent" : "text-videoediting-accent"
          )}>
            {isWebDev ? "Web Developer" : "Professional Video Editor"}
          </h2>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {isWebDev 
              ? "Crafting Digital Experiences Through Code" 
              : "Bringing Stories to Life Through Visual Editing"}
          </h1>
          
          <p className="text-lg text-gray-300 mb-8">
            {isWebDev
              ? "I design and develop responsive, user-friendly websites and applications that deliver exceptional digital experiences."
              : "I transform raw footage into compelling visual stories, enhancing narratives through creative video editing techniques."}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className={cn(
                "px-6 py-3 rounded-md font-medium transition-all",
                isWebDev 
                  ? "bg-webdev-accent hover:bg-opacity-90 text-white" 
                  : "bg-videoediting-accent hover:bg-opacity-90 text-white"
              )}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-md bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 transition-all"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Circle decorations */}
      <div className={cn(
        "absolute top-20 right-[10%] w-64 h-64 rounded-full opacity-20 blur-3xl",
        isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
      )}></div>
      <div className={cn(
        "absolute bottom-20 left-[10%] w-96 h-96 rounded-full opacity-10 blur-3xl",
        isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
      )}></div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center animate-bounce">
        <span className="text-sm mb-2">Scroll Down</span>
        <ArrowDown size={20} />
      </div>
    </section>
  );
};

export default HeroSection;
