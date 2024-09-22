import React, { useEffect, useRef, useState } from 'react';

const MatrixTornado = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const japaneseSymbols = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
    const hiTechSymbols = '⌘⌥⇧⏎⏏︎⌫⌦⎋⇪⇥↵⇄⇅⇆⇇⇈⇉⇊⌤⌃⌅⍰⍼⍾⎆⎇⎈⎉⎊⎋⎌⎍⎎⎏';
    const symbols = japaneseSymbols + hiTechSymbols;
    const symbolObjects = [];

    class SymbolObject {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 1500 + 500; // depth
        this.size = Math.random() * 15 + 10;
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.color = `rgba(0, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.5})`;
        this.speed = Math.random() * 2 + 1;
      }

      update() {
        this.z -= this.speed;
        if (this.z < 1) {
          this.reset();
        }

        const scale = 1000 / (1000 + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;

        const dx = mousePosition.x - x2d;
        const dy = mousePosition.y - y2d;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          this.x += dx * 0.01;
          this.y += dy * 0.01;
        }

        if (x2d < 0 || x2d > canvas.width || y2d < 0 || y2d > canvas.height) {
          this.reset();
        }
      }

      draw() {
        const scale = 1000 / (1000 + this.z);
        const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
        const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;

        ctx.font = `${this.size * scale}px monospace`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.symbol, x2d, y2d);
      }
    }

    for (let i = 0; i < 200; i++) {
      symbolObjects.push(new SymbolObject());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      symbolObjects.forEach(symbol => {
        symbol.update();
        symbol.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      symbolObjects.forEach(symbol => symbol.reset());
    };

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MatrixTornado;
