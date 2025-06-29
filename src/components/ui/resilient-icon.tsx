
import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface IconProps {
  src?: string;
  alt: string;
  fallbackName?: string;
  className?: string;
}

/**
 * A resilient icon component that handles SVG loading failures with multiple fallback strategies
 */
const ResilientIcon = ({ src, alt, fallbackName, className = "w-6 h-6" }: IconProps) => {
  const [srcFailed, setSrcFailed] = useState(false);
  const [fallbackFailed, setFallbackFailed] = useState(false);
  
  // Construct the public path for the icon
  const getPublicIconPath = (iconName: string) => {
    return `/assets/icons/${iconName.toLowerCase().replace(/\s/g, '-')}.svg`;
  };
  
  // If we have a src and it hasn't failed, try it first
  if (src && !srcFailed) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        onError={() => setSrcFailed(true)}
      />
    );
  }
  
  // If src failed or no src provided, try fallback name
  if (fallbackName && !fallbackFailed) {
    return (
      <img 
        src={getPublicIconPath(fallbackName)} 
        alt={alt} 
        className={className}
        onError={() => setFallbackFailed(true)}
      />
    );
  }
  
  // Final fallback - a generic icon
  return <Cpu className={className} />;
};

export default ResilientIcon;
