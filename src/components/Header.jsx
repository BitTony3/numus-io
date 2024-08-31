import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.img
            src="/logo.svg"
            alt="Numus Logo"
            className="w-10 h-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-2xl font-bold text-green-500">Numus</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/"><Button variant="ghost" className="text-white hover:text-green-500">Home</Button></Link></li>
            <li><Link to="/services"><Button variant="ghost" className="text-white hover:text-green-500">Services</Button></Link></li>
            <li><Link to="/portfolio"><Button variant="ghost" className="text-white hover:text-green-500">Portfolio</Button></Link></li>
            <li><Link to="/contact"><Button variant="ghost" className="text-white hover:text-green-500">Contact</Button></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
