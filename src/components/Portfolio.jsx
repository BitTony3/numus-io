import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { projectData } from '@/data/projectData';
import Modal from './Modal';

const ProjectCard = ({ project, onSelect }) => (
  <motion.div
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    whileTap={{ scale: 0.95 }}
    onClick={() => onSelect(project)}
    className="cursor-pointer bg-futuristic-800 p-4 rounded-lg shadow-lg"
  >
    <motion.div
      className="w-16 h-16 mx-auto mb-4"
      initial={{ rotateY: 0 }}
      animate={{ rotateY: 360 }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
    >
      <img src={project.logo} alt={`${project.title} logo`} className="w-full h-full object-contain" />
    </motion.div>
    <h3 className="text-lg font-bold text-futuristic-300 mb-2">{project.title}</h3>
    <p className="text-sm text-futuristic-100 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag, index) => (
        <span key={index} className="bg-futuristic-700 text-futuristic-200 px-2 py-1 rounded text-xs">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const ProjectDialog = ({ project, onClose }) => (
  <div className="text-futuristic-100 max-h-[80vh] overflow-y-auto">
    <h2 className="text-2xl font-bold text-futuristic-300 mb-4 flex items-center">
      <img src={project?.logo} alt={`${project?.title} logo`} className="w-8 h-8 mr-3" />
      {project?.title}
    </h2>
    <p className="text-futuristic-200 mb-4">{project?.highlight}</p>
    <h3 className="text-lg font-semibold text-futuristic-300 mb-2">Valuation:</h3>
    <p className="text-futuristic-200 mb-4">{project?.valuation}</p>
    <h3 className="text-lg font-semibold text-futuristic-300 mb-2">Raise Status:</h3>
    <p className="text-futuristic-200 mb-4">{project?.raiseStatus}</p>
    <h3 className="text-lg font-semibold text-futuristic-300 mb-2">Strategic Advantage:</h3>
    <p className="text-futuristic-200 mb-4">{project?.strategicAdvantage}</p>
    {project?.additionalInfo && (
      <>
        <h3 className="text-lg font-semibold text-futuristic-300 mb-2">Additional Info:</h3>
        <p className="text-futuristic-200 mb-4">{project?.additionalInfo}</p>
      </>
    )}
    <div className="flex flex-col space-y-2 mt-4">
      {project?.website && (
        <a href={project.website} target="_blank" rel="noopener noreferrer" className="text-futuristic-300 hover:text-futuristic-100 flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" /> Visit Website
        </a>
      )}
      {project?.imagineReplayWebsite && (
        <a href={project.imagineReplayWebsite} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" /> Visit Imagine Replay
        </a>
      )}
      {project?.telegramApp && (
        <a href={project.telegramApp} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" /> Telegram Mini App
        </a>
      )}
      {project?.googlePlay && (
        <a href={project.googlePlay} target="_blank" rel="noopener noreferrer" className="text-green-300 hover:text-green-100 flex items-center">
          <ExternalLink className="w-4 h-4 mr-2" /> Google Play Store
        </a>
      )}
    </div>
  </div>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const isMobile = useMediaQuery('(max-width: 640px)');

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 bg-futuristic-900 text-futuristic-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-8 text-futuristic-300"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Numus Project Portfolio
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-center mb-12 max-w-2xl mx-auto text-futuristic-200"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our diverse range of innovative blockchain projects, each designed to push the boundaries of Web3 technology and create new opportunities for growth and investment.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 bg-futuristic-800 hover:bg-futuristic-700 text-futuristic-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: Math.ceil(projectData.length / projectsPerPage) }).map((_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 ${
                currentPage === index + 1
                  ? 'bg-futuristic-500 text-futuristic-900'
                  : 'bg-futuristic-800 text-futuristic-300 hover:bg-futuristic-700'
              }`}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(projectData.length / projectsPerPage)}
            className="ml-2 bg-futuristic-800 hover:bg-futuristic-700 text-futuristic-300"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && <ProjectDialog project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </Modal>
    </section>
  );
};

export default Portfolio;