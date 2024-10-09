import { useEffect, useRef } from 'react';
import * as THREE from 'three';

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

    // Create Numus logo sphere
    const numusLogoTexture = new THREE.TextureLoader().load('/logo.svg');
    const numusSphereGeometry = new THREE.SphereGeometry(10, 64, 64);
    const numusSphereMaterial = new THREE.MeshPhongMaterial({ 
      map: numusLogoTexture,
      emissive: 0x0099FF,
      emissiveIntensity: 0.5,
      specular: 0xFFFFFF,
      shininess: 100
    });
    const numusSphere = new THREE.Mesh(numusSphereGeometry, numusSphereMaterial);
    scene.add(numusSphere);

    // Create project rings
    const projects = [
      { name: 'CeDeFiAi', color: 0x4DBFFF, radius: 25 },
      { name: 'Asterizm', color: 0x1AACFF, radius: 35 },
      { name: 'Claimr', color: 0x007ACC, radius: 45 },
      { name: 'ChainSpot', color: 0x005C99, radius: 55 },
      { name: 'TADS', color: 0x003D66, radius: 65 }
    ];

    const projectGroup = new THREE.Group();

    projects.forEach((project, index) => {
      const ringGeometry = new THREE.TorusGeometry(project.radius, 0.5, 16, 100);
      const ringMaterial = new THREE.MeshPhongMaterial({ 
        color: project.color,
        specular: 0xFFFFFF,
        shininess: 50,
        transparent: true,
        opacity: 0.7
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      projectGroup.add(ring);

      // Add project components
      const componentCount = 5 + index * 2;
      for (let i = 0; i < componentCount; i++) {
        const angle = (i / componentCount) * Math.PI * 2;
        const componentGeometry = new THREE.SphereGeometry(1, 16, 16);
        const componentMaterial = new THREE.MeshPhongMaterial({ 
          color: project.color,
          specular: 0xFFFFFF,
          shininess: 100,
          transparent: true,
          opacity: 0.9
        });
        const component = new THREE.Mesh(componentGeometry, componentMaterial);
        component.position.set(
          Math.cos(angle) * project.radius,
          Math.sin(angle) * project.radius,
          0
        );
        ring.add(component);
      }

      // Add project label
      const loader = new THREE.FontLoader();
      loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new THREE.TextGeometry(project.name, {
          font: font,
          size: 3,
          height: 0.2,
        });
        const textMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(project.radius + 5, 0, 0);
        ring.add(textMesh);
      });
    });

    scene.add(projectGroup);

    // Create connection lines
    const lineMaterial = new THREE.LineBasicMaterial({ 
      color: 0xB3E5FF,
      transparent: true, 
      opacity: 0.3 
    });
    const connectionLines = new THREE.Group();
    projectGroup.children.forEach(ring => {
      const lineGeometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(ring.position.x, ring.position.y, ring.position.z),
        new THREE.Vector3(0, 0, 0)
      ]);
      const line = new THREE.Line(lineGeometry, lineMaterial);
      connectionLines.add(line);
    });
    scene.add(connectionLines);

    // Add particle system for background
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCnt = 5000;
    const posArray = new Float32Array(particlesCnt * 3);
    for(let i = 0; i < particlesCnt * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 200;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: 0x0099FF
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xE6F7FF, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0099FF, 1);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // Animation
    const animate = () => {
      if (!rendererRef.current) return;
      requestAnimationFrame(animate);

      numusSphere.rotation.y += 0.005;
      projectGroup.rotation.y += 0.001;
      projectGroup.rotation.x += 0.0005;
      particlesMesh.rotation.y += 0.0002;

      projectGroup.children.forEach((ring, index) => {
        ring.rotation.x += 0.001 * (index + 1);
        ring.rotation.y += 0.001 * (index + 1);
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