import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const shapes = [
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.CylinderGeometry(5, 5, 20, 32),
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.OctahedronGeometry(10),
  new THREE.BoxGeometry(15, 15, 15)
];

export const useThreeAnimation = (containerRef, currentIndex) => {
  const rendererRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    rendererRef.current = renderer;

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const material = new THREE.MeshBasicMaterial({ color: 0x00ccff, wireframe: true });
    const mesh = new THREE.Mesh(shapes[currentIndex], material);
    scene.add(mesh);

    camera.position.z = 30;

    // Load font
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      try {
        if (!font) {
          console.error('Font not loaded properly');
          return;
        }

        const textGeometry = new TextGeometry('Numus', {
          font: font,
          size: 5,
          height: 1,
          curveSegments: 12,
          bevelEnabled: false,
        });

        const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-10, 0, 0);
        scene.add(textMesh);
      } catch (error) {
        console.error('Error creating text geometry:', error);
      }
    }, undefined, (error) => {
      console.error('Error loading font:', error);
    });

    const animate = () => {
      if (!rendererRef.current) return;
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

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
      shapes.forEach(shape => shape.dispose());
      material.dispose();
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      rendererRef.current = null;
    };
  }, [containerRef, currentIndex]);
};