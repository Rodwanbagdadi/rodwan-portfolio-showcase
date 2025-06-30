import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Optimized large flowing orbs - reduced number */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-to-br from-blue-400/6 to-indigo-400/10 rounded-full blur-3xl animate-flow-right-slow opacity-50" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-gradient-to-br from-purple-400/8 to-pink-400/12 rounded-full blur-3xl animate-flow-right opacity-40" style={{ animationDelay: '12s' }}></div>
      <div className="absolute top-1/2 left-0 w-56 h-56 bg-gradient-to-br from-teal-400/6 to-cyan-400/10 rounded-full blur-3xl animate-flow-right-wave opacity-35" style={{ animationDelay: '24s' }}></div>
      
      {/* Reduced geometric shapes for better performance */}
      <div className="absolute top-20 left-0 moving-shape moving-shape-1" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-32 left-0 moving-shape moving-shape-2" style={{ animationDelay: '8s' }}></div>
      <div className="absolute top-2/3 left-0 moving-shape moving-shape-3" style={{ animationDelay: '16s' }}></div>
      
      {/* Optimized particle streams - reduced from 40 to 15 */}
      {Array.from({ length: 15 }).map((_, i) => {
        const streamIndex = i % 3; // Create 3 streams instead of 5
        const baseDelay = streamIndex * 8;
        const particleDelay = (i % 5) * 3;
        
        return (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-2 h-2 bg-blue-400/12 animate-flow-right' : 
              i % 3 === 1 ? 'w-1.5 h-1.5 bg-indigo-400/15 animate-flow-right-wave' : 
              'w-2.5 h-2.5 bg-purple-400/18 animate-flow-right-float'
            }`}
            style={{
              left: '-30px',
              top: `${20 + streamIndex * 20 + (Math.random() * 10)}%`,
              animationDelay: `${baseDelay + particleDelay}s`,
              animationDuration: '25s'
            }}
          />
        );
      })}
      
      {/* Simplified SVG elements */}
      <svg className="absolute inset-0 w-full h-full opacity-8" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Simple flowing lines */}
        <line
          x1="-50"
          y1="30%"
          x2="100%"
          y2="30%"
          stroke="url(#flowGradient)"
          strokeWidth="1"
          opacity="0.2"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 100 0; 0 0"
            dur="20s"
            repeatCount="indefinite"
          />
        </line>
        
        <line
          x1="-50"
          y1="70%"
          x2="100%"
          y2="70%"
          stroke="url(#flowGradient)"
          strokeWidth="1"
          opacity="0.15"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 120 0; 0 0"
            dur="25s"
            repeatCount="indefinite"
          />
        </line>
        
        {/* Fewer moving dots */}
        {Array.from({ length: 4 }).map((_, i) => (
          <circle
            key={i}
            cx="-10"
            cy={`${25 + i * 15}%`}
            r="1.5"
            fill="#3b82f6"
            opacity="0.25"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0; 1000 0; 0 0"
              dur={`${18 + i * 3}s`}
              repeatCount="indefinite"
              begin={`${i * 4}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};

export default BackgroundElements;
