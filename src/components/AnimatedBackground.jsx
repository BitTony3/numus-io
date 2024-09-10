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
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`hexagon-${i}`}
          className="absolute bg-green-600 opacity-20"
          style={{
            width: 40,
            height: 40,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {children}
    </div>
  );
};

export default AnimatedBackground;