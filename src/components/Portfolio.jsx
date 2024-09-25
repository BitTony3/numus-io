import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectData } from '../data/projectData';

const ProjectCard = ({ project, onSelect }) => (
  <motion.div
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    onClick={() => onSelect(project)}
  >
    <Card className="futuristic-card h-full cursor-pointer">
      <CardHeader className="relative">
        <motion.img
          src={project.logo}
          alt={`${project.title} logo`}
          className="w-16 h-16 absolute top-4 right-4"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <CardTitle className="flex justify-between items-center">
          <span className="text-green-400 text-2xl">{project.title}</span>
        </CardTitle>
        <Badge variant="secondary" className="bg-green-700 text-white mt-2">{project.status}</Badge>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-gray-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="outline" className="border-green-500 text-green-400">{tag}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ProjectDialog = ({ isOpen, onClose, project }) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="bg-green-800 text-green-100 max-w-3xl">
      <DialogHeader>
        <DialogTitle className="text-3xl font-bold text-green-300 flex items-center">
          <img src={project?.logo} alt={`${project?.title} logo`} className="w-10 h-10 mr-3" />
          {project?.title}
        </DialogTitle>
      </DialogHeader>
      <DialogDescription className="text-green-200">
        <p className="text-lg mb-4">{project?.highlight}</p>
        <h3 className="text-xl font-semibold text-green-300 mb-2">Valuation:</h3>
        <p className="mb-4">{project?.valuation}</p>
        <h3 className="text-xl font-semibold text-green-300 mb-2">Raise Status:</h3>
        <p className="mb-4">{project?.raiseStatus}</p>
        <h3 className="text-xl font-semibold text-green-300 mb-2">Strategic Advantage:</h3>
        <p className="mb-4">{project?.strategicAdvantage}</p>
        {project?.additionalInfo && (
          <>
            <h3 className="text-xl font-semibold text-green-300 mb-2">Additional Info:</h3>
            <p>{project?.additionalInfo}</p>
          </>
        )}
      </DialogDescription>
    </DialogContent>
  </Dialog>
);

const Carousel = ({ items, renderItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `${-currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0 p-2 md:w-1/3">
              {renderItem(item)}
            </div>
          ))}
        </motion.div>
      </div>
      <Button 
        className="absolute top-1/2 -left-4 md:left-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 md:p-3" 
        onClick={prevSlide}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
      </Button>
      <Button 
        className="absolute top-1/2 -right-4 md:right-4 transform -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white rounded-full p-2 md:p-3" 
        onClick={nextSlide}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
      </Button>
    </div>
  );
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 futuristic-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Innovative Projects
        </motion.h2>
        <Carousel
          items={projectData}
          renderItem={(project) => (
            <ProjectCard project={project} onSelect={setSelectedProject} />
          )}
        />
      </div>
      <AnimatePresence>
        {selectedProject && (
          <ProjectDialog
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            project={selectedProject}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
