import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QUESTIONS = [
  {
    q: "Your opponent just made a flawless point. What do you do?",
    options: [
      { text: "Ignore it and speak louder.", type: "aggressive" },
      { text: "Point out a minor technical rule they broke.", type: "pedantic" },
      { text: "Make the judge feel sorry for you.", type: "emotional" }
    ]
  },
  {
    q: "How do you prepare for a debate?",
    options: [
      { text: "5 minutes before, fueled by adrenaline.", type: "aggressive" },
      { text: "Color-coded index cards and a 50-page doc.", type: "pedantic" },
      { text: "Rehearsing dramatic pauses in the mirror.", type: "emotional" }
    ]
  },
  {
    q: "What's your preferred debate format?",
    options: [
      { text: "Any format where I get to interrupt (POI!).", type: "aggressive" },
      { text: "British Parliamentary (Strict rules).", type: "pedantic" },
      { text: "World Schools (More rhetoric and style).", type: "emotional" }
    ]
  }
];

export default function PersonalityQuiz({ onClose }) {
  const [currentQ, setCurrentQ] = useState(0);
  const [scores, setScores] = useState({ aggressive: 0, pedantic: 0, emotional: 0 });
  const [finished, setFinished] = useState(false);

  const handleSelect = (type) => {
    setScores(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(c => c + 1);
    } else {
      setFinished(true);
    }
  };

  const getResult = () => {
    let max = 'aggressive';
    if (scores.pedantic > scores.aggressive) max = 'pedantic';
    if (scores.emotional > scores[max]) max = 'emotional';

    switch (max) {
      case 'aggressive': return { title: "The Aggressive First Speaker", desc: "All rhetoric, high energy. You win by intimidating the opposition." };
      case 'pedantic': return { title: "The Pedantic Adjudicator", desc: "You care more about the rules of debate than the actual topic." };
      case 'emotional': return { title: "The Manipulative Whip", desc: "You make the judge cry. Facts are optional, feelings are mandatory." };
      default: return { title: "The Centrist", desc: "You just like arguing." };
    }
  };

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(0,0,0,0.8)', padding: '2rem'
    }}>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotate: -2 }}
        style={{
          background: 'var(--parchment)', padding: '3rem', border: '6px solid var(--ink)',
          maxWidth: '600px', width: '100%', position: 'relative', boxShadow: '-20px 20px 0 var(--saffron)'
        }}
      >
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '15px', background: 'none', border: 'none', fontSize: '2rem', cursor: 'pointer', fontFamily: 'var(--font-display)', color: 'var(--ink)' }}>×</button>
        
        <h2 style={{ fontFamily: 'var(--font-masthead)', fontSize: '2.5rem', color: 'var(--crimson)', marginBottom: '0.5rem' }}>DEBATER QUIZ</h2>
        <div style={{ height: '4px', background: 'var(--ink)', marginBottom: '2rem', width: '50px' }} />

        {finished ? (
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-masthead)', fontSize: '2rem', color: 'var(--ink)' }}>YOU ARE:</h3>
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: 'var(--crimson)', margin: '1rem 0' }}>{getResult().title}</h4>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.2rem', fontWeight: 600 }}>{getResult().desc}</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div key={currentQ} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--ink)', marginBottom: '2rem' }}>
                {QUESTIONS[currentQ].q}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {QUESTIONS[currentQ].options.map((opt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSelect(opt.type)}
                    style={{
                      background: 'var(--cream)', color: 'var(--ink)',
                      border: '3px solid var(--ink)', padding: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 700,
                      fontSize: '1.1rem', cursor: 'pointer', transition: 'all 0.2s ease',
                      boxShadow: '4px 4px 0 rgba(0,0,0,0.1)', textAlign: 'left'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(5px)'; e.currentTarget.style.background = 'var(--gold)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.background = 'var(--cream)'; }}
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </motion.div>
    </div>
  );
}
