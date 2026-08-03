import React, { useEffect, useRef } from "react";

export default function HeroBackground() {
  const canvasRef = useRef(null);
  const colorRef = useRef(null);
  const secondaryColorRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width, height;

    const particles = [];
    let particleCount = 100;

    let themeColorString = "rgb(32, 199, 198)";
    let themeSecondaryColorString = "rgb(255, 100, 100)";

    const mouse = { x: -1000, y: -1000, vx: 0, vy: 0 };
    let lastMouse = { x: -1000, y: -1000 };

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateColor = () => {
      if (colorRef.current) {
        const style = getComputedStyle(colorRef.current);
        themeColorString = style.color || "rgb(32, 199, 198)";
      }
      if (secondaryColorRef.current) {
        const style = getComputedStyle(secondaryColorRef.current);
        themeSecondaryColorString = style.color || "rgb(255, 100, 100)";
      }
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : (Math.random() > 0.5 ? -50 : width + 50);
        this.y = initial ? Math.random() * height : Math.random() * height;

        if (!initial && Math.random() > 0.5) {
          this.x = Math.random() * width;
          this.y = Math.random() > 0.5 ? -50 : height + 50;
        }

        this.baseRadius = Math.random() * 2.5 + 1.5;
        this.radius = this.baseRadius;

        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.4 + 0.1;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;

        this.z = Math.random() * 0.5 + 0.5;

        this.isPulsing = Math.random() > 0.7;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.01;
        this.colorMode = Math.random() > 0.5 ? 1 : 2; // 1 for primary, 2 for secondary
      }

      update(reducedMotion) {
        if (!reducedMotion) {
          this.x += this.vx * this.z;
          this.y += this.vy * this.z;
        }

        if (this.x < -100) this.x = width + 100;
        if (this.x > width + 100) this.x = -100;
        if (this.y < -100) this.y = height + 100;
        if (this.y > height + 100) this.y = -100;

        if (!reducedMotion) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          // Dynamic mouse repulsion: spring-like effect
          if (dist < 220) {
            const force = (220 - dist) / 220;
            this.x -= (dx / dist) * force * 1.8 * this.z;
            this.y -= (dy / dist) * force * 1.8 * this.z;
          }

          if (mouse.vx !== 0 || mouse.vy !== 0) {
            this.x -= mouse.vx * 0.03 * this.z;
            this.y -= mouse.vy * 0.03 * this.z;
          }
        }

        if (this.isPulsing && !reducedMotion) {
          this.pulsePhase += this.pulseSpeed;
          this.radius = this.baseRadius + Math.sin(this.pulsePhase) * 1.5;
        }
      }

      draw() {
        ctx.beginPath();
        const r = Math.max(0.1, this.radius);
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);

        const alpha = 0.5 + (this.z * 0.5);
        ctx.globalAlpha = alpha;
        
        // Gradient fill for particles
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, r);
        const color = this.colorMode === 1 ? themeColorString : themeSecondaryColorString;
        
        gradient.addColorStop(0, '#ffffff'); // bright center
        gradient.addColorStop(0.3, color);
        gradient.addColorStop(1, 'transparent');

        ctx.fillStyle = gradient;

        // Glow effect
        if (this.isPulsing) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = color;
        } else {
          ctx.shadowBlur = 10;
          ctx.shadowColor = color;
        }

        ctx.fill();
        ctx.shadowBlur = 0; 
        ctx.globalAlpha = 1;
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = window.devicePixelRatio || 1;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      updateColor();
      particles.length = 0;

      // Increased particle density for a more filled look
      const area = width * height;
      particleCount = Math.floor(area / 6000); 
      particleCount = Math.min(Math.max(particleCount, 80), 200);

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      const maxDist = 180; // slightly longer reach between particles

      // Draw lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist) {
            let alpha = (1 - dist / maxDist) * 0.5;
            const avgZ = (p1.z + p2.z) / 2;
            alpha *= avgZ;

            const distToMouse1 = Math.hypot(mouse.x - p1.x, mouse.y - p1.y);
            const distToMouse2 = Math.hypot(mouse.x - p2.x, mouse.y - p2.y);
            
            if (distToMouse1 < maxDist || distToMouse2 < maxDist) {
              alpha += 0.25;
            }

            ctx.globalAlpha = Math.min(alpha, 1);
            
            // gradient line
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            grad.addColorStop(0, p1.colorMode === 1 ? themeColorString : themeSecondaryColorString);
            grad.addColorStop(1, p2.colorMode === 1 ? themeColorString : themeSecondaryColorString);

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }
      
      // Draw lines from mouse to particles for an attractive interactive effect
      if (mouse.x !== -1000 && mouse.y !== -1000 && !prefersReducedMotion.matches) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxDist + 60) {
            let alpha = (1 - dist / (maxDist + 60)) * 0.7;
            ctx.globalAlpha = Math.min(alpha, 1);
            
            const grad = ctx.createLinearGradient(mouse.x, mouse.y, p.x, p.y);
            grad.addColorStop(0, themeColorString);
            grad.addColorStop(1, p.colorMode === 1 ? themeColorString : themeSecondaryColorString);

            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 2.0;
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
    };

    let isTabActive = true;

    const animate = () => {
      if (!isTabActive) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      const isReducedMotion = prefersReducedMotion.matches;

      if (lastMouse.x !== -1000 && mouse.x !== -1000) {
        mouse.vx = mouse.x - lastMouse.x;
        mouse.vy = mouse.y - lastMouse.y;
      }
      lastMouse.x = mouse.x;
      lastMouse.y = mouse.y;

      mouse.vx *= 0.9;
      mouse.vy *= 0.9;

      // Draw lines first so they are behind particles
      drawLines();

      particles.forEach((p) => {
        p.update(isReducedMotion);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.vx = 0;
      mouse.vy = 0;
      lastMouse.x = -1000;
      lastMouse.y = -1000;
    };

    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };

    const mutationObserver = new MutationObserver(() => updateColor());
    mutationObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        ref={colorRef}
        className="text-primary absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden"
        aria-hidden="true"
      />
      <div
        ref={secondaryColorRef}
        className="text-accent absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden"
        aria-hidden="true"
      />
      
      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-60 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full bg-transparent"
        style={{
          pointerEvents: "auto",
        }}
      />

      {/* Fade overlay so text remains readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />
    </div>
  );
}
