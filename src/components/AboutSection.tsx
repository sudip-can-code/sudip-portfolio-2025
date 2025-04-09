
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Code, Monitor, Video, Award, Briefcase, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  domain: 'webdev' | 'videoediting';
}

const AboutSection: React.FC<AboutSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  
  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className={cn(
        "absolute top-40 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl",
        isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
      )}></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title text-white",
            isWebDev ? "glow-accent-webdev" : "glow-accent-videoediting"
          )}>
            About Me
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {isWebDev
              ? "Passionate web developer creating exceptional digital experiences."
              : "Creative video editor transforming footage into compelling stories."}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image with Animation */}
          <div className="order-2 lg:order-1 relative mx-auto">
            <div className={cn(
              "relative z-10 rounded-2xl overflow-hidden w-72 h-80 md:w-96 md:h-[28rem] shadow-xl animate-float",
              "glass-morphism border-2",
              isWebDev ? "border-webdev-accent/30" : "border-videoediting-accent/30"
            )}>
              <img 
                src="/lovable-uploads/c7885680-67cf-4f47-bb85-87577617051b.png" 
                alt="Sudip Sunuwar" 
                className="w-full h-full object-cover object-top"
              />
              
              {/* Overlay gradient */}
              <div className={cn(
                "absolute inset-0 opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"
              )}></div>
              
              {/* Animated border effect */}
              <div className={cn(
                "absolute inset-0 opacity-20 pointer-events-none",
                "border-4 rounded-2xl animate-pulse",
                isWebDev ? "border-webdev-accent" : "border-videoediting-accent"
              )}></div>
            </div>
            
            {/* Background shape */}
            <div className={cn(
              "absolute bottom-0 right-0 transform translate-x-6 translate-y-6 -z-10",
              "w-72 h-64 md:w-80 md:h-72 rounded-2xl",
              isWebDev ? "bg-webdev-accent/10" : "bg-videoediting-accent/10"
            )}></div>
            
            {/* Domain icon */}
            <div className={cn(
              "absolute -top-5 -right-5 w-16 h-16 rounded-full z-20 flex items-center justify-center shadow-lg animate-bounce-slow",
              isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
            )}>
              {isWebDev ? (
                <Code className="text-black" size={28} />
              ) : (
                <Video className="text-black" size={28} />
              )}
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 text-left">
            <h3 className={cn(
              "text-2xl md:text-3xl font-bold mb-6",
              isWebDev ? "webdev-accent" : "videoediting-accent"
            )}>
              Hi, I'm Sudip Sunuwar
            </h3>
            
            <div className="space-y-6 text-gray-300">
              <p>
                {isWebDev 
                  ? "I'm a passionate web developer with expertise in building modern, responsive web applications. With a strong foundation in front-end and back-end technologies, I create seamless digital experiences that blend functionality with aesthetic design."
                  : "I'm a professional video editor with a passion for visual storytelling. I specialize in transforming raw footage into compelling narratives that captivate viewers and convey powerful messages."}
              </p>
              
              <p>
                {isWebDev
                  ? "My approach combines technical precision with creative problem-solving, ensuring that every project I undertake not only meets but exceeds client expectations. I stay updated with the latest web technologies to deliver cutting-edge solutions."
                  : "My editing approach balances technical expertise with creative vision. I pay meticulous attention to detail, from color grading to sound design, ensuring each project tells its story in the most effective and engaging way possible."}
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className={cn(
                "glass-morphism p-4 rounded-xl text-center transition-transform hover:scale-105",
                "border border-white/5"
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  <Calendar className="text-black" size={20} />
                </div>
                <h4 className="text-2xl font-bold text-white">5+</h4>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              
              <div className={cn(
                "glass-morphism p-4 rounded-xl text-center transition-transform hover:scale-105",
                "border border-white/5"
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  <Briefcase className="text-black" size={20} />
                </div>
                <h4 className="text-2xl font-bold text-white">100+</h4>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>
              
              <div className={cn(
                "glass-morphism p-4 rounded-xl text-center transition-transform hover:scale-105",
                "border border-white/5"
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  <Award className="text-black" size={20} />
                </div>
                <h4 className="text-2xl font-bold text-white">10+</h4>
                <p className="text-gray-400 text-sm">Awards Received</p>
              </div>
              
              <div className={cn(
                "glass-morphism p-4 rounded-xl text-center transition-transform hover:scale-105",
                "border border-white/5"
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-full mx-auto flex items-center justify-center mb-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  {isWebDev ? (
                    <Monitor className="text-black" size={20} />
                  ) : (
                    <Video className="text-black" size={20} />
                  )}
                </div>
                <h4 className="text-2xl font-bold text-white">{isWebDev ? "15+" : "20+"}</h4>
                <p className="text-gray-400 text-sm">{isWebDev ? "Technologies" : "Videos Produced"}</p>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mt-10">
              <h4 className="text-xl font-bold mb-4 text-white flex items-center">
                <span>{isWebDev ? "Technical Skills" : "Video Editing Skills"}</span>
                <div className={cn(
                  "ml-2 h-px flex-grow",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}></div>
              </h4>
              
              <div className="grid grid-cols-2 gap-4">
                {isWebDev ? (
                  // Web Development Skills
                  <>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-webdev-accent"
                      )}></div>
                      <span className="text-gray-300">HTML5 & CSS3</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-webdev-accent"
                      )}></div>
                      <span className="text-gray-300">JavaScript & TypeScript</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-webdev-accent"
                      )}></div>
                      <span className="text-gray-300">React & Next.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-webdev-accent"
                      )}></div>
                      <span className="text-gray-300">Node.js & Express</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-webdev-accent"
                      )}></div>
                      <span className="text-gray-300">MongoDB & PostgreSQL</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-webdev-accent"
                      )}></div>
                      <span className="text-gray-300">Responsive Design</span>
                    </div>
                  </>
                ) : (
                  // Video Editing Skills
                  <>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-videoediting-accent"
                      )}></div>
                      <span className="text-gray-300">Adobe Premiere Pro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-videoediting-accent"
                      )}></div>
                      <span className="text-gray-300">After Effects</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-videoediting-accent"
                      )}></div>
                      <span className="text-gray-300">Final Cut Pro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-videoediting-accent"
                      )}></div>
                      <span className="text-gray-300">Color Grading</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-videoediting-accent"
                      )}></div>
                      <span className="text-gray-300">Sound Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        "bg-videoediting-accent"
                      )}></div>
                      <span className="text-gray-300">Motion Graphics</span>
                    </div>
                  </>
                )}
              </div>
            </div>
            
            {/* CTA */}
            <div className="mt-10">
              <a 
                href="#contact" 
                className={cn(
                  "inline-flex items-center space-x-2 px-6 py-3 rounded-full transition-all",
                  isWebDev 
                    ? "bg-webdev-accent hover:bg-opacity-90 text-black" 
                    : "bg-videoediting-accent hover:bg-opacity-90 text-black"
                )}
              >
                <span>Get In Touch</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
