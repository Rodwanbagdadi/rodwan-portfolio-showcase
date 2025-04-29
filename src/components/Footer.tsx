
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-lg text-neutral-100">Rodwan Bagdadi</p>
            <p className="text-neutral-400 text-sm">Mechatronics Engineer and AI Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-neutral-400 hover:text-neutral-100 transition-colors">Home</a>
            <a href="#about" className="text-neutral-400 hover:text-neutral-100 transition-colors">About</a>
            <a href="#projects" className="text-neutral-400 hover:text-neutral-100 transition-colors">Projects</a>
            <a href="#contact" className="text-neutral-400 hover:text-neutral-100 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-neutral-800 text-center text-neutral-400 text-sm">
          <p>© {currentYear} Rodwan Bagdadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
