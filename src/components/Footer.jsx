import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <img src="/logo.svg" alt="Numus Logo" className="w-8 h-8" />
                <h3 className="text-xl font-bold text-green-500">Numus</h3>
              </Link>
              <p>Empowering innovators to build the future.</p>
            </motion.div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Quick Links</h4>
            <ul className="space-y-2">
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Link to="/" className="hover:text-green-400">Home</Link>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Link to="/services" className="hover:text-green-400">Services</Link>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Link to="/portfolio" className="hover:text-green-400">Portfolio</Link>
              </motion.li>
              <motion.li initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <Link to="/contact" className="hover:text-green-400">Contact</Link>
              </motion.li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Contact</h4>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>123 Innovation Street</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>Tech City, TC 12345</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>info@numus.com</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>+1 (555) 123-4567</motion.p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-green-500">Follow Us</h4>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#" className="hover:text-green-400"><Facebook /></a>
              <a href="#" className="hover:text-green-400"><Twitter /></a>
              <a href="#" className="hover:text-green-400"><Linkedin /></a>
              <a href="#" className="hover:text-green-400"><Instagram /></a>
            </motion.div>
          </div>
        </div>
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; 2024 Numus. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
