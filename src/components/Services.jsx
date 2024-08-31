import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Gauge, Rocket, Zap, Shield, Cpu, Code, Database, Cloud, GitBranch, Wifi, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "Cosmic Corporate Troubleshooting", 
      description: "Our elite team of interstellar problem-solvers swiftly tackles your most complex corporate challenges. We analyze, strategize, and implement solutions at light speed, ensuring your business maintains its upward trajectory in the corporate cosmos.",
      icon: <AlertTriangle className="h-12 w-12 mb-4" />,
      color: "from-red-400 to-orange-500",
      details: "Our process includes rapid diagnostics, tailored solution design, and agile implementation. We leverage AI-powered analytics to identify root causes and predict potential future challenges, allowing for proactive problem-solving."
    },
    { 
      title: "Hyperdrive Accelerated Action", 
      description: "We launch your projects into hyperdrive, delivering tangible results within the first weeks. Our rapid prototyping and agile methodologies propel your success to new heights, breaking through the atmosphere of conventional timelines.",
      icon: <Gauge className="h-12 w-12 mb-4" />,
      color: "from-blue-400 to-indigo-500",
      details: "Using cutting-edge project management tools and AI-assisted development processes, we compress timelines without compromising quality. Our hyperdrive methodology includes daily sprints, automated testing, and continuous deployment."
    },
    { 
      title: "Galactic Tech Stack", 
      description: "Access our cutting-edge galactic tech stack, a constellation of technologies tailored to meet the unique needs of each project. From quantum computing to blockchain and AI, we provide the tools to build solutions that are light-years ahead.",
      icon: <Rocket className="h-12 w-12 mb-4" />,
      color: "from-green-400 to-teal-500",
      details: "Our tech stack includes quantum-resistant cryptography, edge computing solutions, and AI-powered development assistants. We continuously update our stack based on emerging technologies and industry trends."
    },
    { 
      title: "Nebula Architecture Design", 
      description: "Our seasoned cosmic architects provide swift guidance on system design, ensuring your digital infrastructure is as vast and interconnected as a nebula. We create scalable, future-proof architectures that can expand with the universe of your business.",
      icon: <Cpu className="h-12 w-12 mb-4" />,
      color: "from-purple-400 to-pink-500",
      details: "We utilize advanced modeling tools and AI simulations to test and optimize architectures before implementation. Our designs incorporate principles of self-healing systems and adaptive infrastructure to ensure long-term resilience."
    },
    { 
      title: "Supernova Incubation", 
      description: "Experience an intensive, fast-tracked support system from idea to market entry. Our supernova incubation process provides mentorship, resources, and networking opportunities designed for rapid development and explosive growth.",
      icon: <Zap className="h-12 w-12 mb-4" />,
      color: "from-yellow-400 to-orange-500",
      details: "Our incubation program includes access to a global network of industry experts, investors, and potential clients. We provide tailored workshops on emerging technologies, market analysis, and growth hacking strategies."
    },
    { 
      title: "Quantum Security Shield", 
      description: "Protect your ventures with our state-of-the-art quantum security measures. We implement advanced encryption, threat detection, and response systems to create an impenetrable shield around your digital assets and data.",
      icon: <Shield className="h-12 w-12 mb-4" />,
      color: "from-indigo-400 to-purple-500",
      details: "Our security solutions include quantum key distribution, AI-powered threat intelligence, and blockchain-based audit trails. We conduct regular penetration testing and offer continuous security monitoring services."
    },
    { 
      title: "Interstellar Code Optimization", 
      description: "Our code wizards optimize your software for peak performance across the digital universe. We refactor, streamline, and enhance your codebase to achieve maximum efficiency and scalability.",
      icon: <Code className="h-12 w-12 mb-4" />,
      color: "from-green-400 to-blue-500",
      details: "We employ advanced static analysis tools, AI-assisted code review, and automated refactoring techniques. Our optimization process includes performance profiling, memory management improvements, and algorithm refinement."
    },
    { 
      title: "Black Hole Data Management", 
      description: "Harness the power of data with our black hole management systems. We design and implement robust databases and data pipelines that can handle the gravitational pull of big data with ease.",
      icon: <Database className="h-12 w-12 mb-4" />,
      color: "from-red-400 to-pink-500",
      details: "Our data management solutions incorporate distributed ledger technologies, edge computing for real-time processing, and AI-driven data governance. We ensure compliance with global data protection regulations and implement advanced data anonymization techniques."
    },
    { 
      title: "Nebula Cloud Solutions", 
      description: "Float your infrastructure in our nebula cloud. We provide seamless cloud integration, migration, and management services to ensure your systems are as flexible and expansive as the cosmos itself.",
      icon: <Cloud className="h-12 w-12 mb-4" />,
      color: "from-blue-400 to-cyan-500",
      details: "Our cloud solutions feature multi-cloud orchestration, serverless architecture design, and AI-powered resource optimization. We implement advanced cost management tools and provide 24/7 cloud monitoring and support."
    },
    { 
      title: "Quantum Version Control", 
      description: "Keep your project timelines in perfect quantum harmony with our advanced version control systems. We implement and manage sophisticated branching strategies and collaborative workflows.",
      icon: <GitBranch className="h-12 w-12 mb-4" />,
      color: "from-purple-400 to-indigo-500",
      details: "Our version control solutions include AI-assisted merge conflict resolution, automated code review processes, and blockchain-based audit trails for all code changes. We provide customized workflow designs tailored to your team's specific needs."
    },
    { 
      title: "Intergalactic API Integration", 
      description: "Connect your systems across the digital galaxy with our intergalactic API integration services. We design, develop, and maintain robust APIs that enable seamless communication between diverse platforms and services.",
      icon: <Wifi className="h-12 w-12 mb-4" />,
      color: "from-yellow-400 to-green-500",
      details: "Our API services include GraphQL implementation, real-time WebSocket integrations, and AI-powered API analytics. We ensure high availability, scalability, and security for all API endpoints."
    },
    { 
      title: "Multidimensional UX/UI Design", 
      description: "Create user experiences that transcend dimensions. Our design team crafts intuitive, visually stunning interfaces that guide users through your digital universe with the grace of a comet.",
      icon: <Layers className="h-12 w-12 mb-4" />,
      color: "from-orange-400 to-red-500",
      details: "We utilize VR and AR technologies for immersive prototyping, AI-driven user behavior analysis, and neuroscience-based design principles. Our designs are tested across multiple devices and platforms to ensure a consistent and engaging user experience."
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundImage: [
              'radial-gradient(circle, #00A86B 1px, transparent 1px)',
              'radial-gradient(circle, #0EA5E9 1px, transparent 1px)',
              'radial-gradient(circle, #00A86B 1px, transparent 1px)',
            ],
            backgroundSize: ['20px 20px', '30px 30px', '20px 20px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.h2 
          className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Our Cosmic Services
        </motion.h2>
        <motion.p 
          className="text-xl text-center mb-12 max-w-3xl mx-auto text-gray-300"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Embark on an interstellar journey of innovation with our comprehensive suite of services. From rapid problem-solving to cutting-edge tech implementation, we're your cosmic partners in digital transformation.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="bg-gray-800 border-gray-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 h-full cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <CardHeader>
                  <CardTitle className="flex flex-col items-center">
                    <motion.div
                      className={`p-3 rounded-full bg-gradient-to-br ${service.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {React.cloneElement(service.icon, { className: "h-8 w-8 text-white" })}
                    </motion.div>
                    <span className="mt-4 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{service.title}</span>
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
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">{selectedService.title}</h3>
              <p className="text-gray-300 mb-4">{selectedService.description}</p>
              <h4 className="text-xl font-semibold mb-2 text-green-400">Service Details:</h4>
              <p className="text-gray-300">{selectedService.details}</p>
              <button
                className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => setSelectedService(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
