
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown, Github, Linkedin, Instagram, Clock, Download } from 'lucide-react';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  domain: 'webdev' | 'videoediting';
}

const HeroSection: React.FC<HeroSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const [isVisible, setIsVisible] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Start tracking time spent on this domain
    const startTime = localStorage.getItem(`${domain}-start-time`);
    if (!startTime) {
      localStorage.setItem(`${domain}-start-time`, Date.now().toString());
    }
    
    // Calculate time spent in this domain session
    const timeTracker = setInterval(() => {
      const startTimeValue = Number(localStorage.getItem(`${domain}-start-time`)) || Date.now();
      const currentTime = Date.now();
      const timeElapsed = Math.floor((currentTime - startTimeValue) / 1000);
      setTimeSpent(timeElapsed);
    }, 1000);
    
    return () => {
      clearInterval(timeTracker);
    };
  }, [domain]);
  
  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds} seconds`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours} hour${hours > 1 ? 's' : ''} ${remainingMinutes} minute${remainingMinutes > 1 ? 's' : ''}`;
  };
  
  const getRandomEncouragement = () => {
    const encouragements = [
      "Amazing! You're truly exploring my work in-depth.",
      "Thanks for spending time on my portfolio!",
      "Wow! Your interest means a lot to me.",
      "I'm impressed by your dedication to checking out my work.",
      "Keep exploring! There's more to discover.",
      "Your time is valuable - thanks for sharing it with my portfolio!",
      "Great to see you're interested in my creative process!"
    ];
    
    const index = Math.floor(Math.random() * encouragements.length);
    return encouragements[index];
  };
  
  const handleDownloadCV = () => {
    // This would typically download a CV file
    alert("CV download feature activated! In a real implementation, this would download your CV.");
  };
  
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
            
            <div className="flex flex-wrap gap-4 animate-delay-500 mb-8">
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
              <button
                onClick={handleDownloadCV}
                className={cn(
                  "px-6 py-3 rounded-full neo-blur text-white hover:bg-white/10 inline-flex items-center gap-2 transition-all"
                )}
              >
                <Download size={18} /> Download CV
              </button>
            </div>
            
            {/* Social links */}
            <div className="flex mt-4 space-x-4">
              <a href="https://github.com/sudip-can-code" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/mr_jijicha?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className={cn(
                  "relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 animate-float cursor-pointer transform transition-all duration-300 hover:scale-105",
                  isWebDev ? "border-webdev-accent" : "border-videoediting-accent"
                )}>
                  <img 
                    src="/lovable-uploads/c7885680-67cf-4f47-bb85-87577617051b.png" 
                    alt="Sudip Sunuwar" 
                    className="w-full h-full object-cover"
                  />
                  
                  <div className={cn(
                    "absolute inset-0 opacity-20",
                    isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                  )}></div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="p-4 bg-black/80 backdrop-blur-md border-none shadow-xl">
                <div className="text-white">
                  <div className="flex items-center mb-2">
                    <Clock size={18} className={cn(
                      isWebDev ? "text-webdev-accent" : "text-videoediting-accent"
                    )} />
                    <span className="ml-2 text-sm">Time exploring {isWebDev ? "Web Dev" : "Video Editing"} mode</span>
                  </div>
                  <p className="text-base font-medium mb-2">
                    {formatTime(timeSpent)}
                  </p>
                  <p className="text-xs text-gray-300">
                    {getRandomEncouragement()}
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
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
