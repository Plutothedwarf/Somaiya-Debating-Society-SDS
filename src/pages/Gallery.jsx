import { useEffect, useState, useCallback } from 'react';

// Gallery images — using generated assets + picsum seeds for variety
export const galleryImages = [
  {
    id: 1,
    src: '/images/hero_stamp.png',
    alt: 'Somaiya Invitational 2025 — Speak up',
    caption: 'Somaiya Invitational 2025 — आवाज़',
    rotate: -3, size: 'tall',
  },
  {
    id: 2,
    src: '/images/lotus_element.png',
    alt: 'Lotus — symbol of eloquence',
    caption: 'Weekly Practice — Lotus Round',
    rotate: 2, size: 'wide',
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/sds3/600/800',
    alt: 'Training workshop 2025',
    caption: 'Training Workshop — Rebuttal Techniques',
    rotate: -1.5, size: 'normal',
  },
  {
    id: 4,
    src: '/images/tiger_element.png',
    alt: 'Fierce tigers — the SDS spirit',
    caption: 'The SDS Spirit — Fierce & Bold',
    rotate: 4, size: 'tall',
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/sds5/800/600',
    alt: 'Debate awards night 2024',
    caption: 'Awards Night 2024 — Best Speaker',
    rotate: -2, size: 'normal',
  },
  {
    id: 6,
    src: '/images/stamp_bg_pattern.png',
    alt: 'Vintage stamp collage — SDS identity',
    caption: 'SDS Identity — The Stamp Collection',
    rotate: 1.5, size: 'wide',
  },
  {
    id: 7,
    src: 'https://picsum.photos/seed/sds7/600/600',
    alt: 'Freshers Open 2025',
    caption: 'Freshers Open 2025 — Adjudication Panel',
    rotate: -4, size: 'normal',
  },
  {
    id: 8,
    src: 'https://picsum.photos/seed/sds8/800/500',
    alt: 'Inter-Department Championship 2025',
    caption: 'Inter-Department Championship 2025',
    rotate: 3, size: 'wide',
  },
  {
    id: 9,
    src: 'https://picsum.photos/seed/sds9/600/900',
    alt: 'Society orientation September 2025',
    caption: 'Society Orientation — September 2025',
    rotate: -2.5, size: 'tall',
  },
  {
    id: 10,
    src: 'https://picsum.photos/seed/sds10/700/500',
    alt: 'Guest lecture — senior adjudicator',
    caption: 'Guest Lecture — Senior Adjudicator',
    rotate: 2, size: 'normal',
  },
  {
    id: 11,
    src: 'https://picsum.photos/seed/sds11/600/600',
    alt: 'Team photo Maharashtra State Championship',
    caption: 'Maharashtra State Championship — Team SDS',
    rotate: -3.5, size: 'normal',
  },
  {
    id: 12,
    src: 'https://picsum.photos/seed/sds12/800/600',
    alt: 'End of year celebration 2024',
    caption: 'End-of-Year Celebration 2024 🎉',
    rotate: 1.5, size: 'wide',
  },
];

