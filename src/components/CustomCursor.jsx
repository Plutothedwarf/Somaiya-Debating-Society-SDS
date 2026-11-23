import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Check if on a mobile device where custom cursor doesn't matter
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnterInteractive = () => {
      cursor.classList.add('cursor-hovering');
    };

    const onLeaveInteractive = () => {
      cursor.classList.remove('cursor-hovering');
    };

    const animateCursor = () => {
      // Use smooth lerping for the cursor image to give it a natural weight
      cursor.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      rafId.current = requestAnimationFrame(animateCursor);
    };

    rafId.current = requestAnimationFrame(animateCursor);
    document.addEventListener('mousemove', onMove, { passive: true });

    const addHoverListeners = () => {
      const els = document.querySelectorAll('a, button, [role="button"], input, textarea, select, label[for]');
      els.forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive);
        el.addEventListener('mouseleave', onLeaveInteractive);
      });
    };

    addHoverListeners();
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId.current);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      ref={cursorRef}
      aria-hidden="true"
    >
      <img src="/images/cursor_mudra.png" alt="" />
    </div>
  );
}
