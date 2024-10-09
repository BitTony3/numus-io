import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

export const useThreeAnimation = (containerRef) => {
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Create blockchain
    const blockchain = new THREE.Group();
    scene.add(blockchain);

    const blockGeometry = new THREE.BoxGeometry(10, 10, 2);
    const blockMaterial = new THREE.MeshPhongMaterial({ color: 0x00ccff, transparent: true, opacity: 0.8 });

    const fontLoader = new FontLoader();
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      const createBlock = (position, text) => {
        const block = new THREE.Mesh(blockGeometry, blockMaterial);
        block.position.copy(position);
        blockchain.add(block);

        const textGeometry = new TextGeometry(text, {
          font: font,
          size: 1,
          height: 0.2,
        });
        const textMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(position.x - 4, position.y - 1, position.z + 1);
        blockchain.add(textMesh);

        return block;
      };

      const blocks = [
        createBlock(new THREE.Vector3(-20, 0, 0), "Genesis"),
        createBlock(new THREE.Vector3(-10, 0, 0), "Block 2"),
        createBlock(new THREE.Vector3(0, 0, 0), "Block 3"),
        createBlock(new THREE.Vector3(10, 0, 0), "Block 4"),
        createBlock(new THREE.Vector3(20, 0, 0), "Block 5")
      ];

      // Create links between blocks
      const linkMaterial = new THREE.LineBasicMaterial({ color: 0x00ccff });
      for (let i = 1; i < blocks.length; i++) {
        const points = [];
        points.push(blocks[i-1].position);
        points.push(blocks[i].position);
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, linkMaterial);
        blockchain.add(line);
      }

      // Create new block animation
      const newBlockGeometry = new THREE.BoxGeometry(10, 10, 2);
      const newBlockMaterial = new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true, opacity: 0.8 });
      const newBlock = new THREE.Mesh(newBlockGeometry, newBlockMaterial);
      newBlock.position.set(30, 20, 0);
      scene.add(newBlock);

      // Create particles for mining simulation
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCnt = 5000;
      const posArray = new Float32Array(particlesCnt * 3);
      for (let i = 0; i < particlesCnt * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
      }
      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
      const particlesMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0xffff00 });
      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);

      // Animation loop
      let step = 0;
      const animate = () => {
        if (!rendererRef.current) return;
        requestAnimationFrame(animate);

        step += 0.01;

        // Rotate blockchain
        blockchain.rotation.y += 0.005;

        // Animate new block
        newBlock.position.y = 20 + Math.sin(step) * 5;
        newBlock.rotation.x += 0.01;
        newBlock.rotation.y += 0.01;

        // Animate particles
        particlesMesh.rotation.y = step * 0.3;
        particlesMesh.position.z = Math.sin(step * 0.5) * 10;

        // Animate existing blocks
        blockchain.children.forEach((child, index) => {
          if (child instanceof THREE.Mesh) {
            child.rotation.x = Math.sin(Date.now() * 0.001 + index) * 0.1;
            child.rotation.z = Math.cos(Date.now() * 0.001 + index) * 0.1;
          }
        });

        renderer.render(scene, camera);
      };
      animate();
    });

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(25, 50, 25);
    scene.add(pointLight);

    const handleResize = () => {
      if (!rendererRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          object.material.dispose();
        }
      });
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      rendererRef.current = null;
    };
  }, [containerRef]);
};