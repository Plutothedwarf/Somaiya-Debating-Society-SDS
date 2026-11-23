import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  { year: '2020', text: 'Founded by eight passionate students in a college seminar room.' },
  { year: '2021', text: 'First Somaiya Invitational held - 12 teams, one unforgettable weekend.' },
  { year: '2022', text: 'SDS qualifies for the Maharashtra State Debate Championship.' },
  { year: '2023', text: 'Membership grows to 80+ active members. Dedicated training workshops launched.' },
  { year: '2024', text: 'Best New Society at Mumbai Inter-Collegiate Debate Council. Invitational expands to 30 teams.' },
  { year: '2025', text: 'Affiliated with All India Debate Association. First national-level representatives.' },
];

const values = [
  { label: 'Rigorous Argument', text: 'We build and test ideas through structured, evidence-based reasoning. No weak takes allowed.', icon: '', color: 'var(--crimson)' },
  { label: 'Inclusive Space', text: 'Every voice matters here, regardless of experience or background. We start from zero together.', icon: '', color: 'var(--saffron)' },
];

export default function About() {
  useEffect(() => { document.title = 'About - Somaiya Debating Society'; }, []);
  const { scrollYProgress } = useScroll();

  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <>
      {/* ── HERO HEADER ──────────────────────────────────────── */}
      <section style={{
        background: 'var(--crimson-dark)', paddingTop: '8rem', paddingBottom: '8rem',
        position: 'relative', overflow: 'hidden', borderBottom: '8px solid var(--saffron)'
      }} className="bg-dense-pattern">
        
        {/* Parallax background elements */}
        <motion.div aria-hidden="true" style={{
          position: 'absolute', left: '-60px', top: '10%', width: '400px', height: '600px',
          backgroundImage: 'url(/images/indian_peacock_vintage.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.6, rotate: 15, y: ySlow
        }} />
        <motion.div className="bg-tile" aria-hidden="true" style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '250px',
          opacity: 0.8, borderLeft: '6px solid var(--gold)', y: yFast
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div style={{
            display: 'inline-flex', background: 'var(--gold)', color: 'var(--ink)',
            fontFamily: 'var(--font-masthead)', fontSize: '1.25rem', padding: '0.4rem 1.5rem', marginBottom: '2rem',
            border: '3px solid var(--ink)', boxShadow: '4px 4px 0 var(--ink)', rotate: -3, y: yReverse
          }}>
            ✦ ABOUT US
          </motion.div>

          <motion.h1 style={{
            fontFamily: 'var(--font-masthead)', fontSize: 'clamp(4rem, 10vw, 8rem)',
            color: 'var(--parchment)', lineHeight: 0.9, marginBottom: '2rem', textShadow: '6px 6px 0 var(--ink)', y: ySlow
          }}>
            ABOUT THE<br />
            <span style={{ color: 'var(--saffron)' }}>SOCIETY</span>
          </motion.h1>

          <motion.div style={{
            background: 'var(--ink)', padding: '2rem', border: '4px solid var(--parchment)',
            maxWidth: '600px', boxShadow: '8px 8px 0 var(--gold)', rotate: 2, y: yFast
          }}>
            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.25rem', color: 'var(--parchment)', margin: 0, lineHeight: 1.6, fontWeight: 700
            }}>
              A society built on the belief that a good argument, clearly made, changes minds, and sometimes, the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY + COLLAGE ──────────────────────────────────── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '8rem', overflow: 'hidden', position: 'relative',
      }} className="section-paper">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
          }} className="about-story-grid">

            {/* Collage column */}
            <motion.div style={{ position: 'relative', height: '550px', y: ySlow }} aria-hidden="true">
              <div style={{
                position: 'absolute', top: '20px', left: 0, width: '75%', height: '400px',
                transform: 'rotate(-4deg)', border: '6px solid var(--ink)',
                boxShadow: '12px 12px 0 var(--saffron), 20px 20px 40px rgba(0,0,0,0.4)',
                overflow: 'hidden', background: 'var(--crimson)'
              }}>
                <img src="/images/vintage_hindi_newspaper.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <motion.div style={{
                position: 'absolute', bottom: 0, right: 0, width: '60%', height: '300px',
                transform: 'rotate(6deg)', border: '6px solid var(--ink)',
                boxShadow: '10px 10px 0 var(--crimson)', overflow: 'hidden', y: yFast
              }}>
                <img src="/images/hero_stamp.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
              <motion.div style={{
                position: 'absolute', top: '40%', left: '45%', background: 'var(--gold)', color: 'var(--ink)',
                fontFamily: 'var(--font-masthead)', fontSize: '1.5rem', padding: '0.5rem 1.5rem', transform: 'rotate(-10deg)',
                border: '3px solid var(--ink)', boxShadow: '6px 6px 0 var(--crimson)', whiteSpace: 'nowrap', zIndex: 10, y: yReverse
              }}>
                EST. 2020
              </motion.div>
            </motion.div>

            {/* Text column */}
            <motion.div style={{ y: yReverse }}>
              <h2 style={{
                fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 6vw, 5rem)',
                color: 'var(--ink)', marginBottom: '2rem', lineHeight: 0.9, textShadow: '3px 3px 0 var(--parchment)'
              }}>
                WHERE WE BEGAN
              </h2>
              <div style={{
                background: 'var(--ink)', color: 'var(--parchment)', padding: '2rem', border: '4px solid var(--crimson)',
                boxShadow: '8px 8px 0 var(--gold)', transform: 'rotate(-1deg)'
              }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Somaiya Debating Society was founded in 2020 by eight students who believed competitive debate had transformative power.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  What began as informal practice sessions in a college seminar room grew into a structured society with a training programme, dedicated membership, and an annual flagship tournament.
                </p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0, color: 'var(--saffron)' }}>
                  Today, SDS counts over 150 active members, sends teams to tournaments across Maharashtra, and hosts one of Mumbai's most competitive open invitationals.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PULL QUOTE — full pattern ────────────────────────── */}
      <section style={{
        background: 'var(--crimson)', padding: '6rem 2rem', position: 'relative', overflow: 'hidden', textAlign: 'center',
        borderTop: '8px solid var(--ink)', borderBottom: '8px solid var(--ink)'
      }} className="bg-dense-pattern">
        
        <motion.div style={{
          position: 'absolute', right: '-10%', top: '-20%', width: '500px', height: '500px',
          backgroundImage: 'url(/images/vintage_gramophone.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.5, rotate: rotateScroll
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div style={{
            background: 'var(--parchment)', border: '6px solid var(--gold)', padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto',
            boxShadow: '15px 15px 0 var(--ink)', rotate: -2, y: ySlow
          }}>
            <p style={{ fontFamily: 'var(--font-masthead)', fontSize: '2rem', color: 'var(--crimson)', marginBottom: '1rem' }}>✦ ✦ ✦</p>
            <blockquote style={{
              fontFamily: 'var(--font-display)', fontStyle: 'italic', fontWeight: 900,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)', lineHeight: 1.2, color: 'var(--ink)', margin: '0 auto 1.5rem',
            }}>
              "A good argument, clearly made, changes minds."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ── VALUES — maximalist cards ────────────────────────── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '8rem', position: 'relative', overflow: 'hidden',
      }} className="section-paper">
        <div className="container">
          <motion.div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 7vw, 6rem)',
              color: 'var(--ink)', textShadow: '4px 4px 0 var(--parchment)'
            }}>
              WHAT WE STAND FOR
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }} className="values-grid">
            {values.map(({ label, text, icon, color }, i) => (
              <motion.div key={label} style={{
                background: 'var(--ink)', border: `4px solid ${color}`, padding: '2.5rem', position: 'relative',
                boxShadow: `10px 10px 0 ${color}`, rotate: i % 2 === 0 ? 2 : -2
              }}>
                {icon && <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{icon}</span>}
                <h3 style={{
                  fontFamily: 'var(--font-masthead)', fontSize: '2rem',
                  color: 'var(--parchment)', marginBottom: '1rem', letterSpacing: '0.05em'
                }}>{label}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', color: color, fontSize: '1.1rem', margin: 0, fontWeight: 600 }}>{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TIMELINE — vertical scrapbook ───────────────────── */}
      <section style={{
        background: 'var(--ink)', paddingTop: '8rem', paddingBottom: '8rem',
        position: 'relative', overflow: 'hidden', borderTop: '8px solid var(--saffron)',
      }} className="bg-dense-pattern">
        
        <motion.div style={{
          position: 'absolute', left: '-50px', bottom: '0', width: '350px', height: '600px',
          backgroundImage: 'url(/images/lotus_element.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.7, transform: 'scaleX(-1)', y: yReverse
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.h2 style={{
            textAlign: 'center', fontFamily: 'var(--font-masthead)', fontSize: 'clamp(4rem, 8vw, 6rem)',
            color: 'var(--parchment)', marginBottom: '5rem', textShadow: '4px 4px 0 var(--crimson)', y: ySlow
          }}>MILESTONES</motion.h2>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '100px', top: 0, bottom: 0, width: '6px',
              background: 'var(--saffron)', border: '2px solid var(--ink)'
            }} />

            {milestones.map(({ year, text }, i) => (
              <motion.div key={year} style={{
                display: 'flex', gap: '3rem', alignItems: 'flex-start', marginBottom: '4rem', position: 'relative',
              }}>
                {/* Year stamp */}
                <div style={{ flexShrink: 0, width: '100px', textAlign: 'right', paddingTop: '1rem' }}>
                  <span style={{
                    background: 'var(--gold)', color: 'var(--ink)', fontFamily: 'var(--font-masthead)',
                    fontSize: '1.5rem', padding: '0.4rem 0.8rem', border: '3px solid var(--ink)',
                    boxShadow: '4px 4px 0 var(--crimson)', transform: 'rotate(-4deg)', display: 'inline-block'
                  }}>{year}</span>
                </div>

                {/* Content card */}
                <div style={{
                  flex: 1, background: 'var(--parchment)', border: '4px solid var(--ink)',
                  padding: '2rem', boxShadow: '8px 8px 0 var(--crimson)', transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`
                }}>
                  <p style={{
                    fontFamily: 'var(--font-sans)', color: 'var(--ink)', fontSize: '1.1rem', margin: 0, fontWeight: 700
                  }}>{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .about-story-grid { grid-template-columns: 1fr !important; }
          .about-story-grid > div:first-child { height: 400px !important; }
          .values-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
