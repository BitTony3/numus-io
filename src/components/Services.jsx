import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Code, BarChart, Briefcase, Zap, Shield, Cpu, GitBranch, Users, DollarSign, TrendingUp, Target, Megaphone, LineChart, PieChart, Network, Handshake } from 'lucide-react';

const ServiceCard = ({ category, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    onClick={() => onSelect(category)}
  >
    <Card className="bg-green-800 border-green-700 hover:shadow-lg hover:shadow-green-300/20 transition-all duration-300 h-full overflow-hidden group cursor-pointer">
      <CardHeader className="bg-green-700 group-hover:bg-green-600 transition-colors duration-300">
        <CardTitle className="flex items-center text-green-100">
          <motion.div 
            className="p-3 rounded-full bg-green-600 group-hover:bg-green-500 transition-colors duration-300 mr-4"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {React.cloneElement(category.icon, { className: "h-6 w-6 text-green-200" })}
          </motion.div>
          <span className="text-xl font-bold">{category.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <ul className="space-y-2">
          {category.services.slice(0, 3).map((service, idx) => (
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

const ServiceDialog = ({ isOpen, onClose, service }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100 max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-300 flex items-center">
          {React.cloneElement(service?.icon, { className: "h-8 w-8 mr-4 text-green-400" })}
          {service?.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-green-200">
        <ul className="space-y-4 mt-4">
          {service?.services.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 mt-1">{React.cloneElement(item.icon, { className: "h-5 w-5 text-green-400" })}</span>
              <div>
                <h3 className="font-semibold text-green-300">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

const serviceCategories = [
  {
    title: "Full-Cycle Development",
    icon: <Code />,
    services: [
      { title: "Tech Stack Integration", icon: <Cpu />, description: "Seamlessly integrate diverse technologies to create powerful, scalable solutions." },
      { title: "Scalable Architecture", icon: <Network />, description: "Design robust architectures that grow with your business needs." },
      { title: "Performance Optimization", icon: <Zap />, description: "Enhance system performance for lightning-fast user experiences." },
      { title: "Blockchain Integration", icon: <GitBranch />, description: "Leverage blockchain technology for secure, transparent operations." }
    ]
  },
  {
    title: "Business Strategy",
    icon: <Briefcase />,
    services: [
      { title: "Business Model Design", icon: <PieChart />, description: "Craft innovative business models tailored to your market and goals." },
      { title: "Use Case Development", icon: <Target />, description: "Identify and develop compelling use cases for your technology." },
      { title: "Tokenomics Architecture", icon: <DollarSign />, description: "Design effective token economies for blockchain projects." },
      { title: "Strategic Partnerships", icon: <Users />, description: "Forge valuable partnerships to accelerate growth and innovation." }
    ]
  },
  {
    title: "Rapid Scaling",
    icon: <TrendingUp />,
    services: [
      { title: "Growth Hacking", icon: <Zap />, description: "Implement cutting-edge strategies for rapid user acquisition and retention." },
      { title: "Market Expansion", icon: <BarChart />, description: "Strategically enter new markets and expand your global footprint." },
      { title: "Efficiency Optimization", icon: <Target />, description: "Streamline operations to maximize productivity and minimize costs." },
      { title: "Agile Implementation", icon: <GitBranch />, description: "Adopt agile methodologies for faster, more flexible development cycles." }
    ]
  },
  {
    title: "Crisis Management",
    icon: <Shield />,
    services: [
      { title: "Emergency Response", icon: <Zap />, description: "Rapid, effective responses to critical situations to minimize impact." },
      { title: "Risk Mitigation", icon: <Shield />, description: "Identify and mitigate potential risks before they become crises." },
      { title: "Reputation Management", icon: <Users />, description: "Protect and enhance your brand's reputation during challenging times." },
      { title: "Recovery Planning", icon: <TrendingUp />, description: "Develop comprehensive plans for swift recovery post-crisis." }
    ]
  },
  {
    title: "Marketing & BD",
    icon: <Megaphone />,
    services: [
      { title: "Traffic Acquisition", icon: <Users />, description: "Implement strategies to drive high-quality traffic to your platforms." },
      { title: "Content Strategy", icon: <PieChart />, description: "Develop engaging content strategies to captivate and retain your audience." },
      { title: "Brand Development", icon: <Briefcase />, description: "Build a strong, recognizable brand that resonates with your target market." },
      { title: "Partnership Outreach", icon: <Handshake />, description: "Identify and secure strategic partnerships to amplify your reach." }
    ]
  },
  {
    title: "Investment Readiness",
    icon: <DollarSign />,
    services: [
      { title: "Due Diligence Prep", icon: <Briefcase />, description: "Prepare comprehensive documentation to satisfy investor scrutiny." },
      { title: "Pitch Deck Creation", icon: <PieChart />, description: "Craft compelling pitch decks that showcase your value proposition." },
      { title: "Financial Modeling", icon: <LineChart />, description: "Develop robust financial models to demonstrate growth potential." },
      { title: "Investor Relations", icon: <Users />, description: "Build and maintain strong relationships with potential and current investors." }
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-green-300 neon-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering projects with full-cycle development. We're your partners in creating, troubleshooting, and accelerating growth across all dimensions.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} index={index} onSelect={setSelectedService} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedService && (
          <ServiceDialog
            isOpen={!!selectedService}
            onClose={() => setSelectedService(null)}
            service={selectedService}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
