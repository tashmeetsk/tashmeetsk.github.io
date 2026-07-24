import { useEffect, useRef } from 'react';

export function GradientBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      if (ref.current) {
        ref.current.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(0,230,118,0.10), transparent 40%), radial-gradient(circle at ${100 - x}% ${100 - y}%, rgba(0,184,89,0.12), transparent 45%), linear-gradient(135deg, #070a0f 0%, #0b1018 50%, #020617 100%)`;
      }
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 -z-10 transition-colors duration-300"
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(0,230,118,0.08), transparent 40%), linear-gradient(135deg, #070a0f 0%, #0b1018 50%, #020617 100%)',
      }}
    />
  );
}
