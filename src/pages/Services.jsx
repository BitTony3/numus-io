import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-green-100">
      <Header />
      <main>
        <motion.div
          className="py-20 bg-green-50 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 z-0">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-green-200"
                style={{
                  width: Math.random() * 20 + 10,
                  height: Math.random() * 20 + 10,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: Math.random() * 100 - 50,
                  y: Math.random() * 100 - 50,
                  rotate: 360,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Our Services</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-700">
              At Numus, we provide cutting-edge technical services powered by data-driven insights and innovative technologies. From our global tech stack to expert architecture consulting, we're here to accelerate your project's success and drive innovation at every stage of development.
            </p>
          </div>
        </motion.div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;