import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from 'framer-motion';
import { Code, BarChart, Briefcase, Zap, Shield, Cpu, GitBranch, Users, DollarSign, TrendingUp, Target, Megaphone, LineChart, PieChart, Network, Handshake } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const ServiceCard = ({ category, index, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, rotateY: 180 }}
    animate={{ opacity: 1, rotateY: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.05 }}
    onClick={() => onSelect(category)}
  >
    <Card className="bg-green-800 border-green-700 hover:shadow-lg hover:shadow-green-300/20 transition-all duration-300 h-full overflow-hidden group cursor-pointer">
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
    icon: <Code className="h-12 w-12 mb-4" />,
    services: [
      { title: "Tech Stack Integration", icon: <Cpu />, description: "Seamlessly integrate diverse technologies to create powerful, scalable solutions." },
      { title: "Scalable Architecture", icon: <Network />, description: "Design robust architectures that grow with your business needs." },
      { title: "Performance Optimization", icon: <Zap />, description: "Enhance system performance for lightning-fast user experiences." },
      { title: "Blockchain Integration", icon: <GitBranch />, description: "Leverage blockchain technology for secure, transparent operations." }
    ]
  },
  {
    title: "Business Strategy",
    icon: <Briefcase className="h-12 w-12 mb-4" />,
    services: [
      { title: "Business Model Design", icon: <PieChart />, description: "Craft innovative business models tailored to your market and goals." },
      { title: "Use Case Development", icon: <Target />, description: "Identify and develop compelling use cases for your technology." },
      { title: "Tokenomics Architecture", icon: <DollarSign />, description: "Design effective token economies for blockchain projects." },
      { title: "Strategic Partnerships", icon: <Users />, description: "Forge valuable partnerships to accelerate growth and innovation." }
    ]
  },
  {
    title: "Rapid Scaling",
    icon: <TrendingUp className="h-12 w-12 mb-4" />,
    services: [
      { title: "Growth Hacking", icon: <Zap />, description: "Implement cutting-edge strategies for rapid user acquisition and retention." },
      { title: "Market Expansion", icon: <BarChart />, description: "Strategically enter new markets and expand your global footprint." },
      { title: "Efficiency Optimization", icon: <Target />, description: "Streamline operations to maximize productivity and minimize costs." },
      { title: "Agile Implementation", icon: <GitBranch />, description: "Adopt agile methodologies for faster, more flexible development cycles." }
    ]
  },
  {
    title: "Crisis Management",
    icon: <Shield className="h-12 w-12 mb-4" />,
    services: [
      { title: "Emergency Response", icon: <Zap />, description: "Rapid, effective responses to critical situations to minimize impact." },
      { title: "Risk Mitigation", icon: <Shield />, description: "Identify and mitigate potential risks before they become crises." },
      { title: "Reputation Management", icon: <Users />, description: "Protect and enhance your brand's reputation during challenging times." },
      { title: "Recovery Planning", icon: <TrendingUp />, description: "Develop comprehensive plans for swift recovery post-crisis." }
    ]
  },
  {
    title: "Marketing & BD",
    icon: <Megaphone className="h-12 w-12 mb-4" />,
    services: [
      { title: "Traffic Acquisition", icon: <Users />, description: "Implement strategies to drive high-quality traffic to your platforms." },
      { title: "Content Strategy", icon: <PieChart />, description: "Develop engaging content strategies to captivate and retain your audience." },
      { title: "Brand Development", icon: <Briefcase />, description: "Build a strong, recognizable brand that resonates with your target market." },
      { title: "Partnership Outreach", icon: <Handshake />, description: "Identify and secure strategic partnerships to amplify your reach." }
    ]
  },
  {
    title: "Investment Readiness",
    icon: <DollarSign className="h-12 w-12 mb-4" />,
    services: [
      { title: "Due Diligence Prep", icon: <Briefcase />, description: "Prepare comprehensive documentation to satisfy investor scrutiny." },
      { title: "Pitch Deck Creation", icon: <PieChart />, description: "Craft compelling pitch decks that showcase your value proposition." },
      { title: "Financial Modeling", icon: <LineChart />, description: "Develop robust financial models to demonstrate growth potential." },
      { title: "Investor Relations", icon: <Users />, description: "Build and maintain strong relationships with potential and current investors." }
    ]
  }
];

const partners = [
  { name: "Line Messenger", logo: "/logos/line-messenger-logo.svg" },
  { name: "Supra Oracles", logo: "/logos/supra-oracles-logo.svg", description: "Decentralized oracle network providing real-time data for blockchain applications." },
  { name: "Coming Soon", logo: "/logos/coming-soon-logo.svg" },
  { name: "Coming Soon", logo: "/logos/coming-soon-logo.svg" },
];

const AboutUs = () => {
  const [selectedService, setSelectedService] = useState(null);

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
            <ServiceCard key={index} category={category} index={index} onSelect={setSelectedService} />
          ))}
        </div>

        <motion.h3
          className="text-4xl font-bold text-center mt-20 mb-10 text-green-300 neon-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Our Partners
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-green-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain mb-4" />
              <p className="text-center text-green-200 font-semibold">{partner.name}</p>
              {partner.description && (
                <p className="mt-2 text-sm text-center text-green-300">{partner.description}</p>
              )}
            </motion.div>
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

export default AboutUs;