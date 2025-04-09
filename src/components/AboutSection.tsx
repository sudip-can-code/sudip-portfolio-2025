
import React from 'react';
import { cn } from '@/lib/utils';
import { Calendar, Code, Monitor, Video, Award, Briefcase } from 'lucide-react';

interface AboutSectionProps {
  domain: 'webdev' | 'videoediting';
}

const AboutSection: React.FC<AboutSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={cn(
              "section-title mb-6",
              isWebDev ? "webdev-accent" : "videoediting-accent"
            )}>
              About Me
            </h2>
            
            <p className="text-gray-700 mb-6">
              {isWebDev 
                ? "I'm Sudip Sunuwar, a passionate web developer with expertise in building modern, responsive web applications. With a strong foundation in front-end and back-end technologies, I create seamless digital experiences that blend functionality with aesthetic design."
                : "I'm Sudip Sunuwar, a professional video editor with a passion for visual storytelling. I specialize in transforming raw footage into compelling narratives that captivate viewers and convey powerful messages."}
            </p>
            
            <p className="text-gray-700 mb-6">
              {isWebDev
                ? "My approach combines technical precision with creative problem-solving, ensuring that every project I undertake not only meets but exceeds client expectations. I stay updated with the latest web technologies and best practices to deliver cutting-edge solutions."
                : "My editing approach balances technical expertise with creative vision. I pay meticulous attention to detail, from color grading to sound design, ensuring each project tells its story in the most effective and engaging way possible."}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {/* Experience points */}
              <div className="flex items-start">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold">5+ Years</h3>
                  <p className="text-gray-600 text-sm">Professional Experience</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  <Briefcase className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold">100+</h3>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold">10+</h3>
                  <p className="text-gray-600 text-sm">Awards & Recognition</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                  isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                )}>
                  {isWebDev ? (
                    <Code className="text-white" size={20} />
                  ) : (
                    <Video className="text-white" size={20} />
                  )}
                </div>
                <div>
                  <h3 className="font-bold">{isWebDev ? "15+" : "20+"}</h3>
                  <p className="text-gray-600 text-sm">{isWebDev ? "Technologies Mastered" : "Videos Produced"}</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">
              {isWebDev ? "Technical Skills" : "Video Editing Skills"}
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {isWebDev ? (
                // Web Development Skills
                <>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-webdev-accent"
                    )}></div>
                    <span>HTML5 & CSS3</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-webdev-accent"
                    )}></div>
                    <span>JavaScript & TypeScript</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-webdev-accent"
                    )}></div>
                    <span>React & Next.js</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-webdev-accent"
                    )}></div>
                    <span>Node.js & Express</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-webdev-accent"
                    )}></div>
                    <span>MongoDB & PostgreSQL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-webdev-accent"
                    )}></div>
                    <span>Responsive Design</span>
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
                    <span>Adobe Premiere Pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-videoediting-accent"
                    )}></div>
                    <span>After Effects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-videoediting-accent"
                    )}></div>
                    <span>Final Cut Pro</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-videoediting-accent"
                    )}></div>
                    <span>Color Grading</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-videoediting-accent"
                    )}></div>
                    <span>Sound Design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      "bg-videoediting-accent"
                    )}></div>
                    <span>Motion Graphics</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* About Image */}
          <div className="relative">
            <div className={cn(
              "absolute inset-0 transform translate-x-4 translate-y-4 -z-10 rounded-xl",
              isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
            )}></div>
            <img 
              src={isWebDev 
                ? "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
                : "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
              } 
              alt="Sudip Sunuwar" 
              className="rounded-xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
