import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = `sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-futuristic-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
  }`;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className={headerClass}>
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
        
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Link to={item.to}>
                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} font-sans text-futuristic-100 hover:text-futuristic-300 ${
                      location.pathname === item.to ? 'bg-futuristic-800' : ''
                    }`}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          <Link to="/contact">
            <Button variant="outline" className="neon-border text-futuristic-300 hover:bg-futuristic-800 hover:text-futuristic-100 font-sans">
              Contact Us
            </Button>
          </Link>
        </div>
        
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-futuristic-900 py-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col space-y-4 px-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`text-futuristic-100 hover:text-futuristic-300 py-2 ${
                  location.pathname === item.to ? 'bg-futuristic-800 px-4 rounded' : ''
                }`}
                onClick={toggleMobileMenu}
              >
                {item.title}
              </Link>
            ))}
            <Link to="/contact" onClick={toggleMobileMenu}>
              <Button className="w-full futuristic-button">Contact Us</Button>
            </Link>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;