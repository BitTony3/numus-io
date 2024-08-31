import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { AlertTriangle, Gauge, Rocket, Zap, Shield, Cpu, Code, Database, Cloud, GitBranch, Wifi, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      title: "Corporate Troubleshooting", 
      description: "Rapid problem-solving for complex corporate challenges. We employ data-driven analysis, strategic planning, and agile implementation to resolve issues efficiently.",
      icon: <AlertTriangle className="h-12 w-12 mb-4" />,
      color: "from-red-400 to-orange-500",
      details: "Our process includes AI-powered diagnostics, root cause analysis, and predictive modeling to anticipate and mitigate future challenges. We utilize advanced project management tools for real-time progress tracking and stakeholder communication."
    },
    { 
      title: "Accelerated Action", 
      description: "Rapid prototyping and development services focused on delivering tangible results within weeks. We use agile methodologies and cutting-edge tools to accelerate project timelines.",
      icon: <Gauge className="h-12 w-12 mb-4" />,
      color: "from-blue-400 to-indigo-500",
      details: "Our accelerated action framework incorporates CI/CD pipelines, automated testing suites, and parallel development workflows. We leverage containerization and microservices architecture to enable rapid iteration and deployment."
    },
    { 
      title: "Advanced Tech Stack", 
      description: "Access to a comprehensive, modern tech stack tailored for each project's unique requirements. We integrate cutting-edge technologies including quantum computing, blockchain, and AI/ML frameworks.",
      icon: <Rocket className="h-12 w-12 mb-4" />,
      color: "from-green-400 to-teal-500",
      details: "Our tech stack features post-quantum cryptography algorithms, edge computing frameworks, and AI-assisted development tools. We continuously evaluate and integrate emerging technologies to maintain a state-of-the-art development environment."
    },
    { 
      title: "Architecture Design", 
      description: "Expert system architecture design services focusing on scalability, resilience, and future-proofing. We create comprehensive blueprints for robust digital infrastructures.",
      icon: <Cpu className="h-12 w-12 mb-4" />,
      color: "from-purple-400 to-pink-500",
      details: "We employ advanced modeling tools and AI-driven simulations to optimize architectures pre-implementation. Our designs incorporate microservices, event-driven architectures, and self-healing systems to ensure long-term adaptability and performance."
    },
    { 
      title: "Startup Incubation", 
      description: "Comprehensive support system for rapid startup development and market entry. We provide mentorship, resources, and networking opportunities to accelerate growth and innovation.",
      icon: <Zap className="h-12 w-12 mb-4" />,
      color: "from-yellow-400 to-orange-500",
      details: "Our incubation program offers access to industry experts, potential investors, and strategic partners. We conduct specialized workshops on emerging technologies, market analysis techniques, and growth hacking strategies tailored to each startup's needs."
    },
    { 
      title: "Advanced Security", 
      description: "State-of-the-art security measures incorporating quantum-resistant encryption, advanced threat detection, and proactive defense systems to protect digital assets and data.",
      icon: <Shield className="h-12 w-12 mb-4" />,
      color: "from-indigo-400 to-purple-500",
      details: "Our security solutions include quantum key distribution protocols, AI-powered threat intelligence systems, and blockchain-based audit trails. We perform regular penetration testing and offer 24/7 security monitoring and incident response services."
    },
    { 
      title: "Code Optimization", 
      description: "Comprehensive code refactoring and optimization services to enhance software performance, efficiency, and scalability across diverse computing environments.",
      icon: <Code className="h-12 w-12 mb-4" />,
      color: "from-green-400 to-blue-500",
      details: "We utilize advanced static analysis tools, AI-assisted code review processes, and automated refactoring techniques. Our optimization methodology includes performance profiling, memory management enhancements, and algorithm refinement for maximum efficiency."
    },
    { 
      title: "Data Management", 
      description: "Robust data management solutions designed to handle large-scale, complex datasets. We implement advanced database systems and data pipelines optimized for performance and scalability.",
      icon: <Database className="h-12 w-12 mb-4" />,
      color: "from-red-400 to-pink-500",
      details: "Our data management solutions incorporate distributed ledger technologies, real-time edge computing processing, and AI-driven data governance frameworks. We ensure compliance with global data protection regulations and implement sophisticated data anonymization techniques."
    },
    { 
      title: "Cloud Solutions", 
      description: "Comprehensive cloud integration, migration, and management services. We design and implement flexible, scalable cloud infrastructures tailored to specific business needs.",
      icon: <Cloud className="h-12 w-12 mb-4" />,
      color: "from-blue-400 to-cyan-500",
      details: "Our cloud solutions feature multi-cloud orchestration, serverless architecture implementations, and AI-powered resource optimization. We deploy advanced cost management tools and provide continuous cloud monitoring and support services."
    },
    { 
      title: "Version Control", 
      description: "Advanced version control system implementation and management. We set up and maintain sophisticated branching strategies and collaborative workflows to streamline development processes.",
      icon: <GitBranch className="h-12 w-12 mb-4" />,
      color: "from-purple-400 to-indigo-500",
      details: "Our version control solutions include AI-assisted merge conflict resolution, automated code review processes, and blockchain-based audit trails for comprehensive change tracking. We design customized workflow systems optimized for each team's specific requirements."
    },
    { 
      title: "API Integration", 
      description: "Comprehensive API design, development, and integration services. We create robust, scalable APIs that enable seamless communication between diverse platforms and services.",
      icon: <Wifi className="h-12 w-12 mb-4" />,
      color: "from-yellow-400 to-green-500",
      details: "Our API services include GraphQL implementation, real-time WebSocket integrations, and AI-powered API analytics. We ensure high availability, scalability, and security for all API endpoints, with comprehensive documentation and developer support."
    },
    { 
      title: "UX/UI Design", 
      description: "Advanced user experience and interface design services. We create intuitive, visually appealing interfaces optimized for user engagement and satisfaction across multiple platforms and devices.",
      icon: <Layers className="h-12 w-12 mb-4" />,
      color: "from-orange-400 to-red-500",
      details: "We utilize VR and AR technologies for immersive prototyping, AI-driven user behavior analysis, and evidence-based design principles. Our design process includes cross-platform testing and optimization to ensure consistent, high-quality user experiences."
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
