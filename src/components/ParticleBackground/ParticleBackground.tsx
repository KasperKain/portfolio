import "./ParticleBackground.css";
import React, { useEffect, useRef } from "react";

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", setCanvasSize);
    setCanvasSize();

    class Particle {
      x: number;
      y: any;
      radius: number;
      alpha: number;
      velocity: { x: number; y: number };
      constructor(x: number, y: any, radius: number) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.alpha = 1;
        this.velocity = {
          x: (Math.random() - 0.5) * 1.5,
          y: Math.random() * 3,
        };
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.shadowBlur = 5;
        ctx.shadowColor = "white";
        ctx.fill();
        ctx.restore();
      }

      update() {
        this.draw();
        this.y -= this.velocity.y;
        this.x += this.velocity.x;
        this.alpha -= 0.002;
      }
    }

    let particles: any[] = [];
    let frame = 0;

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 20 === 0) {
        particles.push(
          new Particle(
            Math.random() * canvas.width,
            canvas.height,
            Math.random() * 3 + 2
          )
        );
      }
      frame++;

      particles = particles.filter((p) => p.alpha > 0);

      particles.forEach((p) => p.update());
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} className='particle-canvas' />;
};

export default ParticleBackground;
