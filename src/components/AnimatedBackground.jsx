import React, { useRef } from 'react';
import { useThreeAnimation } from '../hooks/useThreeAnimation';

const AnimatedBackground = ({ children }) => {
  const containerRef = useRef(null);

  useThreeAnimation(containerRef);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;