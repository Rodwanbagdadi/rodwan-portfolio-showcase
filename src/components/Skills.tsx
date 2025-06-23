import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu } from 'lucide-react';

// Import SVG icons
import pythonIcon from '../assets/icons/python.svg';
import pandasIcon from '../assets/icons/pandas.svg';
import scikitLearnIcon from '../assets/icons/scikit-learn.svg';
import numpyIcon from '../assets/icons/numpy.svg';
import pytorchIcon from '../assets/icons/pytorch.svg';
import tensorflowIcon from '../assets/icons/tensorflow.svg';
import matplotlibIcon from '../assets/icons/matplotlib.svg';
import seabornIcon from '../assets/icons/seaborn.svg';
import sqlIcon from '../assets/icons/sql.svg';
import flaskIcon from '../assets/icons/flask.svg';
import vscodeIcon from '../assets/icons/vscode.svg';
import jupyterIcon from '../assets/icons/jupyter.svg';
import gitIcon from '../assets/icons/git.svg';

const Skills = () => {
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'languages', name: 'Languages' },
    { id: 'ai-ml', name: 'AI & ML' },
    { id: 'tools', name: 'Development Tools' },
  ];  const getSkillIcon = (skillName: string) => {
    switch(skillName.toLowerCase()) {
      case 'python':
        return <img src={pythonIcon} alt="Python" className="w-6 h-6" />;
      case 'pandas':
        return <img src={pandasIcon} alt="Pandas" className="w-6 h-6" />;
      case 'scikit-learn':
        return <img src={scikitLearnIcon} alt="Scikit-learn" className="w-6 h-6" />;
      case 'numpy':
        return <img src={numpyIcon} alt="NumPy" className="w-6 h-6" />;
      case 'pytorch':
        return <img src={pytorchIcon} alt="PyTorch" className="w-6 h-6" />;
      case 'tensorflow':
        return <img src={tensorflowIcon} alt="TensorFlow" className="w-6 h-6" />;
      case 'matplotlib':
        return <img src={matplotlibIcon} alt="Matplotlib" className="w-6 h-6" />;
      case 'seaborn':
        return <img src={seabornIcon} alt="Seaborn" className="w-6 h-6" />;
      case 'sql':
        return <img src={sqlIcon} alt="SQL" className="w-6 h-6" />;
      case 'flask':
        return <img src={flaskIcon} alt="Flask" className="w-6 h-6" />;
      case 'vs code':
        return <img src={vscodeIcon} alt="VS Code" className="w-6 h-6" />;
      case 'jupyter notebook':
        return <img src={jupyterIcon} alt="Jupyter Notebook" className="w-6 h-6" />;
      case 'git':
        return <img src={gitIcon} alt="Git" className="w-6 h-6" />;
      default:
        return <Cpu size={22} />;
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
        </div>        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
