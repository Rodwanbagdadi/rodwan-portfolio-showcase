import { Github, Linkedin, Mail, MapPin, Download, ChevronDown, ExternalLink, Code2, Brain, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Hero = () => {
  const quickStats = [
    { icon: Code2, label: 'Python Projects', value: '10+' },
    { icon: Brain, label: 'ML Models', value: '5+' },
    { icon: Database, label: 'Experience', value: '6M+' }
  ];

  const keySkills = ['Python', 'Machine Learning', 'SQL', 'NLP', 'Data Science', 'TensorFlow'];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-background">
      {/* Moving geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/10 rotate-45 blur-2xl animate-slow-spin"></div>
        
        {/* Moving dots pattern */}
        <div className="absolute inset-0">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            />
          ))}
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
                <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Rodwan
                </span>
              </h1>
              
              <div className="text-2xl lg:text-3xl text-muted-foreground">
                <span className="font-medium">Data Scientist & Machine Learning Engineer</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Mechatronics Engineer specializing in <span className="text-primary font-semibold">AI/ML</span> and 
              <span className="text-primary font-semibold"> Data Science</span>. 
              I turn complex data into actionable insights using cutting-edge machine learning solutions.
            </p>
            
            {/* Location */}
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">Amman, Jordan</span>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group">
                <a href="#contact" className="flex items-center gap-2">
                  Get in Touch
                  <Mail className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 group">
                <a href="#projects" className="flex items-center gap-2">
                  View Projects
                  <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
              
              <Button variant="secondary" size="lg" className="group">
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
                  className="p-3 rounded-full bg-secondary hover:bg-accent text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-md hover:shadow-lg"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Right Column - Quick Info Cards */}
          <div className="space-y-6">
            {/* Profile Card */}
            <Card className="bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1745947662038-3c71fd254f2c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="Rodwan Bagdadi" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">Rodwan Bagdadi</h3>
                    <p className="text-muted-foreground text-lg">Mechatronics Engineer</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Core Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {keySkills.slice(0, 4).map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickStats.map(({ icon: Icon, label, value }) => (
                <Card key={label} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-md transition-all duration-300 hover:scale-105">
                  <CardContent className="p-4 text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-foreground">{value}</div>
                    <div className="text-xs text-muted-foreground">{label}</div>
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
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer group"
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
