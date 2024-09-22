import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import MatrixTornado from '../components/MatrixTornado';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-green-900 relative">
      <AnimatedBackground>
        <Header />
        <MatrixTornado />
        <main className="relative z-20 py-20">
          <motion.div
            className="container mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-center mb-8 text-green-100 neon-text">Contact Us</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200">
              Get in touch with our team to explore how Numus can accelerate your eco-friendly project or green investment strategy.
            </p>
            <Contact />
          </motion.div>
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default ContactPage;
