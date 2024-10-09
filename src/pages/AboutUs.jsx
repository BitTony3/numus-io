import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, TrendingUp, Shield, Zap, DollarSign, Users, Globe } from 'lucide-react';

const AboutUs = () => {
  const services = [
    { icon: Rocket, title: "Full-Cycle Development", description: "From concept to launch, we accelerate project development across multiple blockchains." },
    { icon: Briefcase, title: "Portfolio Optimization", description: "We refine and enhance existing projects to maximize their market potential and efficiency." },
    { icon: TrendingUp, title: "Incubation & Acceleration", description: "Nurturing early-stage projects and rapidly scaling promising ventures." },
    { icon: Zap, title: "Strategic Partnerships", description: "Facilitating synergies between investors, projects, and industry leaders." },
    { icon: Shield, title: "Traffic Activation", description: "Leveraging our network of 150M+ users for rapid user acquisition and engagement." },
    { icon: DollarSign, title: "Investment Opportunities", description: "Curated access to high-potential blockchain projects and strategic co-investments." },
  ];

  const stats = [
    { icon: Users, value: "150M+", label: "User Network" },
    { icon: Globe, value: "50+", label: "Blockchain Ecosystems" },
    { icon: Briefcase, value: "$300M+", label: "Portfolio Worth" },
    { icon: Rocket, value: "50+", label: "dApps Aggregated" },
  ];

  return (
    <Layout
      title="About Numus Venture Studio"
      description="Accelerating growth, incubating innovation, and refining portfolios across the Web3 landscape"
    >
      <div className="container mx-auto px-4 py-8 md:py-16">
        <motion.div
          className="grid grid-cols-2 gap-4 mb-8 md:mb-16 mt-[10%] sm:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="bg-futuristic-800 border-futuristic-600">
              <CardContent className="p-3 md:p-6 flex flex-col items-center">
                <stat.icon className="w-6 h-6 md:w-12 md:h-12 text-futuristic-400 mb-1 md:mb-4" />
                <span className="text-lg md:text-3xl font-bold text-futuristic-300">{stat.value}</span>
                <span className="text-xs md:text-sm text-futuristic-200 text-center">{stat.label}</span>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-futuristic-300">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-futuristic-800 border-futuristic-600 h-full hover:shadow-lg hover:shadow-futuristic-500/20 transition-all duration-300">
                <CardContent className="p-4 md:p-6 flex flex-col items-center">
                  <service.icon className="w-8 h-8 md:w-12 md:h-12 text-futuristic-400 mb-2 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-futuristic-300 text-center">{service.title}</h3>
                  <p className="text-sm md:text-base text-futuristic-100 text-center">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;