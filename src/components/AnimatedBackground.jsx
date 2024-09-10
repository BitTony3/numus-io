import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-green-900 min-h-screen">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-green-500 opacity-30"
          style={{
            width: Math.random() * 100 + 50,
            height: 2,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute rounded-full bg-green-400"
          style={{
            width: Math.random() * 20 + 5,
            height: Math.random() * 20 + 5,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default AnimatedBackground;