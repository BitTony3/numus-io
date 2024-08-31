import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: "EcoStack", 
      description: "A sustainable platform offering customizable green tech stacks for diverse eco-friendly project needs.",
      tags: ["SaaS", "Green Computing", "Sustainable Infrastructure"],
      status: "Launched"
    },
    { 
      title: "GreenMind AI", 
      description: "AI-powered sustainability consulting tool for optimizing eco-friendly system designs.",
      tags: ["AI", "Green Architecture", "Consulting"],
      status: "Beta"
    },
    { 
      title: "EcoChain", 
      description: "Energy-efficient blockchain solution with enhanced security features for sustainable enterprise applications.",
      tags: ["Blockchain", "Enterprise", "Green Cybersecurity"],
      status: "Acceleration"
    },
    { 
      title: "EcoNative", 
      description: "Suite of eco-friendly development tools and services for modern green application architectures.",
      tags: ["Green Computing", "EcoOps", "Microservices"],
      status: "Scaling"
    },
    { 
      title: "GreenFlow", 
      description: "Energy-efficient real-time data processing and analytics platform for big data applications.",
      tags: ["Green Data", "Eco Analytics", "Efficient Processing"],
      status: "Incubation"
    },
    { 
      title: "EcoForge", 
      description: "Comprehensive API development and management platform for seamless green tech integrations.",
      tags: ["Green API", "Integration", "Eco Developer Tools"],
      status: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-green-300"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Green Tech Portfolio
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-green-100"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the innovative eco-friendly projects powered by Numus technology
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-green-800 border-green-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-green-300">{project.title}</span>
                    <Badge variant="secondary" className="bg-green-600">{project.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-green-100">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-green-500 text-green-300">{tag}</Badge>
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
