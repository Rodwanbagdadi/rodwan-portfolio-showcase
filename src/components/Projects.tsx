import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AnimatedCard } from '@/components/AnimatedCard';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Sales Insights Data Analysis',
      subtitle: 'Advanced data analysis using Power BI and MySQL',
      description: 'Transform raw sales data into meaningful business insights with interactive dashboards.',
      fullDescription: `This comprehensive data analysis project transforms raw sales data into actionable business insights through interactive Power BI dashboards and MySQL database integration.

Key Features:
• Interactive Power BI dashboards with real-time data visualization
• MySQL database optimization for efficient data retrieval
• Advanced DAX calculations for complex business metrics
• Custom Power Query transformations for data cleaning
• Geographic sales analysis with regional performance tracking
• Time-series analysis for trend identification and forecasting

The project demonstrates end-to-end data pipeline development, from raw data ingestion to executive-level reporting. The dashboards provide stakeholders with immediate access to key performance indicators, enabling data-driven decision making across sales operations.

Technical implementation includes optimized SQL queries, calculated columns, measures, and dynamic filtering capabilities that allow users to drill down from high-level trends to granular transaction details.`,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Power BI', 'MySQL', 'DAX', 'Power Query', 'SQL'],
      github: 'https://github.com/Rodwanbagdadi/Sales-Insights-Data-Analysis',
      achievements: [
        'Created 15+ interactive dashboard pages with drill-through capabilities',
        'Reduced report generation time from hours to minutes',
        'Identified key sales trends leading to 12% revenue increase strategy',
        'Implemented automated data refresh pipeline'
      ]
    },
    {
      id: 2,
      title: 'Fake News Detection',
      subtitle: 'AI-powered misinformation detection system',
      description: 'XGBoost and TF-IDF vectorization system achieving 99.79% accuracy in detecting fake news.',
      fullDescription: `An advanced AI-powered system designed to combat misinformation through sophisticated machine learning algorithms and natural language processing techniques.

Core Technologies:
• XGBoost gradient boosting for high-performance classification
• TF-IDF vectorization for text feature extraction
• distilBERT transformer model for deep semantic understanding
• Flask web framework for user-friendly interface
• HTML/CSS frontend with responsive design

The system combines traditional machine learning approaches with modern transformer architecture to achieve exceptional accuracy in distinguishing between authentic and fabricated news articles. The TF-IDF vectorization captures word importance and frequency patterns, while distilBERT provides contextual understanding of language semantics.

Model Performance:
• 99.79% accuracy on test dataset
• Precision: 99.82% for fake news detection
• Recall: 99.76% for authentic news classification
• F1-Score: 99.79% overall performance

The Flask application provides an intuitive interface where users can input news articles and receive real-time predictions with confidence scores and explanation of key indicators that influenced the classification decision.`,
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Flask', 'HTML', 'Gradient Boosting', 'XGBoost', 'distilBERT'],
      github: 'https://github.com/Rodwanbagdadi/Flask_Grad_Project',
      achievements: [
        'Achieved 99.79% accuracy in fake news detection',
        'Processed and analyzed 20,000+ news articles',
        'Implemented real-time prediction API',
        'Created interpretable AI explanations for predictions'
      ]
    },
    {
      id: 3,
      title: 'Diabetes Classifier',
      subtitle: 'Machine learning for healthcare prediction',
      description: 'SVM-based diabetes prediction model using 70,692 cases from comprehensive survey data.',
      fullDescription: `A comprehensive machine learning solution for diabetes risk assessment using extensive healthcare survey data and multiple classification algorithms.

Dataset & Methodology:
• 70,692 patient records from CDC health surveys
• 21 health-related features including BMI, age, lifestyle factors
• Comprehensive data preprocessing and feature engineering
• Multiple algorithm comparison and ensemble methods

Machine Learning Pipeline:
• Support Vector Machine (SVM) as primary classifier
• K-Nearest Neighbors (KNN) for local pattern recognition
• Random Forests for feature importance analysis
• Decision Trees for interpretable rule extraction
• Cross-validation and hyperparameter optimization

The project addresses the critical healthcare challenge of early diabetes detection by leveraging lifestyle and demographic factors. The SVM model was selected for its superior performance on this dataset, providing healthcare professionals with a reliable tool for risk assessment.

Clinical Impact:
• Early detection capabilities for at-risk populations
• Non-invasive screening using routine health data
• Interpretable predictions for clinical decision support
• Scalable solution for population health management

The model identifies key risk factors and provides probability scores, enabling healthcare providers to prioritize interventions and recommend lifestyle modifications for high-risk individuals.`,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1170&auto=format&fit=crop',
      technologies: ['SVM', 'KNN', 'Random Forests', 'Decision Trees'],
      github: 'https://github.com/Rodwanbagdadi/Diabetes-Classifier',
      achievements: [
        'Analyzed 70,692+ patient health records',
        'Achieved 85%+ accuracy in diabetes prediction',
        'Identified top 10 risk factors through feature analysis',
        'Developed clinical decision support framework'
      ]
    },
    {
      id: 4,
      title: 'Survival Prediction Model',
      subtitle: 'Ensemble learning for medical outcomes',
      description: 'Random Forests and ensemble learning to forecast survival outcomes with top 20% leaderboard placement.',
      fullDescription: `An advanced ensemble learning system designed to predict medical survival outcomes using sophisticated machine learning techniques and comprehensive feature engineering.

Technical Approach:
• Ensemble Learning combining multiple base models
• Random Forests as primary prediction algorithm
• Advanced feature selection and engineering techniques
• Data preprocessing pipeline for medical datasets
• Cross-validation for robust model evaluation

Model Architecture:
• Multiple Random Forest models with different hyperparameters
• Gradient Boosting for capturing non-linear patterns
• Logistic Regression for baseline comparison
• Voting classifier for final predictions
• Feature importance analysis for interpretability

The project demonstrates expertise in handling complex medical data with missing values, categorical variables, and survival time analysis. The ensemble approach combines the strengths of multiple algorithms to achieve superior predictive performance.

Performance Highlights:
• Top 20% placement in competitive leaderboard
• Robust performance across different patient demographics
• Identified critical survival factors through feature analysis
• Developed interpretable prediction explanations

Clinical Applications:
• Treatment planning and resource allocation
• Patient risk stratification and monitoring
• Clinical trial patient selection
• Healthcare outcome optimization

The model provides healthcare professionals with reliable survival probability estimates, supporting evidence-based treatment decisions and improving patient care outcomes.`,
      image: 'https://images.unsplash.com/photo-1553484771-11998c592b9c?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'Ensemble Learning', 'Random Forests', 'Feature Selection'],
      github: 'https://github.com/Rodwanbagdadi/Survival-Prediction',
      achievements: [
        'Achieved top 20% leaderboard placement',
        'Implemented advanced ensemble learning techniques',
        'Optimized feature selection for medical data',
        'Developed explainable AI for clinical decisions'
      ]
    },
  ];

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              delay={index * 50}
              className="h-full"
            >
              <Card 
                className={`overflow-hidden card-hover border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full transition-all duration-500 group cursor-pointer ${
                  hoveredProject === project.id ? 'shadow-2xl -translate-y-2 border-blue-300 dark:border-blue-600' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openModal(project)}
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
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="interactive-button flex-1 border-blue-300 hover:bg-blue-50 hover:border-blue-400 dark:border-blue-600 dark:hover:bg-blue-950/30" 
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank', 'noopener,noreferrer');
                      }}
                    >
                      <Github size={16} className="mr-2" />
                      Code
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

      {/* Project Details Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                  {selectedProject.title}
                </DialogTitle>
                <p className="text-blue-600/80 dark:text-blue-400/80 font-medium">
                  {selectedProject.subtitle}
                </p>
              </DialogHeader>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                    Project Overview
                  </h3>
                  <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line leading-relaxed">
                    {selectedProject.fullDescription}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.achievements?.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-600 dark:text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    onClick={() => window.open(selectedProject.github, '_blank', 'noopener,noreferrer')}
                  >
                    <Github size={18} className="mr-2" />
                    View Source Code
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={closeModal}
                    className="border-slate-300 dark:border-slate-600"
                  >
                    Close
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;