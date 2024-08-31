import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Numus: Powering CeDeFiAi Innovation</h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">Numus is a cutting-edge full-cycle incubation and acceleration program, leveraging CeDeFiAi technology to transform visionary ideas into market-leading ventures. We empower projects at every stage while providing strategic value to investors.</p>
        <div className="space-x-4">
          <Link to="/services"><Button size="lg" variant="secondary">Our Program</Button></Link>
          <Link to="/portfolio"><Button size="lg">View Portfolio</Button></Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
