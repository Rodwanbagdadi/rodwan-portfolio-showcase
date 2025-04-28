
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'AI Research Engineer',
      company: 'Outlier AI',
      period: 'Jan 2023 - Present',
      location: 'San Francisco, CA',
      description: 'Leading research and development of AI models for anomaly detection in complex datasets.',
      achievements: [
        'Improved anomaly detection accuracy by 20% using ensemble learning techniques',
        'Developed and deployed a machine learning pipeline that processes over 10TB of data daily',
        'Published 2 research papers on novel approaches to time series anomaly detection',
        'Led a team of 3 machine learning engineers in developing a new feature extraction framework'
      ],
      technologies: ['Python', 'PyTorch', 'Pandas', 'Scikit-learn', 'Docker']
    },
    {
      id: 2,
      role: 'Software Engineer',
      company: 'Bosch Engineering GmbH',
      period: 'Jun 2020 - Dec 2022',
      location: 'Stuttgart, Germany',
      description: 'Designed and implemented software solutions for autonomous vehicle systems.',
      achievements: [
        'Developed a sensor fusion algorithm that improved object detection range by 35%',
        'Created a real-time data processing system for vehicle telemetry analysis',
        'Optimized existing codebase reducing memory usage by 40% and improving execution speed',
        'Collaborated with cross-functional teams to integrate machine learning models into production systems'
      ],
      technologies: ['Python', 'C++', 'TensorFlow', 'Kalman Filters', 'ROS']
    },
    {
      id: 3,
      role: 'Machine Learning Intern',
      company: 'Data Solutions Inc.',
      period: 'May 2019 - Aug 2019',
      location: 'Remote',
      description: 'Assisted in developing machine learning models for predictive maintenance applications.',
      achievements: [
        'Built a proof-of-concept predictive maintenance model achieving 88% accuracy',
        'Created data visualization dashboards to communicate model insights to stakeholders',
        'Processed and cleaned large industrial sensor datasets for model training'
      ],
      technologies: ['Python', 'MATLAB', 'Pandas', 'NumPy', 'Matplotlib']
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
