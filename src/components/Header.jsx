import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">VentureStudio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">Home</Button></li>
            <li><Button variant="ghost">Services</Button></li>
            <li><Button variant="ghost">Portfolio</Button></li>
            <li><Button variant="ghost">Contact</Button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;