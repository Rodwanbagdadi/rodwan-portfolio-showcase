
import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
      solution: 'Developed and fine-tuned an XGBoost-based fake news detection model using TF-IDF vectorization and key metadata features from a labeled dataset.',
      outcome: 'Achieved an accuracy of 99.79% with precision and recall both exceeding 99%. Deployed as a web-based platform using Flask as backend.'
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

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-neutral-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-neutral-600 mb-12 max-w-2xl">
          Here are some of my most significant projects showcasing my technical skills and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border border-neutral-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">{project.title}</h3>
                <p className="text-neutral-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-neutral-200 text-neutral-700">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-neutral-50 p-4 border-t">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-neutral-700 hover:text-neutral-900"
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  <Code size={16} className="mr-1" /> Details
                </Button>
                <div className="flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-neutral-800"
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-neutral-500 hover:text-neutral-800"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </CardFooter>
              
              {selectedProject === project.id && (
                <div className="p-6 bg-neutral-50 border-t">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-neutral-800">Problem:</h4>
                      <p className="text-sm text-neutral-600">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Solution:</h4>
                      <p className="text-sm text-neutral-600">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral-800">Outcome:</h4>
                      <p className="text-sm text-neutral-600">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-neutral-400 hover:bg-neutral-200">
            <a 
              href="https://github.com/Rodwanbagdadi?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
