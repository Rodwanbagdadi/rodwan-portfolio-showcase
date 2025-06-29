import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/AnimatedCard';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Sales Insights Data Analysis',
      subtitle: 'Advanced data analysis using Power BI and MySQL',
      description: 'Transform raw sales data into meaningful business insights with interactive dashboards.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Power BI', 'MySQL', 'DAX', 'Power Query', 'SQL'],
      github: 'https://github.com/Rodwanbagdadi/Sales-Insights-Data-Analysis',
    },
    {
      id: 2,
      title: 'Fake News Detection',
      subtitle: 'AI-powered misinformation detection system',
      description: 'XGBoost and TF-IDF vectorization system achieving 99.79% accuracy in detecting fake news.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Flask', 'HTML', 'Gradient Boosting', 'XGBoost', 'distilBERT'],
      github: 'https://github.com/Rodwanbagdadi/Flask_Grad_Project',
    },
    {
      id: 3,
      title: 'Diabetes Classifier',
      subtitle: 'Machine learning for healthcare prediction',
      description: 'SVM-based diabetes prediction model using 70,692 cases from comprehensive survey data.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop',
      technologies: ['SVM', 'KNN', 'Random Forests', 'Decision Trees'],
      github: 'https://github.com/Rodwanbagdadi/Diabetes-Classifier',
    },
    {
      id: 4,
      title: 'Survival Prediction Model',
      subtitle: 'Ensemble learning for medical outcomes',
      description: 'Random Forests and ensemble learning to forecast survival outcomes with top 20% leaderboard placement.',
      image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'Ensemble Learning', 'Random Forests', 'Feature Selection'],
      github: 'https://github.com/Rodwanbagdadi/Survival-Prediction',
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/30">
      {/* Background decoration matching the theme */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-blue-400/8 to-indigo-400/12 rounded-full blur-3xl animate-float opacity-50"></div>
        <div className="absolute bottom-32 right-32 w-64 h-64 bg-gradient-to-br from-purple-400/6 to-pink-400/10 rounded-full blur-3xl animate-float-reverse opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-br from-teal-400/8 to-cyan-400/12 rounded-full blur-3xl animate-slow-spin opacity-30"></div>
      </div>
      
      <div className="section-container relative z-10">
        <AnimatedCard variant="fade" className="text-center mb-12">
          <h2 className="section-title text-slate-800 dark:text-slate-100">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Here are some of my most significant projects showcasing my technical skills and problem-solving abilities in data science and machine learning.
          </p>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={project.id} 
              variant="slide" 
              delay={index * 200}
              className="h-full"
            >
              <Card 
                className={`overflow-hidden card-hover border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full transition-all duration-500 group ${
                  hoveredProject === project.id ? 'shadow-2xl -translate-y-2 border-blue-300 dark:border-blue-600' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-blue-600/80 dark:text-blue-400/80 text-sm font-medium mb-3">{project.subtitle}</p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50 hover:bg-blue-200 dark:hover:bg-blue-800/40 transition-colors duration-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="bg-white/50 dark:bg-slate-700/50 p-4 border-t border-slate-200/50 dark:border-slate-600/50">
                  <div className="flex gap-3 w-full justify-center">
                    <Button variant="outline" size="sm" className="interactive-button flex-1 border-blue-300 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:hover:bg-blue-950/30" asChild>
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 justify-center text-blue-700 dark:text-blue-300"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        
        <AnimatedCard variant="fade" delay={800} className="text-center mt-12">
          <Button asChild className="interactive-button bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
            <a 
              href="https://github.com/Rodwanbagdadi?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View More Projects
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default Projects;