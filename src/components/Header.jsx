import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { navItems } from '../nav-items';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="glassmorphism sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <motion.img 
            src="/logo.svg" 
            alt="Numus Logo" 
            className="w-10 h-10"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          />
          <span className="text-2xl font-bold text-futuristic-300 font-serif">Numus</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link to={item.to}>
                  <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-sans text-futuristic-100 hover:text-futuristic-300`}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="outline" className="neon-border text-futuristic-300 hover:bg-futuristic-800 hover:text-futuristic-100 font-sans">Contact Us</Button>
      </div>
    </header>
  );
};

export default Header;