import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { motions, TOPICS } from '../data/motions';

export default function MotionGenerator() {
  const [currentMotion, setCurrentMotion] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('All');
  
  // Timer State
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 mins
  const timerRef = useRef(null);

  useEffect(() => {
    if (timerRunning) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            setTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [timerRunning]);

  const handleGenerate = () => {
    let pool = motions;
    if (selectedTopic !== 'All') {
      pool = motions.filter(m => m.topic === selectedTopic);
    }
    if (pool.length === 0) pool = motions; // fallback
    
    const rand = pool[Math.floor(Math.random() * pool.length)];
    setCurrentMotion(rand);
    
    // Reset timer
    setTimerRunning(false);
    setTimeLeft(15 * 60);
  };

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <section style={{
      background: 'var(--ink)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center',
      borderTop: '8px solid var(--gold)', borderBottom: '8px solid var(--parchment)'
    }} className="bg-dense-pattern">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        <div style={{
          background: 'var(--parchment)', border: '6px solid var(--crimson)', padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto',
          boxShadow: '15px 15px 0 var(--gold)', position: 'relative'
        }}>
          {/* Decorative Tag */}
          <div style={{
            position: 'absolute', top: '-25px', left: '-25px', background: 'var(--saffron)', color: 'var(--ink)',
            fontFamily: 'var(--font-sans)', fontWeight: 900, padding: '0.5rem 1.5rem', border: '3px solid var(--ink)',
            transform: 'rotate(-5deg)', boxShadow: '4px 4px 0 var(--ink)', fontSize: '1.2rem', textTransform: 'uppercase'
          }}>
            ✦ Training Tool
          </div>

          <h2 style={{ fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 5vw, 4rem)', color: 'var(--ink)', marginBottom: '1rem', textShadow: '2px 2px 0 var(--saffron)' }}>
            MOTION GENERATOR
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', color: 'var(--ink)', fontWeight: 600, marginBottom: '2rem' }}>
            Generate a random motion for practice. Select a topic and start your prep timer.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <select 
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              style={{
                background: 'var(--cream)', border: '3px solid var(--ink)', padding: '0.8rem 1.5rem',
                fontFamily: 'var(--font-sans)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--ink)', cursor: 'pointer', boxShadow: '4px 4px 0 var(--crimson)'
              }}
            >
              <option value="All">All Topics</option>
              {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button className="btn-primary" onClick={handleGenerate} style={{ border: '3px solid var(--ink)', boxShadow: '4px 4px 0 var(--ink)', padding: '0.8rem 2rem' }}>
              Generate Motion
            </button>
          </div>

          <AnimatePresence mode="wait">
            {currentMotion ? (
              <motion.div 
                key={currentMotion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                style={{
                  background: 'var(--ink)', padding: '3rem 2rem', border: '4px solid var(--saffron)',
                  marginTop: '2rem', marginBottom: '2rem', position: 'relative'
                }}
              >
                <div style={{ position: 'absolute', top: '-15px', right: '-15px', background: 'var(--cream)', border: '3px solid var(--ink)', padding: '0.2rem 1rem', fontFamily: 'var(--font-sans)', fontWeight: 800, transform: 'rotate(5deg)' }}>
                  {currentMotion.topic}
                </div>
                <h3 style={{ fontFamily: 'var(--font-masthead)', fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--parchment)', lineHeight: 1.2, margin: 0 }}>
                  {currentMotion.text}
                </h3>
              </motion.div>
            ) : (
               <div style={{ padding: '3rem 2rem', marginTop: '2rem', border: '4px dashed var(--crimson)' }}>
                 <p style={{ fontFamily: 'var(--font-masthead)', fontSize: '2rem', color: 'var(--crimson)', margin: 0, opacity: 0.5 }}>
                   CLICK GENERATE TO BEGIN
                 </p>
               </div>
            )}
          </AnimatePresence>

          {/* Prep Timer */}
          {currentMotion && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'var(--crimson)', fontWeight: 900, textShadow: '3px 3px 0 var(--ink)', minWidth: '160px', textAlign: 'center' }}>
                {formatTime(timeLeft)}
              </div>
              <button 
                onClick={() => setTimerRunning(!timerRunning)}
                style={{
                  background: timerRunning ? 'var(--gold)' : 'var(--ink)', 
                  color: timerRunning ? 'var(--ink)' : 'var(--parchment)',
                  border: '3px solid var(--ink)', padding: '0.8rem 1.5rem',
                  fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 900, cursor: 'pointer',
                  boxShadow: '4px 4px 0 var(--crimson)', textTransform: 'uppercase'
                }}
              >
                {timerRunning ? 'Pause Prep' : 'Start 15 Min Prep'}
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
