import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-20 py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <motion.img
            src="/logo.svg"
            alt="Numus Logo"
            className="w-32 h-32 mx-auto mb-8"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
        <motion.h2
          className="text-5xl font-bold mb-6 text-green-100 shadow-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Innovate with Data-Driven Tech
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto text-green-200 shadow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Harness cutting-edge technology and data analytics to accelerate your business growth. Leverage our extensive network, strategic planning, and refined monetization models.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/about">
            <Button size="lg" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg group transition-all duration-300 ease-in-out transform hover:scale-105">
              Explore Tech Stack
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-bold py-3 px-8 rounded-full shadow-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              View Innovations
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
