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
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 155}, 255, ${Math.random() * 100 + 155}, 0.3)`,
              borderRadius: '50%',
              filter: 'blur(8px)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
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
            className="w-48 h-48 mx-auto mb-8"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
              filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
        <motion.h2
          className="text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-green-400 to-green-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Embark on Your Tech Quest!
        </motion.h2>
        <motion.p
          className="text-2xl mb-10 max-w-2xl mx-auto text-green-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Level up your ideas, conquer innovation challenges, and claim your rewards in our tech-powered realm!
        </motion.p>
        <motion.div
          className="space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Link to="/services">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button size="lg" className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white relative overflow-hidden group px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
                <span className="relative z-10">Begin Your Quest</span>
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
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white relative overflow-hidden group px-8 py-4 text-lg font-semibold rounded-full shadow-lg">
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
