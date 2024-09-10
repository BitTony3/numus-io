import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const PortfolioPage = () => {
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
            {[...Array(100)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-green-500 font-mono text-sm"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 0],
                  y: [0, 100],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: Math.random() * 2,
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </motion.div>
            ))}
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-800">Our Portfolio</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-700">
              Explore our portfolio of groundbreaking projects and innovative solutions. We leverage data-driven strategies and cutting-edge technologies to create impactful products across various industries, showcasing the power of our global tech stack and expert consulting services.
            </p>
          </div>
        </motion.div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;