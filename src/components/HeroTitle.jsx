import React from 'react';
import { motion } from 'framer-motion';

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  exit: { 
    opacity: 0, 
    y: -20, 
    transition: { 
      duration: 0.3 
    } 
  }
};

const HeroTitle = ({ title }) => (
  <motion.h1
    key={title}
    className="futuristic-title text-5xl md:text-7xl"
    variants={titleVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {title}
  </motion.h1>
);

export default HeroTitle;