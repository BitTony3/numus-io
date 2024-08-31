import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket, Layers, Cpu, Search, Code, Server, Users, Database, BarChart, Zap, AlertTriangle, Gauge } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "Corporate Troubleshooting", 
      description: "Expert-level problem-solving for complex corporate challenges, delivering rapid solutions to keep your business running smoothly.",
      icon: <AlertTriangle className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Rapid Action Program", 
      description: "Our accelerated process aims to deliver tangible results within the first weeks, jumpstarting your project's success.",
      icon: <Gauge className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Global Tech Stack", 
      description: "Access our comprehensive global tech stack, tailored to meet the unique needs of each project across various technologies and platforms.",
      icon: <Layers className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Architecture Consulting", 
      description: "Swift, expert guidance on system architecture, ensuring scalable, efficient, and robust solutions for your project's specific requirements.",
      icon: <Cpu className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Accelerated Incubation", 
      description: "Intensive, fast-tracked support from ideation to market entry, with mentorship and resources designed for rapid development and deployment.",
      icon: <Rocket className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Agile Traffic Acquisition", 
      description: "Quickly leverage our advanced systems to source and direct high-quality traffic to your project, ensuring rapid user acquisition and growth.",
      icon: <Users className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Real-Time Data Optimization", 
      description: "Immediate project performance enhancement through sophisticated data analysis and tuning, extracting maximum value from user interactions.",
      icon: <Database className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Instant User Insights", 
      description: "Implement advanced user tracking systems for immediate insights across multiple data layers, providing rapid understanding of user behavior.",
      icon: <BarChart className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Dynamic Marketing Alignment", 
      description: "Swiftly develop and align marketing strategies with your project goals, leveraging real-time data for highly effective campaigns.",
      icon: <Zap className="h-8 w-8 mb-4 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Swift, comprehensive technical and strategic support for corporate-level challenges, delivering results from day one</p>
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
