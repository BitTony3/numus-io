import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Rocket, Briefcase, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const serviceCategories = [
  {
    title: "Full-Cycle Development",
    icon: <Rocket />,
    services: [
      { title: "Cross-Chain Integration", description: "Connect projects to TON, Solana, Tron, and EVM chains for enhanced liquidity and reach." },
      { title: "CeDeFiAi Integration", description: "Leverage our flagship project for cross-chain aggregation and traffic coordination." },
      { title: "Rapid Execution", description: "6-week preparation cycles to transform ventures into market-ready solutions." },
      { title: "Technical Innovation", description: "Cutting-edge blockchain solutions tailored to your project's needs." }
    ]
  },
  {
    title: "Portfolio Optimization",
    icon: <Briefcase />,
    services: [
      { title: "Cost Optimization", description: "Reduce burn rates and optimize operational costs for portfolio projects." },
      { title: "Funding Preparation", description: "Prepare projects for significant funding rounds and growth opportunities." },
      { title: "Strategic Refinement", description: "Troubleshoot and refine existing projects to enhance their market potential." },
      { title: "Data-Driven Insights", description: "Leverage our expansive data ecosystem for informed decision-making." }
    ]
  },
  {
    title: "Incubation & Acceleration",
    icon: <TrendingUp />,
    services: [
      { title: "Ecosystem Alignment", description: "Create mutual ecosystem alignments to amplify revenue and user engagement." },
      { title: "Incentivization Pools", description: "Design and implement incentive structures to drive rapid growth." },
      { title: "Marketing Ecosystems", description: "Develop comprehensive marketing strategies leveraging our network." },
      { title: "Early-Stage Acceleration", description: "Transform promising ideas into thriving ventures with our support." }
    ]
  },
  {
    title: "Strategic Partnerships",
    icon: <Zap />,
    services: [
      { title: "VC Collaboration", description: "Partner with VCs to enhance portfolio value and identify high-potential projects." },
      { title: "Investor Synergies", description: "Create synergies between investors and projects for mutual growth." },
      { title: "Joint Ventures", description: "Explore joint venture opportunities to leverage combined strengths." },
      { title: "Ecosystem Expansion", description: "Expand your reach and impact through our extensive partner network." }
    ]
  },
  {
    title: "Traffic Activation",
    icon: <Shield />,
    services: [
      { title: "User Acquisition", description: "Tap into our network of 150M+ users for rapid user acquisition." },
      { title: "Cross-Platform Integration", description: "Integrate with web and Telegram mini apps for wider reach." },
      { title: "Engagement Strategies", description: "Implement proven strategies to boost user engagement and retention." },
      { title: "Data-Driven Targeting", description: "Utilize our deep data layers for precise user targeting and growth." }
    ]
  },
  {
    title: "Investment Opportunities",
    icon: <DollarSign />,
    services: [
      { title: "High-Growth Projects", description: "Access to a curated portfolio of high-potential blockchain projects." },
      { title: "Cross-Chain Investments", description: "Diversify investments across multiple blockchain ecosystems." },
      { title: "Early Access", description: "Get early access to promising projects incubated by Numus." },
      { title: "Strategic Co-Investments", description: "Participate in strategic co-investment opportunities with Numus." }
    ]
  }
];

const ServiceCard = ({ category, onSelect }) => (
  <motion.div
    className="bg-green-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
    whileHover={{ y: -5 }}
    onClick={() => onSelect(category)}
  >
    <div className="p-6">
      <motion.div 
        className="w-16 h-16 mx-auto mb-4 bg-green-600 rounded-full flex items-center justify-center"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.5 }}
      >
        {React.cloneElement(category.icon, { className: "w-8 h-8 text-white" })}
      </motion.div>
      <h3 className="text-xl font-bold text-center text-green-300 mb-2">{category.title}</h3>
      <ul className="space-y-2">
        {category.services.slice(0, 2).map((service, idx) => (
          <li key={idx} className="text-green-200 text-sm flex items-center">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            {service.title}
          </li>
        ))}
      </ul>
      {category.services.length > 2 && (
        <p className="text-green-400 text-sm mt-2 text-center">+{category.services.length - 2} more</p>
      )}
    </div>
  </motion.div>
);

const ServiceDialog = ({ isOpen, onClose, service }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100 max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-green-300 flex items-center">
          {React.cloneElement(service?.icon, { className: "w-8 h-8 mr-3 text-green-400" })}
          {service?.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-green-200">
        <ul className="space-y-4 mt-4">
          {service?.services.map((item, index) => (
            <motion.li 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></span>
              <div>
                <h3 className="font-semibold text-green-300">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(max-width: 1024px)');

  const visibleServices = isMobile ? 1 : isTablet ? 2 : 3;

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
          <motion.div
            className="flex transition-all duration-500 ease-in-out"
            animate={{ x: `calc(-${startIndex * (100 / visibleServices)}%)` }}
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={index}
                className={`w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-4`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard category={category} onSelect={setSelectedService} />
              </motion.div>
            ))}
          </motion.div>
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
      <ServiceDialog
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        service={selectedService}
      />
    </section>
  );
};

export default Services;
