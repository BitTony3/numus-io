import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-green-800">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
