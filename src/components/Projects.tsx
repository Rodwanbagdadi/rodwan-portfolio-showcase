
import React, { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Vision System',
      description: 'Developed a computer vision system for autonomous navigation using deep learning models to identify objects and obstacles.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'PyTorch'],
      github: 'https://github.com/',
      live: 'https://demo-link.com',
      problem: 'Creating reliable object detection for autonomous systems in varying light conditions.',
      solution: 'Implemented a custom CNN architecture with data augmentation techniques to improve accuracy by 20% in low-light conditions.',
      outcome: 'System achieved 95% accuracy in real-world tests and was integrated into a larger autonomous navigation platform.'
    },
    {
      id: 2,
      title: 'Predictive Maintenance ML Pipeline',
      description: 'Built an end-to-end machine learning pipeline for predicting equipment failures before they occur, saving maintenance costs.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop',
      technologies: ['Python', 'scikit-learn', 'XGBoost', 'Flask API'],
      github: 'https://github.com/',
      problem: 'Unexpected equipment failures causing production downtime and high maintenance costs.',
      solution: 'Created an ML pipeline using sensor data and historical maintenance records with XGBoost for early failure prediction.',
      outcome: 'Reduced unplanned downtime by 35% and maintenance costs by 25%.'
    },
    {
      id: 3,
      title: 'Time Series Analysis Dashboard',
      description: 'Interactive dashboard for visualizing and analyzing time series data with advanced filtering and forecasting capabilities.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1172&auto=format&fit=crop',
      technologies: ['Python', 'Pandas', 'LSTM Networks', 'Dash'],
      github: 'https://github.com/',
      live: 'https://demo-link.com',
      problem: 'Complex time series data was difficult to analyze and derive actionable insights from.',
      solution: 'Designed an interactive dashboard with forecasting models and anomaly detection capabilities.',
      outcome: 'Enabled data-driven decision making and early anomaly detection, improving operational efficiency.'
    },
  ];

  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Here are some of my most significant projects showcasing my technical skills and problem-solving abilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between bg-gray-50 p-4 border-t">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-navy hover:text-highlight"
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  <Code size={16} className="mr-1" /> Details
                </Button>
                <div className="flex space-x-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-navy"
                  >
                    <Github size={18} />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-navy"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </CardFooter>
              
              {selectedProject === project.id && (
                <div className="p-6 bg-gray-50 border-t">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-navy">Problem:</h4>
                      <p className="text-sm text-gray-600">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Solution:</h4>
                      <p className="text-sm text-gray-600">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-navy">Outcome:</h4>
                      <p className="text-sm text-gray-600">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a 
              href="https://github.com/" 
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
