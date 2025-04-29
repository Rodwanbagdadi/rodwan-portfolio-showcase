
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
    { name: 'Python', category: 'languages', level: 80 },
    { name: 'MATLAB', category: 'languages', level: 75 },
    { name: 'HTML/CSS', category: 'languages', level: 40 },
    
    { name: 'pandas', category: 'ai-ml', level: 85 },
    { name: 'PyTorch', category: 'ai-ml', level: 85 },
    { name: 'TensorFlow', category: 'ai-ml', level: 70 },
    { name: 'Scikit-learn', category: 'ai-ml', level: 85 },
    { name: 'NumPy', category: 'ai-ml', level: 85 },
    { name: 'Matplotlib', category: 'ai-ml', level: 85 },
    { name: 'seaborn', category: 'ai-ml', level: 85 },
    
    { name: 'Git', category: 'tools', level: 85 },
    { name: 'VS Code', category: 'tools', level: 80 },
    { name: 'PyCharm', category: 'tools', level: 75 },
    { name: 'Jupyter', category: 'tools', level: 90 },
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Skills & Tools</h2>
        <p className="text-neutral-300 mb-8 max-w-2xl">
          My technical toolkit, honed through years of professional experience and continuous learning.
        </p>
        
        <div className="flex flex-wrap gap-2 mb-12 justify-center md:justify-start">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={activeCategory === category.id ? 
                "rounded-full bg-neutral-700 text-neutral-200" : 
                "rounded-full border-neutral-600 text-neutral-300 hover:bg-neutral-800"
              }
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <Card key={skill.name} className="card-hover border-neutral-700 bg-card">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm text-neutral-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-neutral-700 rounded-full h-2.5">
                  <div 
                    className="bg-neutral-500 h-2.5 rounded-full transition-all duration-500" 
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