export function LightboxModal({ image, onClose, onPrev, onNext, hasPrev, hasNext, index, total }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Gallery image: ${image.alt}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 5000,
        background: 'rgba(26,10,10,0.97)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
      onClick={onClose}
    >
      {/* Decorative background pattern */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(200,146,10,0.04) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        pointerEvents: 'none',
      }} />

      <div
        style={{ position: 'relative', maxWidth: '88vw', maxHeight: '82vh', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 1 }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close image"
          style={{
            position: 'absolute',
            top: '-3rem',
            right: 0,
            background: 'var(--crimson)',
            border: 'none',
            color: 'var(--parchment)',
            fontFamily: 'var(--font-sans)',
            fontWeight: 800,
            fontSize: '1rem',
            letterSpacing: '0.08em',
            padding: '0.4rem 1rem',
            cursor: 'pointer',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--saffron)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--crimson)'}
        >
          CLOSE ✕
        </button>

        {/* Counter */}
        <p style={{
          position: 'absolute',
          top: '-3rem',
          left: 0,
          fontFamily: 'var(--font-masthead)',
          fontSize: '1.2rem',
          color: 'var(--gold)',
          letterSpacing: '0.1em',
        }}>
          {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>

        {/* Parchment frame */}
        <div style={{
          background: 'var(--parchment)',
          padding: '12px 12px 48px 12px',
          boxShadow: '0 0 0 6px rgba(200,146,10,0.2), 0 30px 80px rgba(0,0,0,0.7)',
          transform: `rotate(${image.rotate * 0.2}deg)`,
          transition: 'transform 0.3s ease',
        }}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              maxWidth: '100%',
              maxHeight: '62vh',
              objectFit: 'contain',
              display: 'block',
              minWidth: '200px',
            }}
          />
          <p style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontSize: '0.85rem',
            color: 'var(--chalk)',
            marginTop: '0.75rem',
            textAlign: 'center',
          }}>
            {image.caption}
          </p>
          {/* Tape strips for photo album effect */}
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '-8px', left: '20%',
            width: '60px', height: '16px',
            background: 'rgba(200,146,10,0.25)',
            transform: 'rotate(-2deg)',
          }} />
          <div aria-hidden="true" style={{
            position: 'absolute',
            top: '-8px', right: '20%',
            width: '60px', height: '16px',
            background: 'rgba(200,146,10,0.25)',
            transform: 'rotate(2deg)',
          }} />
        </div>

        {/* Prev/Next */}
        <div style={{
          position: 'absolute',
          inset: '0 -4.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          pointerEvents: 'none',
        }}>
          <button
            onClick={onPrev}
            disabled={!hasPrev}
            aria-label="Previous image"
            style={{
              background: hasPrev ? 'var(--crimson)' : 'rgba(200,200,200,0.1)',
              border: 'none',
              color: 'var(--parchment)',
              cursor: hasPrev ? 'pointer' : 'default',
              opacity: hasPrev ? 1 : 0.3,
              fontFamily: 'var(--font-masthead)',
              fontSize: '2rem',
              padding: '0.5rem 0.75rem',
              pointerEvents: 'all',
              letterSpacing: 0,
            }}
          >
            ←
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            aria-label="Next image"
            style={{
              background: hasNext ? 'var(--crimson)' : 'rgba(200,200,200,0.1)',
              border: 'none',
              color: 'var(--parchment)',
              cursor: hasNext ? 'pointer' : 'default',
              opacity: hasNext ? 1 : 0.3,
              fontFamily: 'var(--font-masthead)',
              fontSize: '2rem',
              padding: '0.5rem 0.75rem',
              pointerEvents: 'all',
            }}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export function GalleryCard({ img, index, onClick }) {
  const heights = { tall: '360px', wide: '220px', normal: '280px' };
  const height = heights[img.size] || '280px';

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`View image: ${img.alt}`}
      onClick={() => onClick(index)}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick(index); }}
      className="gallery-card"
      style={{
        transform: `rotate(${img.rotate}deg)`,
        cursor: 'pointer',
        position: 'relative',
        background: 'var(--parchment)',
        padding: '10px 10px 40px 10px',
        boxShadow: '4px 4px 0 rgba(139,0,0,0.2), 0 8px 30px rgba(0,0,0,0.1)',
        transition: 'transform 0.35s cubic-bezier(0.25,0.8,0.25,1), box-shadow 0.35s ease, z-index 0s',
        gridRow: img.size === 'tall' ? 'span 2' : 'span 1',
        gridColumn: img.size === 'wide' ? 'span 2' : 'span 1',
      }}
    >
      {/* Tape strip decoration */}
      <div aria-hidden="true" style={{
        position: 'absolute',
        top: '-6px', left: '30%',
        width: '50px', height: '14px',
        background: 'rgba(200,146,10,0.3)',
        transform: 'rotate(-1deg)',
        zIndex: 2,
      }} />

      <div style={{ overflow: 'hidden', height, position: 'relative' }}>
        <img
          src={img.src}
          alt={img.alt}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 0.5s ease',
          }}
          loading="lazy"
          className="gallery-card-img"
        />
        {/* Hover overlay */}
        <div className="gallery-card-overlay" style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(139,0,0,0.85) 0%, transparent 60%)',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '1rem',
        }}>
          <span style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: '0.7rem',
            color: 'var(--gold)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            VIEW ↗
          </span>
        </div>
      </div>

      {/* Caption */}
      <p style={{
        fontFamily: 'var(--font-display)',
        fontStyle: 'italic',
        fontSize: '0.78rem',
        color: 'var(--chalk)',
        marginTop: '0.6rem',
        textAlign: 'center',
        lineHeight: 1.4,
        margin: '0.6rem 0 0 0',
      }}>
        {img.caption}
      </p>

      {/* Photo number */}
      <span style={{
        position: 'absolute',
        bottom: '10px', right: '14px',
        fontFamily: 'var(--font-masthead)',
        fontSize: '0.75rem',
        color: 'rgba(122,92,74,0.4)',
        letterSpacing: '0.05em',
      }}>
        {String(img.id).padStart(2, '0')}
      </span>
    </div>
  );
}

