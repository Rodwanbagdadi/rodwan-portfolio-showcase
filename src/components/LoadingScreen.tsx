import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 2000
}) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, duration / 50);

    return () => clearInterval(interval);
  }, [duration, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-white to-white dark:from-black dark:via-black dark:to-black">
      <div className="text-center">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black dark:text-white">
            Rodwan Bagdadi
          </h2>
          <p className="text-black dark:text-white">Loading Portfolio...</p>
        </div>
        
        <div className="relative w-64 h-2 bg-black/20 dark:bg-white/20 rounded-full overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-black dark:bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-4 text-sm text-black dark:text-white">
          {progress}%
        </div>
      </div>
    </div>
  );
};
