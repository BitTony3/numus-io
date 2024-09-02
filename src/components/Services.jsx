import React, { useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, useAnimation, useInView } from 'framer-motion';
import { Code, BarChart, Briefcase, Zap, Shield, Cpu, GitBranch, Users, DollarSign, TrendingUp, Target, Megaphone, LineChart, PieChart, Network, Handshake } from 'lucide-react';

const ServiceCard = ({ category, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, rotateY: 0, transition: { duration: 0.5, delay: index * 0.1 } },
        hidden: { opacity: 0, rotateY: -90 }
      }}
    >
      <Card className="bg-green-900 border-green-700 hover:shadow-lg hover:shadow-green-300/20 transition-all duration-300 h-full overflow-hidden">
        <CardHeader className="bg-green-800">
          <CardTitle className="flex flex-col items-center text-green-300">
            <div className="p-3 rounded-full bg-green-700">
              {React.cloneElement(category.icon, { className: "h-8 w-8 text-green-300" })}
            </div>
            <span className="mt-4 text-xl font-bold">{category.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4">
          <ul className="space-y-2">
            {category.services.map((service, idx) => (
              <li key={idx} className="flex items-center text-green-300">
                <span className="mr-2">{React.cloneElement(service.icon, { className: "h-4 w-4" })}</span>
                {service.title}
              </li>
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
        { title: "Due Diligence Preparation", icon: <Briefcase /> },
        { title: "Pitch Deck Creation", icon: <PieChart /> },
        { title: "Financial Modeling", icon: <LineChart /> },
        { title: "Investor Relations", icon: <Users /> }
      ]
    }
  ];

  return (
    <section className="py-20 bg-green-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-green-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hyper Matrix Solutions
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering your project with full-cycle development, from concept to scale. We're your partners in creating, troubleshooting, and accelerating business growth across all dimensions.
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