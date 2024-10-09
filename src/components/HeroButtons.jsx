import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroButtons = () => (
  <motion.div 
    className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4, duration: 0.5 }}
  >
    <Link to="/services">
      <Button size="lg" className="w-full sm:w-auto futuristic-button group">
        Explore Our Services
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </Link>
    <Link to="/portfolio">
      <Button size="lg" variant="outline" className="w-full sm:w-auto border-futuristic-400 text-futuristic-400 hover:bg-futuristic-800 hover:text-futuristic-100 transition-colors">
        View Our Projects
      </Button>
    </Link>
  </motion.div>
);

export default HeroButtons;