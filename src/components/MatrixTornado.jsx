import React, { useEffect, useRef, useState, useMemo } from 'react';

const MatrixTornado = ({ className }) => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const symbols = useMemo(() => {
    const japaneseSymbols = 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん';
    const hiTechSymbols = '⌘⌥⇧⏎⏏︎⌫⌦⎋⇪⇥↵⇄⇅⇆⇇⇈⇉⇊⌤⌃⌅';
    return japaneseSymbols + hiTechSymbols;
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const symbolObjects = Array.from({ length: 50 }, () => createSymbolObject(dimensions, symbols));

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      symbolObjects.forEach(symbol => {
        updateSymbol(symbol, dimensions, mousePosition);
        drawSymbol(ctx, symbol);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, [dimensions, mousePosition, symbols]);

  return <canvas ref={canvasRef} className={className} />;
};

const createSymbolObject = (dimensions, symbols) => ({
  x: Math.random() * dimensions.width,
  y: Math.random() * dimensions.height,
  z: Math.random() * 1500 + 500,
  size: Math.random() * 10 + 5,
  symbol: symbols[Math.floor(Math.random() * symbols.length)],
  color: `rgba(0, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.3 + 0.1})`,
  speed: Math.random() * 1.5 + 0.5,
});

const updateSymbol = (symbol, dimensions, mousePosition) => {
  symbol.z -= symbol.speed;
  if (symbol.z < 1) {
    Object.assign(symbol, createSymbolObject(dimensions, symbol.symbol));
    return;
  }

  const scale = 1000 / (1000 + symbol.z);
  const x2d = (symbol.x - dimensions.width / 2) * scale + dimensions.width / 2;
  const y2d = (symbol.y - dimensions.height / 2) * scale + dimensions.height / 2;

  const dx = mousePosition.x - x2d;
  const dy = mousePosition.y - y2d;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 100) {
    symbol.x += dx * 0.005;
    symbol.y += dy * 0.005;
  }

  if (x2d < 0 || x2d > dimensions.width || y2d < 0 || y2d > dimensions.height) {
    Object.assign(symbol, createSymbolObject(dimensions, symbol.symbol));
  }
};

const drawSymbol = (ctx, symbol) => {
  const scale = 1000 / (1000 + symbol.z);
  const x2d = (symbol.x - ctx.canvas.width / 2) * scale + ctx.canvas.width / 2;
  const y2d = (symbol.y - ctx.canvas.height / 2) * scale + ctx.canvas.height / 2;

  ctx.font = `${symbol.size * scale}px monospace`;
  ctx.fillStyle = symbol.color;
  ctx.fillText(symbol.symbol, x2d, y2d);
};

export default MatrixTornado;
