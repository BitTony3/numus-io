import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Rocket, Briefcase, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';

const serviceCategories = [
  {
    title: "Full-Cycle Development",
    icon: <Rocket />,
    services: [
      { title: "Cross-Chain Integration", icon: <Rocket />, description: "Connect projects to TON, Solana, Tron, and EVM chains for enhanced liquidity and reach." },
      { title: "CeDeFiAi Integration", icon: <Rocket />, description: "Leverage our flagship project for cross-chain aggregation and traffic coordination." },
      { title: "Rapid Execution", icon: <Rocket />, description: "6-week preparation cycles to transform ventures into market-ready solutions." },
      { title: "Technical Innovation", icon: <Rocket />, description: "Cutting-edge blockchain solutions tailored to your project's needs." }
    ]
  },
  {
    title: "Portfolio Optimization",
    icon: <Briefcase />,
    services: [
      { title: "Cost Optimization", icon: <Briefcase />, description: "Reduce burn rates and optimize operational costs for portfolio projects." },
      { title: "Funding Preparation", icon: <Briefcase />, description: "Prepare projects for significant funding rounds and growth opportunities." },
      { title: "Strategic Refinement", icon: <Briefcase />, description: "Troubleshoot and refine existing projects to enhance their market potential." },
      { title: "Data-Driven Insights", icon: <Briefcase />, description: "Leverage our expansive data ecosystem for informed decision-making." }
    ]
  },
  {
    title: "Incubation & Acceleration",
    icon: <TrendingUp />,
    services: [
      { title: "Ecosystem Alignment", icon: <TrendingUp />, description: "Create mutual ecosystem alignments to amplify revenue and user engagement." },
      { title: "Incentivization Pools", icon: <TrendingUp />, description: "Design and implement incentive structures to drive rapid growth." },
      { title: "Marketing Ecosystems", icon: <TrendingUp />, description: "Develop comprehensive marketing strategies leveraging our network." },
      { title: "Early-Stage Acceleration", icon: <TrendingUp />, description: "Transform promising ideas into thriving ventures with our support." }
    ]
  },
  {
    title: "Strategic Partnerships",
    icon: <Zap />,
    services: [
      { title: "VC Collaboration", icon: <Zap />, description: "Partner with VCs to enhance portfolio value and identify high-potential projects." },
      { title: "Investor Synergies", icon: <Zap />, description: "Create synergies between investors and projects for mutual growth." },
      { title: "Joint Ventures", icon: <Zap />, description: "Explore joint venture opportunities to leverage combined strengths." },
      { title: "Ecosystem Expansion", icon: <Zap />, description: "Expand your reach and impact through our extensive partner network." }
    ]
  },
  {
    title: "Traffic Activation",
    icon: <Shield />,
    services: [
      { title: "User Acquisition", icon: <Shield />, description: "Tap into our network of 150M+ users for rapid user acquisition." },
      { title: "Cross-Platform Integration", icon: <Shield />, description: "Integrate with web and Telegram mini apps for wider reach." },
      { title: "Engagement Strategies", icon: <Shield />, description: "Implement proven strategies to boost user engagement and retention." },
      { title: "Data-Driven Targeting", icon: <Shield />, description: "Utilize our deep data layers for precise user targeting and growth." }
    ]
  },
  {
    title: "Investment Opportunities",
    icon: <DollarSign />,
    services: [
      { title: "High-Growth Projects", icon: <DollarSign />, description: "Access to a curated portfolio of high-potential blockchain projects." },
      { title: "Cross-Chain Investments", icon: <DollarSign />, description: "Diversify investments across multiple blockchain ecosystems." },
      { title: "Early Access", icon: <DollarSign />, description: "Get early access to promising projects incubated by Numus." },
      { title: "Strategic Co-Investments", icon: <DollarSign />, description: "Participate in strategic co-investment opportunities with Numus." }
    ]
  }
];

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
    <DialogContent className="bg-green-800 text-green-100 max-w-3xl max-h-[80vh] overflow-y-auto">
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

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % serviceCategories.length);
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + serviceCategories.length) % serviceCategories.length);
  };

  return (
    <section className="py-16 bg-green-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-green-300 neon-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus Venture Studio Services
        </motion.h2>
        <motion.p 
          className="text-base md:text-lg text-center mb-10 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering VCs, investors, and hedge funds with a full-cycle venture ecosystem. We accelerate growth, incubate innovation, and refine portfolios across the Web3 landscape.
        </motion.p>
        <div className="relative">
          <div className="overflow-x-auto pb-4">
            <motion.div
              className="flex"
              animate={{ x: `${-startIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{ width: `${serviceCategories.length * 100}%` }}
            >
              {serviceCategories.map((category, index) => (
                <div key={index} className="w-full md:w-1/3 flex-shrink-0 p-2">
                  <ServiceCard category={category} onSelect={setSelectedService} />
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
