import { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

const ParallaxSection = ({ children, speed = 0.5, className = '' }: ParallaxSectionProps) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`transition-transform duration-75 ease-out ${className}`}
      style={{
        transform: `translateY(${offsetY * speed}px)`,
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxSection;
