import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MatrixTornado from './MatrixTornado';
import { navItems } from '../nav-items';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="bg-green-900 text-white shadow-lg relative h-auto py-4 md:h-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MatrixTornado />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center relative z-20">
        <div className="flex justify-between w-full md:w-auto items-center mb-4 md:mb-0">
          <Link to="/" className="flex items-center space-x-2">
            <motion.img
              src="/logo.svg"
              alt="Numus Logo"
              className="w-10 h-10 md:w-12 md:h-12"
              whileHover={{ scale: 1.1, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
            />
            <motion.span
              className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500"
              animate={{
                backgroundPosition: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              Numus
            </motion.span>
          </Link>
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            {navItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to={item.to} onClick={() => setIsMenuOpen(false)}>
                  <Button
                    variant="ghost"
                    className="w-full md:w-auto text-green-300 hover:text-green-100 relative overflow-hidden group rounded-full px-4 py-2"
                  >
                    <span className="relative z-10">{item.title}</span>
                    <motion.div
                      className="absolute inset-0 bg-green-600 opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0, borderRadius: '100%' }}
                      whileHover={{ scale: 1, borderRadius: '16px' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Button>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
