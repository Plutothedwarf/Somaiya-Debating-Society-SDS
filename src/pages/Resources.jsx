import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MotionGenerator from '../components/MotionGenerator';

const RESOURCES = [
  {
    title: 'Beginner\'s Guide to British Parliamentary',
    description: 'A comprehensive starter kit covering speaker roles, points of information, and basic adjudication criteria.',
    type: 'PDF Guide',
    icon: '✦',
  },
  {
    title: 'Matter File: International Relations 2025',
    description: 'Key conflicts, treaties, and geopolitical stances updated for the current competitive season.',
    type: 'Cheat Sheet',
    icon: '🌍',
  },
  {
    title: 'Advanced Rebuttal Structures',
    description: 'Move beyond "they said, we said". Learn how to weigh arguments and take down core premises.',
    type: 'Video Workshop',
    icon: '🎥',
  },
  {
    title: 'Motion Bank (2018-2024)',
    description: 'An archive of over 500 motions set at major Indian and international tournaments, categorized by theme.',
    type: 'Database',
    icon: '📚',
  },
  {
    title: 'First Principles of Economics',
    description: 'Everything you need to know about taxation, monopolies, and free trade for debate rounds.',
    type: 'Cheat Sheet',
    icon: '📈',
  },
  {
    title: 'Adjudication Core Guidelines',
    description: 'How to judge fairly, take effective notes, and deliver constructive oral adjudications.',
    type: 'PDF Guide',
    icon: '⚖️',
  }
];

export function ResourceCard({ resource, i, ySlow, yFast }) {
  return (
    <motion.div
      style={{
        background: 'var(--parchment)',
        border: '4px solid var(--ink)',
        padding: '2rem',
        boxShadow: '8px 8px 0 var(--crimson)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        y: i % 2 === 0 ? ySlow : yFast,
        rotate: i % 2 === 0 ? 1 : -1,
      }}
      whileHover={{ scale: 1.02, rotate: 0, boxShadow: '12px 12px 0 var(--ink)', zIndex: 10 }}
    >
      <div style={{
        position: 'absolute',
        top: '-15px', right: '-15px',
        background: 'var(--gold)',
        color: 'var(--ink)',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.75rem',
        fontWeight: 900,
        letterSpacing: '0.1em',
        padding: '0.4rem 1rem',
        border: '3px solid var(--ink)',
        textTransform: 'uppercase',
        transform: 'rotate(5deg)',
      }}>
        {resource.type}
      </div>

      <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>{resource.icon}</span>
      <h3 style={{
        fontFamily: 'var(--font-masthead)',
        fontSize: '1.8rem',
        color: 'var(--ink)',
        marginBottom: '1rem',
        lineHeight: 1.1,
      }}>
        {resource.title}
      </h3>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '1.05rem',
        color: 'var(--chalk)',
        lineHeight: 1.6,
        margin: 0,
        fontWeight: 500,
      }}>
        {resource.description}
      </p>

      <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
        <button className="btn-secondary" style={{ width: '100%', fontSize: '0.9rem', padding: '0.5rem' }}>
          Access ↗
        </button>
      </div>
    </motion.div>
  );
}

