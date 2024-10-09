import React from 'react';
import { motion } from 'framer-motion';

const descriptionVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.2
    }
  },
  exit: { 
    opacity: 0, 
    x: 20, 
    transition: { 
      duration: 0.3 
    } 
  }
};

const HeroDescription = ({ description }) => (
  <motion.p 
    key={description}
    className="futuristic-text text-xl mb-8 max-w-2xl mx-auto"
    variants={descriptionVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    {description}
  </motion.p>
);

export default HeroDescription;