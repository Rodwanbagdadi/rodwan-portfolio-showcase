import { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useInteractions';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fade' | 'slide' | 'scale' | 'rotate';
}

export const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  variant = 'fade'
}: AnimatedCardProps) => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (variant) {
        case 'slide':
          return `${baseClasses} translate-y-8 opacity-0`;
        case 'scale':
          return `${baseClasses} scale-95 opacity-0`;
        case 'rotate':
          return `${baseClasses} rotate-3 opacity-0`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} translate-y-0 scale-100 rotate-0 opacity-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
