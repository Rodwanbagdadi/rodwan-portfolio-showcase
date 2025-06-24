
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
  const [hasError, setHasError] = useState(false);
  
  // Construct the public path for the icon
  const getPublicIconPath = (iconName: string) => {
    return `/assets/icons/${iconName.toLowerCase().replace(/[\s-]/g, '')}.svg`;
  };
  
  // If there's an error or no src provided, try the public path
  if (hasError || !src) {
    if (fallbackName) {
      return (
        <img 
          src={getPublicIconPath(fallbackName)} 
          alt={alt} 
          className={className}
          onError={() => setHasError(true)}
        />
      );
    }
    
    // Final fallback - a generic icon
    return <Cpu className={className} />;
  }
  
  // Try the provided src first
  return (
    <img 
      src={src || getPublicIconPath(fallbackName || '')} 
      alt={alt} 
      className={className}
      onError={() => setHasError(true)}
    />
  );
};

export default ResilientIcon;
