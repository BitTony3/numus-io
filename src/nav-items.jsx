import { HomeIcon, Briefcase, Users, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Services",
    to: "/services",
    icon: <Briefcase className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Portfolio",
    to: "/portfolio",
    icon: <Users className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <Phone className="h-4 w-4" />,
    page: <Index />,
  },
];
