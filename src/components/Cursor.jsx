import React, { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);

  useEffect(() => {
    // Only enable cursor on pointing devices with large screens (desktops)
    const isDesktop = window.matchMedia('(pointer:fine)').matches && window.innerWidth > 1024;
    if (!isDesktop) return;

    document.body.classList.add('has-cursor');

    const cursor = cursorDotRef.current;
    const ring = cursorRingRef.current;

    let rx = 0, ry = 0;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cursor) {
        cursor.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    let animId = null;
    const loop = () => {
      rx += (mx - rx) * 0.28;
      ry += (my - ry) * 0.28;
      if (ring) {
        ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      animId = requestAnimationFrame(loop);
    };
    loop();

    const onMouseOver = (e) => {
      const t = e.target.closest('[data-cursor="link"], a, button, .tilt-card, .svc-tile');
      if (t && ring) {
        ring.classList.add('cursor-link');
      }
    };

    const onMouseOut = (e) => {
      const t = e.target.closest('[data-cursor="link"], a, button, .tilt-card, .svc-tile');
      if (t && ring) {
        ring.classList.remove('cursor-link');
      }
    };

    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);

    return () => {
      document.body.classList.remove('has-cursor');
      window.removeEventListener('mousemove', onMouseMove);
      if (animId) cancelAnimationFrame(animId);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div id="cursor" className="cursor-dot" ref={cursorDotRef}></div>
      <div id="cursor-ring" className="cursor-ring" ref={cursorRingRef}></div>
    </>
  );
}
