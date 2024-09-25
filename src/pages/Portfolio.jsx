import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-green-900">
      <AnimatedBackground>
        <Header />
        <main>
          <h1 className="text-4xl font-bold text-center mb-8 title-text">Our Portfolio</h1>
          <Portfolio />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default PortfolioPage;
