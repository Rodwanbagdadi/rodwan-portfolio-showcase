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
      companyColor: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="container mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {exp.role}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {exp.company}
            </p>
            <ul className="mt-4 space-y-2">
              {exp.achievements.map((achievement, achIndex) => (
                <li key={achIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-slate-600 dark:text-slate-300">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
