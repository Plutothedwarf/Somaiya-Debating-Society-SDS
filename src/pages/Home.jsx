import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { SITE, STATS } from '../theme';
import { useState, useCallback } from 'react';
import { galleryImages, LightboxModal, GalleryCard } from './Gallery';

/* ── Floating decoration element ─────────────────────────────── */
function FloatingEl({ src, alt, style, className, yTransform }) {
  return (
    <motion.div
      className={`float-lotus ${className || ''}`}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: 0,
        y: yTransform || 0,
        ...style,
      }}
      aria-hidden="true"
    >
      <img src={src} alt={alt || ''} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </motion.div>
  );
}

/* ── Collage stamp card ───────────────────────────────────────── */
function StampCard({ src, alt, rotate = 0, style, caption, yTransform }) {
  return (
    <motion.div
      className="stamp-border"
      style={{
        transform: `rotate(${rotate}deg)`,
        overflow: 'hidden',
        display: 'inline-block',
        transition: 'box-shadow 0.3s ease',
        y: yTransform || 0,
        ...style,
      }}
      whileHover={{ scale: 1.05, rotate: rotate * 0.3, zIndex: 10 }}
    >
      <img
        src={src}
        alt={alt}
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        loading="lazy"
      />
      {caption && (
        <div style={{
          background: 'var(--crimson)', color: 'var(--gold)',
          fontFamily: 'var(--font-masthead)', fontSize: '1rem',
          letterSpacing: '0.12em', padding: '0.4rem 0.6rem', textAlign: 'center',
        }}>
          {caption}
        </div>
      )}
    </motion.div>
  );
}

