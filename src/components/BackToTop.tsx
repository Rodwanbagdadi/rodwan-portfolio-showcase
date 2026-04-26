import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Simple throttle utility
const throttle = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  let lastExecTime = 0;
  return function (...args: any[]) {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
};

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = throttle(() => {
      const shouldShow = window.pageYOffset > 300;
      const distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);
      const nearFooter = distanceFromBottom < 220;

      setIsVisible(shouldShow);
      setIsNearFooter(nearFooter);
    }, 200); // Throttle to run every 200ms

    toggleVisibility();
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible || isNearFooter) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-24 md:bottom-8 right-8 z-50 px-4 py-3 h-auto rounded-full bg-black hover:bg-black text-white hover:text-white dark:bg-white dark:hover:bg-white dark:text-black dark:hover:text-black shadow-lg hover:shadow-xl hover:shadow-black/25 transition-all duration-300 hover:scale-110 group"
      size="default"
    >
      <ChevronUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
      <span className="text-sm font-medium">Back to Top</span>
    </Button>
  );
};
