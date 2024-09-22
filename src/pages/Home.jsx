import React, { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import MatrixTornado from '../components/MatrixTornado';

const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));

const LoadingFallback = () => <div className="text-green-500 text-center py-20">Loading...</div>;

const Home = () => {
  return (
    <div className="min-h-screen bg-black relative">
      <MatrixTornado className="fixed inset-0 z-10 pointer-events-none" />
      <div className="relative z-20">
        <Header />
        <main>
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
