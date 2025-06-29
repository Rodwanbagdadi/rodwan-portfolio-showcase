
import { FileText, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCard } from './AnimatedCard';
import { useIntersectionObserver } from '@/hooks/useInteractions';

const About = () => {
  const [elementRef, isVisible] = useIntersectionObserver();

  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'Intermediate' }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
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
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a <span className="text-primary font-semibold">Mechatronics Engineering graduate</span> who builds 
                machine learning tools with Python and SQL, including fake news detection and predictive models. 
                I've worked on real projects at <span className="text-primary font-semibold">Bosch</span> and 
                enjoy turning data into useful, working solutions.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in bridging the gap between theoretical knowledge and practical implementation, 
                creating AI solutions that solve real-world problems. I thrive in collaborative environments 
                and enjoy the challenge of working with diverse, international teams.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Languages</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {languages.map((lang, index) => (
                  <div 
                    key={lang.name}
                    className={`interactive-scale bg-card hover:bg-accent/50 border border-border px-4 py-3 rounded-lg transition-all duration-300 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-sm text-muted-foreground block">{lang.level}</span>
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
                className="interactive-scale group border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="/Rodwan_Bagdadi_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  View Resume
                </a>
              </Button>
            </div>
          </AnimatedCard>
          
          <AnimatedCard className="space-y-6">
            <Card className="border-border hover:border-primary/50 bg-card hover:shadow-lg transition-all duration-300 group">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <p className="font-medium text-foreground">Bachelor's in Mechatronics Engineering</p>
                    <p className="text-sm text-muted-foreground">German Jordanian University (GJU)</p>
                    <p className="text-xs text-muted-foreground mt-1">2018-2025</p>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
                    <p className="font-medium text-foreground">Exchange Semester in Mechatronics</p>
                    <p className="text-sm text-muted-foreground">Bochum University of Applied Sciences</p>
                    <p className="text-xs text-muted-foreground mt-1">2023-2024</p>
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
