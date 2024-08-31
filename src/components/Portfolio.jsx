import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    { 
      title: "TechInnovate", 
      description: "AI-powered productivity platform revolutionizing task management and team collaboration.",
      tags: ["AI", "SaaS", "Productivity"],
      status: "Series A"
    },
    { 
      title: "GreenEnergy", 
      description: "Innovative renewable energy solutions for sustainable urban development.",
      tags: ["CleanTech", "IoT", "Sustainability"],
      status: "Seed"
    },
    { 
      title: "HealthTech", 
      description: "Cutting-edge telemedicine and health monitoring platform for remote patient care.",
      tags: ["HealthTech", "AI", "Mobile"],
      status: "Series B"
    },
    { 
      title: "FinTech Revolution", 
      description: "Blockchain-based financial services democratizing access to banking and investments.",
      tags: ["FinTech", "Blockchain", "DeFi"],
      status: "Seed"
    },
    { 
      title: "EduConnect", 
      description: "Adaptive learning platform personalizing education through AI and data analytics.",
      tags: ["EdTech", "AI", "SaaS"],
      status: "Series A"
    },
    { 
      title: "SmartLogistics", 
      description: "AI-driven supply chain optimization solution for global logistics networks.",
      tags: ["Logistics", "AI", "IoT"],
      status: "Pre-seed"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Portfolio</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Discover the innovative startups we've helped launch and grow</p>
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
