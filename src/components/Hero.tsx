import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, ExternalLink, Code2, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const quickStats = [
    { icon: Code2, label: 'Python Projects', value: '10+' },
    { icon: Brain, label: 'ML Models', value: '5+' }
  ];

  const keySkills = ['Python', 'Machine Learning', 'Pandas', 'SQL'];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Moving geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/40"></div>
        
        {/* Enhanced animated geometric shapes */}
        <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-400/20 rounded-full blur-3xl animate-float opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/15 rounded-full blur-3xl animate-float-reverse opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-teal-400/15 to-cyan-400/20 rounded-full blur-3xl animate-slow-spin opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-gradient-to-br from-emerald-400/10 to-green-400/15 rounded-full blur-3xl animate-float opacity-40"></div>
        
        {/* Floating particles with varied sizes */}
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0 ? 'w-2 h-2 bg-blue-400/20' : 
                i % 3 === 1 ? 'w-1 h-1 bg-indigo-400/30' : 
                'w-1.5 h-1.5 bg-purple-400/25'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`
              }}
            />
          ))}
        </div>
        
        {/* Subtle moving waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,80 400,40 600,60 C800,80 1000,40 1200,60 L1200,120 L0,120 Z" 
                  fill="url(#wave-gradient)" className="animate-pulse">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0 0; 200 0; 0 0"
                dur="20s"
                repeatCount="indefinite"
              />
            </path>
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgb(59 130 246)" stopOpacity="0.1"/>
                <stop offset="50%" stopColor="rgb(99 102 241)" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="rgb(139 92 246)" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Rodwan
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground">
                <span className="font-medium">Data Scientist & Machine Learning Engineer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              I turn complex data into actionable insights using cutting-edge machine learning solutions.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Amman, Jordan</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                <a href="mailto:rodwanbagdadi@gmail.com" className="flex items-center gap-2">
                  Get in Touch
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-blue-300 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:hover:bg-blue-950/30 group">
                <a href="#projects" className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  View Projects
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              
              <Button variant="secondary" size="lg" className="bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 group">
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                  Resume
                </a>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { href: "https://github.com/Rodwanbagdadi", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/rodwanbaghdadi/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:rodwanbagdadi@gmail.com", icon: Mail, label: "Email" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/80 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg border border-slate-200/50 dark:border-slate-700/50"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - Profile Section */}
          <div className="space-y-6">
            {/* Profile Picture and Skills */}
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-200/50 dark:border-blue-600/30 shadow-lg group">
                  <img 
                    src="https://images.unsplash.com/photo-1745947662038-3c71fd254f2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Rodwan Bagdadi" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Core Skills */}
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">Core Skills</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {keySkills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickStats.map(({ icon: Icon, label, value }) => (
                <Card key={label} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 hover:shadow-md transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">{value}</div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                const headerOffset = 80; // Account for fixed header
                const elementPosition = aboutSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }
            }}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors cursor-pointer group"
          >
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
