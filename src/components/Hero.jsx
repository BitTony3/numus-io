import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.img
          src="/logo.svg"
          alt="Numus Logo"
          className="w-32 h-32 mx-auto mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Redefining the Future of Web3
        </motion.h1>
        <motion.p 
          className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Numus Venture Studio offers a full-cycle ecosystem to accelerate, incubate, and refine cutting-edge blockchain projects.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link to="/about">
            <Button size="lg" className="w-full sm:w-auto numus-button">
              Explore Our Ecosystem
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Our Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;