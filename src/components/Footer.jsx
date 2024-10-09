import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/numusio' },
    { icon: Twitter, url: 'https://twitter.com/NumusApp' },
    { icon: Linkedin, url: 'https://linkedin.com/company/numusio' },
    { icon: Instagram, url: 'https://instagram.com/numusio' },
  ];

  return (
    <footer className="bg-numus-100 dark:bg-numus-900 border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.svg" alt="Numus Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-numus-800 dark:text-numus-100 font-serif">Numus</span>
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
              {['Home', 'Services', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-sm text-numus-600 hover:text-numus-800 dark:text-numus-300 dark:hover:text-numus-100 font-sans"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-numus-600 hover:text-numus-800 dark:text-numus-300 dark:hover:text-numus-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        <div className="text-center text-sm mt-8 text-numus-600 dark:text-numus-400 font-sans">
          &copy; {new Date().getFullYear()} Numus. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;