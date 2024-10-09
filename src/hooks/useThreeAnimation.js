import { useEffect } from 'react';
import * as THREE from 'three';

const shapes = [
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.CylinderGeometry(5, 5, 20, 32),
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.OctahedronGeometry(10),
  new THREE.BoxGeometry(15, 15, 15)
];

export const useThreeAnimation = (containerRef, currentIndex) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const material = new THREE.MeshBasicMaterial({ color: 0x00ccff, wireframe: true });
    const mesh = new THREE.Mesh(shapes[currentIndex], material);
    scene.add(mesh);

    camera.position.z = 30;

    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current.removeChild(renderer.domElement);
      shapes.forEach(shape => shape.dispose());
      material.dispose();
      renderer.dispose();
    };
  }, [containerRef, currentIndex]);
};