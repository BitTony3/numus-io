import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Briefcase, TrendingUp, Shield, Zap, DollarSign } from 'lucide-react';

const AboutUs = () => {
  const services = [
    { icon: Rocket, title: "Full-Cycle Development", description: "From concept to launch, we accelerate project development across multiple blockchains." },
    { icon: Briefcase, title: "Portfolio Optimization", description: "We refine and enhance existing projects to maximize their market potential and efficiency." },
    { icon: TrendingUp, title: "Incubation & Acceleration", description: "Nurturing early-stage projects and rapidly scaling promising ventures." },
    { icon: Zap, title: "Strategic Partnerships", description: "Facilitating synergies between investors, projects, and industry leaders." },
    { icon: Shield, title: "Traffic Activation", description: "Leveraging our network of 150M+ users for rapid user acquisition and engagement." },
    { icon: DollarSign, title: "Investment Opportunities", description: "Curated access to high-potential blockchain projects and strategic co-investments." },
  ];

  return (
    <div className="min-h-screen bg-futuristic-900 text-futuristic-100">
      <AnimatedBackground>
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold text-center mb-8 text-futuristic-300"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Numus Venture Studio
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 max-w-3xl mx-auto text-futuristic-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Numus positions itself as an outsourced action arm for VCs, investors, hedge funds, and product owners in the blockchain space. We provide comprehensive solutions to accelerate growth, incubate innovation, and refine portfolios across the Web3 landscape.
            </motion.p>
            <h2 className="text-3xl font-bold text-center mb-8 text-futuristic-300">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-futuristic-800 border-futuristic-600 h-full">
                    <CardContent className="p-6 flex flex-col items-center">
                      <service.icon className="w-12 h-12 text-futuristic-400 mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-futuristic-300">{service.title}</h3>
                      <p className="text-futuristic-100 text-center">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </AnimatedBackground>
    </div>
  );
};

export default AboutUs;
