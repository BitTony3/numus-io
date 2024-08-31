import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    { 
      title: "TechStack", 
      description: "A comprehensive platform offering customizable tech stacks for diverse project needs.",
      tags: ["SaaS", "Developer Tools", "Cloud Infrastructure"],
      status: "Launched"
    },
    { 
      title: "ArchitectAI", 
      description: "AI-powered architecture consulting tool for optimizing system designs and scalability.",
      tags: ["AI", "Software Architecture", "Consulting"],
      status: "Beta"
    },
    { 
      title: "SecureChain", 
      description: "Advanced blockchain solution with enhanced security features for enterprise applications.",
      tags: ["Blockchain", "Enterprise", "Cybersecurity"],
      status: "Acceleration"
    },
    { 
      title: "CloudNative", 
      description: "Suite of cloud-native development tools and services for modern application architectures.",
      tags: ["Cloud Computing", "DevOps", "Microservices"],
      status: "Scaling"
    },
    { 
      title: "DataFlow", 
      description: "Real-time data processing and analytics platform for big data applications.",
      tags: ["Big Data", "Analytics", "Stream Processing"],
      status: "Incubation"
    },
    { 
      title: "APIForge", 
      description: "Comprehensive API development and management platform for seamless integrations.",
      tags: ["API", "Integration", "Developer Tools"],
      status: "Growth"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Discover the innovative projects powered by Numus and CeDeFiAi technology</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{project.title}</span>
                  <Badge variant="secondary">{project.status}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