export default function Resources() {
  useEffect(() => { document.title = 'Resources - Somaiya Debating Society'; }, []);
  const { scrollYProgress } = useScroll();

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section style={{
        background: 'var(--crimson)',
        paddingTop: '8rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        borderBottom: '8px solid var(--gold)',
      }} className="bg-dense-pattern">
        
        {/* Decorative elements */}
        <motion.div aria-hidden="true" style={{
          position: 'absolute', left: '-50px', top: '10%', width: '350px', height: '500px',
          backgroundImage: 'url(/images/lotus_element.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.5, rotate: -15, y: ySlow
        }} />
        <motion.div aria-hidden="true" style={{
          position: 'absolute', right: '-20px', bottom: '-40px', width: '300px', height: '300px',
          backgroundImage: 'url(/images/tiger_element.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.4, rotate: 10, y: yFast
        }} />
        <motion.div aria-hidden="true" style={{
          position: 'absolute', right: '10%', top: '20%', width: '250px', height: '150px',
          backgroundImage: 'url(/images/vintage_ticket.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.9, rotate: -8, y: yReverse, zIndex: 2
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div style={{
            display: 'inline-flex', background: 'var(--parchment)', color: 'var(--crimson)',
            fontFamily: 'var(--font-masthead)', fontSize: '1.25rem', padding: '0.4rem 1.5rem', marginBottom: '2rem',
            border: '3px solid var(--ink)', boxShadow: '4px 4px 0 var(--ink)', rotate: 2, y: yReverse
          }}>
            ✦ KNOWLEDGE BASE
          </motion.div>

          <motion.h1 style={{
            fontFamily: 'var(--font-masthead)', fontSize: 'clamp(4rem, 10vw, 8rem)',
            color: 'var(--parchment)', lineHeight: 0.9, marginBottom: '2rem', textShadow: '6px 6px 0 var(--ink)', y: ySlow
          }}>
            ARM YOURSELF<br />
            <span style={{ color: 'var(--saffron)' }}>WITH IDEAS</span>
          </motion.h1>

          <motion.p style={{
            fontFamily: 'var(--font-sans)', fontSize: '1.25rem', color: 'var(--ink)',
            background: 'var(--gold)', padding: '1.5rem', border: '4px solid var(--ink)',
            maxWidth: '600px', margin: '0 auto', boxShadow: '8px 8px 0 var(--ink)', rotate: -1, y: yFast, fontWeight: 700
          }}>
            Debate is 50% delivery and 50% knowing what you're talking about. Dive into our archives of guides, matter files, and motion banks.
          </motion.p>
        </div>
      </section>

      {/* ── RESOURCES GRID ─────────────────────────────────── */}
      <section style={{
        background: 'var(--cream)',
        paddingTop: '6rem',
        paddingBottom: '8rem',
        position: 'relative',
      }}>
        {/* Grain overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/stamp_bg_pattern.png)',
          backgroundSize: '400px', opacity: 0.04, pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem',
          }}>
            {RESOURCES.map((res, i) => (
              <ResourceCard key={res.title} resource={res} i={i} ySlow={ySlow} yFast={yFast} />
            ))}
          </div>
        </div>

        {/* Floral Border Divider */}
        <div style={{
          position: 'absolute', bottom: '-20px', left: 0, right: 0, height: '120px',
          backgroundImage: 'url(/images/floral_border.png)', backgroundSize: 'contain', backgroundRepeat: 'repeat-x',
          zIndex: 2, pointerEvents: 'none'
        }} />
      </section>

      {/* ── MOTION GENERATOR ─────────────────────────────────── */}
      <MotionGenerator />

      {/* ── SUGGESTION BOX ─────────────────────────────────── */}
      <section style={{
        background: 'var(--ink)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center',
        borderTop: '8px solid var(--parchment)'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div style={{
            background: 'var(--saffron)', border: '6px solid var(--parchment)', padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto',
            boxShadow: '15px 15px 0 var(--crimson)', rotate: 1, y: ySlow
          }}>
            <h2 style={{ fontFamily: 'var(--font-masthead)', fontSize: '3rem', color: 'var(--ink)', marginBottom: '1rem', textShadow: '2px 2px 0 var(--parchment)' }}>
              MISSING SOMETHING?
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', fontWeight: 600,
              fontSize: '1.2rem', lineHeight: 1.6, color: 'var(--ink)', margin: '0 auto 2rem',
            }}>
              If you have a matter file to contribute or want us to run a workshop on a specific topic, let the core team know.
            </p>
            <button className="btn-primary" style={{ border: '4px solid var(--ink)', boxShadow: '6px 6px 0 var(--ink)' }}>
              Submit Request ✦
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
