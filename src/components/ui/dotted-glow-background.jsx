import React, { useEffect, useRef } from 'react';

export const DottedGlowBackground = ({
  className,
  gap = 22,
  radius = 1.6,
  color = 'rgba(37, 99, 235, 0.5)',
  glowColor = 'rgba(37, 99, 235, 0.8)',
  opacity = 0.5,
  speedMin = 0.3,
  speedMax = 1.0,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = canvasRef.current;
    const container = containerRef.current;
    if (!el || !container) return;
    const ctx = el.getContext('2d');
    if (!ctx) return;
    let raf = 0;
    let stopped = false;
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      el.width = Math.max(1, Math.floor(width * dpr));
      el.height = Math.max(1, Math.floor(height * dpr));
      el.style.width = `${Math.floor(width)}px`;
      el.style.height = `${Math.floor(height)}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    let dots = [];
    const regen = () => {
      dots = [];
      const { width, height } = container.getBoundingClientRect();
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5);
          const y = j * gap;
          const phase = Math.random() * Math.PI * 2;
          const speed = speedMin + Math.random() * (speedMax - speedMin);
          dots.push({ x, y, phase, speed });
        }
      }
    };
    regen();

    const draw = (now) => {
      if (stopped) return;
      ctx.clearRect(0, 0, el.width, el.height);
      const time = now / 1000;
      ctx.save();
      ctx.fillStyle = color;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const mod = (time * d.speed + d.phase) % 2;
        const lin = mod < 1 ? mod : 2 - mod;
        const a = 0.2 + 0.6 * lin;
        if (a > 0.6) {
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = 5 * ((a - 0.6) / 0.4);
        } else {
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        ctx.globalAlpha = a * opacity;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      raf = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      resize();
      regen();
    };
    window.addEventListener('resize', handleResize);
    raf = requestAnimationFrame(draw);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', handleResize);
      ro.disconnect();
    };
  }, [gap, radius, color, glowColor, opacity, speedMin, speedMax]);

  return (
    <div ref={containerRef} className={className} style={{ position: 'absolute', inset: 0 }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};
