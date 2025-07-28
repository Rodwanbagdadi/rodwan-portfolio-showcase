import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {/* Reduced large flowing orbs */}
      <div
        className="absolute top-1/4 left-0 w-64 h-64 bg-gradient-to-br from-blue-400/6 to-indigo-400/10 rounded-full blur-3xl animate-flow-right-slow opacity-50"
        style={{ animationDelay: '0s' }}
      ></div>
      <div
        className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-br from-purple-400/8 to-pink-400/12 rounded-full blur-3xl animate-flow-right opacity-40"
        style={{ animationDelay: '12s' }}
      ></div>

      {/* Reduced particle streams */}
      {Array.from({ length: 10 }).map((_, i) => {
        const streamIndex = i % 2; // Create 2 streams instead of 3
        const baseDelay = streamIndex * 8;
        const particleDelay = (i % 5) * 3;

        return (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 2 === 0
                ? 'w-2 h-2 bg-blue-400/12 animate-flow-right'
                : 'w-1.5 h-1.5 bg-indigo-400/15 animate-flow-right-wave'
            }`}
            style={{
              left: '-30px',
              top: `${20 + streamIndex * 20 + Math.random() * 10}%`,
              animationDelay: `${baseDelay + particleDelay}s`,
              animationDuration: '25s',
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundElements;
