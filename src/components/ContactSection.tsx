
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  domain: 'webdev' | 'videoediting';
}

const ContactSection: React.FC<ContactSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-webdev-DEFAULT relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className={cn(
          "absolute top-40 right-20 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float",
          isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
        )}></div>
        <div className={cn(
          "absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-10 blur-3xl animate-pulse",
          isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
        )}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className={cn(
            "section-title text-white",
            isWebDev ? "glow-accent-webdev" : "glow-accent-videoediting"
          )}>
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto glass-morphism rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Info */}
            <div className={cn(
              "p-8 md:p-12 relative overflow-hidden",
              isWebDev ? "bg-webdev-accent bg-opacity-10" : "bg-videoediting-accent bg-opacity-10"
            )}>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
                <p className="mb-8 text-gray-300">
                  Ready to start a project or have questions? Reach out through any of these channels and I'll respond promptly.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4",
                      isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                    )}>
                      <Mail className="text-black w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Email</h4>
                      <a href="mailto:contact@sudipsunuwar.com" className="text-gray-300 hover:text-white transition-colors">
                        contact@sudipsunuwar.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4",
                      isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                    )}>
                      <Phone className="text-black w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Phone</h4>
                      <a href="tel:+9779812345678" className="text-gray-300 hover:text-white transition-colors">
                        +977 9812345678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4",
                      isWebDev ? "bg-webdev-accent" : "bg-videoediting-accent"
                    )}>
                      <MapPin className="text-black w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Location</h4>
                      <p className="text-gray-300">Kathmandu, Nepal</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative pattern */}
              <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="currentColor" />
                </svg>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="p-8 md:p-12 bg-secondary bg-opacity-20">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 text-white"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 text-white"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 text-white"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-blue-500 text-white resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full flex items-center justify-center px-6 py-3 rounded-lg transition-all group",
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "",
                    isWebDev ? "bg-webdev-accent hover:bg-opacity-90 text-black" : "bg-videoediting-accent hover:bg-opacity-90 text-black"
                  )}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message
                      <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
