import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Numus: Empowering Global Tech Innovation</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Numus is a comprehensive incubation and acceleration program, offering a global tech stack and expert architecture consulting to transform visionary ideas into market-leading ventures. We support projects at every stage while delivering strategic value to investors.</p>
        <div className="space-x-4">
          <Link to="/services"><Button size="lg" variant="secondary">Our Services</Button></Link>
          <Link to="/portfolio"><Button size="lg">View Portfolio</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
