import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              At VentureHaven, we offer a comprehensive suite of services designed to support startups at every stage of their journey. From ideation to market entry and beyond, our expert team is here to guide you towards success.
            </p>
          </div>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;