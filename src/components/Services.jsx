import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket, Layers, Cpu, Search, Code, Server } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "Global Tech Stack", 
      description: "Access our comprehensive global tech stack, tailored to meet the unique needs of each project across various technologies and platforms.",
      icon: <Layers className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Architecture Consulting", 
      description: "Expert guidance on system architecture, ensuring scalable, efficient, and robust solutions for your project's specific requirements.",
      icon: <Cpu className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Incubation & Acceleration", 
      description: "Full-cycle support from ideation to market entry, with mentorship, resources, and strategic planning tailored to each stage of development.",
      icon: <Rocket className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Technical Due Diligence", 
      description: "Comprehensive assessment of projects' technical aspects, identifying strengths, weaknesses, and opportunities for optimization.",
      icon: <Search className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Custom Development", 
      description: "Tailored software development services to bring your unique ideas to life, leveraging cutting-edge technologies and best practices.",
      icon: <Code className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Tech Infrastructure", 
      description: "Scalable cloud services, APIs, and development tools to support robust and efficient project development and deployment.",
      icon: <Server className="h-8 w-8 mb-4 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Program</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Comprehensive support for projects at every stage, powered by CeDeFiAi technology</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {service.icon}
                  <span>{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
