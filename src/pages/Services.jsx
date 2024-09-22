import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/Services';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import MatrixTornado from '../components/MatrixTornado';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <MatrixTornado />
      <div className="relative z-20">
        <Header />
        <main>
          <motion.div
            className="py-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center mb-8 text-green-100 neon-text">Our Services</h1>
              <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200">
                Discover how our cutting-edge solutions and expert consulting can accelerate your business growth and drive innovation.
              </p>
            </div>
          </motion.div>
          <AboutUs />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;
