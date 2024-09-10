import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../nav-items';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header
      className="bg-green-900 text-white shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
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
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="hidden md:block">
          <motion.ul
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {navItems.map((item) => (
              <motion.li
                key={item.title}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={item.to}>
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
          </motion.ul>
        </nav>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-64 bg-green-800 shadow-lg z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="p-4">
              <Button variant="ghost" onClick={toggleMenu} className="mb-4">
                <X className="h-6 w-6" />
              </Button>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.title}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link to={item.to} onClick={toggleMenu}>
                      <Button
                        variant="ghost"
                        className="w-full text-left text-green-300 hover:text-green-100"
                      >
                        {item.title}
                      </Button>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;