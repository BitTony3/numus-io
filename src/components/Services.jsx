import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Rocket, Lightbulb, TrendingUp, Users, ChartBar, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    { 
      title: "Venture Studio", 
      description: "We co-found and launch innovative startups, providing hands-on support from ideation to market entry.",
      icon: <Rocket className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Incubation", 
      description: "Our incubation program nurtures early-stage ideas, offering mentorship, resources, and a collaborative environment.",
      icon: <Lightbulb className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Acceleration", 
      description: "We propel startups to rapid growth through intensive programs, connecting them with investors and industry experts.",
      icon: <TrendingUp className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Networking", 
      description: "Access our vast network of entrepreneurs, investors, and industry leaders to foster valuable connections.",
      icon: <Users className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Market Research", 
      description: "Leverage our in-depth market analysis and consumer insights to validate your business model and target audience.",
      icon: <ChartBar className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "IP Protection", 
      description: "We assist in safeguarding your intellectual property through patents, trademarks, and strategic advice.",
      icon: <Shield className="h-8 w-8 mb-4 text-blue-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-center mb-12 max-w-2xl mx-auto">Comprehensive support for every stage of your startup journey</p>
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
