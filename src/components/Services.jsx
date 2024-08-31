import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket, Lightbulb, TrendingUp, Users, ChartBar, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "Ideation & Discovery", 
      description: "We source innovative ideas through hackathons and pitch events, refining concepts with market research and expert feedback.",
      icon: <Lightbulb className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Incubation", 
      description: "Access CeDeFiAi's tech stack and infrastructure, with mentorship to guide product development and market fit.",
      icon: <Rocket className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Acceleration", 
      description: "Develop go-to-market strategies, enhance projects with CeDeFiAi features, and prepare for investor pitches.",
      icon: <TrendingUp className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Integration & Spin-Off", 
      description: "Seamlessly integrate projects with CeDeFiAi platforms or support spinning off as independent entities.",
      icon: <Users className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Investment Process", 
      description: "Two-step approach: optimize project structure and reduce burn costs, then actively engage in development and scaling.",
      icon: <ChartBar className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Tech Infrastructure", 
      description: "Leverage CeDeFiAi's robust tech stack, including APIs, SDKs, and scalable cloud services for project development.",
      icon: <Shield className="h-8 w-8 mb-4 text-blue-600" />
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
