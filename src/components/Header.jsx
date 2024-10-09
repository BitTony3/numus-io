import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { navItems } from '../nav-items';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Numus Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">Numus</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to}>
                  <Button variant="ghost" className="text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {item.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} onClick={() => setIsMenuOpen(false)}>
                  <Button variant="ghost" className="w-full text-left text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white">
                    {item.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;