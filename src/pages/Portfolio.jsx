import React from 'react';
import Header from '../components/Header';
import PortfolioComponent from '../components/Portfolio';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-futuristic-900 text-futuristic-100">
      <AnimatedBackground>
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold text-center mb-8 text-futuristic-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Portfolio
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 max-w-3xl mx-auto text-futuristic-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Discover our diverse range of innovative blockchain projects, each designed to push the boundaries of Web3 technology and create new opportunities for growth and investment.
            </motion.p>
            <PortfolioComponent />
          </div>
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default PortfolioPage;