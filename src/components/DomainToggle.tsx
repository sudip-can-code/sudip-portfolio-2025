
import React from 'react';
import { cn } from '@/lib/utils';
import { Code, Video } from 'lucide-react';

interface DomainToggleProps {
  domain: 'webdev' | 'videoediting';
  onDomainChange: (domain: 'webdev' | 'videoediting') => void;
}

const DomainToggle: React.FC<DomainToggleProps> = ({ domain, onDomainChange }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm border border-gray-300 overflow-hidden">
      <button
        onClick={() => onDomainChange('webdev')}
        className={cn(
          "px-4 py-2 flex items-center space-x-2 text-sm transition-all",
          domain === 'webdev' 
            ? "bg-webdev-accent text-white" 
            : "bg-white text-gray-700 hover:bg-gray-100"
        )}
      >
        <Code size={18} />
        <span>Web Dev</span>
      </button>
      
      <button
        onClick={() => onDomainChange('videoediting')}
        className={cn(
          "px-4 py-2 flex items-center space-x-2 text-sm transition-all",
          domain === 'videoediting' 
            ? "bg-videoediting-accent text-white" 
            : "bg-white text-gray-700 hover:bg-gray-100"
        )}
      >
        <Video size={18} />
        <span>Video Editing</span>
      </button>
    </div>
  );
};

export default DomainToggle;
