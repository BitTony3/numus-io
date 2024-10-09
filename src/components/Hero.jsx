import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import * as THREE from 'three';

const Hero = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const rendererRef = useRef(null);
  const [currentShape, setCurrentShape] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const material = new THREE.MeshBasicMaterial({ color: 0x00ccff, wireframe: true });
    
    const shapes = [
      new THREE.TorusGeometry(10, 3, 16, 100),
      new THREE.IcosahedronGeometry(10, 0),
      new THREE.OctahedronGeometry(10, 0),
      new THREE.TetrahedronGeometry(10, 0)
    ];

    let mesh = new THREE.Mesh(shapes[currentShape], material);
    scene.add(mesh);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const changeShape = () => {
      scene.remove(mesh);
      setCurrentShape((prev) => (prev + 1) % shapes.length);
      mesh = new THREE.Mesh(shapes[currentShape], material);
      scene.add(mesh);
    };

    const intervalId = setInterval(changeShape, 5000); // Change shape every 5 seconds

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      shapes.forEach(shape => shape.dispose());
      material.dispose();
      renderer.dispose();
    };
  }, [currentShape]);

  return (
    <section className="relative min-h-screen holographic-bg overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="futuristic-title text-5xl md:text-7xl mb-6"
            animate={controls}
          >
            Redefining the Future of Web3 Investments
          </motion.h1>
          <motion.p 
            className="futuristic-text text-xl mb-8 max-w-2xl mx-auto"
            animate={controls}
          >
            Numus Venture Studio offers a comprehensive ecosystem to accelerate, incubate, and refine cutting-edge blockchain projects for institutional investors.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            animate={controls}
          >
            <Link to="/about">
              <Button size="lg" className="w-full sm:w-auto futuristic-button">
                Explore Our Ecosystem
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-futuristic-400 text-futuristic-400 hover:bg-futuristic-800 hover:text-futuristic-100">
                View Our Projects
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
