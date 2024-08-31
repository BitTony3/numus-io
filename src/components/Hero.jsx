import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-[url('/space-background.jpg')] bg-cover bg-center text-white py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7],
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
        <motion.h2
          className="text-5xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus: Pioneering the Future of Tech
        </motion.h2>
        <motion.p
          className="text-xl mb-10 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on a cosmic journey of innovation with Numus. Our rapid-action program and expert troubleshooting launch your ideas into the stratosphere of success.
        </motion.p>
        <motion.div
          className="space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link to="/services"><Button size="lg" variant="secondary" className="bg-blue-500 hover:bg-blue-600">Explore Services</Button></Link>
          <Link to="/portfolio"><Button size="lg" className="bg-purple-600 hover:bg-purple-700">View Constellation</Button></Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
