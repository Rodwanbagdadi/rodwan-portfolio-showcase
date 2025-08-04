import { Github, Linkedin, Mail, MapPin, Download, ExternalLink, Code2, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TypingEffect from './TypingEffect';
import ParticleBackground from './ParticleBackground';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const heroRef = useScrollAnimation();
  const leftColumnRef = useScrollAnimation();
  const rightColumnRef = useScrollAnimation();

  const quickStats = [
    { icon: Code2, label: 'Python Projects', value: '10+' },
    { icon: Brain, label: 'ML Models', value: '5+' }
  ];

  const keySkills = ['Python', 'Machine Learning', 'Pandas', 'SQL'];

  return (
    <section id="home" className="min-h-[75vh] flex items-center relative overflow-hidden bg-background pt-12 md:pt-16">
      {/* Particle Background */}
      <ParticleBackground />
      {/* Static background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/40"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center min-h-[calc(100vh-10rem)] lg:min-h-[calc(100vh-8rem)]">
          {/* Left Column - Main Content */}
          <div ref={leftColumnRef} className="space-y-5 lg:space-y-6 animate-on-scroll">
            {/* Main Heading */}
            <div className="space-y-2 lg:space-y-3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight float-animation">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Rodwan
                </span>
              </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                <span className="font-medium">Mechatronics & AI Engineer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              I turn complex data into actionable insights using cutting-edge machine learning solutions.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="font-medium">Amman, Jordan</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group card-hover">
                <a href="mailto:rodwanbagdadi@gmail.com" className="flex items-center gap-2">
                  Get in Touch
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-blue-300/60 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600/50 dark:hover:bg-blue-950/20 bg-white/80 dark:bg-slate-700/40 backdrop-blur-sm group card-hover">
                <a href="#projects" className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  View Projects
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              
              <Button variant="secondary" size="lg" className="bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/50 dark:hover:bg-slate-600/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-600/50 group card-hover">
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
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
                  className="p-3 rounded-full bg-white/90 hover:bg-white dark:bg-slate-700/60 dark:hover:bg-slate-600/70 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg border border-slate-200/50 dark:border-slate-600/50 backdrop-blur-sm card-hover"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - Profile Section */}
          <div ref={rightColumnRef} className="space-y-5 sm:space-y-6 animate-on-scroll">
            {/* Profile Picture and Skills */}
            <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-48 h-56 sm:w-56 sm:h-64 lg:w-64 lg:h-72 rounded-xl overflow-hidden border-4 border-blue-200/50 dark:border-blue-600/30 shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1745947662038-3c71fd254f2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Rodwan Bagdadi" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Core Skills */}
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-100 mb-3 text-lg">Core Skills</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {keySkills.slice(0, 4).map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700/50 text-sm px-3 py-1">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {quickStats.map(({ icon: Icon, label, value }, index) => (
                <Card key={label} className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-700/50 card-hover animate-on-scroll" style={{ animationDelay: `${(index + 1) * 0.2}s` }}>
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">{value}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-300">{label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
