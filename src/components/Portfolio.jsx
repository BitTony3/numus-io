import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: "CeDeFiAi", 
      description: "An all-in-one non-custodial asset management platform for CeFi and DeFi. Connect all your sources and never miss opportunities. Features gamified user financial activation and financial activities monitoring.",
      tags: ["Asset Management", "CeFi", "DeFi", "AI", "Gamification"],
      status: "Onboarding 10M+ users to crypto"
    },
    { 
      title: "Claimr", 
      description: "A SocialFi project providing scalable, flexible infrastructure for user engagement and activation.",
      tags: ["SocialFi", "User Engagement", "Scalable Infrastructure"],
      status: "4M+ unique users engaged"
    },
    { 
      title: "ZombieTrain", 
      description: "An app store game converting to a Telegram mini-app, focusing on user retention and engagement.",
      tags: ["Gaming", "Telegram Mini-App", "User Retention"],
      status: "20k DAU"
    },
    { 
      title: "Data Layer", 
      description: "A comprehensive data infrastructure project to support and enhance our other initiatives with advanced analytics and insights.",
      tags: ["Data Infrastructure", "Analytics", "Business Intelligence"],
      status: "In development"
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
          Projects in Progress
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-green-100"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our current development projects that showcase our expertise in various tech domains
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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