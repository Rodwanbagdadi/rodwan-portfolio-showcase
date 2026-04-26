
import { FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCard } from './AnimatedCard';
import { useIntersectionObserver } from '@/hooks/useInteractions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const [elementRef, isVisible] = useIntersectionObserver();

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'Intermediate' }
  ];

  return (
    <section id="about" className="py-12 md:py-16 bg-gradient-to-br from-white via-white/30 to-white/40 dark:from-black dark:via-black dark:to-black/40">
      <div className="section-container">
        <AnimatedCard>
          <h2 className="section-title">About Me</h2>
        </AnimatedCard>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          <AnimatedCard className="lg:col-span-2 space-y-6">
            <div 
              ref={elementRef as any}
              className={`prose dark:prose-invert max-w-none transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-black dark:text-white text-lg leading-relaxed">
                I'm a <span className="text-black dark:text-white font-semibold">Data Analyst and AI Engineer</span> currently working at MAKE WORK FLOW, 
                where I develop customer dashboards and build AI-powered solutions to improve user experience and operational efficiency.
              </p>
              <p className="text-black dark:text-white text-lg leading-relaxed"> 
                Previously interned at <span className="text-black dark:text-white font-semibold">Bosch Engineering</span>, 
                where I gained hands-on experience in machine learning, state estimation systems, and predictive modeling.
              </p>

            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div 
                    key={lang.name}
                    className={`bg-white/70 dark:bg-black/70 border border-black/50 dark:border-white/50 px-4 py-3 rounded-lg ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="font-medium text-black dark:text-white">{lang.name}</span>
                        <span className="text-sm text-black dark:text-white block">{lang.level}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                asChild 
                variant="outline" 
                className="interactive-scale group border-black/60 hover:bg-white hover:border-black dark:border-white/50 dark:hover:bg-black/20 bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-all duration-300"
              >
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black dark:text-white">
                  <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </Button>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="space-y-6">
            <Card className="border-black/50 dark:border-white/50 bg-white/70 dark:bg-black/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white dark:bg-black/30 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <h3 className="font-semibold text-lg text-black dark:text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-white/70 dark:bg-black/40 hover:bg-white/70 dark:hover:bg-black/40 transition-colors backdrop-blur-sm">
                    <p className="font-medium text-black dark:text-white">Bachelor's in Mechatronics Engineering</p>
                    <p className="text-sm text-black dark:text-white">German Jordanian University (GJU)</p>
                    <p className="text-xs text-black dark:text-white mt-1">2018-2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-white/70 dark:bg-black/40 hover:bg-white/70 dark:hover:bg-black/40 transition-colors backdrop-blur-sm">
                    <p className="font-medium text-black dark:text-white">Exchange Semester in Mechatronics</p>
                    <p className="text-sm text-black dark:text-white">Bochum University of Applied Sciences</p>
                    <p className="text-xs text-black dark:text-white mt-1">2023-2024</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
};

export default About;
