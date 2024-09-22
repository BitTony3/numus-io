import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-green-800">
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 text-green-100">Our Services</h1>
          <Services />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
