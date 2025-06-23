import React, { useState } from 'react';
import { Cpu } from 'lucide-react';

interface IconProps {
  src: string;
  alt: string;
  fallbackName?: string;
  className?: string;
}

/**
 * A resilient icon component that handles SVG loading failures with multiple fallback strategies
 */
const ResilientIcon = ({ src, alt, fallbackName, className = "w-6 h-6" }: IconProps) => {
  const [errorState, setErrorState] = useState(0); // 0: original, 1: public path, 2: fallback icon
  
  // Try to load from public directory if the direct import fails
  const getPublicPath = () => {
    if (!fallbackName) return '';
    return `/assets/icons/${fallbackName.toLowerCase().replace(/[\s-]/g, '')}.svg`;
  };
  
  if (errorState === 0) {
    return (
      <img 
        src={src} 
        alt={alt} 
        className={className}
        onError={() => fallbackName ? setErrorState(1) : setErrorState(2)}
      />
    );
  } else if (errorState === 1) {
    return (
      <img 
        src={getPublicPath()} 
        alt={alt} 
        className={className}
        onError={() => setErrorState(2)}
      />
    );
  } else {
    // Final fallback - a generic icon
    return <Cpu className={className} />;
  }
};

export default ResilientIcon;
