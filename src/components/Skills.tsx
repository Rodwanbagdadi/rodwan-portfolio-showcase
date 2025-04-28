
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Skills = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'tools', name: 'Development Tools' },
  ];

  const skills = [
    { name: 'Python', category: 'languages', level: 95 },
    { name: 'MATLAB', category: 'languages', level: 85 },
    { name: 'HTML/CSS', category: 'languages', level: 80 },
    { name: 'C++', category: 'languages', level: 75 },
    { name: 'JavaScript', category: 'languages', level: 70 },
    
    { name: 'PyTorch', category: 'ai-ml', level: 90 },
    { name: 'TensorFlow', category: 'ai-ml', level: 85 },
    { name: 'Scikit-learn', category: 'ai-ml', level: 90 },
    { name: 'Pandas', category: 'ai-ml', level: 95 },
    { name: 'NumPy', category: 'ai-ml', level: 95 },
    { name: 'Matplotlib', category: 'ai-ml', level: 90 },
    { name: 'OpenCV', category: 'ai-ml', level: 85 },
    { name: 'NLP', category: 'ai-ml', level: 80 },
    
    { name: 'Git', category: 'tools', level: 90 },
    { name: 'VS Code', category: 'tools', level: 95 },
    { name: 'PyCharm', category: 'tools', level: 90 },
    { name: 'Jupyter', category: 'tools', level: 95 },
    { name: 'Docker', category: 'tools', level: 80 },
    { name: 'Linux', category: 'tools', level: 85 },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="bg-gray-50 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills & Tools</h2>
        <p className="text-gray-600 mb-8 max-w-2xl">
          My technical toolkit, honed through years of professional experience and continuous learning.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className="rounded-full"
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className="card-hover">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-highlight h-2.5 rounded-full transition-all duration-500" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
