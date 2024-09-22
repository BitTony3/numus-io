import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import MatrixTornado from '../components/MatrixTornado';

const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-64">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-green-900 relative">
      <MatrixTornado className="fixed inset-0 z-10 opacity-30 pointer-events-none" />
      <div className="relative z-20">
        <Header />
        <main className="container mx-auto px-4">
          <Hero />
          <Suspense fallback={<LoadingFallback />}>
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
          </Suspense>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
