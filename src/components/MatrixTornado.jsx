import React, { useEffect, useRef } from 'react';

const MatrixTornado = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const runes = '᚛᚜ᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜᚝᚞᚟ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭ᛮᛯᛰ';
    const runeObjects = [];

    class RuneObject {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * (canvas.width / 4) + (canvas.width / 4);
        this.angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 0.005 + 0.002;
        this.rune = runes[Math.floor(Math.random() * runes.length)];
        this.size = Math.random() * 20 + 10;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.5 + 0.5;
      }

      update() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        this.angle += this.speed;
        this.x = centerX + Math.cos(this.angle) * this.radius;
        this.y = centerY + Math.sin(this.angle) * this.radius;

        this.radius -= 0.1;
        if (this.radius < 10) {
          this.radius = Math.random() * (canvas.width / 4) + (canvas.width / 4);
        }

        this.opacity = Math.sin(this.angle) * 0.25 + 0.75;
      }

      draw() {
        ctx.font = `${this.size}px monospace`;
        ctx.fillStyle = `rgba(0, ${Math.floor(Math.random() * 255)}, 0, ${this.opacity})`;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle * this.rotationSpeed);
        ctx.fillText(this.rune, 0, 0);
        ctx.restore();
      }
    }

    for (let i = 0; i < 150; i++) {
      runeObjects.push(new RuneObject());
    }

    function animate() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      runeObjects.forEach(rune => {
        rune.update();
        rune.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
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
