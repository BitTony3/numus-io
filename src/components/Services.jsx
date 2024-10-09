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

  const prevSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex > 0 ? prevIndex - 1 : serviceCategories.length - visibleServices
    );
  };

  const nextSlide = () => {
    setStartIndex((prevIndex) => 
      prevIndex < serviceCategories.length - visibleServices ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="py-16 bg-futuristic-900 text-futuristic-100 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 text-futuristic-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus Venture Studio Services
        </motion.h2>
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-center mb-10 max-w-3xl mx-auto text-futuristic-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Numus is a full-cycle venture capital and project incubation platform, integrating advanced aggregation technology and cross-chain capabilities to support and enhance blockchain-based projects. From incubation to scaling, we provide critical resources, technical infrastructure, and traffic activation to drive project success.
        </motion.p>
        <div className="relative">
          <motion.div
            className="flex flex-col md:flex-row transition-all duration-500 ease-in-out"
            animate={{ x: isMobile ? 0 : `calc(-${startIndex * (100 / visibleServices)}%)` }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-2 md:p-4 ${isMobile ? 'mb-6' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard category={category} onSelect={setSelectedService} />
              </motion.div>
            ))}
          </motion.div>
          {!isMobile && (
            <>
              <Button 
                className="absolute top-1/2 -left-2 md:left-4 transform -translate-y-1/2 bg-futuristic-600 hover:bg-futuristic-700 text-futuristic-100 rounded-full p-1 md:p-2" 
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
              <Button 
                className="absolute top-1/2 -right-2 md:right-4 transform -translate-y-1/2 bg-futuristic-600 hover:bg-futuristic-700 text-futuristic-100 rounded-full p-1 md:p-2" 
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
              </Button>
            </>
          )}
        </div>
      </div>
      <ServiceDialog isOpen={!!selectedService} onClose={() => setSelectedService(null)} service={selectedService} />
    </section>
  );
};

export default Services;