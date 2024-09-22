import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
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
              <h1 className="text-4xl font-bold text-center mb-8 text-green-100 neon-text">Our Portfolio</h1>
            </div>
          </motion.div>
          <Portfolio />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default PortfolioPage;
