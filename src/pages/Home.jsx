import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';

const Home = () => {
  return (
    <Layout
      title="Welcome to Numus Venture Studio"
      description="Accelerating blockchain innovation from concept to market success"
    >
      <Hero />
      <Services />
      <Portfolio />
    </Layout>
  );
};

export default Home;