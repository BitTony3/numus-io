import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  return (
    <AnimatedBackground>
      <section className="relative z-10 bg-gradient-to-b from-green-900 via-green-700 to-green-500 text-white py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          >
            <motion.img
              src="/logo.svg"
              alt="Numus Logo"
              className="w-48 h-48 mx-auto mb-8"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
          <motion.h2
            className="text-7xl font-bold mb-6 text-green-100 futuristic-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Innovate with Data-Driven Tech
          </motion.h2>
          <motion.p
            className="text-2xl mb-10 max-w-2xl mx-auto text-green-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Harness the power of cutting-edge technology and data analytics to drive innovation and accelerate your business growth.
          </motion.p>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link to="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="futuristic-button">
                  Explore Our Tech Stack
                </Button>
              </motion.div>
            </Link>
            <Link to="/portfolio">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="futuristic-button">
                  View Our Innovations
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </AnimatedBackground>
  );
};

export default Hero;