import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Code, Briefcase, TrendingUp, Shield, Megaphone, DollarSign } from 'lucide-react';

const ServiceCard = ({ category, onSelect }) => (
  <Card className="bg-green-800 border-green-700 hover:shadow-lg hover:shadow-green-300/20 transition-all duration-300 h-full overflow-hidden group cursor-pointer" onClick={() => onSelect(category)}>
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
);

const ServiceDialog = ({ isOpen, onClose, service }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-300">{service?.title}</DialogTitle>
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
      { title: "Tech Stack Integration", icon: <Code />, description: "Seamlessly integrate diverse technologies to create powerful, scalable solutions." },
      { title: "Scalable Architecture", icon: <Code />, description: "Design robust architectures that grow with your business needs." },
      { title: "Performance Optimization", icon: <Code />, description: "Enhance system performance for lightning-fast user experiences." },
      { title: "Blockchain Integration", icon: <Code />, description: "Leverage blockchain technology for secure, transparent operations." }
    ]
  },
  {
    title: "Business Strategy",
    icon: <Briefcase />,
    services: [
      { title: "Business Model Design", icon: <Briefcase />, description: "Craft innovative business models tailored to your market and goals." },
      { title: "Use Case Development", icon: <Briefcase />, description: "Identify and develop compelling use cases for your technology." },
      { title: "Tokenomics Architecture", icon: <Briefcase />, description: "Design effective token economies for blockchain projects." },
      { title: "Strategic Partnerships", icon: <Briefcase />, description: "Forge valuable partnerships to accelerate growth and innovation." }
    ]
  },
  {
    title: "Rapid Scaling",
    icon: <TrendingUp />,
    services: [
      { title: "Growth Hacking", icon: <TrendingUp />, description: "Implement cutting-edge strategies for rapid user acquisition and retention." },
      { title: "Market Expansion", icon: <TrendingUp />, description: "Strategically enter new markets and expand your global footprint." },
      { title: "Efficiency Optimization", icon: <TrendingUp />, description: "Streamline operations to maximize productivity and minimize costs." },
      { title: "Agile Implementation", icon: <TrendingUp />, description: "Adopt agile methodologies for faster, more flexible development cycles." }
    ]
  },
  {
    title: "Crisis Management",
    icon: <Shield />,
    services: [
      { title: "Emergency Response", icon: <Shield />, description: "Rapid, effective responses to critical situations to minimize impact." },
      { title: "Risk Mitigation", icon: <Shield />, description: "Identify and mitigate potential risks before they become crises." },
      { title: "Reputation Management", icon: <Shield />, description: "Protect and enhance your brand's reputation during challenging times." },
      { title: "Recovery Planning", icon: <Shield />, description: "Develop comprehensive plans for swift recovery post-crisis." }
    ]
  },
  {
    title: "Marketing & BD",
    icon: <Megaphone />,
    services: [
      { title: "Traffic Acquisition", icon: <Megaphone />, description: "Implement strategies to drive high-quality traffic to your platforms." },
      { title: "Content Strategy", icon: <Megaphone />, description: "Develop engaging content strategies to captivate and retain your audience." },
      { title: "Brand Development", icon: <Megaphone />, description: "Build a strong, recognizable brand that resonates with your target market." },
      { title: "Partnership Outreach", icon: <Megaphone />, description: "Identify and secure strategic partnerships to amplify your reach." }
    ]
  },
  {
    title: "Investment Readiness",
    icon: <DollarSign />,
    services: [
      { title: "Due Diligence Prep", icon: <DollarSign />, description: "Prepare comprehensive documentation to satisfy investor scrutiny." },
      { title: "Pitch Deck Creation", icon: <DollarSign />, description: "Craft compelling pitch decks that showcase your value proposition." },
      { title: "Financial Modeling", icon: <DollarSign />, description: "Develop robust financial models to demonstrate growth potential." },
      { title: "Investor Relations", icon: <DollarSign />, description: "Build and maintain strong relationships with potential and current investors." }
    ]
  }
];

const Carousel = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 p-2 md:w-1/3">
              {renderItem(item)}
            </div>
          ))}
        </motion.div>
      </div>
      <Button 
        className="absolute top-1/2 -left-4 md:left-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 md:p-3" 
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>
      <Button 
        className="absolute top-1/2 -right-4 md:right-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 md:p-3" 
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>
    </div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="py-16 bg-green-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-300 neon-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hyper Matrix Solutions
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-center mb-10 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering projects with full-cycle development. We're your partners in creating, troubleshooting, and accelerating growth across all dimensions.
        </motion.p>
        <Carousel
          items={serviceCategories}
          renderItem={(category) => (
            <ServiceCard category={category} onSelect={setSelectedService} />
          )}
        />
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
