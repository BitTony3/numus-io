import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ category, onSelect }) => {
  const Icon = category.icon;

  return (
    <motion.div
      className="bg-green-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      whileHover={{ y: -5 }}
      onClick={() => onSelect(category)}
    >
      <div className="p-6">
        <motion.div 
          className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center"
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-xl font-bold text-center text-green-300 mb-2">{category.title}</h3>
        <ul className="space-y-2">
          {category.services.slice(0, 2).map((service, idx) => (
            <li key={idx} className="text-green-200 text-sm flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              {service.title}
            </li>
          ))}
        </ul>
        {category.services.length > 2 && (
          <p className="text-green-400 text-sm mt-2 text-center">+{category.services.length - 2} more</p>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
