import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Turning Visionaries into Ventures</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">VentureHaven is a premier venture studio and full-cycle incubator, dedicated to transforming innovative ideas into thriving businesses. We empower entrepreneurs and accelerate startup growth.</p>
        <div className="space-x-4">
          <Link to="/services"><Button size="lg" variant="secondary">Our Services</Button></Link>
          <Link to="/portfolio"><Button size="lg">View Portfolio</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
