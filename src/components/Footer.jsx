import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com/numusio' },
    { icon: <Twitter />, url: 'https://twitter.com/NumusApp' },
    { icon: <Linkedin />, url: 'https://linkedin.com/company/numusio' },
    { icon: <Instagram />, url: 'https://instagram.com/numusio' },
  ];

  return (
    <footer className="bg-black text-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Numus Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                Numus
              </span>
            </Link>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6 md:mb-0"
          >
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              {['Home', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-green-400 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white hover:text-green-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.icon}
                </motion.div>
              </a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="text-center text-sm mt-8 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} Numus. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
