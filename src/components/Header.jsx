import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/about' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  const MenuItem = ({ item, mobile = false }) => (
    <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link to={item.path} onClick={() => mobile && setIsOpen(false)}>
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
  );

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
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {menuItems.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-green-300" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-green-900 p-0">
              <nav className="flex flex-col h-full justify-center">
                <ul className="space-y-4">
                  {menuItems.map((item, index) => (
                    <MenuItem key={index} item={item} mobile />
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
