import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-20 bg-gradient-to-b from-green-900 via-green-700 to-green-500 text-white py-28 overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          <motion.img
            src="/logo.svg"
            alt="Numus Logo"
            className="w-40 h-40 mx-auto mb-6"
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
          className="text-6xl font-bold mb-5 text-green-100 futuristic-text shadow-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Innovate with Data-Driven Tech
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-green-100 shadow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Harness cutting-edge technology and data analytics to accelerate your business growth. Leverage our extensive contacts network, strategic business planning, and refined monetization models.
        </motion.p>
        <motion.div
          className="space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/about">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="futuristic-button group bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full shadow-lg text-lg">
                Explore Tech Stack
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </Link>
          <Link to="/portfolio">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="futuristic-button bg-transparent border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-900 font-bold py-4 px-8 rounded-full shadow-lg text-lg">
                View Innovations
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
