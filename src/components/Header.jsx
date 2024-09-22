import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import MatrixTornado from './MatrixTornado';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/about' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="bg-green-900 text-white shadow-lg relative h-20"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MatrixTornado />
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative z-20">
        <Link to="/" className="flex items-center space-x-2">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <img
              src="/logo.svg"
              alt="Numus Logo"
              className="w-12 h-12"
            />
          </motion.div>
          <motion.span
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500"
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
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to={item.path}>
                  <Button
                    variant="ghost"
                    className="text-green-300 hover:text-green-100 relative overflow-hidden group rounded-full px-4 py-2"
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
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 right-0 bg-green-800 z-30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4">
              <ul className="flex flex-col items-center space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link to={item.path} onClick={toggleMenu}>
                      <Button
                        variant="ghost"
                        className="text-green-300 hover:text-green-100 w-full"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
