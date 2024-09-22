import React, { useEffect, useRef } from 'react';

const MatrixTornado = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const symbols = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 15;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -canvas.height;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Calculate the angle for the tornado effect
        const angle = (y / canvas.height) * Math.PI * 2;
        const radius = (canvas.width / 2) * (1 - y / canvas.height);
        const tornadoX = canvas.width / 2 + Math.cos(angle) * radius;
        const tornadoY = y;

        ctx.save();
        ctx.translate(tornadoX, tornadoY);
        ctx.rotate(angle);
        ctx.fillText(text, 0, 0);
        ctx.restore();

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }

        drops[i] += 0.05; // Slower falling speed
      }
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animate);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixTornado;
