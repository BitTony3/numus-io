import React, { useEffect, useRef } from 'react';

const MatrixTornado = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = 300;

    const symbols = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = canvas.width / 20;
    const drops = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0f0';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = symbols[Math.floor(Math.random() * symbols.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-[300px] z-0 pointer-events-none"
    />
  );
};

export default MatrixTornado;
