// src/components/ParticleBackground.jsx
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const ParticleBackground = ({
  particleColor = "rgba(180, 150, 255, 0.6)", // Soft lavender
  connectionColor = "rgba(180, 150, 255, 0.15)", // Very faint connections
  mouseRadius = 150,
  repelForce = 0.2,
}) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mousePos = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 1; // Smaller particles
        this.baseSize = this.size;
        this.speedX = Math.random() * 0.8 - 0.4; // Slower movement
        this.speedY = Math.random() * 0.8 - 0.4;
        this.color = particleColor;
      }

      update() {
        // Gentle mouse interaction
        if (mousePos.current.x && mousePos.current.y) {
          const dx = this.x - mousePos.current.x;
          const dy = this.y - mousePos.current.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouseRadius) {
            const force = ((mouseRadius - distance) / mouseRadius) * 0.3; // Reduced force
            const angle = Math.atan2(dy, dx);
            this.speedX += Math.cos(angle) * force * repelForce;
            this.speedY += Math.sin(angle) * force * repelForce;
          }
        }

        // Update position
        this.x += this.speedX;
        this.y += this.speedY;

        // Soft bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -0.7;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -0.7;

        // Slow down
        this.speedX *= 0.96;
        this.speedY *= 0.96;
      }

      draw() {
        // Particle with subtle glow
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    particles.current = Array.from({ length: 50 }, () => new Particle());

    // Draw soft connections
    const connect = () => {
      ctx.lineWidth = 0.2; // Thinner lines

      for (let i = 0; i < particles.current.length; i++) {
        for (let j = i + 1; j < particles.current.length; j++) {
          const p1 = particles.current[i];
          const p2 = particles.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Shorter connection distance
            const alpha = 0.15 - (distance / 100) * 0.15; // Very subtle
            ctx.strokeStyle = connectionColor.replace(/[\d.]+\)$/, `${alpha})`);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop with motion blur effect
    const animate = () => {
      ctx.fillStyle = "rgba(10, 15, 30, 0.15)"; // Darker, more transparent
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    };
    animate();

    const handleMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    document.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
    };
  }, [particleColor, connectionColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-80"
    />
  );
};
ParticleBackground.propTypes = {
  particleColor: PropTypes.string,
  connectionColor: PropTypes.string,
  mouseRadius: PropTypes.number,
  repelForce: PropTypes.number,
};

export default ParticleBackground;
