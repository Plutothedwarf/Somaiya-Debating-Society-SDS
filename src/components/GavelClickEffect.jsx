import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GavelClickEffect() {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    const handleClick = (e) => {
      // Don't trigger on interactive elements if you want, but it's fun everywhere
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      
      // Remove after animation finishes
      setTimeout(() => {
        setClicks((prev) => prev.filter(c => c.id !== newClick.id));
      }, 800);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999, overflow: 'hidden' }}>
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            initial={{ opacity: 1, scale: 1.5, rotate: -45, y: -20, x: 20 }}
            animate={{ opacity: 0, scale: 0.8, rotate: 0, y: 0, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: click.x - 25, // center on click
              top: click.y - 25,
              width: '50px',
              height: '50px',
              backgroundImage: 'url(/images/gavel_icon.png)', // We'll need a placeholder or CSS for gavel
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Fallback emoji if image isn't there */}
            <span style={{ fontSize: '30px', display: 'block', textShadow: '2px 2px 0 var(--crimson)' }}>🔨</span>
          </motion.div>
        ))}
      </AnimatePresence>
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={`shock-${click.id}`}
            initial={{ opacity: 0.8, scale: 0.2 }}
            animate={{ opacity: 0, scale: 2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              left: click.x - 20,
              top: click.y - 20,
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              border: '3px solid var(--crimson)',
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
