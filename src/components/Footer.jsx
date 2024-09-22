import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com/numusio' },
    { icon: <Twitter />, url: 'https://twitter.com/NumusApp' },
    { icon: <Linkedin />, url: 'https://linkedin.com/company/numusio' },
    { icon: <Instagram />, url: 'https://instagram.com/numusio' },
  ];

  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Numus Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-green-300">
                Numus
              </span>
            </Link>
          </div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              {['Home', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm hover:text-green-300 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-white hover:text-green-300 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm mt-6 text-green-300">
          &copy; {new Date().getFullYear()} Numus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
