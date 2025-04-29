
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-neutral-100 to-neutral-200 pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 mb-4">
              Hi, I'm <span className="text-neutral-600">Rodwan Baghdadi</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-700 mb-6">
              Mechatronics Engineer and AI Specialist
            </p>
            <p className="text-neutral-600 mb-8 max-w-lg">
              I build intelligent systems and develop software solutions with a focus on AI, 
              machine learning, and engineering excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-neutral-800 hover:bg-neutral-700">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" asChild className="border-neutral-400 hover:bg-neutral-200">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex space-x-4 mt-8">
              <a 
                href="https://github.com/Rodwanbagdadi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-800 transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/rodwanbaghdadi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-neutral-800 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:rodwanbagdadi@gmail.com"
                className="text-neutral-600 hover:text-neutral-800 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end animate-slide-in">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop" 
                  alt="Rodwan Baghdadi" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="w-14 h-14 bg-neutral-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
