import React, { useEffect, useRef } from 'react';

const MatrixTornado = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const runes = '᚛᚜ᚐᚑᚒᚓᚔᚕᚖᚗᚘᚙᚚ᚛᚜᚝᚞᚟ᚠᚡᚢᚣᚤᚥᚦᚧᚨᚩᚪᚫᚬᚭᚮᚯᚰᚱᚲᚳᚴᚵᚶᚷᚸᚹᚺᚻᚼᚽᚾᚿᛀᛁᛂᛃᛄᛅᛆᛇᛈᛉᛊᛋᛌᛍᛎᛏᛐᛑᛒᛓᛔᛕᛖᛗᛘᛙᛚᛛᛜᛝᛞᛟᛠᛡᛢᛣᛤᛥᛦᛧᛨᛩᛪ᛫᛬᛭ᛮᛯᛰ';
    const fontSize = 14;
    const runeObjects = [];

    class RuneObject {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.rune = runes[Math.floor(Math.random() * runes.length)];
        this.size = Math.random() * 20 + 10;
        this.rotationSpeed = (Math.random() - 0.5) * 0.1;
        this.oscillationAmplitude = Math.random() * 50 + 25;
        this.oscillationFrequency = Math.random() * 0.05 + 0.02;
      }

      update() {
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        const dx = centerX - this.x;
        const dy = centerY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 50) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
        } else {
          const attractionForce = 0.05;
          this.angle += this.rotationSpeed;
          this.x += Math.cos(this.angle) * this.speed + dx * attractionForce;
          this.y += Math.sin(this.angle) * this.speed + dy * attractionForce;

          // Add oscillation
          this.x += Math.sin(this.y * this.oscillationFrequency) * this.oscillationAmplitude;
          this.y += Math.sin(this.x * this.oscillationFrequency) * this.oscillationAmplitude;
        }
      }

      draw() {
        ctx.font = `${this.size}px monospace`;
        ctx.fillStyle = `rgba(0, ${Math.floor(Math.random() * 255)}, 0, ${Math.random() * 0.5 + 0.5})`;
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        ctx.fillText(this.rune, 0, 0);
        ctx.restore();
      }
    }

    for (let i = 0; i < 100; i++) {
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
