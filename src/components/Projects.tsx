import { useState } from 'react';
import { ExternalLink, Code, Github, ChevronDown, ChevronUp, Star, GitFork } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AnimatedCard } from '@/components/AnimatedCard';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sales Insights Data Analysis',
      description: 'Advanced data analysis using Power BI and MySQL to transform raw sales data into meaningful business insights with interactive dashboards.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Power BI', 'MySQL', 'DAX', 'Power Query', 'SQL'],
      github: 'https://github.com/Rodwanbagdadi/Sales-Insights-Data-Analysis',
      featured: true,
      problem: 'Need for real-time visibility into sales performance, trends, and key metrics to drive data-driven decision making in business operations.',
      solution: 'Developed comprehensive Power BI dashboards with MySQL backend, implementing currency normalization, time-based analysis, and geographic insights. Created interactive visualizations with drill-down capabilities and real-time analytics.',
      outcome: 'Delivered actionable business insights including identification of top 20% customers contributing to 80% of revenue, seasonal trends with Q4 showing 35% higher sales, and 15% profit margin improvement opportunities.'
    },
    {
      id: 2,
      title: 'Fake News Detection',
      description: 'Developed a fake news detection system using XGBoost and TF-IDF vectorization, achieving 99.79% accuracy.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Flask', 'HTML', 'Gradient Boosting', 'XGBoost'],
      github: 'https://github.com/Rodwanbagdadi/Flask_Grad_Project',
      live: 'https://flask-grad-project.onrender.com/',
      featured: true,
      problem: 'Misinformation spreading through digital platforms causing potential harm.',
      solution: 'Developed and fine-tuned an XGBoost-based fake news detection model using TF-IDF vectorization and key metadata features. Enhanced model robustness through iterative evaluation of SVM, LightGBM, Random Forest, and Logistic Regression models. Integrated DistilBERT transformer for capturing nuanced linguistic patterns.',
      outcome: 'Achieved over 92% accuracy with precision and recall consistently above 90%. Successfully deployed an ensemble of models using Flask backend with an interactive HTML frontend for real-time fake news detection and user feedback.'
    },
    {
      id: 3,
      title: 'Diabetes Classifier',
      description: 'Created a diabetes prediction model using SVM on a dataset of 70,692 cases derived from 253,680 survey responses.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop',
      technologies: ['SVM', 'KNN', 'Random Forests', 'Decision Trees'],
      github: 'https://github.com/Rodwanbagdadi/Diabetes-Classifier',
      problem: 'Early detection of diabetes risk factors to improve preventative healthcare.',
      solution: 'Developed a diabetes prediction model using Support Vector Machine on a cleaned dataset, selecting 21 relevant features out of 330.',
      outcome: 'Achieved 74.92% accuracy, demonstrating SVM superior performance while highlighting overfitting issues in tree-based models.'
    },
    {
      id: 4,
      title: 'Ensemble Learning for Survival Prediction',
      description: 'Built a predictive model using Ensemble Learning and Random Forests to forecast survival outcomes, achieving top 20% leaderboard placement.',
      image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'Ensemble Learning', 'Random Forests', 'Feature Selection'],
      problem: 'Predicting survival outcomes with complex, multi-dimensional data.',
      solution: 'Built a predictive model using Ensemble Learning and Random Forests, experimenting with feature selection and data preprocessing.',
      outcome: 'Achieved top 20% leaderboard placement while highlighting the tradeoff between model complexity and generalization.'
    },
  ];

  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const toggleProjectDetails = (projectId: number) => {
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      <div className="section-container relative">
        <AnimatedCard variant="fade" className="text-center mb-12">
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
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
                className={`overflow-hidden card-hover border-border/50 bg-card/50 backdrop-blur-sm h-full transition-all duration-500 group ${
                  hoveredProject === project.id ? 'glow-effect shadow-2xl -translate-y-2' : ''
                } ${project.featured ? 'ring-2 ring-primary/20' : ''}`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" fill="currentColor" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6 flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors duration-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="bg-card/30 p-4 border-t border-border/50">
                  <Collapsible 
                    open={expandedProjectId === project.id}
                    className="w-full"
                  >
                    <div className="flex justify-between items-center w-full">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-muted-foreground hover:text-foreground flex items-center gap-2 interactive-button"
                        onClick={() => toggleProjectDetails(project.id)}
                      >
                        <Code size={16} />
                        Details
                        {expandedProjectId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </Button>

                      <div className="flex gap-3">
                        {project.live && (
                          <Button variant="ghost" size="sm" className="interactive-button" asChild>
                            <a 
                              href={project.live} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary"
                            >
                              <ExternalLink size={16} />
                            </a>
                          </Button>
                        )}
                        {project.github && (
                          <Button variant="ghost" size="sm" className="interactive-button" asChild>
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-muted-foreground hover:text-primary"
                            >
                              <Github size={16} />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>

                    <CollapsibleContent className="mt-4">
                      <div className="p-4 bg-card/50 rounded-lg border border-border/30">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-foreground flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              Problem
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed pl-4">{project.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-accent rounded-full"></div>
                              Solution
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed pl-4">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground flex items-center gap-2 mb-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Outcome
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed pl-4">{project.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardFooter>
              </Card>
            </AnimatedCard>
          ))}
        </div>
        
        <AnimatedCard variant="fade" delay={800} className="text-center mt-12">
          <Button asChild className="interactive-button btn-primary group">
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