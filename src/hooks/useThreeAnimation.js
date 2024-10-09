import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

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

    camera.position.set(0, 30, 100);
    camera.lookAt(0, 0, 0);

    // Create central Numus sphere
    const numusSphereGeometry = new THREE.SphereGeometry(10, 32, 32);
    const numusSphereMaterial = new THREE.MeshPhongMaterial({ color: 0x00D67F, emissive: 0x00D67F, emissiveIntensity: 0.5 });
    const numusSphere = new THREE.Mesh(numusSphereGeometry, numusSphereMaterial);
    scene.add(numusSphere);

    // Create orbiting chains
    const chainGroup = new THREE.Group();
    const chainColors = [0x4CAF50, 0x2196F3, 0xFFC107, 0x9C27B0, 0xFF5722];
    const orbitRadii = [25, 35, 45, 55, 65];

    orbitRadii.forEach((radius, index) => {
      const chainGeometry = new THREE.TorusGeometry(radius, 0.5, 16, 100);
      const chainMaterial = new THREE.MeshPhongMaterial({ color: chainColors[index] });
      const chain = new THREE.Mesh(chainGeometry, chainMaterial);
      chain.rotation.x = Math.random() * Math.PI;
      chain.rotation.y = Math.random() * Math.PI;
      chainGroup.add(chain);

      // Add nodes to each chain
      const nodeCount = 5 + index * 2;
      for (let i = 0; i < nodeCount; i++) {
        const angle = (i / nodeCount) * Math.PI * 2;
        const nodeGeometry = new THREE.SphereGeometry(1, 16, 16);
        const nodeMaterial = new THREE.MeshPhongMaterial({ color: chainColors[index] });
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          0
        );
        chain.add(node);
      }
    });

    scene.add(chainGroup);

    // Create connection lines
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.3 });
    const connectionLines = new THREE.Group();
    chainGroup.children.forEach(chain => {
      chain.children.forEach(node => {
        const lineGeometry = new THREE.BufferGeometry().setFromPoints([
          node.position,
          new THREE.Vector3(0, 0, 0)
        ]);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        connectionLines.add(line);
      });
    });
    scene.add(connectionLines);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Animation loop
    const animate = () => {
      if (!rendererRef.current) return;
      requestAnimationFrame(animate);

      numusSphere.rotation.y += 0.005;
      chainGroup.rotation.y += 0.001;
      chainGroup.rotation.x += 0.0005;

      connectionLines.children.forEach(line => {
        line.geometry.setFromPoints([
          line.geometry.attributes.position.array.slice(3, 6),
          new THREE.Vector3(0, 0, 0)
        ]);
        line.geometry.attributes.position.needsUpdate = true;
      });

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