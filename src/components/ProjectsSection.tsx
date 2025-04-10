
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github, ChevronRight, ChevronLeft, MoreHorizontal, Filter } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category?: string;
  liveLink?: string;
  codeLink?: string;
}

interface ProjectsSectionProps {
  domain: 'webdev' | 'videoediting';
}

const webProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://e-commerce-demo.com",
    codeLink: "https://github.com/sudipsunuwar/e-commerce"
  },
  {
    id: 2,
    title: "Portfolio Dashboard",
    description: "A responsive portfolio dashboard that visualizes data with interactive charts and graphs. Built with React and D3.js.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["React", "D3.js", "Tailwind CSS"],
    liveLink: "https://portfolio-dashboard.com",
    codeLink: "https://github.com/sudipsunuwar/dashboard"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Features include task assignment, due dates, commenting, and progress tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80",
    tags: ["React", "Firebase", "Redux"],
    liveLink: "https://task-manager-pro.com",
    codeLink: "https://github.com/sudipsunuwar/task-manager"
  },
  {
    id: 4,
    title: "Weather Forecast App",
    description: "A modern weather application that provides real-time forecasts, hourly predictions, and weekly outlooks using the OpenWeather API.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["React", "OpenWeather API", "Styled Components"],
    liveLink: "https://weather-forecast-app.com",
    codeLink: "https://github.com/sudipsunuwar/weather-app"
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A recipe discovery platform with filtering by dietary restrictions, cuisine types, and ingredients. Includes a shopping list generator.",
    image: "https://images.unsplash.com/photo-1556909114-44e3eefc964a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["React", "Next.js", "Spoonacular API"],
    liveLink: "https://recipe-finder-app.com",
    codeLink: "https://github.com/sudipsunuwar/recipe-finder"
  },
  {
    id: 6,
    title: "Crypto Tracker Dashboard",
    description: "A cryptocurrency tracking dashboard with real-time price updates, historical charts, and portfolio management features.",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2797&q=80",
    tags: ["React", "CoinGecko API", "Recharts"],
    liveLink: "https://crypto-tracker-dashboard.com",
    codeLink: "https://github.com/sudipsunuwar/crypto-tracker"
  },
];

