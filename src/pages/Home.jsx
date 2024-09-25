import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <AnimatedBackground>
        <Header />
        <main>
          <Hero />
          <Services />
          <Portfolio />
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default Home;
