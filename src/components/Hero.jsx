import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-navy-50 to-navy-100 dark:from-navy-900 dark:to-navy-800 py-20">
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
          className="numus-title text-4xl md:text-5xl lg:text-6xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Redefining the Future of Web3 Investments
        </motion.h1>
        <motion.p 
          className="numus-text text-xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Numus Venture Studio offers a comprehensive ecosystem to accelerate, incubate, and refine cutting-edge blockchain projects for institutional investors.
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
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-navy-600 text-navy-600 hover:bg-navy-100 dark:border-navy-300 dark:text-navy-300 dark:hover:bg-navy-700">
              View Our Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;