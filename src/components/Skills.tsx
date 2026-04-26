import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, TrendingUp, Star, Wrench, Code2 } from 'lucide-react';
import ResilientIcon from '@/components/ui/resilient-icon';
import { AnimatedCard } from './AnimatedCard';
import { useIntersectionObserver } from '@/hooks/useInteractions';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [elementRef, isVisible] = useIntersectionObserver();
  
  const categories = [
    { id: 'all', name: 'All Skills', icon: Star },
    { id: 'languages', name: 'Languages', icon: Code2 },
    { id: 'ai-ml', name: 'AI & ML', icon: TrendingUp },
    { id: 'tools', name: 'Tools', icon: Wrench },
  ];

  const getSkillIcon = (skillName: string) => {
    switch(skillName.toLowerCase()) {
      case 'python':
        return <ResilientIcon fallbackName="python" alt="Python" />;
      case 'pandas':
        return <ResilientIcon fallbackName="pandas" alt="Pandas" />;
      case 'scikit-learn':
        return <ResilientIcon fallbackName="scikit-learn" alt="Scikit-learn" />;
      case 'numpy':
        return <ResilientIcon fallbackName="numpy" alt="NumPy" />;
      case 'pytorch':
        return <ResilientIcon fallbackName="pytorch" alt="PyTorch" />;
      case 'tensorflow':
        return <ResilientIcon fallbackName="tensorflow" alt="TensorFlow" />;
      case 'matplotlib':
        return <ResilientIcon fallbackName="matplotlib" alt="Matplotlib" />;
      case 'seaborn':
        return <ResilientIcon fallbackName="seaborn" alt="Seaborn" />;
      case 'sql':
        return <ResilientIcon fallbackName="sql" alt="SQL" />;
      case 'flask':
        return <ResilientIcon fallbackName="flask" alt="Flask" />;
      case 'vs code':
        return <ResilientIcon fallbackName="vscode" alt="VS Code" />;
      case 'jupyter notebook':
        return <ResilientIcon fallbackName="jupyter" alt="Jupyter Notebook" />;
      case 'git':
        return <ResilientIcon fallbackName="git" alt="Git" />;
      case 'power bi':
        return <ResilientIcon fallbackName="power-bi" alt="Power BI" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  const skills = [
    { name: 'Python', category: 'languages', level: 'Intermediate', description: 'Primary programming language' },
    { name: 'SQL', category: 'languages', level: 'Intermediate', description: 'Database querying and management' },
    { name: 'pandas', category: 'ai-ml', level: 'Intermediate', description: 'Data manipulation and analysis' },
    { name: 'Scikit-learn', category: 'ai-ml', level: 'Intermediate', description: 'Machine learning algorithms' },
    { name: 'NumPy', category: 'ai-ml', level: 'Beginner', description: 'Numerical computing' },
    { name: 'PyTorch', category: 'ai-ml', level: 'Beginner', description: 'Deep learning framework' },
    { name: 'TensorFlow', category: 'ai-ml', level: 'Beginner', description: 'Machine learning platform' },
    { name: 'Matplotlib', category: 'ai-ml', level: 'Intermediate', description: 'Data visualization' },
    { name: 'seaborn', category: 'ai-ml', level: 'Intermediate', description: 'Statistical data visualization' },
    { name: 'VS Code', category: 'tools', level: 'Intermediate', description: 'Code editor and IDE' },
    { name: 'Jupyter Notebook', category: 'tools', level: 'Intermediate', description: 'Interactive development' },
    { name: 'Flask', category: 'tools', level: 'Beginner', description: 'Web framework' },
    { name: 'Git', category: 'tools', level: 'Intermediate', description: 'Version control' },
    { name: 'Power BI', category: 'tools', level: 'Intermediate', description: 'Business intelligence' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Intermediate': return 'text-black dark:text-white bg-white/10 dark:bg-black/20 border-black/20 dark:border-white/30';
      case 'Beginner': return 'text-black dark:text-white bg-white/10 dark:bg-black/20 border-black/20 dark:border-white/30';
      default: return 'text-black bg-white/10 border-black/20 dark:text-white dark:bg-black/10 dark:border-white/20';
    }
  };

  return (
    <section id="skills" className="py-12 md:py-16 bg-gradient-to-br from-white via-white/20 to-white/30 dark:from-black dark:via-black dark:to-black/30">
      <div className="section-container">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="section-title text-black dark:text-white">Skills & Tools</h2>
            <p className="text-black dark:text-white mt-4 max-w-2xl mx-auto text-lg">
              My technical toolkit, honed through years of professional experience and continuous learning.
            </p>
          </div>
        </AnimatedCard>
        
        <AnimatedCard>
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? 'default' : 'outline'}
                  className={`interactive-scale rounded-full transition-all duration-300 ${
                    activeCategory === category.id 
                      ? "bg-white text-black border border-black shadow-lg scale-105 dark:bg-white dark:text-black dark:border-white" 
                      : "border-black/60 hover:border-black hover:bg-white dark:border-white/50 dark:hover:bg-black/20 bg-white/80 dark:bg-black/40 backdrop-blur-sm text-black dark:text-white"
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <Icon className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              );
            })}
          </div>
        </AnimatedCard>

        <div 
          ref={elementRef as any}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className={`border-black/50 dark:border-white/50 bg-white/70 dark:bg-black/70 backdrop-blur-sm card-hover transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              } group hover:border-black dark:hover:border-white`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white dark:bg-black/30 p-3 rounded-xl transition-all duration-300 group-hover:bg-white dark:group-hover:bg-black/50 group-hover:scale-110">
                    <div className="w-8 h-8 flex items-center justify-center text-black dark:text-white transition-transform duration-300 group-hover:scale-110">
                      {getSkillIcon(skill.name)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-black dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full border transition-all duration-300 ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-black dark:group-hover:text-white">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
