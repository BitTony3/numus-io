import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { serviceCategories } from '@/data/serviceCategories';
import ServiceCard from './ServiceCard';
import ServiceDialog from './ServiceDialog';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const visibleServices = isMobile ? 1 : isTablet ? 2 : 3;

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % serviceCategories.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + serviceCategories.length) % serviceCategories.length);
  };

  return (
    <section className="py-16 bg-green-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-300 neon-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus Venture Studio Services
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-center mb-10 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering VCs, investors, and hedge funds with a full-cycle venture ecosystem. We accelerate growth, incubate innovation, and refine portfolios across the Web3 landscape.
        </motion.p>
        <div className="relative">
          <motion.div
            className="flex transition-all duration-500 ease-in-out"
            animate={{ x: `calc(-${startIndex * (100 / visibleServices)}%)` }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard category={category} onSelect={setSelectedService} />
              </motion.div>
            ))}
          </motion.div>
          <Button 
            className="absolute top-1/2 -left-4 md:left-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 md:p-3" 
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
          <Button 
            className="absolute top-1/2 -right-4 md:right-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 md:p-3" 
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
          </Button>
        </div>
      </div>
      <ServiceDialog
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
