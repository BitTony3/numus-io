import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { serviceCategories } from '@/data/serviceCategories';
import ServiceCard from './ServiceCard';
import Modal from './Modal';

const ServiceDialog = ({ service, onClose }) => (
  <div>
    <h2 className="text-2xl font-bold text-futuristic-300 mb-4 flex items-center">
      {React.createElement(service.icon, { className: "w-8 h-8 mr-3 text-futuristic-400" })}
      {service.title}
    </h2>
    <ul className="space-y-4">
      {service.services.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 bg-futuristic-400 rounded-full mr-3 mt-2"></span>
          <div>
            <h3 className="font-semibold text-futuristic-300">{item.title}</h3>
            <p className="text-futuristic-200">{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-futuristic-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus Venture Studio Services
        </motion.h2>
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-center mb-10 max-w-2xl mx-auto text-futuristic-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering VCs, investors, and hedge funds with a full-cycle venture ecosystem. We accelerate growth, incubate innovation, and refine portfolios across the Web3 landscape.
        </motion.p>
        <div className="relative">
          <motion.div
            className="flex flex-col md:flex-row transition-all duration-500 ease-in-out"
            animate={{ x: isMobile ? 0 : `calc(-${startIndex * (100 / visibleServices)}%)` }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-4 ${isMobile ? 'mb-6' : ''}`}
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
            </>
          )}
        </div>
      </div>
      <Modal isOpen={!!selectedService} onClose={() => setSelectedService(null)}>
        {selectedService && <ServiceDialog service={selectedService} onClose={() => setSelectedService(null)} />}
      </Modal>
    </section>
  );
};

export default Services;