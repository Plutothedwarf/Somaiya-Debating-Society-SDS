import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    argument: "If we allow students to wear whatever they want, soon they'll show up in pajamas, and then they'll stop coming to school altogether!",
    options: ["Ad Hominem", "Slippery Slope", "Strawman"],
    answer: "Slippery Slope",
    explanation: "Assuming a relatively small first step inevitably leads to a chain of related (and catastrophic) events without direct evidence."
  },
  {
    argument: "Why should we listen to your proposal on the economy? You couldn't even manage your own personal budget last year.",
    options: ["Ad Hominem", "False Dilemma", "Appeal to Authority"],
    answer: "Ad Hominem",
    explanation: "Attacking the character or personal traits of the speaker instead of addressing the actual argument."
  },
  {
    argument: "My opponent wants to reduce defense spending. I can't believe they want to leave our nation completely defenseless and vulnerable!",
    options: ["Strawman", "Slippery Slope", "No True Scotsman"],
    answer: "Strawman",
    explanation: "Misrepresenting someone's argument to make it easier to attack (reducing spending doesn't mean zero defense)."
  }
];

export default function FallacyFinder({ onClose }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleSelect = (opt) => {
    if (selected) return;
    setSelected(opt);
    if (opt === QUESTIONS[currentQ].answer) {
      setScore(s => s + 1);
    }
    setTimeout(() => {
      if (currentQ < QUESTIONS.length - 1) {
        setCurrentQ(c => c + 1);
        setSelected(null);
      } else {
        setFinished(true);
      }
    }, 2500);
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.8)', padding: '2rem'
    }}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotate: -2 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotate: 2 }}
        style={{
          background: 'var(--parchment)', padding: '3rem', border: '6px solid var(--crimson)',
          maxWidth: '600px', width: '100%', position: 'relative', boxShadow: '20px 20px 0 var(--ink)'
        }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>×</button>
        
        <h2 style={{ fontFamily: 'var(--font-masthead)', fontSize: '2.5rem', color: 'var(--ink)', marginBottom: '0.5rem' }}>FALLACY FINDER</h2>
        <div style={{ height: '4px', background: 'var(--saffron)', marginBottom: '2rem', width: '50px' }} />

        {finished ? (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-masthead)', fontSize: '3rem', color: 'var(--crimson)' }}>SCORE: {score}/{QUESTIONS.length}</h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 600 }}>
              {score === QUESTIONS.length ? "Flawless logic! You'd destroy them in rebuttal." : "Keep studying your logic 101!"}
            </p>
          </div>
        ) : (
          <>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--ink)', marginBottom: '2rem', borderLeft: '4px solid var(--crimson)', paddingLeft: '1rem' }}>
              "{QUESTIONS[currentQ].argument}"
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {QUESTIONS[currentQ].options.map(opt => {
                let bg = 'var(--cream)';
                let borderColor = 'var(--ink)';
                if (selected) {
                  if (opt === QUESTIONS[currentQ].answer) {
                    bg = 'var(--sage)'; // we don't have sage but we have green maybe
                    borderColor = 'green';
                  } else if (opt === selected) {
                    bg = 'var(--crimson)';
                    borderColor = 'var(--crimson)';
                  }
                }

                return (
                  <button 
                    key={opt}
                    onClick={() => handleSelect(opt)}
                    style={{
                      background: bg, color: selected && opt === selected && opt !== QUESTIONS[currentQ].answer ? '#fff' : 'var(--ink)',
                      border: `3px solid ${borderColor}`, padding: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 800,
                      fontSize: '1.1rem', cursor: selected ? 'default' : 'pointer', transition: 'all 0.2s ease',
                      boxShadow: '4px 4px 0 rgba(0,0,0,0.1)', textAlign: 'left'
                    }}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>

            {selected && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: '2rem', padding: '1rem', background: 'var(--ink)', color: 'var(--parchment)', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>
                {QUESTIONS[currentQ].explanation}
              </motion.div>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
}
