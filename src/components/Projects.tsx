import { useState, useMemo } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AnimatedCard } from '@/components/AnimatedCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Slack AI Assistant Bot',
      subtitle: 'Intelligent workflow automation with LangChain',
      description: 'AI-powered Slack bot with email drafting capabilities using OpenAI GPT-3.5 and LangChain framework.',
      fullDescription: `An intelligent Slack bot that integrates seamlessly with team workflows to provide AI-powered assistance and automation capabilities.

Core Architecture:
• Slack SDK integration for real-time messaging
• OpenAI GPT-3.5-turbo for natural language understanding
• LangChain framework for prompt engineering and chains
• Flask web framework for webhook handling
• ngrok for secure local development and testing

Key Features:
• Automated email drafting with customizable templates
• Context-aware responses based on conversation history
• Real-time processing of @mentions and direct messages
• Secure webhook endpoint for Slack events
• Environment-based configuration for different deployments

The bot uses advanced prompt engineering techniques through LangChain to generate contextually appropriate email drafts. It analyzes incoming messages, understands the intent, and produces professional email responses that match the tone and style of the original communication.

Technical Implementation:
• Event-driven architecture using Slack's Events API
• Asynchronous message processing for optimal performance
• Secure token-based authentication with Slack workspace
• Modular function design for easy feature extension
• Error handling and logging for production reliability

Integration Capabilities:
• Seamless workspace integration without disrupting existing workflows
• Channel and direct message support
• Multi-user functionality with personalized responses
• Scalable architecture supporting multiple team deployments

The assistant significantly improves team productivity by automating routine communication tasks while maintaining professional standards and personal touch in generated content.`,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Slack SDK', 'Flask'],
      github: 'https://github.com/Rodwanbagdadi/Slack_AI_Bot',
      achievements: [
        'Integrated GPT-3.5 with Slack for seamless team communication',
        'Implemented intelligent email drafting with tone matching',
        'Created scalable webhook architecture for real-time processing',
        'Developed modular function system for easy feature extension'
      ]
    },
    {
      id: 2,
      title: 'LLM Chatbot Interface',
      subtitle: 'Modern conversational AI with Streamlit',
      description: 'Intuitive chat interface powered by OpenAI GPT with persistent conversation history and real-time streaming.',
      fullDescription: `A sophisticated chatbot interface built with Streamlit that provides a seamless conversational experience with advanced AI capabilities and user-friendly design.

Core Features:
• Real-time streaming responses from OpenAI GPT models
• Persistent chat history using local storage (Shelve)
• Intuitive user interface with distinct user and bot avatars
• Session management with conversation continuity
• Responsive design optimized for various screen sizes

Technical Architecture:
• Streamlit framework for rapid web application development
• OpenAI API integration with configurable model selection
• Environment-based configuration for secure API key management
• Local data persistence using Python's Shelve module
• Streaming response handling for enhanced user experience

User Experience Features:
• Distinctive avatars (👤 for users, 🤖 for assistant)
• Real-time typing indicators during response generation
• Sidebar controls for chat history management
• One-click chat history deletion for privacy
• Responsive chat input with placeholder guidance

Advanced Functionality:
• Support for multiple OpenAI models (GPT-3.5-turbo, GPT-4)
• Conversation context preservation across sessions
• Efficient token management for cost optimization
• Error handling and graceful degradation
• Cross-platform compatibility

Development & Deployment:
• Virtual environment setup for dependency isolation
• Simple installation process with requirements.txt
• Local development server with hot reload
• Easy configuration through environment variables
• Scalable architecture for multi-user deployments

The interface demonstrates modern web application development principles while providing a practical tool for AI-assisted conversations, making advanced language models accessible through an intuitive web interface.`,
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1170&auto=format&fit=crop',
      technologies: ['Python', 'Streamlit', 'OpenAI API', 'Shelve', 'Environment Variables'],
      github: 'https://github.com/Rodwanbagdadi/LLM_Chatbot_Interface',
      achievements: [
        'Built responsive chat interface with real-time streaming',
        'Implemented persistent conversation history storage',
        'Integrated OpenAI GPT models with configurable selection',
        'Created user-friendly design with intuitive navigation'
      ]
    },
    {
      id: 3,
      title: 'Twitter Sentiment Analysis',
      subtitle: 'Multi-approach sentiment classification system',
      description: 'Comprehensive sentiment analysis using TextBlob and machine learning with 76% accuracy on tweet classification.',
      fullDescription: `A comprehensive sentiment analysis system that employs multiple approaches to analyze and classify tweet sentiments with high accuracy and interpretability.

Dual Analysis Framework:
• TextBlob rule-based sentiment analysis for baseline classification
• Machine Learning approach using Naive Bayes for improved accuracy
• Comparative analysis between rule-based and ML methodologies
• NLTK Twitter corpus integration for training and validation

Technical Implementation:
• Pre-processed Twitter dataset from NLTK (10,000 labeled tweets)
• TF-IDF vectorization for feature extraction from text data
• Multinomial Naive Bayes classifier for sentiment prediction
• Scikit-learn pipeline for streamlined data processing
• Comprehensive evaluation with confusion matrices and classification reports

Data Processing Pipeline:
• Text preprocessing including tokenization and normalization
• Stop word removal and feature selection optimization
• Bag-of-words model creation with 5,000 most frequent features
• Train-test split with stratified sampling for balanced evaluation

Visualization & Analysis:
• Matplotlib visualizations for sentiment distribution analysis
• Polarity and subjectivity scoring for detailed sentiment insights
• Interactive sentiment analyzer for custom text input
• Comparative performance metrics between different approaches

Model Performance:
• 76% overall accuracy on test dataset
• Precision: 78% for positive sentiment detection
• Recall: 72% for positive sentiment classification
• F1-Score: 75% demonstrating balanced performance

The system provides both quick rule-based analysis for real-time applications and more accurate ML-based classification for detailed sentiment mining projects.`,
      image: '/assets/icons/twitter.svg',
      technologies: ['Python', 'NLTK', 'TextBlob', 'Scikit-learn', 'Matplotlib'],
      github: 'https://github.com/Rodwanbagdadi/Twitter_sentiment_analysis',
      achievements: [
        'Achieved 76% accuracy using Naive Bayes classification',
        'Analyzed 10,000+ labeled tweets for model training',
        'Implemented dual approach combining rule-based and ML methods',
        'Created interactive sentiment analyzer for custom text input'
      ]
    },
    {
      id: 4,
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
      id: 5,
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
      id: 6,
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
    {
      id: 7,
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
  ], []);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title text-slate-800 dark:text-slate-100">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Here are some of my most significant projects showcasing my technical skills and problem-solving abilities in data science and machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.id} className="h-full">
              <Card 
                className={`overflow-hidden card-hover border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm h-full transition-all duration-300 group cursor-pointer ${
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
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                      Click to expand
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{project.subtitle}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="outline" 
                        className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-600"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.github, '_blank');
                    }}
                    className="flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-600"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(project);
                    }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={isModalOpen} onOpenChange={closeModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-slate-800 dark:text-slate-100 pr-8">
                {selectedProject?.title}
              </DialogTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogHeader>
            
            {selectedProject && (
              <div className="space-y-6">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent"></div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">
                      Project Overview
                    </h3>
                    <div className="prose prose-slate dark:prose-invert max-w-none">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {selectedProject.fullDescription}
                      </p>
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
                      onClick={() => window.open(selectedProject.github, '_blank')}
                      className="flex items-center gap-2 bg-slate-800 hover:bg-slate-900 text-white"
                    >
                      <Github className="h-4 w-4" />
                      View Source Code
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;