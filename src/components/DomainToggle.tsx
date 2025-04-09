
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Video } from 'lucide-react';

interface DomainToggleProps {
  domain: 'webdev' | 'videoediting';
  onDomainChange: (domain: 'webdev' | 'videoediting') => void;
}

const DomainToggle: React.FC<DomainToggleProps> = ({ domain, onDomainChange }) => {
  return (
    <div className="inline-flex rounded-full shadow-lg overflow-hidden glass-morphism p-1">
      <button
        onClick={() => onDomainChange('webdev')}
        className={cn(
          "px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all duration-300",
          domain === 'webdev' 
            ? "bg-webdev-accent text-black" 
            : "bg-transparent text-gray-300 hover:text-white"
        )}
      >
        <Code size={18} className={domain === 'webdev' ? 'animate-pulse' : ''} />
        <span>Web Dev</span>
      </button>
      
      <button
        onClick={() => onDomainChange('videoediting')}
        className={cn(
          "px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transition-all duration-300",
          domain === 'videoediting' 
            ? "bg-videoediting-accent text-black" 
            : "bg-transparent text-gray-300 hover:text-white"
        )}
      >
        <Video size={18} className={domain === 'videoediting' ? 'animate-pulse' : ''} />
        <span>Video Editing</span>
      </button>
    </div>
  );
};

export default DomainToggle;
