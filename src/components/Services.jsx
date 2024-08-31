import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Gauge, Rocket, Zap, Shield, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    { 
      title: "Corporate Troubleshooting", 
      description: "Our elite team swiftly tackles your most complex corporate challenges, delivering rapid solutions to keep your business on an upward trajectory.",
      icon: <AlertTriangle className="h-8 w-8 mb-4 text-green-500" />
    },
    { 
      title: "Accelerated Action", 
      description: "We launch your projects into hyperdrive, delivering tangible results within the first weeks and propelling your success to new heights.",
      icon: <Gauge className="h-8 w-8 mb-4 text-green-500" />
    },
    { 
      title: "Global Tech Stack", 
      description: "Access our cutting-edge global tech stack, a constellation of technologies tailored to meet the unique needs of each project across various platforms.",
      icon: <Rocket className="h-8 w-8 mb-4 text-green-500" />
    },
    { 
      title: "Expert Architecture", 
      description: "Our seasoned architects provide swift guidance on system design, ensuring your digital infrastructure is robust, scalable, and future-proof.",
      icon: <Cpu className="h-8 w-8 mb-4 text-green-500" />
    },
    { 
      title: "Rapid Incubation", 
      description: "Experience an intensive, fast-tracked support system from idea to market entry, with mentorship and resources designed for rapid development and deployment.",
      icon: <Zap className="h-8 w-8 mb-4 text-green-500" />
    },
    { 
      title: "Advanced Security", 
      description: "Protect your ventures with our state-of-the-art security measures, safeguarding your projects against threats in the digital landscape.",
      icon: <Shield className="h-8 w-8 mb-4 text-green-500" />
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-green-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Innovative Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-2xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Swift, comprehensive technical and strategic support for corporate-level challenges, delivering results at unprecedented speed
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex flex-col items-center text-green-500">
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
