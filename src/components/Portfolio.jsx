import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: "CeDeFiAi", 
      description: "An innovative all-in-one non-custodial asset management platform integrating CeFi and DeFi. Leveraging data-driven insights for optimal asset allocation and risk management. Features gamified user financial activation and real-time financial activities monitoring.",
      tags: ["Asset Management", "CeFi", "DeFi", "Gamification"],
      status: "Onboarding 10M+ users to advanced financial ecosystems"
    },
    { 
      title: "Claimr", 
      description: "A cutting-edge SocialFi project providing scalable, flexible infrastructure for user engagement and activation. Utilizes blockchain technology and data analytics for personalized user experiences.",
      tags: ["SocialFi", "Blockchain", "Data Analytics", "User Engagement"],
      status: "4M+ unique users engaged through data-driven strategies"
    },
    { 
      title: "ZombieTrain", 
      description: "An innovative app store game transitioning to a Telegram mini-app, focusing on user retention and engagement through advanced analytics and algorithmic optimization.",
      tags: ["Gaming", "User Retention", "Telegram Mini-App"],
      status: "20k DAU with data-driven user experience optimization"
    },
    { 
      title: "Data Layer", 
      description: "A state-of-the-art data infrastructure project supporting and enhancing our initiatives with advanced analytics, machine learning, and real-time insights. Enables data-driven decision-making across all platforms.",
      tags: ["Data Infrastructure", "ML", "Real-time Analytics", "Business Intelligence"],
      status: "Powering insights for millions of data points daily"
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
          Innovative Projects
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our cutting-edge development projects showcasing our expertise in data-driven technologies and innovation
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            >
              <Card className="bg-green-800 border-green-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-green-300">{project.title}</span>
                    <Badge variant="secondary" className="bg-green-600">{project.status}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-green-200">{project.description}</p>
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