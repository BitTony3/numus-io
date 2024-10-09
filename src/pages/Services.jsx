import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-futuristic-900 text-futuristic-100">
      <AnimatedBackground>
        <Header />
        <main>
          <Services />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default ServicesPage;