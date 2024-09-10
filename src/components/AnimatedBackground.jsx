import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children }) => {
  const flyingObjects = [
    { icon: '🚀', size: 24 },
    { icon: '💻', size: 28 },
    { icon: '📊', size: 32 },
    { icon: '🔬', size: 26 },
    { icon: '🧬', size: 30 },
    { icon: '🔋', size: 22 },
    { icon: '🌿', size: 28 },
    { icon: '🌍', size: 34 },
    { icon: '📡', size: 30 },
    { icon: '🛰️', size: 36 },
  ];

  return (
    <div className="relative overflow-hidden bg-green-900 min-h-screen">
      {flyingObjects.map((obj, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 opacity-30"
          style={{
            fontSize: `${obj.size}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: Math.random() * 1000 - 500,
            y: Math.random() * 1000 - 500,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 100 + 50,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {obj.icon}
        </motion.div>
      ))}
      {children}
    </div>
  );
};

export default AnimatedBackground;