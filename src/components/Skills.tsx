
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';
import ResilientIcon from '@/components/ui/resilient-icon';

const Skills = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'tools', name: 'Development Tools' },
  ];

  const getSkillIcon = (skillName: string) => {
    switch(skillName.toLowerCase()) {
      case 'python':
        return <ResilientIcon src="" fallbackName="python" alt="Python" />;
      case 'pandas':
        return <ResilientIcon src="" fallbackName="pandas" alt="Pandas" />;
      case 'scikit-learn':
        return <ResilientIcon src="" fallbackName="scikit-learn" alt="Scikit-learn" />;
      case 'numpy':
        return <ResilientIcon src="" fallbackName="numpy" alt="NumPy" />;
      case 'pytorch':
        return <ResilientIcon src="" fallbackName="pytorch" alt="PyTorch" />;
      case 'tensorflow':
        return <ResilientIcon src="" fallbackName="tensorflow" alt="TensorFlow" />;
      case 'matplotlib':
        return <ResilientIcon src="" fallbackName="matplotlib" alt="Matplotlib" />;
      case 'seaborn':
        return <ResilientIcon src="" fallbackName="seaborn" alt="Seaborn" />;
      case 'sql':
        return <ResilientIcon src="" fallbackName="sql" alt="SQL" />;
      case 'flask':
        return <ResilientIcon src="" fallbackName="flask" alt="Flask" />;
      case 'vs code':
        return <ResilientIcon src="" fallbackName="vscode" alt="VS Code" />;
      case 'jupyter notebook':
        return <ResilientIcon src="" fallbackName="jupyter" alt="Jupyter Notebook" />;
      case 'git':
        return <ResilientIcon src="" fallbackName="git" alt="Git" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  const skills = [
    { name: 'Python', category: 'languages' },
    { name: 'SQL', category: 'languages' },
    { name: 'pandas', category: 'ai-ml' },
    { name: 'Scikit-learn', category: 'ai-ml' },
    { name: 'NumPy', category: 'ai-ml' },
    { name: 'PyTorch', category: 'ai-ml' },
    { name: 'TensorFlow', category: 'ai-ml' },
    { name: 'Matplotlib', category: 'ai-ml' },
    { name: 'seaborn', category: 'ai-ml' },
    { name: 'VS Code', category: 'tools' },
    { name: 'Jupyter Notebook', category: 'tools' },
    { name: 'Flask', category: 'tools' },
    { name: 'Git', category: 'tools' }
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
            <Card key={skill.name} className="card-hover border-neutral-700 bg-card transition-all duration-300 hover:shadow-md hover:bg-neutral-800/50">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 rounded-full bg-neutral-800 text-neutral-300 w-12 h-12 flex items-center justify-center">
                  {getSkillIcon(skill.name)}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
