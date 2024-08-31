import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#00A86B' : '#0EA5E9',
              borderRadius: '50%',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              y: [0, -50, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
        >
          <motion.img
            src="/logo.svg"
            alt="Numus Logo"
            className="w-40 h-40 mx-auto mb-8"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.h2
          className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Numus: Your Cosmic Tech Adventure
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Embark on an epic quest through the tech universe with Numus. Level up your ideas and conquer the challenges of innovation!
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/services">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button size="lg" className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white relative overflow-hidden group">
                <span className="relative z-10">Start Your Quest</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 20 }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </Link>
          <Link to="/portfolio">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button size="lg" className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white relative overflow-hidden group">
                <span className="relative z-10">View Achievements</span>
                <motion.div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 20 }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
