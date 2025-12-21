
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      hoverColor: 'hover:text-gray-400'
    },
    { 
      href: 'https://linkedin.com/in/rodwan-bagdadi', 
      icon: Linkedin, 
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    { 
      href: 'mailto:rodwan.bagdadi@gmail.com', 
      icon: Mail, 
      label: 'Email',
      hoverColor: 'hover:text-green-400'
    }
  ];
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-800/90 border-t border-slate-200 dark:border-slate-600/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand section */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Rodwan Bagdadi</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg">
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
                    className={`p-2 rounded-full bg-slate-100 dark:bg-slate-700/60 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-slate-600 dark:text-slate-300 ${social.hoverColor} transition-all duration-300 hover:scale-110 backdrop-blur-sm`}
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
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 block py-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick actions */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Quick Actions</h4>
            <div className="space-y-3">
              <a 
                href="/Rodwan_Bagdadi_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Download Resume
              </a>
              <a 
                href="#contact"
                className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 py-1"
              >
                Get in Touch
              </a>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="justify-start p-0 h-auto text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-normal"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                © {currentYear} Rodwan Bagdadi. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
