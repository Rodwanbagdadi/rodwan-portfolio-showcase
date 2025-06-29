import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, MapPin, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'AI/ML Engineer',
    'Data Scientist', 
    'Python Developer',
    'NLP Specialist'
  ];

  useEffect(() => {
    const type = () => {
      const current = currentIndex % titles.length;
      const fullText = titles[current];

      setCurrentText(isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      );

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 150);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full floating-animation"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 fade-in-up">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 glow-effect">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Hi, I'm <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Rodwan Bagdadi</span>
            </h1>
            
            <div className="text-lg md:text-xl text-muted-foreground mb-6 h-8">
              <span className="typewriter-text">{currentText}</span>
              <span className="animate-pulse text-primary">|</span>
            </div>
            
            <p className="text-muted-foreground mb-4 max-w-lg leading-relaxed">
              Specialized in Python, SQL & NLP | Turning Data into Actionable Insights with cutting-edge machine learning solutions.
            </p>
            
            <div className="flex items-center text-muted-foreground mb-8 group">
              <MapPin size={20} className="mr-2 text-primary group-hover:animate-bounce" />
              <span>Amman, Jordan</span>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button className="interactive-button btn-primary group" asChild>
                <a href="#contact">
                  <span>Get in Touch</span>
                  <Mail className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" className="interactive-button glow-effect" asChild>
                <a href="#projects">
                  <span>View Projects</span>
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="secondary" className="interactive-button" asChild>
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/Rodwanbagdadi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Github size={28} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rodwanbaghdadi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Linkedin size={28} />
              </a>
              <a 
                href="mailto:rodwanbagdadi@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-border shadow-2xl transition-all duration-500 group-hover:scale-105 card-hover glow-effect">
                <img 
                  src="https://images.unsplash.com/photo-1745947662038-3c71fd254f2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Rodwan Baghdadi" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-full shadow-lg border border-border floating-animation">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                  <span className="text-primary font-bold text-lg">RB</span>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 bg-green-500 w-4 h-4 rounded-full border-2 border-background animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
