
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 py-2' 
          : 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a 
          href="#home" 
          className="text-xl font-bold text-slate-900 dark:text-slate-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        >
          Rodwan Bagdadi
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-medium transition-all duration-300 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-2">
          <ThemeToggle />
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-lg shadow-blue-500/10 dark:shadow-blue-400/10 md:hidden animate-in slide-in-from-top-2 duration-300 border-t border-slate-200/50 dark:border-slate-600/50">
            <div className="flex flex-col py-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="px-6 py-3 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
