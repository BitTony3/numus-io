import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData';
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const AnimatedEcosystem = () => {
  const [nodes, setNodes] = useState([]);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const generateNodes = () => {
      const numusNode = { id: 'Numus', x: 50, y: 50, radius: 60 };
      const projectNodes = projectData.map((project, index) => ({
        id: project.title,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        radius: 40,
        logo: project.logo,
        description: project.description,
      }));

      const childNodes = projectData.flatMap((project, index) => 
        (project.children || []).map((child, subIndex) => ({
          id: `${project.title}-${child.title}`,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          radius: 25,
          parentId: project.title,
          logo: child.logo,
          description: child.title,
        }))
      );

      return [numusNode, ...projectNodes, ...childNodes];
    };

    setNodes(generateNodes());
  }, []);

  const handleZoom = (event) => {
    const newScale = scale + event.deltaY * -0.001;
    setScale(Math.min(Math.max(0.5, newScale), 3));
  };

  const handlePan = (event) => {
    if (event.buttons === 1) {
      setPosition({
        x: position.x + event.movementX,
        y: position.y + event.movementY,
      });
    }
  };

  return (
    <div 
      className="w-full h-screen bg-green-900 relative overflow-hidden cursor-move"
      onWheel={handleZoom}
      onMouseMove={handlePan}
      ref={containerRef}
    >
      <svg width="100%" height="100%" className="absolute inset-0">
        <g transform={`translate(${position.x}, ${position.y}) scale(${scale})`}>
          {nodes.map((node) => (
            <g key={node.id}>
              <motion.line
                x1={`${nodes.find(n => n.id === 'Numus').x}%`}
                y1={`${nodes.find(n => n.id === 'Numus').y}%`}
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke="#00A86B"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: Math.random() }}
              />
              {node.parentId && (
                <motion.line
                  x1={`${nodes.find(n => n.id === node.parentId).x}%`}
                  y1={`${nodes.find(n => n.id === node.parentId).y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke="#00D67F"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, delay: Math.random() }}
                />
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <motion.circle
                      cx={`${node.x}%`}
                      cy={`${node.y}%`}
                      r={node.radius}
                      fill={node.id === 'Numus' ? '#00D67F' : '#005C36'}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{node.description || node.id}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {node.logo && (
                <image
                  href={node.logo}
                  x={`${node.x}%`}
                  y={`${node.y}%`}
                  height={node.radius * 1.5}
                  width={node.radius * 1.5}
                  transform={`translate(-${node.radius * 0.75}, -${node.radius * 0.75})`}
                />
              )}
              <text
                x={`${node.x}%`}
                y={`${node.y + (node.radius / 2)}%`}
                textAnchor="middle"
                fill="white"
                fontSize={node.radius / 2}
                className="pointer-events-none"
              >
                <tspan x={`${node.x}%`} dy="-0.5em">{node.id.split('-')[0]}</tspan>
                <tspan x={`${node.x}%`} dy="1.2em">{node.id.split('-')[1]}</tspan>
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedEcosystem;