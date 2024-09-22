import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import MatrixTornado from '../components/MatrixTornado';

const Home = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Services />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Portfolio />
          </motion.div>
        </main>
        <Footer />
      </div>
      <MatrixTornado className="fixed inset-0 z-20 pointer-events-none" />
    </div>
  );
};

export default Home;
