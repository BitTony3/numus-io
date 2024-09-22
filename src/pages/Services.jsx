import React from 'react';
import Header from '../components/Header';
import AboutUs from '../components/Services';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { motion } from 'framer-motion';
import MatrixTornado from '../components/MatrixTornado';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <AnimatedBackground>
        <MatrixTornado />
        <Header />
        <main>
          <motion.div
            className="py-20 relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto px-4 relative z-10">
              {/* Content is now in the AboutUs component */}
            </div>
          </motion.div>
          <AboutUs />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default AboutUsPage;
