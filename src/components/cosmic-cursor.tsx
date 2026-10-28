
'use client';

import { useEffect, useRef } from 'react';

export default function CosmicCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (!finePointer.matches || reducedMotion.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const trail = trailRef.current;

    if (!dot || !ring || !trail) return;

    document.body.classList.add('cosmic-cursor-enabled');

    let frame = 0;
    let x = -100;
    let y = -100;
    let ringX = x;
    let ringY = y;
    let trailX = x;
    let trailY = y;
    let hovering = false;
    let pressed = false;

    const render = () => {
      ringX += (x - ringX) * 0.15;
      ringY += (y - ringY) * 0.15;

      trailX += (x - trailX) * 0.075;
      trailY += (y - trailY) * 0.075;

      dot.style.left = `${x}px`;
      dot.style.top = `${y}px`;

      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;

      trail.style.left = `${trailX}px`;
      trail.style.top = `${trailY}px`;

      frame = requestAnimationFrame(render);
    };

    const move = (event: MouseEvent) => {
      x = event.clientX;
      y = event.clientY;
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      hovering = Boolean(
        target.closest(
          'a, button, [role="button"], input, textarea, select, label'
        )
      );

      ring.classList.toggle('cursor-hover', hovering);
      dot.classList.toggle('cursor-hover-dot', hovering);
    };

    const onDown = () => {
      pressed = true;
      ring.classList.add('cursor-pressed');
    };

    const onUp = () => {
      pressed = false;
      ring.classList.remove('cursor-pressed');
    };

    const onLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      trail.style.opacity = '0';
    };

    const onEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      trail.style.opacity = '.5';
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
      } else {
        frame = requestAnimationFrame(render);
      }
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);
    document.addEventListener('visibilitychange', onVisibility);

    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);

      document.body.classList.remove('cosmic-cursor-enabled');

      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={trailRef} className="cosmic-cursor-trail" />
      <div ref={ringRef} className="cosmic-cursor-ring" />
      <div ref={dotRef} className="cosmic-cursor-dot">
        <span />
      </div>
    </div>
  );
}
