
import React from 'react';
import { cn } from '@/lib/utils';

interface CompanyLogosSectionProps {
  domain: 'webdev' | 'videoediting';
}

interface Logo {
  id: number;
  name: string;
  image: string;
  domain: 'webdev' | 'videoediting' | 'both';
}

const logos: Logo[] = [
  { id: 1, name: "Netflix", image: "https://cdn.worldvectorlogo.com/logos/netflix-4.svg", domain: 'videoediting' },
  { id: 2, name: "Adobe", image: "https://cdn.worldvectorlogo.com/logos/adobe-1.svg", domain: 'videoediting' },
  { id: 3, name: "Google", image: "https://cdn.worldvectorlogo.com/logos/google-1-1.svg", domain: 'webdev' },
  { id: 4, name: "Microsoft", image: "https://cdn.worldvectorlogo.com/logos/microsoft-5.svg", domain: 'webdev' },
  { id: 5, name: "Amazon", image: "https://cdn.worldvectorlogo.com/logos/amazon-icon-1.svg", domain: 'both' },
  { id: 6, name: "Apple", image: "https://cdn.worldvectorlogo.com/logos/apple-14.svg", domain: 'both' },
  { id: 7, name: "Meta", image: "https://cdn.worldvectorlogo.com/logos/meta-1.svg", domain: 'webdev' },
  { id: 8, name: "Spotify", image: "https://cdn.worldvectorlogo.com/logos/spotify-2.svg", domain: 'both' },
  { id: 9, name: "Disney", image: "https://cdn.worldvectorlogo.com/logos/disney-6.svg", domain: 'videoediting' },
  { id: 10, name: "Vimeo", image: "https://cdn.worldvectorlogo.com/logos/vimeo-icon-1.svg", domain: 'videoediting' },
  { id: 11, name: "YouTube", image: "https://cdn.worldvectorlogo.com/logos/youtube-icon.svg", domain: 'videoediting' },
  { id: 12, name: "React", image: "https://cdn.worldvectorlogo.com/logos/react-2.svg", domain: 'webdev' },
  { id: 13, name: "Angular", image: "https://cdn.worldvectorlogo.com/logos/angular-icon-1.svg", domain: 'webdev' },
  { id: 14, name: "Vue", image: "https://cdn.worldvectorlogo.com/logos/vue-9.svg", domain: 'webdev' },
  { id: 15, name: "Warner Bros", image: "https://cdn.worldvectorlogo.com/logos/warner-bros-entertainment.svg", domain: 'videoediting' },
  { id: 16, name: "Sony", image: "https://cdn.worldvectorlogo.com/logos/sony.svg", domain: 'both' },
];

const CompanyLogosSection: React.FC<CompanyLogosSectionProps> = ({ domain }) => {
  const isWebDev = domain === 'webdev';
  
  // Filter logos based on current domain
  const filteredLogos = logos.filter(
    logo => logo.domain === domain || logo.domain === 'both'
  );
  
  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...filteredLogos, ...filteredLogos];
  
  return (
    <section className="py-16 bg-black/80 relative overflow-hidden">
      {/* Section heading */}
      <div className="container-custom mb-8 text-center">
        <h2 className={cn(
          "section-title text-white mb-2",
          isWebDev ? "glow-accent-webdev" : "glow-accent-videoediting"
        )}>
          Companies I've Worked With
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Trusted by leading brands and organizations across industries
        </p>
      </div>
      
      {/* Logos marquee - slower animation for better visibility */}
      <div className="relative w-full overflow-hidden glass-morphism py-10">
        <div className="flex animate-scroll">
          {duplicatedLogos.map((logo, index) => (
            <div 
              key={`${logo.id}-${index}`}
              className="mx-8 flex-shrink-0 flex items-center justify-center h-16 w-32 opacity-80 hover:opacity-100 transition-opacity"
            >
              <img 
                src={logo.image}
                alt={logo.name}
                className="max-h-12 max-w-full object-contain filter invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogosSection;
