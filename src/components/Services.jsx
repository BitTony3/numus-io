import React, { useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Gauge, Rocket, Zap, Shield, Cpu, Code, Database, Cloud, GitBranch, Wifi, Layers, BarChart, Briefcase, Users, DollarSign, HomeIcon, Phone, TrendingUp, Target, Megaphone, LineChart, BarChart2, PieChart, Database as DatabaseIcon } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

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
      <Card className="bg-green-100 border-green-200 hover:shadow-lg hover:shadow-green-300/20 transition-all duration-300 h-full">
        <CardHeader>
          <CardTitle className="flex flex-col items-center text-green-800">
            <div className="p-3 rounded-full bg-green-200">
              {React.cloneElement(category.icon, { className: "h-8 w-8 text-green-600" })}
            </div>
            <span className="mt-4 text-xl font-bold">{category.title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {category.services.map((service, idx) => (
              <li key={idx} className="flex items-center text-green-700">
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
      title: "Technical Services",
      icon: <Cpu className="h-12 w-12 mb-4" />,
      services: [
        { title: "Advanced Tech Stack Integration", icon: <Rocket /> },
        { title: "Scalable Architecture Design", icon: <Cpu /> },
        { title: "Performance Optimization", icon: <Code /> },
        { title: "Cloud Infrastructure Solutions", icon: <Cloud /> }
      ]
    },
    {
      title: "Business Development",
      icon: <Briefcase className="h-12 w-12 mb-4" />,
      services: [
        { title: "Strategic Partnership Development", icon: <Users /> },
        { title: "Business Model Optimization", icon: <BarChart /> },
        { title: "Startup Acceleration", icon: <Zap /> },
        { title: "Market Entry Strategy", icon: <Gauge /> }
      ]
    },
    {
      title: "Financial",
      icon: <DollarSign className="h-12 w-12 mb-4" />,
      services: [
        { title: "Tokenomics Architecture", icon: <DollarSign /> },
        { title: "Smart Contract Development", icon: <Code /> },
        { title: "Blockchain Integration", icon: <GitBranch /> },
        { title: "DeFi Platform Development", icon: <Briefcase /> }
      ]
    },
    {
      title: "Security & Compliance",
      icon: <Shield className="h-12 w-12 mb-4" />,
      services: [
        { title: "Advanced Security Implementation", icon: <Shield /> },
        { title: "Regulatory Compliance Management", icon: <AlertTriangle /> },
        { title: "Comprehensive Security Audits", icon: <Wifi /> },
        { title: "Disaster Recovery Strategy", icon: <Layers /> }
      ]
    },
    {
      title: "Marketing & Production",
      icon: <TrendingUp className="h-12 w-12 mb-4" />,
      services: [
        { title: "Direct Traffic Activation", icon: <Target /> },
        { title: "Content Strategy & Production", icon: <Megaphone /> },
        { title: "Performance Marketing", icon: <LineChart /> },
        { title: "Brand Development", icon: <Briefcase /> }
      ]
    },
    {
      title: "Data & Analytics",
      icon: <BarChart2 className="h-12 w-12 mb-4" />,
      services: [
        { title: "Big Data Architecture", icon: <DatabaseIcon /> },
        { title: "Advanced Analytics", icon: <PieChart /> },
        { title: "Data Visualization", icon: <BarChart /> },
        { title: "Data Governance & Compliance", icon: <Shield /> }
      ]
    }
  ];

  return (
    <section className="py-20 bg-green-800 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 text-green-200"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Eco-Tech Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-100"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Cultivate innovation and grow your digital presence with our comprehensive suite of eco-friendly tech services. From sustainable solutions to green tech implementation, we're your partners in creating a greener digital future.
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
