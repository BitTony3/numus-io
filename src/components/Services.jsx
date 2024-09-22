import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, BarChart, Briefcase, Zap, Shield, Cpu } from 'lucide-react';

const ServiceCard = ({ category }) => (
  <Card className="bg-green-700 border-green-600 hover:shadow-lg transition-all duration-300 h-full">
    <CardHeader className="bg-green-600">
      <CardTitle className="flex flex-col items-center text-green-100">
        <div className="p-3 rounded-full bg-green-500">
          {React.cloneElement(category.icon, { className: "h-8 w-8 text-green-100" })}
        </div>
        <span className="mt-4 text-xl font-bold">{category.title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent className="mt-4">
      <ul className="space-y-2">
        {category.services.map((service, idx) => (
          <li key={idx} className="flex items-center text-green-100">
            <span className="mr-2">{React.cloneElement(service.icon, { className: "h-4 w-4" })}</span>
            {service.title}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const serviceCategories = [
  {
    title: "Full-Cycle Development",
    icon: <Code />,
    services: [
      { title: "Tech Stack Integration", icon: <Cpu /> },
      { title: "Scalable Architecture", icon: <BarChart /> },
      { title: "Performance Optimization", icon: <Zap /> },
    ]
  },
  {
    title: "Business Strategy",
    icon: <Briefcase />,
    services: [
      { title: "Business Model Design", icon: <BarChart /> },
      { title: "Use Case Development", icon: <Briefcase /> },
      { title: "Strategic Partnerships", icon: <Handshake /> },
    ]
  },
  {
    title: "Rapid Scaling",
    icon: <TrendingUp />,
    services: [
      { title: "Growth Hacking", icon: <Zap /> },
      { title: "Market Expansion", icon: <BarChart /> },
      { title: "Efficiency Optimization", icon: <Target /> },
    ]
  },
  {
    title: "Crisis Management",
    icon: <Shield />,
    services: [
      { title: "Emergency Response", icon: <Zap /> },
      { title: "Risk Mitigation", icon: <Shield /> },
      { title: "Recovery Planning", icon: <TrendingUp /> },
    ]
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-100">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
