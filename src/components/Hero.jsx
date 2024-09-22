import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative z-10 bg-gradient-to-b from-green-900 to-green-700 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.svg"
            alt="Numus Logo"
            className="w-32 h-32 mx-auto mb-6"
          />
        </motion.div>
        <motion.h2
          className="text-5xl font-bold mb-5 text-green-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Innovate with Data-Driven Tech
        </motion.h2>
        <motion.p
          className="text-xl mb-8 max-w-2xl mx-auto text-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Harness cutting-edge technology and data analytics to accelerate your business growth. Leverage our extensive contacts network, strategic business planning, and refined monetization models.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/about">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
              Explore Tech Stack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="border-green-300 text-green-300 hover:bg-green-800">
              View Innovations
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
