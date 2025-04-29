
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'AI Specialist (freelancer)',
      company: 'Outlier AI',
      period: 'Dec 2024– Present',
      location: 'Remote',
      description: 'Optimizing AI models using RLHF to improve accuracy and factual consistency.',
      achievements: [
        ' Enhanced AI model accuracy by implementing Reinforcement Learning from Human Feedback (RLHF) techniques, reducing incorrect predictions by 20% across a dataset of 100+ entries',
        ' Improved the accuracy and reliability of model outputs by identifying factual inconsistencies, fixing logical errors, and rewriting responses to better follow implicit and explicit instructions from the prompt'
      ],
      technologies: ['Python', 'RLHF', 'Prompt Engineering']
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
        ' Built a predictive model using Ensemble Learning and Random Forests in Python to forecast Titanic survival outcomes, experimenting with feature selection and data preprocessing to achieve top 20% leaderboard placement and highlight the tradeoff between model complexity and generalization'
      ],
      technologies: ['Python', 'Kalman Filters', 'Pandas', 'Scikit-learn', 'TensorFlow']
    }
  ];

  return (
    <section id="experience" className="bg-white py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <p className="text-gray-600 mb-12 max-w-2xl">
          My professional journey in AI, machine learning, and software development.
        </p>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <Card key={exp.id} className="border-l-4 border-l-navy card-hover">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="p-6 md:border-r border-gray-200">
                    <h3 className="text-xl font-semibold text-navy">{exp.role}</h3>
                    <p className="text-lg text-gray-700 font-medium">{exp.company}</p>
                    
                    <div className="flex items-center gap-1 text-gray-500 mt-2">
                      <Calendar size={14} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-1 text-gray-500 mt-1">
                      <MapPin size={14} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                  
                  <div className="p-6 md:col-span-3">
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <h4 className="font-medium text-navy mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-outside ml-5 space-y-1 mb-4">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                    
                    <div className="mt-4">
                      <h4 className="font-medium text-navy mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, index) => (
                          <Badge key={index} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
