import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Gauge, Rocket, Zap, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { 
      title: "Cosmic Troubleshooting", 
      description: "Our elite team of problem-solvers tackles your most complex corporate challenges with the precision of a space mission, delivering rapid solutions to keep your business on trajectory.",
      icon: <AlertTriangle className="h-8 w-8 mb-4 text-purple-600" />
    },
    { 
      title: "Warp Speed Action", 
      description: "Launch your projects into hyperdrive with our accelerated process, delivering tangible results within the first weeks and propelling your success to new galaxies.",
      icon: <Gauge className="h-8 w-8 mb-4 text-blue-600" />
    },
    { 
      title: "Quantum Tech Stack", 
      description: "Access our cutting-edge global tech stack, a constellation of technologies tailored to meet the unique gravitational pull of each project across various platforms.",
      icon: <Rocket className="h-8 w-8 mb-4 text-green-600" />
    },
    { 
      title: "Nebula Architecture", 
      description: "Our expert architects provide swift guidance on system design, ensuring your digital infrastructure is as vast and interconnected as the cosmos itself.",
      icon: <Cpu className="h-8 w-8 mb-4 text-red-600" />
    },
    { 
      title: "Supernova Incubation", 
      description: "Experience an intensive, fast-tracked support system from idea ignition to market entry, with mentorship and resources designed to fuel rapid development and deployment.",
      icon: <Zap className="h-8 w-8 mb-4 text-yellow-600" />
    },
    { 
      title: "Galactic Shield", 
      description: "Protect your cosmic ventures with our advanced security measures, ensuring your projects are safeguarded against threats from across the digital universe.",
      icon: <Shield className="h-8 w-8 mb-4 text-indigo-600" />
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Interstellar Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Swift, comprehensive technical and strategic support for corporate-level challenges, delivering results at light speed
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    {service.icon}
                    <span>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
