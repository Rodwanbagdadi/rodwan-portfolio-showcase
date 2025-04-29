
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
          ? 'bg-neutral-900/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-neutral-900/70 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="text-xl font-bold text-neutral-100">
          Rodwan Bagdadi
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="font-medium transition-colors text-neutral-300 hover:text-neutral-100"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Trigger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-neutral-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu />
        </Button>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-900 shadow-lg md:hidden">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="px-4 py-2 hover:bg-neutral-800 font-medium text-neutral-300"
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
