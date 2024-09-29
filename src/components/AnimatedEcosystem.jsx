import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projectData } from '../data/projectData';

const AnimatedEcosystem = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    const generateNodes = () => {
      const numusNode = { id: 'Numus', x: 50, y: 50, radius: 40 };
      const projectNodes = projectData.map((project, index) => ({
        id: project.title,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        radius: 30,
        logo: project.logo,
      }));

      const subNodes = projectData.flatMap((project, index) => 
        (project.tags || []).map((tag, subIndex) => ({
          id: `${project.title}-${tag}`,
          x: Math.random() * 80 + 10,
          y: Math.random() * 80 + 10,
          radius: 20,
          parentId: project.title,
        }))
      );

      return [numusNode, ...projectNodes, ...subNodes];
    };

    setNodes(generateNodes());
  }, []);

  return (
    <div className="w-full h-screen bg-green-900 relative overflow-hidden">
      <svg width="100%" height="100%" className="absolute inset-0">
        {nodes.map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r={node.radius}
              fill={node.id === 'Numus' ? '#00D67F' : '#005C36'}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, delay: Math.random() }}
            />
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
            >
              {node.id}
            </text>
          </g>
        ))}
        {nodes.map((node) => {
          if (node.parentId) {
            const parent = nodes.find((n) => n.id === node.parentId);
            return (
              <motion.line
                key={`${node.parentId}-${node.id}`}
                x1={`${parent.x}%`}
                y1={`${parent.y}%`}
                x2={`${node.x}%`}
                y2={`${node.y}%`}
                stroke="#00A86B"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: Math.random() }}
              />
            );
          }
          return null;
        })}
      </svg>
    </div>
  );
};

export default AnimatedEcosystem;