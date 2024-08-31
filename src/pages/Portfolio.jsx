import React from 'react';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Our Portfolio</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Explore the innovative startups and groundbreaking projects we've helped launch and grow. Our diverse portfolio spans various industries and technologies, showcasing the transformative power of our venture studio approach.
            </p>
          </div>
        </div>
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;