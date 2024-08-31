import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-800">VentureHaven</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/"><Button variant="ghost">Home</Button></Link></li>
            <li><Link to="/services"><Button variant="ghost">Services</Button></Link></li>
            <li><Link to="/portfolio"><Button variant="ghost">Portfolio</Button></Link></li>
            <li><Link to="/contact"><Button variant="ghost">Contact</Button></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
