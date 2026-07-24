import { useEffect, useRef } from 'react';

export function CursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const onDown = () => {
      if (trailRef.current) {
        trailRef.current.style.width = '40px';
        trailRef.current.style.height = '40px';
        trailRef.current.style.borderColor = 'rgba(0, 230, 118, 0.9)';
      }
    };
    const onUp = () => {
      if (trailRef.current) {
        trailRef.current.style.width = '24px';
        trailRef.current.style.height = '24px';
        trailRef.current.style.borderColor = 'rgba(0, 230, 118, 0.6)';
      }
    };

    const tick = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;
      if (trailRef.current) {
        trailRef.current.style.left = `${trailX}px`;
        trailRef.current.style.top = `${trailY}px`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
    };
  }, []);

  return (
    <>
      <div ref={trailRef} className="cursor-trail hidden md:block" />
      <div ref={dotRef} className="cursor-dot hidden md:block" />
    </>
  );
}
