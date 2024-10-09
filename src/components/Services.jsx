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

  const stats = [
    { value: "150M+", label: "User Network" },
    { value: "50+", label: "Blockchain Ecosystems" },
    { value: "$300M+", label: "Portfolio Worth" },
    { value: "100+", label: "Projects Launched" },
  ];

  return (
    <section className="py-16 md:py-24 bg-futuristic-900 text-futuristic-100 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-futuristic-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus Venture Studio Services
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg lg:text-xl text-center mb-12 md:mb-16 max-w-3xl mx-auto text-futuristic-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Numus is a full-cycle venture capital and project incubation platform, integrating advanced aggregation technology and cross-chain capabilities to support and enhance blockchain-based projects. From incubation to scaling, we provide critical resources, technical infrastructure, and traffic activation to drive project success.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-futuristic-300 mb-2">{stat.value}</div>
              <div className="text-sm text-futuristic-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <motion.div
            className="flex flex-col md:flex-row transition-all duration-500 ease-in-out"
            animate={{ x: isMobile ? 0 : `calc(-${startIndex * (100 / visibleServices)}%)` }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3 md:p-5 ${isMobile ? 'mb-8' : ''}`}
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
                className="absolute top-1/2 -left-4 md:left-2 transform -translate-y-1/2 bg-futuristic-600 hover:bg-futuristic-700 text-futuristic-100 rounded-full p-2 md:p-3" 
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
              </Button>
              <Button 
                className="absolute top-1/2 -right-4 md:right-2 transform -translate-y-1/2 bg-futuristic-600 hover:bg-futuristic-700 text-futuristic-100 rounded-full p-2 md:p-3" 
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
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