import { useState, useEffect } from 'react';

interface TypingEffectProps {
  texts: string[];
  speed?: number;
  pauseDuration?: number;
}

const TypingEffect = ({ texts, speed = 150, pauseDuration = 2000 }: TypingEffectProps) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];
      
      if (!isDeleting) {
        if (currentIndex < fullText.length) {
          setCurrentText(prev => prev + fullText[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
          setTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, textIndex, texts, speed, pauseDuration, isDeleting, currentText]);

  return (
    <span className="inline-block">
      <span className="text-black dark:text-white font-bold">
        {currentText}
      </span>
      <span className="animate-pulse text-black dark:text-white ml-1">|</span>
    </span>
  );
};

export default TypingEffect;
