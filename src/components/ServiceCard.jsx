import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ category, onSelect }) => {
  const Icon = category.icon;

  return (
    <motion.div
      className="bg-futuristic-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-futuristic-600"
      whileHover={{ y: -5 }}
      onClick={() => onSelect(category)}
    >
      <div className="p-4 md:p-6">
        <motion.div 
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-futuristic-700 rounded-full flex items-center justify-center"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-6 h-6 md:w-8 md:h-8 text-futuristic-300" />
        </motion.div>
        <h3 className="text-lg md:text-xl font-bold text-center text-futuristic-300 mb-2">{category.title}</h3>
        <ul className="space-y-2">
          {category.services.slice(0, 2).map((service, idx) => (
            <li key={idx} className="text-futuristic-200 text-xs md:text-sm flex items-center">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-futuristic-400 rounded-full mr-2 flex-shrink-0"></span>
              <span className="flex-grow">{service.title}</span>
            </li>
          ))}
        </ul>
        {category.services.length > 2 && (
          <p className="text-futuristic-400 text-xs md:text-sm mt-2 text-center">+{category.services.length - 2} more</p>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;