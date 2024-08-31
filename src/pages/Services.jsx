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
              At Numus, we provide a comprehensive suite of technical services designed to empower startups and established companies alike. From our global tech stack to expert architecture consulting, we're here to drive your project's success at every stage of development.
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
