// This file provides fallback icons when SVG imports fail
import { Cpu, Beaker, GitBranch, Code, Database, BarChart2, Braces, LineChart, PieChart, BarChart, Terminal, BookOpen } from 'lucide-react';

// Map skill names to Lucide icons for fallback
export const getFallbackIcon = (skillName: string) => {
  switch(skillName.toLowerCase()) {
    case 'python':
      return Code;
    case 'pandas':
      return Database;
    case 'scikit-learn':
      return BarChart2;
    case 'numpy':
      return Braces;
    case 'pytorch':
      return LineChart;
    case 'tensorflow':
      return PieChart;
    case 'matplotlib':
      return BarChart;
    case 'seaborn':
      return BarChart2;
    case 'sql':
      return Database;
    case 'flask':
      return Beaker;
    case 'vs code':
      return Code;
    case 'jupyter notebook':
      return BookOpen;
    case 'git':
      return GitBranch;
    default:
      return Cpu;
  }
};
