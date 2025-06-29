import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, TrendingUp, Star, Wrench, Code2 } from 'lucide-react';
import ResilientIcon from '@/components/ui/resilient-icon';
import { AnimatedCard } from './AnimatedCard';
import { useIntersectionObserver } from '@/hooks/useInteractions';

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
    { name: 'Python', category: 'languages', level: 'Advanced', description: 'Primary programming language' },
    { name: 'SQL', category: 'languages', level: 'Intermediate', description: 'Database querying and management' },
    { name: 'pandas', category: 'ai-ml', level: 'Advanced', description: 'Data manipulation and analysis' },
    { name: 'Scikit-learn', category: 'ai-ml', level: 'Advanced', description: 'Machine learning algorithms' },
    { name: 'NumPy', category: 'ai-ml', level: 'Intermediate', description: 'Numerical computing' },
    { name: 'PyTorch', category: 'ai-ml', level: 'Intermediate', description: 'Deep learning framework' },
    { name: 'TensorFlow', category: 'ai-ml', level: 'Intermediate', description: 'Machine learning platform' },
    { name: 'Matplotlib', category: 'ai-ml', level: 'Advanced', description: 'Data visualization' },
    { name: 'seaborn', category: 'ai-ml', level: 'Advanced', description: 'Statistical data visualization' },
    { name: 'VS Code', category: 'tools', level: 'Advanced', description: 'Code editor and IDE' },
    { name: 'Jupyter Notebook', category: 'tools', level: 'Advanced', description: 'Interactive development' },
    { name: 'Flask', category: 'tools', level: 'Intermediate', description: 'Web framework' },
    { name: 'Git', category: 'tools', level: 'Intermediate', description: 'Version control' },
    { name: 'Power BI', category: 'tools', level: 'Intermediate', description: 'Business intelligence' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Advanced': return 'text-green-500 bg-green-500/10 border-green-500/20';
      case 'Intermediate': return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
      default: return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-secondary/20 dark:bg-secondary/5">
      <div className="section-container">
        <AnimatedCard>
          <div className="text-center mb-16">
            <h2 className="section-title">Skills & Tools</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
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
                      ? "bg-primary text-primary-foreground shadow-lg scale-105" 
                      : "border-border hover:border-primary/50 hover:bg-accent"
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
              className={`group interactive-scale border-border hover:border-primary/50 bg-card hover:shadow-lg transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-xl transition-all duration-300 group-hover:scale-110">
                    <div className="w-8 h-8 flex items-center justify-center text-primary">
                      {getSkillIcon(skill.name)}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
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
