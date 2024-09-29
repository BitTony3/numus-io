import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from "@/components/ui/tooltip";
import { TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getRandomChainLogo } from '@/utils/chainLogos';

const AnimatedEcosystem = () => {
  const [nodes, setNodes] = useState([]);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    const generateNodes = () => {
      const numusNode = { id: 'Numus', x: 50, y: 50, radius: 60, type: 'center' };
      const chains = Array.from({ length: 50 }, (_, i) => ({
        id: `Chain-${i + 1}`,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        radius: 30,
        type: 'chain',
        logo: getRandomChainLogo()
      }));
      const bridges = Array.from({ length: 30 }, (_, i) => ({
        id: `Bridge-${i + 1}`,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        radius: 25,
        type: 'bridge'
      }));
      const wallets = Array.from({ length: 20 }, (_, i) => ({
        id: `Wallet-${i + 1}`,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        radius: 20,
        type: 'wallet'
      }));
      const dapps = Array.from({ length: 40 }, (_, i) => ({
        id: `DApp-${i + 1}`,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        radius: 15,
        type: 'dapp'
      }));

      return [numusNode, ...chains, ...bridges, ...wallets, ...dapps];
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

  const renderStar = (cx, cy, r, n = 5) => {
    const angle = Math.PI / n;
    const points = [];
    for (let i = 0; i < 2 * n; i++) {
      const radius = i % 2 === 0 ? r : r / 2;
      points.push(
        cx + radius * Math.sin(i * angle),
        cy - radius * Math.cos(i * angle)
      );
    }
    return points.join(' ');
  };

  const getNodeColor = (type) => {
    switch (type) {
      case 'center': return '#00D67F';
      case 'chain': return '#4CAF50';
      case 'bridge': return '#2196F3';
      case 'wallet': return '#FFC107';
      case 'dapp': return '#9C27B0';
      default: return '#00A86B';
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
              {node.type !== 'center' && (
                <motion.line
                  x1={`${nodes.find(n => n.id === 'Numus').x}%`}
                  y1={`${nodes.find(n => n.id === 'Numus').y}%`}
                  x2={`${node.x}%`}
                  y2={`${node.y}%`}
                  stroke={getNodeColor(node.type)}
                  strokeWidth="1"
                  strokeOpacity="0.3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: Math.random() }}
                />
              )}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {node.type === 'chain' && node.logo ? (
                      <motion.image
                        href={node.logo}
                        x={`${node.x - node.radius / 2}%`}
                        y={`${node.y - node.radius / 2}%`}
                        width={`${node.radius}%`}
                        height={`${node.radius}%`}
                        className="star-node"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <motion.polygon
                        points={renderStar(node.x, node.y, node.radius)}
                        fill={getNodeColor(node.type)}
                        className="star-node"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{node.id}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <text
                x={`${node.x}%`}
                y={`${node.y + (node.radius / 2)}%`}
                textAnchor="middle"
                fill="white"
                fontSize={node.radius / 3}
                className="pointer-events-none"
              >
                {node.id.split('-')[0]}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedEcosystem;