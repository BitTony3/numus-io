import { HomeIcon, Briefcase, Users, Phone } from "lucide-react";
import { lazy } from 'react';

const Home = lazy(() => import("./pages/Home.jsx"));
const AboutUs = lazy(() => import("./pages/Services.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Home />,
  },
  {
    title: "About Us",
    to: "/about",
    icon: <Briefcase className="h-4 w-4" />,
    page: <AboutUs />,
  },
  {
    title: "Portfolio",
    to: "/portfolio",
    icon: <Users className="h-4 w-4" />,
    page: <Portfolio />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Contact />,
  },
];
