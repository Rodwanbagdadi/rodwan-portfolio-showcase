import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-9 w-9 rounded-lg border border-black/60 dark:border-white/60 bg-white/90 dark:bg-black/60 backdrop-blur-sm shadow-sm transition-all duration-300 hover:bg-white dark:hover:bg-black/30 hover:text-black dark:hover:text-white hover:shadow-md hover:scale-105"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all duration-300" />
      )}
    </Button>
  );
};
