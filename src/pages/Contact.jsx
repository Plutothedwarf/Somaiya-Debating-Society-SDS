import { useEffect, useState } from 'react';
import { SITE } from '../theme';

export default function Contact() {
  useEffect(() => { document.title = 'Contact — Somaiya Debating Society'; }, []);

  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
      e.target.reset();
      setTimeout(() => setFormState('idle'), 4000);
    }, 1200);
  };

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, #1A0A0A 0%, #5A0000 50%, #8B0000 100%)',
        paddingTop: '6rem',
        paddingBottom: '8rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Background textures */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/stamp_bg_pattern.png)',
          backgroundSize: '400px',
          opacity: 0.08,
          mixBlendMode: 'screen',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-10%', top: '10%',
          width: '500px', height: '500px',
          backgroundImage: 'url(/images/tiger_element.png)',
          backgroundSize: 'contain', backgroundRepeat: 'no-repeat',
          opacity: 0.2, transform: 'rotate(-5deg)',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5rem',
            alignItems: 'start',
          }} className="contact-grid">

            {/* Left: Info */}
            <div className="fade-up">
              <div style={{
                display: 'inline-flex',
                background: 'var(--saffron)',
                color: 'var(--ink)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '0.35rem 1.25rem',
                marginBottom: '1.5rem',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
              }}>
                ✦ Get In Touch
              </div>

              <h1 style={{
                fontFamily: 'var(--font-masthead)',
                fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                fontWeight: 400,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--parchment)',
                lineHeight: 0.9,
                marginBottom: '1.5rem',
                textShadow: '4px 4px 0 rgba(90,0,0,0.7)',
              }}>
                Reach Out<br />
                <span style={{ color: 'var(--gold)' }}>To Us</span>
              </h1>

              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '1.1rem',
                color: 'rgba(245,236,213,0.7)',
                maxWidth: '45ch',
                marginBottom: '3rem',
                lineHeight: 1.6,
              }}>
                Have a question about an upcoming tournament? Want to invite us to debate? Drop us a line.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--parchment)', fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Email</h3>
                  <a href={`mailto:${SITE.email}`} style={{ fontFamily: 'var(--font-sans)', color: 'var(--gold)', fontSize: '1.1rem', textDecoration: 'underline' }}>
                    {SITE.email}
                  </a>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--parchment)', fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Social Media</h3>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={SITE.instagram} className="btn-secondary" style={{ borderColor: 'rgba(245,236,213,0.3)', color: 'var(--parchment)', minHeight: 'auto', padding: '0.5rem 1rem' }}>Instagram</a>
                    <a href={SITE.linkedin} className="btn-secondary" style={{ borderColor: 'rgba(245,236,213,0.3)', color: 'var(--parchment)', minHeight: 'auto', padding: '0.5rem 1rem' }}>LinkedIn</a>
                  </div>
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--parchment)', fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>Address</h3>
                  <p style={{ fontFamily: 'var(--font-sans)', color: 'rgba(245,236,213,0.7)', margin: 0, lineHeight: 1.6 }}>
                    K.J. Somaiya College of Engineering,<br />
                    Vidyavihar, Mumbai 400077
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="fade-up fade-up--d2" style={{ position: 'relative' }}>
              {/* Form background decorative frame */}
              <div aria-hidden="true" style={{
                position: 'absolute',
                top: '10px', left: '10px', right: '-10px', bottom: '-10px',
                background: 'var(--saffron)',
                border: '4px solid var(--parchment)',
              }} />

              <div style={{
                background: 'var(--parchment)',
                border: '4px solid var(--ink)',
                padding: '3rem 2rem',
                position: 'relative',
                zIndex: 1,
              }}>
                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--ink)', margin: '0 0 0.5rem 0' }}>
                    Send a Message
                  </h2>
                  <div style={{ width: '40px', height: '3px', background: 'var(--crimson)', margin: '0 auto' }} />
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="name" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</label>
                    <input
                      type="text" id="name" name="name" required
                      style={{
                        padding: '0.8rem 1rem',
                        border: '2px solid var(--ink)',
                        background: 'transparent',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--crimson)'}
                      onBlur={e => e.target.style.borderColor = 'var(--ink)'}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="email" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</label>
                    <input
                      type="email" id="email" name="email" required
                      style={{
                        padding: '0.8rem 1rem',
                        border: '2px solid var(--ink)',
                        background: 'transparent',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--crimson)'}
                      onBlur={e => e.target.style.borderColor = 'var(--ink)'}
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label htmlFor="message" style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Message</label>
                    <textarea
                      id="message" name="message" required rows={5}
                      style={{
                        padding: '0.8rem 1rem',
                        border: '2px solid var(--ink)',
                        background: 'transparent',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        resize: 'vertical',
                      }}
                      onFocus={e => e.target.style.borderColor = 'var(--crimson)'}
                      onBlur={e => e.target.style.borderColor = 'var(--ink)'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={formState !== 'idle'}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: '1rem',
                      opacity: formState === 'idle' ? 1 : 0.8,
                      fontSize: '1.1rem',
                    }}
                  >
                    {formState === 'idle' && 'Send Message ✦'}
                    {formState === 'submitting' && 'Sending...'}
                    {formState === 'success' && 'Message Sent!'}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
