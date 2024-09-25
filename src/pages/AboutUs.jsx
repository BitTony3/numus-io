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
    <div className="min-h-screen bg-green-900">
      <AnimatedBackground>
        <Header />
        <main className="py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-4xl font-bold text-center mb-8 title-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Numus Venture Studio
            </motion.h1>
            <motion.p
              className="text-xl text-center mb-12 max-w-3xl mx-auto text-green-200"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Numus positions itself as an outsourced action arm for VCs, investors, hedge funds, and product owners in the blockchain space. We provide comprehensive solutions to accelerate growth, incubate innovation, and refine portfolios across the Web3 landscape.
            </motion.p>
            <motion.div
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="bg-green-800 border-green-600">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-green-300">Our Flagship Product: CeDeFiAi</h2>
                  <p className="text-green-100">
                    CeDeFiAi is our cutting-edge cross-chain liquidity aggregator and yield farming platform. Connected to 20+ blockchains and integrated with centralized exchanges, it enables us to:
                  </p>
                  <ul className="list-disc list-inside mt-4 text-green-200">
                    <li>Manage and monitor assets across multiple chains and centralized exchanges, creating a full portfolio management system</li>
                    <li>Provide seamless trading experiences through web and Telegram mini apps</li>
                    <li>Offer unique investment opportunities across various blockchain ecosystems and traditional markets</li>
                    <li>Coordinate traffic exchange for over 150M users</li>
                    <li>Leverage deep data layers from exchanges and user activities for strategic insights</li>
                    <li>Allow for abstraction in crypto asset management, bridging the gap between DeFi and CeFi</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <h2 className="text-3xl font-bold text-center mb-8 title-text">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-green-800 border-green-600 h-full">
                    <CardContent className="p-6 flex flex-col items-center">
                      <service.icon className="w-12 h-12 text-green-400 mb-4" />
                      <h3 className="text-xl font-bold mb-2 text-green-300">{service.title}</h3>
                      <p className="text-green-100 text-center">{service.description}</p>
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
