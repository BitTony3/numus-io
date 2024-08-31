import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
            <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
              Ready to turn your vision into reality? Get in touch with our team of experts at Numus. We're here to listen, collaborate, and help you navigate the exciting journey of building a successful startup.
            </p>
          </div>
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
