import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX - 4}px`;
      dot.style.top = `${e.clientY - 4}px`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;
      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      isHovering.current = true;
      ringEl.style.width = '60px';
      ringEl.style.height = '60px';
      ringEl.style.borderColor = '#D4A843';
      dot.style.transform = 'scale(1.5)';
    };

    const onLeave = () => {
      isHovering.current = false;
      ringEl.style.width = '40px';
      ringEl.style.height = '40px';
      ringEl.style.borderColor = '#4BA3C7';
      dot.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    const targets = document.querySelectorAll('a, button, .service-card, .why-us-card, .product-card, input, textarea, select');
    targets.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    // Re-attach on DOM changes
    const observer = new MutationObserver(() => {
      const newTargets = document.querySelectorAll('a, button, .service-card, .why-us-card, .product-card, input, textarea, select');
      newTargets.forEach((el) => {
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      observer.disconnect();
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth <= 768) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-gold rounded-full pointer-events-none z-[99998] transition-transform duration-100"
      />
      <div
        ref={ringRef}
        className="fixed w-10 h-10 border-2 border-blue-light rounded-full pointer-events-none z-[99997] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
    </>
  );
}
