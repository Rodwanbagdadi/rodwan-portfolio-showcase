
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-lg">Rodwan Baghdadi</p>
            <p className="text-gray-300 text-sm">Software Engineer & AI Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-300 text-sm">
          <p>© {currentYear} Rodwan Baghdadi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
