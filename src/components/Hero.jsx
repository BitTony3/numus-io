import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Empowering Innovators</h2>
        <p className="text-xl mb-8">We're a venture studio and full cycle incubator accelerating the next generation of groundbreaking startups.</p>
        <Button size="lg">Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;