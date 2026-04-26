
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    { 
      href: 'https://github.com/rodwanb', 
      icon: Github, 
      label: 'GitHub',
      hoverColor: 'hover:text-black'
    },
    { 
      href: 'https://linkedin.com/in/rodwan-bagdadi', 
      icon: Linkedin, 
      label: 'LinkedIn',
      hoverColor: 'hover:text-black'
    },
    { 
      href: 'mailto:rodwan.bagdadi@gmail.com', 
      icon: Mail, 
      label: 'Email',
      hoverColor: 'hover:text-black'
    }
  ];
  
  return (
    <footer className="bg-white dark:bg-black/90 border-t border-black dark:border-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-2 flex items-center gap-3">
                <img
                  src="/Logo.png"
                  alt="Rodwan logo"
                  className="h-10 w-10 object-contain"
                />
                <span>Rodwan Bagdadi</span>
              </h3>
              <p className="text-black dark:text-white text-lg">
                Data Analyst and AI Engineer
              </p>
            </div>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white dark:bg-black/60 hover:bg-white dark:hover:bg-black/40 text-black dark:text-white ${social.hoverColor} transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick actions */}
          <div>
            <h4 className="font-semibold text-black dark:text-white mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <a 
                href="/Rodwan_Bagdadi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300 py-1"
              >
                Download Resume
              </a>
              <a 
                href="#contact"
                className="block text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300 py-1"
              >
                Get in Touch
              </a>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center text-black dark:text-white hover:text-black dark:hover:text-white transition-colors duration-300 py-1"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-black dark:border-white">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-black dark:text-white text-sm">
                © {currentYear} Rodwan Bagdadi. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-black dark:text-white text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-black dark:text-white" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
