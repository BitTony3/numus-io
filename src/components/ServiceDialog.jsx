import React from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ServiceDialog = ({ isOpen, onClose, service }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100 max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-300 flex items-center">
          {service?.icon}
          <span className="ml-3">{service?.title}</span>
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-green-200">
        <ul className="space-y-4 mt-4">
          {service?.services.map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
              <div>
                <h3 className="font-semibold text-green-300">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

export default ServiceDialog;