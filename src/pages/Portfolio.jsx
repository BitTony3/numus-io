import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-futuristic-900 text-futuristic-100">
      <AnimatedBackground>
        <Header />
        <main>
          <h1 className="text-4xl font-bold text-center mb-8 text-futuristic-300">Our Portfolio</h1>
          <Portfolio />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default PortfolioPage;