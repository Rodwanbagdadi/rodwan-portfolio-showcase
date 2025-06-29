
import { Calendar, MapPin, ArrowUpRight, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AnimatedCard } from './AnimatedCard';
import { useIntersectionObserver } from '@/hooks/useInteractions';

const Experience = () => {
  const [elementRef, isVisible] = useIntersectionObserver();
  
  const experiences = [
    {
      id: 1,
      role: 'Software Steering Intern',
      company: 'Bosch Engineering GmbH',
      period: 'Mar 2024 - Sep 2024',
      location: 'Abstatt, Germany',
      description: 'Developing and validating AI and control systems through simulation, prompt optimization, and predictive modeling.',
      achievements: [
        'Designed and simulated advanced state estimation systems using Kalman Filters, demonstrating their limitations in non-linear dynamics and irregular sensor sampling through hands-on modeling of both linear and non-linear systems',
        'Mastered prompt engineering principles while leveraging an internal GPT-3.5 Turbo model to validate AI-generated outputs, conducting cross-linguistic evaluations and learning how to optimize prompt structure, and tone to maximize clarity and truthfulness in internal decision-support tasks',
        'Built a predictive model using Ensemble Learning and Random Forests in Python to forecast Titanic survival outcomes, experimenting with feature selection and data preprocessing to achieve top 20% leaderboard placement and highlight the tradeoff between model complexity and generalization'
      ],
      technologies: ['Python', 'Kalman Filters', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      companyColor: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/20">
      <div className="section-container">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="section-title">Work Experience</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
              My professional journey in AI, machine learning, and software development.
            </p>
          </div>
        </AnimatedCard>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.id}>
              <Card 
                ref={elementRef as any}
                className={`group relative overflow-hidden border-l-4 border-l-primary hover:border-l-primary/80 bg-card hover:shadow-xl transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left column - Company info */}
                    <div className="p-6 lg:border-r border-border bg-secondary/30 group-hover:bg-secondary/50 transition-colors duration-300">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Zap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.location}</span>
                          </div>
                        </div>

                        <div className="pt-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            <ArrowUpRight className="h-3 w-3" />
                            Internship
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column - Details */}
                    <div className="p-6 lg:col-span-3">
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex} 
                              className={`flex gap-3 transition-all duration-500 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                              }`}
                              style={{ transitionDelay: `${(index * 200) + (achIndex * 100)}ms` }}
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className={`interactive-scale bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-primary/20 transition-all duration-300 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                              }`}
                              style={{ transitionDelay: `${(index * 200) + (techIndex * 50)}ms` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
