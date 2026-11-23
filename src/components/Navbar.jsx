import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { SITE } from '../theme';

const NAV_LINKS = [
  { to: '/',        label: 'Home' },
  { to: '/about',   label: 'About' },
  { to: '/team',    label: 'Team' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/resources', label: 'Resources' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      style={{
        position: 'sticky',
        top: '12px', /* Allow for the top border frame */
        zIndex: 100,
        background: scrolled ? 'var(--crimson)' : 'var(--parchment)',
        borderBottom: '6px solid var(--ink)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 0 var(--gold)' : 'none',
      }}
      className={scrolled ? 'bg-dense-pattern' : 'section-paper'}
      role="banner"
    >
      <div className="container">
        <nav
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px',
          }}
          aria-label="Main navigation"
        >
          {/* ── Logo ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {!logoError && (
              <>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <img src="/somaiya_logo.svg" alt="SVU" style={{ 
                      height: '44px', width: 'auto', objectFit: 'contain',
                      filter: scrolled ? 'brightness(0) invert(0.95)' : 'none',
                      transition: 'filter 0.3s ease'
                    }} 
                      onError={() => setLogoError(true)} />
                  </div>
                </Link>

                <div style={{ width: '2px', height: '36px', backgroundColor: scrolled ? 'var(--gold)' : 'var(--ink)', opacity: 0.4 }}></div>
              </>
            )}

            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '48px', height: '48px', borderRadius: '50%', overflow: 'hidden',
                border: '3px solid var(--ink)', boxShadow: scrolled ? '0 0 0 3px var(--parchment)' : '0 0 0 3px var(--crimson)',
              }}>
                <img src="/logo.png" alt="SDS Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="hidden sm:block" style={{ display: window.innerWidth >= 640 ? 'block' : 'none' }}>
                <span style={{
                  display: 'block', fontFamily: 'var(--font-masthead)', fontSize: '1.8rem',
                  color: scrolled ? 'var(--parchment)' : 'var(--ink)', lineHeight: 1, textShadow: scrolled ? '2px 2px 0 var(--ink)' : '2px 2px 0 var(--crimson)',
                }}>
                  SOMAIYA
                </span>
                <span style={{
                  display: 'block', fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 900,
                  color: scrolled ? 'var(--gold)' : 'var(--crimson)', letterSpacing: '0.15em', textTransform: 'uppercase', lineHeight: 1.2,
                }}>
                  Debating Society
                </span>
              </div>
            </Link>
          </div>

          {/* ── Desktop nav ── */}
          <ul className="nav-desktop" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-masthead)', fontSize: '1.3rem', letterSpacing: '0.06em',
                    color: scrolled ? (isActive ? 'var(--gold)' : 'var(--parchment)') : (isActive ? 'var(--crimson)' : 'var(--ink)'),
                    padding: '0.2rem 0.5rem', display: 'block',
                    borderBottom: isActive ? `4px solid ${scrolled ? 'var(--gold)' : 'var(--crimson)'}` : '4px solid transparent',
                    transition: 'all 0.15s ease',
                  })}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/join" className={scrolled ? "btn-pill-light" : "btn-primary"} style={{ padding: '0.5rem 1.5rem', fontSize: '1.2rem' }}>
              JOIN US ✦
            </Link>
          </div>

          {/* ── Hamburger ── */}
          <button
            onClick={() => setOpen(!open)}
            className="nav-mobile"
            style={{
              flexDirection: 'column', justifyContent: 'center', gap: '6px',
              background: open ? 'var(--saffron)' : (scrolled ? 'var(--gold)' : 'var(--ink)'),
              border: '3px solid var(--ink)', padding: '10px', minWidth: '54px', minHeight: '54px',
              alignItems: 'center', transition: 'all 0.2s ease', boxShadow: '4px 4px 0 var(--ink)',
              color: open ? 'var(--ink)' : (scrolled ? 'var(--ink)' : 'var(--parchment)')
            }}
          >
            <Menu size={32} />
          </button>
        </nav>
      </div>

      {/* ── Mobile menu overlay ── */}
      <div
        style={{
          position: 'fixed', inset: '12px 12px 12px 12px', top: '92px',
          background: 'var(--ink)', zIndex: 99, padding: '3rem 2rem', overflowY: 'auto',
          transform: open ? 'translateX(0)' : 'translateX(120%)',
          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          border: '8px solid var(--saffron)', display: 'flex', flexDirection: 'column',
        }}
        className="nav-mobile bg-dense-pattern"
      >
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, position: 'relative', zIndex: 2 }}>
          {NAV_LINKS.map(({ to, label }, i) => (
            <li key={to} style={{
              borderBottom: '4px solid rgba(245,236,213,0.2)',
              transform: open ? 'translateX(0)' : 'translateX(40px)',
              opacity: open ? 1 : 0, transition: `all 0.4s ease ${i * 0.06}s`,
            }}>
              <NavLink
                to={to} end={to === '/'} onClick={() => setOpen(false)}
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-masthead)', fontSize: 'clamp(3rem, 10vw, 5rem)',
                  color: isActive ? 'var(--gold)' : 'var(--parchment)', display: 'block', padding: '1rem 0',
                  textShadow: isActive ? '4px 4px 0 var(--crimson)' : 'none',
                })}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '3rem', position: 'relative', zIndex: 2 }}>
          <Link to="/join" className="btn-primary" onClick={() => setOpen(false)} style={{ display: 'inline-flex', fontSize: '2rem' }}>
            JOIN ✦
          </Link>
        </div>
      </div>
    </header>
  );
}
