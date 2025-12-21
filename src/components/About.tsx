
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
    <section id="about" className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/40 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/40">
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
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                I'm a <span className="text-blue-600 dark:text-blue-400 font-semibold">Data Analyst and AI Engineer</span> currently working at MAKE WORK FLOW, 
                where I develop customer dashboards and build AI-powered solutions to improve user experience and operational efficiency.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed"> 
                Previously interned at <span className="text-blue-600 dark:text-blue-400 font-semibold">Bosch Engineering</span>, 
                where I gained hands-on experience in machine learning, state estimation systems, and predictive modeling.
              </p>

            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-100">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div 
                    key={lang.name}
                    className={`bg-white/70 dark:bg-slate-800/70 border border-slate-200/50 dark:border-slate-700/50 px-4 py-3 rounded-lg ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="font-medium text-slate-800 dark:text-slate-100">{lang.name}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-300 block">{lang.level}</span>
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
                className="interactive-scale group border-blue-300/60 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600/50 dark:hover:bg-blue-950/20 bg-white/80 dark:bg-slate-700/40 backdrop-blur-sm transition-all duration-300"
              >
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </Button>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="space-y-6">
            <Card className="border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="font-semibold text-lg text-slate-800 dark:text-slate-100">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/40 hover:bg-blue-50/70 dark:hover:bg-slate-600/40 transition-colors backdrop-blur-sm">
                    <p className="font-medium text-slate-800 dark:text-slate-100">Bachelor's in Mechatronics Engineering</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">German Jordanian University (GJU)</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2018-2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-50/70 dark:bg-slate-700/40 hover:bg-blue-50/70 dark:hover:bg-slate-600/40 transition-colors backdrop-blur-sm">
                    <p className="font-medium text-slate-800 dark:text-slate-100">Exchange Semester in Mechatronics</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Bochum University of Applied Sciences</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">2023-2024</p>
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
