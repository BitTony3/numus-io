import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    { 
      title: "CeDeFiAi", 
      description: "All-in-one asset management platform integrating CeFi and DeFi. Data-driven insights for optimal allocation.",
      tags: ["Asset Management", "CeFi", "DeFi"],
      status: "9M+ users onboarded",
      logo: "/logos/cedefiai-logo.svg"
    },
    { 
      title: "Claimr", 
      description: "SocialFi project providing scalable infrastructure for user engagement. Utilizes blockchain for personalized experiences.",
      tags: ["SocialFi", "Blockchain"],
      status: "3.6M+ unique users engaged",
      logo: "/logos/claimr-logo.svg"
    },
    { 
      title: "ZombieTrain", 
      description: "Innovative app store game transitioning to a Telegram mini-app. Focuses on user retention through advanced analytics.",
      tags: ["Gaming", "User Retention"],
      status: "18k DAU with optimized UX",
      logo: "/logos/zombietrain-logo.svg"
    },
    { 
      title: "Data Layer", 
      description: "State-of-the-art data infrastructure supporting our initiatives. Enables real-time insights across platforms.",
      tags: ["Data Infrastructure", "Analytics"],
      status: "Processing millions of data points daily",
      logo: "/logos/datalayer-logo.svg"
    }
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 futuristic-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Innovative Projects
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-10 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our cutting-edge projects showcasing expertise in data-driven tech and innovation
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
              <Card className="futuristic-card h-full">
                <CardHeader className="relative">
                  <motion.img
                    src={project.logo}
                    alt={`${project.title} logo`}
                    className="w-16 h-16 absolute top-4 right-4"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <CardTitle className="flex justify-between items-center">
                    <span className="text-green-400 text-2xl">{project.title}</span>
                  </CardTitle>
                  <Badge variant="secondary" className="bg-green-700 text-white mt-2">{project.status}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="border-green-500 text-green-400">{tag}</Badge>
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