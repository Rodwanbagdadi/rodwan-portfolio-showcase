import React, { useState } from 'react';
import { ExternalLink, Code, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Fake News Detection',
      description: 'Developed a fake news detection system using XGBoost and TF-IDF vectorization, achieving 99.79% accuracy.',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Flask', 'HTML', 'Gradient Boosting', 'XGBoost'],
      github: 'https://github.com/Rodwanbagdadi/Flask_Grad_Project',
      live: 'https://demo-link.com',
      problem: 'Misinformation spreading through digital platforms causing potential harm.',
      solution: 'Developed and fine-tuned an XGBoost-based fake news detection model using TF-IDF vectorization and key metadata features. Enhanced model robustness through iterative evaluation of SVM, LightGBM, Random Forest, and Logistic Regression models. Integrated DistilBERT transformer for capturing nuanced linguistic patterns.',
      outcome: 'Achieved over 92% accuracy with precision and recall consistently above 90%. Successfully deployed an ensemble of models using Flask backend with an interactive HTML frontend for real-time fake news detection and user feedback.'
    },
    {
      id: 2,
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
      id: 3,
      title: 'Ensemble Learning for Survival Prediction',
      description: 'Built a predictive model using Ensemble Learning and Random Forests to forecast survival outcomes, achieving top 20% leaderboard placement.',
      image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'Ensemble Learning', 'Random Forests', 'Feature Selection'],
      problem: 'Predicting survival outcomes with complex, multi-dimensional data.',
      solution: 'Built a predictive model using Ensemble Learning and Random Forests, experimenting with feature selection and data preprocessing.',
      outcome: 'Achieved top 20% leaderboard placement while highlighting the tradeoff between model complexity and generalization.'
    },
  ];

  // This state will only track the ID of the currently expanded project (if any)
  const [expandedProjectId, setExpandedProjectId] = useState(null);

  const toggleProjectDetails = (projectId) => {
    // If the clicked project is already expanded, collapse it
    // Otherwise, expand the clicked project and collapse any others
    setExpandedProjectId(expandedProjectId === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-neutral-400 mb-12 max-w-2xl">
          Here are some of my most significant projects showcasing my technical skills and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border border-neutral-700 bg-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-secondary text-secondary-foreground">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-card p-4 border-t border-neutral-700">
                <Collapsible 
                  open={expandedProjectId === project.id}
                  className="w-full"
                >
                  <div className="flex justify-between items-center w-full">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-neutral-400 hover:text-foreground flex items-center gap-1"
                      onClick={() => toggleProjectDetails(project.id)}
                    >
                      <Code size={16} />
                      Details
                      {expandedProjectId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </Button>

                    <div className="flex gap-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-foreground"
                        >
                          <Github size={18} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-foreground"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>

                  {expandedProjectId === project.id && (
                    <CollapsibleContent className="mt-4">
                      <div className="p-4 bg-card border-t border-neutral-700">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-foreground">Problem:</h4>
                            <p className="text-sm text-neutral-400">{project.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Solution:</h4>
                            <p className="text-sm text-neutral-400">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">Outcome:</h4>
                            <p className="text-sm text-neutral-400">{project.outcome}</p>
                          </div>
                        </div>
                      </div>
                    </CollapsibleContent>
                  )}
                </Collapsible>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-neutral-600 hover:bg-neutral-800">
            <a 
              href="https://github.com/Rodwanbagdadi?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View More Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;