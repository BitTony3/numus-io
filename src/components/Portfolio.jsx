import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: "Nebula Stack", 
      description: "A cosmic platform offering customizable tech stacks for diverse intergalactic project needs.",
      tags: ["SaaS", "Quantum Computing", "Stellar Infrastructure"],
      status: "Launched"
    },
    { 
      title: "GalaxyMind AI", 
      description: "AI-powered architecture consulting tool for optimizing system designs across the universe.",
      tags: ["AI", "Cosmic Architecture", "Consulting"],
      status: "Beta"
    },
    { 
      title: "AstroChain", 
      description: "Advanced blockchain solution with enhanced security features for interplanetary enterprise applications.",
      tags: ["Blockchain", "Enterprise", "Cosmic Cybersecurity"],
      status: "Acceleration"
    },
    { 
      title: "StarNative", 
      description: "Suite of star-native development tools and services for modern space-age application architectures.",
      tags: ["Nebula Computing", "AstroOps", "Microservices"],
      status: "Scaling"
    },
    { 
      title: "CosmicFlow", 
      description: "Real-time data processing and analytics platform for big bang data applications.",
      tags: ["Galactic Data", "Stellar Analytics", "Wormhole Processing"],
      status: "Incubation"
    },
    { 
      title: "QuasarForge", 
      description: "Comprehensive API development and management platform for seamless intergalactic integrations.",
      tags: ["Quantum API", "Integration", "Cosmic Developer Tools"],
      status: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Cosmic Portfolio
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the innovative projects powered by Numus technology across the galaxy
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{project.title}</span>
                    <Badge variant="secondary" className="bg-blue-600">{project.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-purple-500 text-purple-300">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
