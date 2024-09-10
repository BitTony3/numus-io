import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { Code, BarChart, Briefcase, Zap, Shield, Cpu, GitBranch, Users, DollarSign, TrendingUp, Target, Megaphone, LineChart, PieChart, Network, Handshake } from 'lucide-react';

const ServiceCard = ({ category, index }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, rotateY: 180 },
        visible: { 
          opacity: 1, 
          rotateY: 0, 
          transition: { 
            duration: 0.8, 
            delay: index * 0.2,
            type: "spring",
            stiffness: 100
          } 
        }
      }}
    >
      <Card className="bg-green-800 border-green-700 hover:shadow-lg hover:shadow-green-300/20 transition-all duration-300 h-full overflow-hidden group">
        <CardHeader className="bg-green-700 group-hover:bg-green-600 transition-colors duration-300">
          <CardTitle className="flex flex-col items-center text-green-100">
            <motion.div 
              className="p-3 rounded-full bg-green-600 group-hover:bg-green-500 transition-colors duration-300"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {React.cloneElement(category.icon, { className: "h-8 w-8 text-green-200" })}
            </motion.div>
            <span className="mt-4 text-xl font-bold">{category.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <ul className="space-y-2">
            {category.services.map((service, idx) => (
              <motion.li 
                key={idx} 
                className="flex items-center text-green-200"
                whileHover={{ x: 5, color: "#4ade80" }}
                transition={{ duration: 0.2 }}
              >
                <span className="mr-2">{React.cloneElement(service.icon, { className: "h-4 w-4" })}</span>
                {service.title}
              </motion.li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Services = () => {
  const serviceCategories = [
    {
      title: "Full-Cycle Development",
      icon: <Code className="h-12 w-12 mb-4" />,
      services: [
        { title: "Tech Stack Integration", icon: <Cpu /> },
        { title: "Scalable Architecture", icon: <Network /> },
        { title: "Performance Optimization", icon: <Zap /> },
        { title: "Blockchain Integration", icon: <GitBranch /> }
      ]
    },
    {
      title: "Business Strategy",
      icon: <Briefcase className="h-12 w-12 mb-4" />,
      services: [
        { title: "Business Model Design", icon: <PieChart /> },
        { title: "Use Case Development", icon: <Target /> },
        { title: "Tokenomics Architecture", icon: <DollarSign /> },
        { title: "Strategic Partnerships", icon: <Users /> }
      ]
    },
    {
      title: "Rapid Scaling",
      icon: <TrendingUp className="h-12 w-12 mb-4" />,
      services: [
        { title: "Growth Hacking", icon: <Zap /> },
        { title: "Market Expansion", icon: <BarChart /> },
        { title: "Efficiency Optimization", icon: <Target /> },
        { title: "Agile Implementation", icon: <GitBranch /> }
      ]
    },
    {
      title: "Crisis Management",
      icon: <Shield className="h-12 w-12 mb-4" />,
      services: [
        { title: "Emergency Response", icon: <Zap /> },
        { title: "Risk Mitigation", icon: <Shield /> },
        { title: "Reputation Management", icon: <Users /> },
        { title: "Recovery Planning", icon: <TrendingUp /> }
      ]
    },
    {
      title: "Marketing & BD",
      icon: <Megaphone className="h-12 w-12 mb-4" />,
      services: [
        { title: "Traffic Acquisition", icon: <Users /> },
        { title: "Content Strategy", icon: <PieChart /> },
        { title: "Brand Development", icon: <Briefcase /> },
        { title: "Partnership Outreach", icon: <Handshake /> }
      ]
    },
    {
      title: "Investment Readiness",
      icon: <DollarSign className="h-12 w-12 mb-4" />,
      services: [
        { title: "Due Diligence Prep", icon: <Briefcase /> },
        { title: "Pitch Deck Creation", icon: <PieChart /> },
        { title: "Financial Modeling", icon: <LineChart /> },
        { title: "Investor Relations", icon: <Users /> }
      ]
    }
  ];

  return (
    <section className="py-16 bg-green-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-green-300 neon-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hyper Matrix Solutions
        </motion.h2>
        <motion.p 
          className="text-lg text-center mb-10 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering projects with full-cycle development. We're your partners in creating, troubleshooting, and accelerating growth across all dimensions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;