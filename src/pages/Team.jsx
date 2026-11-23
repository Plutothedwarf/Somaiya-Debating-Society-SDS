import { useState, useEffect } from 'react';
import { team, TIERS } from '../data/team';

function TeamMemberCard({ member, onClick }) {
  // Use a generated avatar based on the name or a placeholder stamp
  const avatarUrl = member.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}&backgroundColor=8B0000,E07820,1A5C5C&textColor=F5ECD5`;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`View details for ${member.name}`}
      onClick={() => onClick(member)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(member); }}
      style={{
        background: 'var(--parchment)',
        border: '3px solid var(--ink)',
        padding: '1.5rem',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
      className="team-card"
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px) rotate(-1deg)';
        e.currentTarget.style.boxShadow = '8px 8px 0 var(--crimson), 16px 16px 30px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) rotate(0deg)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Small decorative corner tape */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '-5px', right: '-5px',
        width: '40px', height: '14px',
        background: 'rgba(200,146,10,0.4)',
        transform: 'rotate(45deg)',
      }} />

      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        border: '4px solid var(--crimson)',
        padding: '4px',
        marginBottom: '1.25rem',
        background: 'var(--parchment)',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      }}>
        <img
          src={avatarUrl}
          alt=""
          style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
          loading="lazy"
        />
      </div>

      <h3 style={{
        fontFamily: 'var(--font-masthead)',
        fontSize: '1.8rem',
        letterSpacing: '0.04em',
        color: 'var(--ink)',
        margin: '0 0 0.5rem 0',
        lineHeight: 1,
      }}>
        {member.name}
      </h3>
      <p style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '0.75rem',
        fontWeight: 800,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--crimson)',
        margin: 0,
      }}>
        {member.role}
      </p>

      {/* Head Badge */}
      {member.isHead && (
        <div style={{
          position: 'absolute',
          top: '15px', left: '15px',
          background: 'var(--gold)',
          color: 'var(--ink)',
          fontFamily: 'var(--font-sans)',
          fontSize: '0.6rem',
          fontWeight: 800,
          letterSpacing: '0.1em',
          padding: '0.2rem 0.5rem',
          transform: 'rotate(-5deg)',
          boxShadow: '2px 2px 0 var(--crimson)',
        }}>
          HEAD
        </div>
      )}
    </div>
  );
}

export default function Team() {
  useEffect(() => { document.title = 'Team — Somaiya Debating Society'; }, []);

  const [selectedMember, setSelectedMember] = useState(null);

  // Close modal on escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setSelectedMember(null); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedMember ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedMember]);

  return (
    <>
      {/* ── HERO SECTION ───────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--saffron) 0%, #B55010 100%)',
        paddingTop: '6rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        {/* Decorative background stamps */}
        <div aria-hidden="true" style={{
          position: 'absolute', left: '-5%', top: '-20%',
          width: '400px', height: '400px',
          backgroundImage: 'url(/images/hero_stamp.png)',
          backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.15, transform: 'rotate(15deg)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-5%', bottom: '-10%',
          width: '350px', height: '350px',
          backgroundImage: 'url(/images/tiger_element.png)',
          backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.15, transform: 'rotate(-10deg)',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            background: 'var(--ink)',
            color: 'var(--parchment)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '0.35rem 1.25rem',
            marginBottom: '2rem',
            boxShadow: '4px 4px 0 var(--crimson)',
            transform: 'rotate(-2deg)',
          }}>
            ✦ Committee {new Date().getFullYear()} ✦
          </div>

          <h1 style={{
            fontFamily: 'var(--font-masthead)',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 400,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: 'var(--ink)',
            lineHeight: 0.9,
            marginBottom: '1.5rem',
            textShadow: '4px 4px 0 rgba(245,236,213,0.5)',
          }}>
            The Faces<br />Behind the <span style={{ color: 'var(--parchment)' }}>Noise</span>
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1.1rem',
            color: 'var(--ink)',
            fontWeight: 500,
            maxWidth: '50ch',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Meet the people who run the tournaments, design the workshops, and keep the society loud.
          </p>
        </div>
      </section>

      {/* ── TEAM ROSTER ────────────────────────────────────── */}
      <section style={{
        background: 'var(--cream)',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        position: 'relative',
      }}>
        {/* Grain overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/stamp_bg_pattern.png)',
          backgroundSize: '400px', opacity: 0.04, pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {TIERS.map(tier => {
            const members = team.filter(m => m.tier === tier.key);
            if (members.length === 0) return null;

            return (
              <div key={tier.key} style={{ marginBottom: '5rem' }}>
                {/* Tier Heading */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  marginBottom: '2.5rem',
                }}>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: 'var(--ink)',
                    margin: 0,
                    letterSpacing: '-0.02em',
                  }}>
                    {tier.label}
                  </h2>
                  <div style={{ flex: 1, height: '2px', background: 'var(--crimson)' }} />
                </div>

                {/* Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                  gap: '2rem',
                }}>
                  {members.map(member => (
                    <TeamMemberCard key={member.id} member={member} onClick={setSelectedMember} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── MEMBER MODAL ───────────────────────────────────── */}
      {selectedMember && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9000,
            background: 'rgba(26,10,10,0.8)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
          onClick={() => setSelectedMember(null)}
        >
          <div
            style={{
              background: 'var(--parchment)',
              width: '100%',
              maxWidth: '500px',
              border: '4px solid var(--crimson)',
              boxShadow: '12px 12px 0 rgba(224,120,32,0.8), 0 20px 60px rgba(0,0,0,0.4)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={e => e.stopPropagation()}
            className="fade-up"
          >
            {/* Modal Header */}
            <div style={{
              background: 'var(--crimson)',
              padding: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}>
              <div>
                <h2 id="modal-title" style={{
                  fontFamily: 'var(--font-masthead)',
                  fontSize: '2.5rem',
                  color: 'var(--parchment)',
                  margin: '0 0 0.25rem 0',
                  lineHeight: 1.1,
                  letterSpacing: '0.04em',
                }}>
                  {selectedMember.name}
                </h2>
                <span style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                }}>
                  {selectedMember.role}
                </span>
              </div>
              <button
                onClick={() => setSelectedMember(null)}
                aria-label="Close"
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--parchment)',
                  fontSize: '2rem',
                  cursor: 'pointer',
                  lineHeight: 1,
                  padding: 0,
                }}
              >×</button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '2rem' }}>
              <div style={{
                width: '100px', height: '100px',
                borderRadius: '50%',
                margin: '-4rem auto 1.5rem',
                border: '4px solid var(--parchment)',
                background: 'var(--crimson)',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
              }}>
                <img
                  src={selectedMember.avatar || `https://api.dicebear.com/7.x/initials/svg?seed=${selectedMember.name}&backgroundColor=E07820&textColor=F5ECD5`}
                  alt=""
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                />
              </div>

              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.05rem',
                color: 'var(--ink)',
                lineHeight: 1.6,
                textAlign: 'center',
                padding: '0 1rem',
              }}>
                <p style={{ margin: 0 }}>{selectedMember.bio}</p>
              </div>

              {/* Decorative bottom element */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem',
                opacity: 0.5,
              }}>
                <span style={{ fontFamily: 'var(--font-masthead)', color: 'var(--crimson)', fontSize: '1.5rem' }}>✦</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