export default function Gallery() {
  useEffect(() => { document.title = 'Gallery — Somaiya Debating Society'; }, []);

  const [activeIndex, setActiveIndex] = useState(null);
  const openImage = useCallback((i) => setActiveIndex(i), []);
  const closeImage = useCallback(() => setActiveIndex(null), []);
  const prevImage = useCallback(() => setActiveIndex(i => Math.max(0, i - 1)), []);
  const nextImage = useCallback(() => setActiveIndex(i => Math.min(galleryImages.length - 1, i + 1)), []);

  return (
    <>
      {/* ── GALLERY HERO ────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, #1A0A0A 0%, #5A0000 50%, #2D0808 100%)',
        paddingTop: '5rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '35vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Tiger decoration */}
        <div aria-hidden="true" style={{
          position: 'absolute', right: '-40px', top: 0, bottom: 0,
          width: '300px',
          backgroundImage: 'url(/images/tiger_element.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          opacity: 0.12,
        }} />

        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(245,236,213,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'inline-flex',
            background: 'var(--gold)',
            color: 'var(--ink)',
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            fontWeight: 800,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            padding: '0.3rem 1rem',
            marginBottom: '1.5rem',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 50%, calc(100% - 10px) 100%, 0 100%)',
          }}>
            ✦ {galleryImages.length} Photographs
          </div>

          <h1 style={{
            fontFamily: 'var(--font-masthead)',
            fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 400,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--parchment)',
            lineHeight: 0.9,
            textShadow: '4px 4px 0 rgba(90,0,0,0.7)',
            marginBottom: '1.25rem',
          }}>
            Our<br />
            <span style={{ color: 'var(--saffron)' }}>Gallery</span>
          </h1>

          <p style={{
            fontFamily: 'var(--font-sans)',
            color: 'rgba(245,236,213,0.6)',
            fontSize: '1.05rem',
            maxWidth: '45ch',
            lineHeight: 1.7,
          }}>
            Moments from tournaments, workshops, and society events — a scrapbook of voices.
          </p>
        </div>

        {/* Bottom torn edge */}
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '50px',
          background: 'var(--cream)',
          clipPath: 'polygon(0 60%, 8% 0, 16% 60%, 24% 20%, 32% 60%, 40% 10%, 48% 60%, 56% 20%, 64% 60%, 72% 10%, 80% 60%, 88% 20%, 96% 60%, 100% 30%, 100% 100%, 0 100%)',
        }} />
      </section>

      {/* ── SCRAPBOOK GRID ──────────────────────────────────── */}
      <section style={{
        background: 'var(--cream)',
        paddingTop: '4rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Stamp pattern background */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/images/stamp_bg_pattern.png)',
          backgroundSize: '280px',
          backgroundRepeat: 'repeat',
          opacity: 0.03,
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Section label */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '3rem',
          }}>
            <div style={{ height: '1px', flex: 1, background: 'var(--color-rule)' }} />
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.7rem',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: 'var(--crimson)',
              textTransform: 'uppercase',
            }}>
              ✦ The Scrapbook ✦
            </span>
            <div style={{ height: '1px', flex: 1, background: 'var(--color-rule)' }} />
          </div>

          {/* Masonry-style scrapbook grid */}
          <div
            className="gallery-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '2rem 2.5rem',
              alignItems: 'start',
            }}
          >
            {galleryImages.map((img, i) => (
              <GalleryCard key={img.id} img={img} index={i} onClick={openImage} />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
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

      <style>{`
        @media (hover: hover) {
          .gallery-card:hover {
            transform: rotate(0deg) scale(1.04) translateY(-6px) !important;
            box-shadow: 8px 8px 0 var(--crimson), 0 20px 50px rgba(0,0,0,0.2) !important;
            z-index: 10;
          }
          .gallery-card:hover .gallery-card-img {
            transform: scale(1.08) !important;
          }
          .gallery-card:hover .gallery-card-overlay {
            opacity: 1 !important;
          }
        }

        @media (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }

        @media (max-width: 639px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 1.5rem !important;
          }
          .gallery-grid .gallery-card[style*="span 2"] {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </>
  );
}