const videoProjects: Project[] = [
  {
    id: 1,
    title: "Corporate Promotional Video",
    description: "A promotional video for a tech startup showcasing their product features and company culture. Included motion graphics and custom animations.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Corporate", "Motion Graphics", "After Effects"],
    category: "Corporate",
    liveLink: "https://www.youtube.com/watch?v=example1"
  },
  {
    id: 2,
    title: "Travel Documentary",
    description: "A short documentary following adventurers through the Himalayan mountains. Includes drone footage, time-lapses, and interview segments.",
    image: "https://images.unsplash.com/photo-1614270248176-13d27bb75710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Documentary", "Color Grading", "Premiere Pro"],
    category: "Documentary",
    liveLink: "https://www.youtube.com/watch?v=example2"
  },
  {
    id: 3,
    title: "Wedding Highlights Film",
    description: "A cinematic highlights film capturing the essence of a destination wedding. Seamlessly blended emotional moments with beautiful location shots.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Wedding", "Cinematic", "Final Cut Pro"],
    category: "Wedding",
    liveLink: "https://www.youtube.com/watch?v=example3"
  },
  {
    id: 4,
    title: "Music Video Production",
    description: "A visually striking music video for an indie band, featuring creative transitions, color effects, and synchronized visual elements.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Music Video", "Visual Effects", "DaVinci Resolve"],
    category: "Music",
    liveLink: "https://www.youtube.com/watch?v=example4"
  },
  {
    id: 5,
    title: "Product Commercial",
    description: "A high-end commercial for a luxury product, incorporating professional lighting, macro shots, and precise editing to highlight product features.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80",
    tags: ["Commercial", "Product Showcase", "Premiere Pro"],
    category: "Commercial",
    liveLink: "https://www.youtube.com/watch?v=example5"
  },
  {
    id: 6,
    title: "Event Aftermovie",
    description: "A dynamic aftermovie capturing the energy and highlights of a major music festival, featuring crowd shots, performer moments, and atmospheric transitions.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Event", "Aftermovie", "Final Cut Pro"],
    category: "Event",
    liveLink: "https://www.youtube.com/watch?v=example6"
  },
  {
    id: 7,
    title: "Short Film",
    description: "An emotional short film about family connections, featuring carefully planned shots, dramatic lighting, and a powerful narrative structure.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Short Film", "Storytelling", "DaVinci Resolve"],
    category: "Short Film",
    liveLink: "https://www.youtube.com/watch?v=example7"
  },
  {
    id: 8,
    title: "Educational Content",
    description: "A series of educational videos explaining complex topics with animated graphics, clear visuals, and engaging editing techniques.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Educational", "Motion Graphics", "After Effects"],
    category: "Educational",
    liveLink: "https://www.youtube.com/watch?v=example8"
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const allProjects = isWebDev ? webProjects : videoProjects;
  const [activeSlide, setActiveSlide] = useState(0);
  const [expandedDescriptions, setExpandedDescriptions] = useState<number[]>([]);
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [activeFilter, setActiveFilter] = useState('All');
  const [isHovering, setIsHovering] = useState<number | null>(null);
  
  const slidesPerView = 3;
  const totalSlides = Math.ceil(filteredProjects.length / slidesPerView);
  
  // Get unique categories
  const categories = ['All', ...Array.from(new Set(videoProjects.map(p => p.category)))];
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter(p => p.category === activeFilter));
    }
    setActiveSlide(0);
  }, [activeFilter, domain, allProjects]);
  
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };
  
  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };
  
  const toggleDescription = (projectId: number) => {
    setExpandedDescriptions(prev => 
      prev.includes(projectId) 
        ? prev.filter(id => id !== projectId) 
        : [...prev, projectId]
    );
  };
  
  const truncateDescription = (text: string, projectId: number) => {
    const isExpanded = expandedDescriptions.includes(projectId);
    const maxLength = 100;
    
    if (text.length <= maxLength) return text;
    
    if (isExpanded) return text;
    
    return (
      <>
        {text.substring(0, maxLength)}...
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleDescription(projectId);
          }} 
          className={cn(
            "ml-1 font-medium underline inline-flex items-center",
            isWebDev ? "text-webdev-accent" : "text-videoediting-accent"
          )}
        >
          <span>See More</span>
          <MoreHorizontal size={16} className="ml-1" />
        </button>
      </>
    );
  };
  
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {!isWebDev && (
        <div className="absolute -top-40 left-0 w-96 h-96 rounded-full opacity-5 blur-3xl bg-purple-500"></div>
      )}
      
      {!isWebDev && (
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full opacity-5 blur-3xl bg-pink-500"></div>
      )}

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className={cn(
            "section-title text-white",
            isWebDev ? "glow-accent-webdev" : "glow-accent-videoediting"
          )}>
            {isWebDev ? "Web Development Projects" : "Video Editing Projects"}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            {isWebDev
              ? "A showcase of my web development projects, featuring responsive designs and interactive user experiences."
              : "A collection of video editing projects that demonstrate my ability to tell compelling visual stories."}
          </p>
          
          {/* Category filters - only for video editing */}
          {!isWebDev && (
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all",
                    activeFilter === category
                      ? "bg-videoediting-accent text-black"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          {/* Navigation arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full -ml-4 hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full -mr-4 hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Projects grid with animation effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 ease-out">
            {filteredProjects.slice(activeSlide * slidesPerView, activeSlide * slidesPerView + slidesPerView).map((project, index) => (
              <div 
                key={project.id} 
                className="project-card group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setIsHovering(project.id)}
                onMouseLeave={() => setIsHovering(null)}
              >
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover object-center transition-all duration-700",
                      isHovering === project.id ? "scale-110 blur-sm" : "scale-100"
                    )}
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHovering === project.id ? "opacity-80" : "opacity-0",
                    isWebDev ? "bg-gradient-to-br from-blue-900 to-purple-900" : "bg-gradient-to-br from-pink-900 to-purple-900"
                  )}></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
                    <div className="flex space-x-4">
                      {project.liveLink && (
                        <a 
                          href={project.liveLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={cn(
                            "rounded-full p-3 transition-transform hover:scale-110",
                            isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                          )}
                        >
                          <ExternalLink size={20} className="text-black" />
                        </a>
                      )}
                      {project.codeLink && (
                        <a 
                          href={project.codeLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-white rounded-full p-3 hover:bg-gray-200 transition-transform hover:scale-110"
                        >
                          <Github size={20} className="text-black" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Category badge */}
                  {project.category && !isWebDev && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge className="bg-videoediting-accent/90 text-black hover:bg-videoediting-accent">
                        {project.category}
                      </Badge>
                    </div>
                  )}
                </div>
                <div className={cn(
                  "p-6 glass-morphism transition-all duration-300",
                  isHovering === project.id ? "bg-black/60" : "bg-black/40"
                )}>
                  <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{truncateDescription(project.description, project.id)}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className={cn(
                          "px-3 py-1 text-xs rounded-full",
                          isWebDev 
                            ? "bg-webdev-accent bg-opacity-10 text-webdev-accent" 
                            : "bg-videoediting-accent bg-opacity-10 text-videoediting-accent"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state if no projects match the filter */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 glass-morphism rounded-xl">
              <Filter size={48} className="mx-auto mb-4 text-gray-500" />
              <h3 className="text-xl font-medium text-white mb-2">No projects found</h3>
              <p className="text-gray-400">Try selecting a different category filter</p>
            </div>
          )}
          
          {/* Pagination dots for mobile */}
          {totalSlides > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all",
                    activeSlide === index
                      ? isWebDev 
                        ? "bg-webdev-accent" 
                        : "bg-videoediting-accent"
                      : "bg-gray-600"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* View all projects button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className={cn(
              "px-6 py-3 rounded-full inline-flex items-center space-x-2 transition-all",
              isWebDev 
                ? "bg-webdev-accent hover:bg-opacity-90 text-black" 
                : "bg-videoediting-accent hover:bg-opacity-90 text-black"
            )}
          >
            <span>View All Projects</span>
            <ChevronRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