/* ── Page ────────────────────────────────────────────────────── */
export default function Home() {
  document.title = 'Somaiya Debating Society - SPEAK UP';
  const { scrollYProgress } = useScroll();

  // Mouse tracking state for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Parallax mappings
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const yReverse = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const rotateScroll = useTransform(scrollYProgress, [0, 1], [0, 45]);

  // Gallery state
  const [activeIndex, setActiveIndex] = useState(null);
  const openImage = useCallback((i) => setActiveIndex(i), []);
  const closeImage = useCallback(() => setActiveIndex(null), []);
  const prevImage = useCallback(() => setActiveIndex(i => Math.max(0, i - 1)), []);
  const nextImage = useCallback(() => setActiveIndex(i => Math.min(galleryImages.length - 1, i + 1)), []);

  return (
    <>
      {/* ===================================================
          HERO — Maximalist collage / stamp composition
          =================================================== */}
      <section
        onMouseMove={handleMouseMove}
        style={{
          background: 'var(--ink)',
          position: 'relative',
          overflow: 'hidden',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: '5rem',
          paddingBottom: '6rem',
          textAlign: 'center',
        }}
        className="bg-dense-pattern"
        aria-label="Hero"
      >
        {/* Interactive cursor glow */}
        <motion.div style={{
          position: 'absolute',
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(224,120,32,0.15) 0%, transparent 60%)',
          pointerEvents: 'none',
          zIndex: 0,
          borderRadius: '50%'
        }} />

        {/* Tile border at top */}
        <motion.div className="bg-tile" style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '40px', opacity: 0.8, y: ySlow
        }} />

        {/* Diagonal stripe accent */}
        <motion.div aria-hidden="true" style={{
          position: 'absolute', top: 0, right: 0, width: '55%', height: '150%',
          background: 'linear-gradient(to bottom left, rgba(224,120,32,0.2) 0%, transparent 60%)',
          pointerEvents: 'none', y: yReverse
        }} />

        {/* Floating elements */}
        <FloatingEl
          src="/images/vintage_gramophone.png"
          yTransform={yFast}
          style={{
            left: '-80px', top: '20%', width: '320px', height: '400px', opacity: 0.65,
            filter: 'drop-shadow(0 0 30px rgba(212,96,122,0.3))',
          }}
        />

        <FloatingEl
          src="/images/indian_peacock_vintage.png"
          yTransform={ySlow}
          style={{
            right: '-30px', bottom: '-40px', width: '280px', height: '350px', opacity: 0.4,
            filter: 'drop-shadow(0 0 20px rgba(224,120,32,0.4))',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <motion.div style={{ y: yReverse, maxWidth: '900px', margin: '0 auto' }}>
            {/* Eyebrow stamp label */}
            <div style={{
              display: 'inline-flex', background: 'var(--saffron)', color: 'var(--ink)',
              fontFamily: 'var(--font-masthead)', fontSize: '1.2rem',
              letterSpacing: '0.14em', padding: '0.35rem 1rem', marginBottom: '2rem',
              border: '3px solid var(--parchment)', boxShadow: '4px 4px 0 var(--crimson)',
              transform: 'rotate(-2deg)'
            }}>
              ✦ Est. {SITE.established} · {SITE.session}
            </div>

            {/* Masthead */}
            <h1
              className="glitch-text"
              data-text="SOMAIYA"
              style={{
                fontFamily: 'var(--font-masthead)', fontSize: 'clamp(5rem, 15vw, 12rem)',
                color: 'var(--parchment)', lineHeight: 0.85, marginBottom: '0.25rem',
                textShadow: '6px 6px 0px rgba(139,0,0,0.8), 12px 12px 0px rgba(224,120,32,0.5)',
                margin: '0 auto'
              }}
            >
              SOMAIYA
            </h1>
            <div style={{
              fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3.5rem, 10vw, 7rem)',
              color: 'var(--gold)', lineHeight: 0.9, marginBottom: '0.5rem',
              textShadow: '4px 4px 0px rgba(90,0,0,0.8)',
            }}>
              DEBATING
            </div>
            <div style={{
              fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 9vw, 6rem)',
              color: 'var(--saffron)', lineHeight: 0.9, marginBottom: '2.5rem',
              textShadow: '3px 3px 0px var(--crimson-dark)',
            }}>
              SOCIETY
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)', fontSize: '1.2rem', color: 'var(--parchment)',
              background: 'var(--ink)', padding: '1.25rem', border: '2px solid var(--saffron)',
              maxWidth: '50ch', lineHeight: 1.6, margin: '0 auto 2.5rem',
              boxShadow: '4px 4px 0 var(--saffron)'
            }}>
              {SITE.tagline}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/gallery" className="btn-pill-light" id="hero-gallery-btn">
                Gallery
              </Link>
              <Link to="/about" className="btn-primary" id="hero-about-btn">
                Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===================================================
          STATS — Newspaper band
          =================================================== */}
      <section
        style={{
          paddingTop: '6rem', paddingBottom: '6rem', position: 'relative', overflow: 'hidden',
          borderTop: '8px solid var(--saffron)', borderBottom: '8px solid var(--crimson)',
        }}
        className="section-paper"
      >
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }} className="stats-grid">
            {STATS.map((stat, i) => (
              <motion.div key={i} style={{
                background: 'var(--ink)', border: '4px solid var(--parchment)', padding: '2rem 1rem',
                textAlign: 'center', boxShadow: '8px 8px 0 var(--crimson)',
                y: i % 2 === 0 ? ySlow : yReverse,
                rotate: i % 2 === 0 ? 3 : -2
              }}>
                <p style={{
                  fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 6vw, 5rem)',
                  color: 'var(--gold)', margin: '0 0 0.5rem 0', textShadow: '3px 3px 0 var(--crimson)'
                }}>
                  {stat.value}
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--parchment)',
                  margin: 0, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em'
                }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SCROLLING GALLERY SNIPPET
          =================================================== */}
      <section style={{
        backgroundColor: 'var(--cream)',
        paddingTop: '4rem', paddingBottom: '4rem', position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 6vw, 5rem)',
              color: 'var(--ink)', margin: 0, textShadow: '3px 3px 0 var(--parchment)',
              background: 'var(--parchment)', padding: '0.5rem 1.5rem', display: 'inline-block', border: '4px solid var(--ink)', transform: 'rotate(-2deg)', boxShadow: '8px 8px 0 var(--ink)'
            }}>
              MOMENTS IN TIME
            </h2>
            <Link to="/gallery" className="btn-secondary" style={{ background: 'var(--parchment)' }}>View All</Link>
          </div>
        </div>
          
        <div style={{ width: '100%', overflow: 'hidden' }}>
          <div className="scrolling-carousel" style={{ display: 'flex', width: 'max-content' }}>
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} style={{ minWidth: '300px', flexShrink: 0 }}>
                <GalleryCard img={img} index={i % galleryImages.length} onClick={openImage} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeIndex !== null && (
        <LightboxModal
          image={galleryImages[activeIndex]}
          index={activeIndex}
          total={galleryImages.length}
          onClose={closeImage}
          onPrev={prevImage}
          onNext={nextImage}
          hasPrev={activeIndex > 0}
          hasNext={activeIndex < galleryImages.length - 1}
        />
      )}

      {/* ===================================================
          WHO WE ARE - Intricate architecture borders
          =================================================== */}
      <section style={{
        background: 'var(--ink)', paddingTop: '8rem', paddingBottom: '8rem',
        position: 'relative', overflow: 'hidden',
      }} className="bg-dense-pattern">
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center',
          }} className="identity-grid">

            {/* Left: Collage */}
            <motion.div style={{ position: 'relative', height: '500px', y: ySlow }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, width: '70%', height: '400px',
                transform: 'rotate(-4deg)', border: '6px solid var(--parchment)',
                boxShadow: '12px 12px 0 var(--crimson), 20px 20px 40px rgba(0,0,0,0.6)',
                overflow: 'hidden', background: 'var(--ink)'
              }}>
                <img src="/images/tiger_element.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <motion.div style={{
                position: 'absolute', bottom: '0', right: '0', width: '60%', height: '300px',
                transform: 'rotate(5deg)', border: '6px solid var(--parchment)',
                boxShadow: '10px 10px 0 var(--gold)', overflow: 'hidden', background: 'var(--crimson)',
                y: yFast
              }}>
                <img src="/images/indian_tile_pattern.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>
            </motion.div>

            {/* Right: Text */}
            <motion.div style={{ y: yReverse }}>
              <div style={{
                background: 'var(--saffron)', color: 'var(--ink)', fontFamily: 'var(--font-masthead)',
                fontSize: '1.5rem', display: 'inline-block', padding: '0.4rem 1.5rem', border: '3px solid var(--ink)',
                transform: 'rotate(-2deg)', marginBottom: '2rem', boxShadow: '4px 4px 0 var(--parchment)'
              }}>
                WHO WE ARE
              </div>
              
              <h2 style={{
                fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 6vw, 5rem)',
                color: 'var(--parchment)', marginBottom: '1.5rem', lineHeight: 0.9, textShadow: '3px 3px 0 var(--crimson)'
              }}>
                WHERE WORDS<br/>BECOME <span style={{ color: 'var(--gold)' }}>WEAPONS</span>
              </h2>

              <div style={{
                background: 'var(--parchment)', border: '4px solid var(--crimson)',
                padding: '2rem', boxShadow: '8px 8px 0 var(--crimson)', transform: 'rotate(1deg)'
              }}>
                <p style={{
                  fontFamily: 'var(--font-sans)', fontSize: '1.2rem', color: 'var(--ink)',
                  lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 600
                }}>
                  Founded at K.J. Somaiya College of Engineering, we are a community of bold thinkers, fierce debaters, and passionate speakers.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <Link to="/about" className="btn-primary">Our Story</Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================================================
          FULL-WIDTH TILE STRIP
          =================================================== */}
      <section style={{
        height: '350px', background: 'var(--crimson)', borderTop: '8px solid var(--ink)', borderBottom: '8px solid var(--ink)',
        position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}>
        <div className="bg-tile" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        <h2 style={{
          fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--parchment)',
          background: 'var(--ink)', padding: '1rem 3rem', border: '6px solid var(--gold)',
          boxShadow: '10px 10px 0 var(--gold)', textAlign: 'center', transform: 'rotate(-3deg)',
          zIndex: 2, margin: 0
        }}>
          SPEAK - DEBATE - WIN
        </h2>
      </section>

      {/* ===================================================
          FOOTER CTA — Heavy Collage
          =================================================== */}
      <section
        style={{ paddingTop: '5rem', paddingBottom: '5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        className="section-paper"
      >
        <motion.div style={{
          position: 'absolute', left: '-50px', bottom: '0', width: '400px', height: '600px',
          backgroundImage: 'url(/images/lotus_element.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.8, rotate: 15, y: yFast
        }} />
        <motion.div style={{
          position: 'absolute', right: '-50px', top: '10%', width: '400px', height: '400px',
          backgroundImage: 'url(/images/vintage_indian_bicycle.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.5, rotate: -15, y: yReverse
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div style={{
            background: 'var(--ink)', border: '6px solid var(--saffron)', padding: '4rem 2rem',
            maxWidth: '800px', margin: '0 auto', boxShadow: '15px 15px 0 var(--crimson)', rotate: 2
          }}>
            <h2 style={{
              fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 7vw, 6rem)', color: 'var(--parchment)',
              margin: '0 auto 1.5rem', lineHeight: 0.9, textShadow: '4px 4px 0 var(--crimson)'
            }}>
              FIND YOUR VOICE
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)', color: 'var(--gold)', fontSize: '1.25rem', marginBottom: '3rem', fontWeight: 600
            }}>
              "बोलो, बदलो, जीतो" <br/><br/>
              Applications open every semester. Experience not required - just the hunger to speak and be heard.
            </p>
            <Link to="/join" className="btn-primary" style={{ fontSize: '1.5rem', padding: '1rem 3rem' }}>
              JOIN THE SOCIETY ✦
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .hero-grid, .identity-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .hero-grid > div:last-child { height: 320px !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .scrolling-carousel {
          animation: scroll-left 30s linear infinite;
          gap: 2.5rem;
          padding: 1rem 2.5rem 3rem 2.5rem;
        }
      `}</style>
    </>
  );
}
