
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
    <section id="experience" className="relative py-16 md:py-24 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 dark:bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 dark:bg-blue-300/30 rounded-full animate-float-particle"></div>
          <div className="absolute top-3/4 left-3/4 w-1.5 h-1.5 bg-indigo-400/30 dark:bg-indigo-300/30 rounded-full animate-float-particle-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400/30 dark:bg-purple-300/30 rounded-full animate-bounce-slow"></div>
        </div>
        

      </div>
      
      <div className="relative section-container">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-blue-800 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-100 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mt-4 max-w-2xl mx-auto text-lg">
              My professional journey in AI, machine learning, and software development.
            </p>
          </div>
        </AnimatedCard>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.id}>
              <Card 
                ref={elementRef as any}
                className={`group relative overflow-hidden border border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left column - Company info */}
                    <div className="p-6 lg:border-r border-slate-200/50 dark:border-slate-700/50 bg-slate-50/50 dark:bg-slate-800/50 group-hover:bg-blue-50/50 dark:group-hover:bg-blue-900/30 transition-colors duration-300">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full group-hover:bg-blue-200 dark:group-hover:bg-blue-800/70 transition-colors">
                            <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.location}</span>
                          </div>
                        </div>

                        <div className="pt-4">
                          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                            <ArrowUpRight className="h-3 w-3" />
                            Internship
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right column - Details */}
                    <div className="p-6 lg:col-span-3">
                      <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
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
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-slate-600 dark:text-slate-300 leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className={`bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/70 border-blue-200 dark:border-blue-700/50 transition-all duration-300 hover:scale-105 ${
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
