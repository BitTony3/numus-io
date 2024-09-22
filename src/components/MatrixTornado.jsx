import React, { useEffect, useRef, useState } from 'react';

const MatrixTornado = () => {
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const runes = '᚛᚜ᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜᚝᚞᚟ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭ᛮᛯᛰ';
    const runeObjects = [];

    class RuneObject {
      constructor() {
        this.reset();
      }

      reset() {
        this.theta = Math.random() * Math.PI * 2;
        this.phi = Math.acos((Math.random() * 2) - 1);
        this.distance = Math.random() * 1000 + 500;
        this.size = Math.random() * 15 + 10;
        this.rune = runes[Math.floor(Math.random() * runes.length)];
        this.color = `rgba(0, ${Math.floor(Math.random() * 255)}, 0, ${Math.random() * 0.5 + 0.5})`;
        this.speed = Math.random() * 2 + 1;
      }

      update() {
        this.distance -= this.speed;
        if (this.distance < 1) {
          this.reset();
        }

        const scale = canvas.height / (canvas.height + this.distance);
        const x = canvas.width / 2 + this.distance * Math.sin(this.phi) * Math.cos(this.theta) * scale;
        const y = canvas.height / 2 + this.distance * Math.sin(this.phi) * Math.sin(this.theta) * scale;

        const dx = mousePosition.x - x;
        const dy = mousePosition.y - y;
        const mouseDistance = Math.sqrt(dx * dx + dy * dy);

        if (mouseDistance < 100) {
          this.theta += dx * 0.0001;
          this.phi += dy * 0.0001;
          this.speed = 5;
        } else {
          this.speed *= 0.99;
          if (this.speed < 1) this.speed = 1;
        }

        ctx.font = `${this.size * scale}px monospace`;
        ctx.fillStyle = this.color;
        ctx.fillText(this.rune, x, y);
      }
    }

    for (let i = 0; i < 200; i++) {
      runeObjects.push(new RuneObject());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      runeObjects.forEach(rune => rune.update());

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
