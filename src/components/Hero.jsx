import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <img
          src="/logo.svg"
          alt="Numus Logo"
          className="w-24 h-24 mx-auto mb-8"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
          Redefining the Future of Web3
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          Numus Venture Studio offers a full-cycle ecosystem to accelerate, incubate, and refine cutting-edge blockchain projects.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/about">
            <Button size="lg" className="business-button">
              Explore Our Ecosystem
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="business-button bg-white dark:bg-gray-800">
              View Our Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;