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
      role: 'Junior Software Developer',
      company: 'MAKE WORK FLOW',
      period: 'Sep 2025 - Present',
      location: 'Amman, Jordan',
      description: 'Full-time position developing customer-facing solutions and AI-powered tools.',
      achievements: [
        'Develop and maintain customer dashboards, collaborating with stakeholders to define KPIs, validate data pipelines, and ensure clarity, accuracy, and usability across different user profiles',
        'Build an AI-powered customer support chatbot using Python to handle inquiries related to dashboards and reporting logic, improving response efficiency and user experience'
      ],
      technologies: ['Python (Programming Language)', 'Artificial Intelligence (AI)', 'SQL', 'Metabase'],
      companyColor: 'from-white to-white'
    },
    {
      id: 2,
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
      companyColor: 'from-white to-white'
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-16 bg-gradient-to-br from-white via-white to-white dark:from-black dark:via-black dark:to-black">
      <div className="section-container">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
              Work Experience
            </h2>
            <p className="text-black dark:text-white mt-4 max-w-2xl mx-auto text-lg">
              My professional journey in AI, machine learning, and software development.
            </p>
          </div>
        </AnimatedCard>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedCard key={exp.id}>
              <Card
                ref={elementRef as any}
                className={`relative overflow-hidden border border-black/50 dark:border-white/50 bg-white/70 dark:bg-black/70 backdrop-blur-sm transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="relative p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* Left column - Company info */}
                    <div className="p-6 lg:border-r border-black/50 dark:border-white/50 bg-white/50 dark:bg-black/50">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-white dark:bg-black/50 p-2 rounded-full">
                            <Zap className="h-5 w-5 text-black dark:text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                              {exp.role}
                            </h3>
                            <p className="text-lg font-semibold text-black dark:text-white">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <Calendar className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-black dark:text-white">
                            <MapPin className="h-4 w-4" />
                            <span className="text-sm font-medium">{exp.location}</span>
                          </div>
                        </div>
                        
                        {index === 0 && (
                          <div className="pt-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-black/50 text-black dark:text-white rounded-full text-sm font-medium">
                              <ArrowUpRight className="h-3 w-3" />
                              Current Role
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Right column - Details */}
                    <div className="lg:col-span-3 p-6 space-y-6">
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-3">
                          Key Achievements
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li 
                              key={achIndex} 
                              className={`flex gap-3 transition-all duration-300 ${
                                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                              }`}
                              style={{ transitionDelay: `${(index * 100) + (achIndex * 50)}ms` }}
                            >
                              <div className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full mt-2 flex-shrink-0" />
                              <span className="text-black dark:text-white leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-black dark:text-white mb-3">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={techIndex} 
                              variant="secondary" 
                              className={`bg-white dark:bg-black/50 text-black dark:text-white hover:bg-white dark:hover:bg-black/70 border-black dark:border-white/50 transition-all duration-300 ${
                                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                              }`}
                              style={{ transitionDelay: `${(index * 100) + (techIndex * 25)}ms` }}
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
