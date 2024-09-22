import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/about' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-green-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/logo.svg"
            alt="Numus Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold text-green-300">
            Numus
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <Button
                    variant="ghost"
                    className="text-green-300 hover:text-green-100 hover:bg-green-800"
                  >
                    {item.title}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
