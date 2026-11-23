import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';
import { SITE } from '../theme';
import FallacyFinder from './FallacyFinder';
import PersonalityQuiz from './PersonalityQuiz';

const FOOTER_LINKS = [
  { to: '/about',   label: 'About' },
  { to: '/team',    label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
  { to: '/join',    label: 'Join Us' },
];

export default function Footer() {
  const [showFallacyFinder, setShowFallacyFinder] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const year = new Date().getFullYear();

  // Mouse tracking state
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <footer 
      onMouseMove={handleMouseMove}
      style={{
        background: 'var(--ink)',
        color: 'var(--parchment)',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '12px solid var(--saffron)',
      }} className="bg-dense-pattern">

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

      {/* Background architectural border */}
      <div className="bg-tile" aria-hidden="true" style={{
        position: 'absolute', top: 0, right: 0, left: 0, height: '40px', opacity: 0.6
      }} />

      {/* Lotus element */}
      <div aria-hidden="true" style={{
        position: 'absolute', right: '-80px', top: '10%',
        width: '400px', height: '400px',
        backgroundImage: 'url(/images/lotus_element.png)',
        backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
        opacity: 0.3, transform: 'rotate(12deg)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: '5rem',
          alignItems: 'start',
          marginBottom: '5rem',
        }} className="footer-main">

          {/* Left: Branding */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/somaiya_logo.svg" alt="SVU" style={{ 
                  height: '70px', width: 'auto', objectFit: 'contain',
                  filter: 'brightness(0) invert(0.95)'
                }} />
              </div>

              <div style={{ width: '3px', height: '60px', backgroundColor: 'var(--gold)', opacity: 0.5, display: window.innerWidth > 640 ? 'block' : 'none' }}></div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%',
                  border: '4px solid var(--gold)',
                  boxShadow: '0 0 0 6px var(--crimson)',
                  overflow: 'hidden',
                  flexShrink: 0
                }}>
                  <img src="/logo.png" alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h2 style={{
                    fontFamily: 'var(--font-masthead)', fontSize: '3.5rem',
                    letterSpacing: '0.04em', color: 'var(--parchment)',
                    margin: 0, lineHeight: 0.9, textShadow: '4px 4px 0 var(--crimson)'
                  }}>
                    SOMAIYA
                  </h2>
                  <p style={{
                    fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 900,
                    color: 'var(--gold)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: 0,
                  }}>
                    Debating Society
                  </p>
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)', color: 'var(--parchment)', fontWeight: 600,
              maxWidth: '45ch', lineHeight: 1.6, marginBottom: '2.5rem', fontSize: '1.1rem'
            }}>
              {SITE.tagline} <span style={{ cursor: 'pointer' }} onClick={() => setShowQuiz(true)} title="Wait, what's this?">Established {SITE.established}.</span>
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={SITE.instagram} className="btn-secondary" style={{
                color: 'var(--parchment)', borderColor: 'var(--gold)', boxShadow: '4px 4px 0 var(--crimson)',
                padding: '0.75rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href={SITE.linkedin} className="btn-secondary" style={{
                color: 'var(--parchment)', borderColor: 'var(--gold)', boxShadow: '4px 4px 0 var(--crimson)',
                padding: '0.75rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Nav Links */}
          <div style={{ display: 'flex', gap: '3rem' }}>
            <div style={{
              background: 'var(--parchment)', padding: '2rem', border: '4px solid var(--crimson)',
              boxShadow: '8px 8px 0 var(--gold)', transform: 'rotate(2deg)'
            }}>
              <p 
                onClick={() => setShowFallacyFinder(true)}
                title="A hidden challenge..."
                style={{
                fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 900,
                color: 'var(--ink)', letterSpacing: '0.15em', textTransform: 'uppercase',
                marginBottom: '1.5rem', cursor: 'pointer'
              }}>
                ✦ EXPLORE
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {FOOTER_LINKS.map(link => (
                  <li key={link.to}>
                    <Link to={link.to} style={{
                      fontFamily: 'var(--font-masthead)', fontSize: '1.8rem',
                      color: 'var(--crimson)', textDecoration: 'none', transition: 'color 0.2s ease',
                    }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '4px solid var(--saffron)', margin: '0 0 2.5rem 0' }} />

        {/* Bottom */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 700, color: 'var(--parchment)', margin: 0 }}>
            &copy; {year} Somaiya Debating Society
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              background: 'var(--crimson)', border: '4px solid var(--gold)', padding: '0.5rem 1rem',
              fontFamily: 'var(--font-masthead)', fontSize: '1.25rem', color: 'var(--parchment)',
              cursor: 'pointer', boxShadow: '4px 4px 0 var(--gold)'
            }}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>

      {showFallacyFinder && <FallacyFinder onClose={() => setShowFallacyFinder(false)} />}
      {showQuiz && <PersonalityQuiz onClose={() => setShowQuiz(false)} />}

      <style>{`
        @media (max-width: 767px) {
          .footer-main { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </footer>
  );
}
