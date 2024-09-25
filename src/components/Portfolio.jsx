import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { projectData } from '../data/projectData';

const ProjectCard = ({ project, onSelect }) => (
  <motion.div
    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
    onClick={() => onSelect(project)}
    className="cursor-pointer"
  >
    <div className="bg-green-800 p-6 rounded-lg shadow-lg h-full">
      <h3 className="text-xl font-bold text-green-300 mb-2">{project.title}</h3>
      <p className="text-green-100 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="bg-green-700 text-green-200 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
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

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectData.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-8 futuristic-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Numus Project Portfolio
        </motion.h2>
        <motion.p
          className="text-xl text-center mb-12 max-w-2xl mx-auto text-green-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our diverse range of innovative blockchain projects, each designed to push the boundaries of Web3 technology and create new opportunities for growth and investment.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} onSelect={setSelectedProject} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          {Array.from({ length: Math.ceil(projectData.length / projectsPerPage) }).map((_, index) => (
            <Button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 ${currentPage === index + 1 ? 'bg-green-600' : 'bg-green-800'}`}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === Math.ceil(projectData.length / projectsPerPage)}
            className="ml-2"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
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
