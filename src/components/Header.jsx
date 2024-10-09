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

const Header = () => {
  return (
    <header className="bg-white dark:bg-navy-900 border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.svg" alt="Numus Logo" className="w-10 h-10" />
          <span className="text-2xl font-bold text-navy-800 dark:text-navy-100 font-serif">Numus</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link to={item.to}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="outline" className="border-navy-600 text-navy-600 hover:bg-navy-100 dark:border-navy-300 dark:text-navy-300 dark:hover:bg-navy-700">Contact Us</Button>
      </div>
    </header>
  );
};

export default Header;