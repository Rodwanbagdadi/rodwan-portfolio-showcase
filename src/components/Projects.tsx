import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const Projects = ({ projects }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const openModal = (project) => {
    // Simplified modal logic
    console.log('Open modal for project:', project);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="card-hover border-slate-200/50 dark:border-slate-700/50 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm transition-all duration-300 group cursor-pointer"
          onMouseEnter={() => setHoveredProject(project.id)}
          onMouseLeave={() => setHoveredProject(null)}
          onClick={() => openModal(project)}
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              {project.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {project.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;