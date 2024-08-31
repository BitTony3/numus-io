import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-900 via-green-700 to-green-500 text-white py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-300"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
              y: [0, -30, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      <div className="container mx-auto px-4 text-center relative z-10">
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
          className="text-7xl font-bold mb-6 text-green-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Embark on Your Green Tech Quest!
        </motion.h2>
        <motion.p
          className="text-2xl mb-10 max-w-2xl mx-auto text-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Cultivate innovation, grow your ideas, and harvest success in our eco-friendly tech realm!
        </motion.p>
        <motion.div
          className="space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/services">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
                <span className="relative z-10">Plant Your Idea</span>
              </Button>
            </motion.div>
          </Link>
          <Link to="/portfolio">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
                <span className="relative z-10">View Our Garden</span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
