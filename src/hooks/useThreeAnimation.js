import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const shapes = [
  new THREE.TorusGeometry(10, 3, 16, 100),
  new THREE.CylinderGeometry(5, 5, 20, 32),
  new THREE.SphereGeometry(10, 32, 32),
  new THREE.OctahedronGeometry(10),
  new THREE.BoxGeometry(15, 15, 15),
  createBlockchainShape() // Add the new blockchain shape
];

// Function to create a custom blockchain shape
function createBlockchainShape() {
  const group = new THREE.Group();
  
  // Create multiple cubes to represent blocks
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ccff, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(i * 6 - 12, 0, 0); // Align cubes horizontally
    group.add(cube);
  }

  // Add connecting lines between cubes
  for (let i = 0; i < 4; i++) {
    const points = [];
    points.push(new THREE.Vector3(i * 6 - 9.5, 0, 0));
    points.push(new THREE.Vector3((i + 1) * 6 - 14.5, 0, 0));
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: 0x00ccff });
    const line = new THREE.Line(geometry, material);
    group.add(line);
  }

  return group;
}

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

    const shape = shapes[currentIndex];
    let mesh;

    if (shape instanceof THREE.Group) {
      // If it's the blockchain shape (Group), add it directly
      mesh = shape;
    } else {
      // For other shapes, create a mesh
      const material = new THREE.MeshBasicMaterial({ color: 0x00ccff, wireframe: true });
      mesh = new THREE.Mesh(shape, material);
    }

    scene.add(mesh);

    camera.position.z = 30;

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
      shapes.forEach(shape => {
        if (shape instanceof THREE.BufferGeometry) {
          shape.dispose();
        } else if (shape instanceof THREE.Group) {
          shape.children.forEach(child => {
            if (child.geometry) child.geometry.dispose();
            if (child.material) child.material.dispose();
          });
        }
      });
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
      rendererRef.current = null;
    };
  }, [containerRef, currentIndex]);
};