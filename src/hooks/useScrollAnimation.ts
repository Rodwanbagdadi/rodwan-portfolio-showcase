import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold: number = 0.1) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;

    const handleIntersect = ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        animationFrame = requestAnimationFrame(() => {
          entry.target.classList.add('animate-in');
        });
      }
    };

    const observer = new IntersectionObserver(handleIntersect, { threshold });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [threshold]);

  return ref;
};
