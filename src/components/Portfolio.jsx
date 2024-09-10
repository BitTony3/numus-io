import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project, onSelect }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    onClick={() => onSelect(project)}
  >
    <Card className="futuristic-card h-full cursor-pointer">
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
);

const ProjectDialog = ({ isOpen, onClose, project }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100 max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold text-green-300 flex items-center">
          <img src={project?.logo} alt={`${project?.title} logo`} className="w-10 h-10 mr-3" />
          {project?.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-green-200">
        <p className="text-lg mb-4">{project?.description}</p>
        <h3 className="text-xl font-semibold text-green-300 mb-2">Key Features:</h3>
        <ul className="list-disc list-inside mb-4">
          {project?.features.map((feature, index) => (
            <li key={index} className="mb-2">{feature}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold text-green-300 mb-2">Technologies Used:</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project?.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="border-green-500 text-green-400">{tech}</Badge>
          ))}
        </div>
        <p className="text-lg font-semibold text-green-300">Current Status: <span className="text-green-100">{project?.status}</span></p>
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "CeDeFiAi",
      description: "All-in-one asset management platform integrating CeFi and DeFi. Data-driven insights for optimal allocation.",
      tags: ["Asset Management", "CeFi", "DeFi"],
      status: "9M+ users onboarded",
      logo: "/logos/cedefiai-logo.svg",
      features: [
        "AI-powered asset allocation",
        "Real-time market analysis",
        "Automated portfolio rebalancing",
        "Cross-chain asset management"
      ],
      technologies: ["React", "Node.js", "TensorFlow", "Solidity", "GraphQL"]
    },
    { 
      title: "Claimr",
      description: "SocialFi project providing scalable infrastructure for user engagement. Utilizes blockchain for personalized experiences.",
      tags: ["SocialFi", "Blockchain"],
      status: "3.6M+ unique users engaged",
      logo: "/logos/claimr-logo.svg",
      features: [
        "Decentralized social network",
        "Token-based reward system",
        "Content monetization",
        "Personalized user feeds"
      ],
      technologies: ["Vue.js", "Rust", "Polkadot", "IPFS", "WebAssembly"]
    },
    { 
      title: "ZombieTrain",
      description: "Innovative app store game transitioning to a Telegram mini-app. Focuses on user retention through advanced analytics.",
      tags: ["Gaming", "User Retention"],
      status: "18k DAU with optimized UX",
      logo: "/logos/zombietrain-logo.svg",
      features: [
        "Cross-platform gameplay",
        "In-game economy",
        "Social features",
        "AI-driven difficulty adjustment"
      ],
      technologies: ["Unity", "C#", "Firebase", "Telegram Bot API", "Python"]
    },
    { 
      title: "Data Layer",
      description: "State-of-the-art data infrastructure supporting our initiatives. Enables real-time insights across platforms.",
      tags: ["Data Infrastructure", "Analytics"],
      status: "Processing millions of data points daily",
      logo: "/logos/datalayer-logo.svg",
      features: [
        "Real-time data processing",
        "Machine learning pipeline",
        "Data visualization dashboard",
        "Predictive analytics"
      ],
      technologies: ["Apache Kafka", "Spark", "Elasticsearch", "Tableau", "Python"]
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
            <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDialog
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;