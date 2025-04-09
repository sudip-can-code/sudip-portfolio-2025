
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ClientFeedbackSectionProps {
  domain: 'webdev' | 'videoediting';
}

interface Testimonial {
  id: number;
  name: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  domain: 'webdev' | 'videoediting' | 'both';
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "James Wilson",
    company: "TechStart Inc.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 5,
    text: "Sudip delivered our website redesign ahead of schedule and exceeded all expectations. His attention to detail and technical expertise made our project a huge success.",
    domain: 'webdev'
  },
  {
    id: 2,
    name: "Alexandra Chen",
    company: "Creative Films",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 5,
    text: "The video editing skills Sudip brings to the table are phenomenal. He transformed our raw footage into a compelling story that captivated our audience and helped us win a film festival award.",
    domain: 'videoediting'
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    company: "Global Marketing Group",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 5,
    text: "We've worked with Sudip on multiple projects spanning both web development and video production. His versatility and consistent quality make him our go-to creative professional.",
    domain: 'both'
  },
  {
    id: 4,
    name: "Sarah Johnson",
    company: "E-commerce Solutions",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 4,
    text: "Sudip developed our e-commerce platform with exceptional attention to user experience. The site has boosted our conversion rates by 35% since launch.",
    domain: 'webdev'
  },
  {
    id: 5,
    name: "David Kim",
    company: "Viral Media Productions",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 5,
    text: "The color grading and transitions in our corporate video were absolutely perfect. Sudip has a rare talent for visual storytelling that makes his work stand out.",
    domain: 'videoediting'
  },
  {
    id: 6,
    name: "Emily Nguyen",
    company: "StartUp Ventures",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    rating: 5,
    text: "From our website to our promotional videos, Sudip handled everything with professionalism and creativity. It's rare to find someone skilled in both areas.",
    domain: 'both'
  },
];

const ClientFeedbackSection: React.FC<ClientFeedbackSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Filter testimonials based on current domain
  const filteredTestimonials = testimonials.filter(
    t => t.domain === domain || t.domain === 'both'
  );
  
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, filteredTestimonials.length]);
  
  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };
  
  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        size={18} 
        className={cn(
          "transition-all",
          i < rating 
            ? isWebDev ? "fill-webdev-accent text-webdev-accent" : "fill-videoediting-accent text-videoediting-accent"
            : "text-gray-500"
        )} 
      />
    ));
  };
  
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      <div className={cn(
        "absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-10",
        isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
      )}></div>
      <div className={cn(
        "absolute -bottom-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-5",
        isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
      )}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className={cn(
            "section-title text-white",
            isWebDev ? "glow-accent-webdev" : "glow-accent-videoediting"
          )}>
            Client Feedback
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about our collaboration.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full -ml-4 hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full -mr-4 hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Testimonial card */}
          <div className="glass-morphism p-8 md:p-10 rounded-xl shadow-xl">
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <Avatar className="h-16 w-16 border-2 mr-4">
                  <AvatarImage src={filteredTestimonials[activeIndex].avatar} alt={filteredTestimonials[activeIndex].name} />
                  <AvatarFallback>{filteredTestimonials[activeIndex].name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-white">{filteredTestimonials[activeIndex].name}</h3>
                  <p className="text-gray-400">{filteredTestimonials[activeIndex].company}</p>
                  <div className="flex mt-1">
                    {renderStars(filteredTestimonials[activeIndex].rating)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-300 text-lg italic mb-4">
                "{filteredTestimonials[activeIndex].text}"
              </blockquote>
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false);
                  setActiveIndex(index);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index
                    ? isWebDev 
                      ? "bg-webdev-accent" 
                      : "bg-videoediting-accent"
                    : "bg-gray-600"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedbackSection;
