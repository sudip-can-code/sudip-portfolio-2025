
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
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
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "Portfolio Dashboard",
    description: "A responsive portfolio dashboard that visualizes data with interactive charts and graphs. Built with React and D3.js.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["React", "D3.js", "Tailwind CSS"],
    liveLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates. Features include task assignment, due dates, commenting, and progress tracking.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2938&q=80",
    tags: ["React", "Firebase", "Redux"],
    liveLink: "#",
    codeLink: "#"
  },
];

const videoProjects: Project[] = [
  {
    id: 1,
    title: "Corporate Promotional Video",
    description: "A promotional video for a tech startup showcasing their product features and company culture. Included motion graphics and custom animations.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Corporate", "Motion Graphics", "After Effects"],
    liveLink: "#"
  },
  {
    id: 2,
    title: "Travel Documentary",
    description: "A short documentary following adventurers through the Himalayan mountains. Includes drone footage, time-lapses, and interview segments.",
    image: "https://images.unsplash.com/photo-1614270248176-13d27bb75710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Documentary", "Color Grading", "Premiere Pro"],
    liveLink: "#"
  },
  {
    id: 3,
    title: "Wedding Highlights Film",
    description: "A cinematic highlights film capturing the essence of a destination wedding. Seamlessly blended emotional moments with beautiful location shots.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    tags: ["Wedding", "Cinematic", "Final Cut Pro"],
    liveLink: "#"
  },
];

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const projects = isWebDev ? webProjects : videoProjects;
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title",
            isWebDev ? "webdev-accent" : "videoediting-accent"
          )}>
            {isWebDev ? "Web Development Projects" : "Video Editing Projects"}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {isWebDev
              ? "A showcase of my web development projects, featuring responsive designs and interactive user experiences."
              : "A collection of video editing projects that demonstrate my ability to tell compelling visual stories."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className={cn(
                  "absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity duration-300",
                  isWebDev ? "bg-webdev-DEFAULT" : "bg-videoediting-DEFAULT"
                )}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
                      >
                        <ExternalLink size={20} className="text-gray-800" />
                      </a>
                    )}
                    {project.codeLink && (
                      <a 
                        href={project.codeLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors"
                      >
                        <Github size={20} className="text-gray-800" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
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
      </div>
    </section>
  );
};

export default ProjectsSection;
