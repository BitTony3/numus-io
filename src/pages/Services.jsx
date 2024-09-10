import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-green-900">
      <AnimatedBackground>
        <Header />
        <main>
          <motion.div
            className="py-20 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 relative z-10">
              <h1 className="text-4xl font-bold text-center mb-8 text-green-100 neon-text">Our Services</h1>
              <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200">
                At Numus, we provide cutting-edge technical services powered by data-driven insights and innovative technologies. From our global tech stack to expert architecture consulting, we're here to accelerate your project's success and drive innovation at every stage of development.
              </p>
            </div>
          </motion.div>
          <Services />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default ServicesPage;