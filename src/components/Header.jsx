import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import { ethers } from 'ethers';
import { useToast } from "@/components/ui/use-toast";

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

  const navigate = useNavigate();
  const { toast } = useToast();

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        
        // Sign authentication message
        const message = "Welcome to Numus! Please sign this message to authenticate.";
        const signature = await signer.signMessage(message);
        
        // Here you would typically send the address and signature to your backend for verification
        // For now, we'll just navigate to the user profile
        navigate('/user-profile', { state: { address, signature } });
        
        toast({
          title: "Connected!",
          description: "You've successfully connected your wallet.",
        });
      } catch (error) {
        console.error('Error connecting wallet:', error);
        toast({
          title: "Connection Failed",
          description: "There was an error connecting your wallet. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "MetaMask Not Found",
        description: "Please install MetaMask to connect your wallet.",
        variant: "destructive",
      });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled ? 'bg-futuristic-900/80 backdrop-blur-md' : 'bg-futuristic-900'
  }`;

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
          
          <Button 
            onClick={connectWallet} 
            className="neon-border text-futuristic-300 hover:bg-futuristic-800 hover:text-futuristic-100 font-sans"
          >
            Connect Wallet
          </Button>
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
