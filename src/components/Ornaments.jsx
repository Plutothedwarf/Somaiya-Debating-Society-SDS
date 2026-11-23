/**
 * Marginalia Ornamental Linework System
 * Hand-drawn-style SVG icons and flourish borders grounded in debate objects.
 * Use these at section boundaries, as framing flourishes — not scattered decoratively.
 */

// ── Gavel ────────────────────────────────────────────────
export function GavelMotif({ size = 40, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
    >
      {/* Head */}
      <rect x="6" y="8" width="18" height="8" rx="1.5" stroke={color} strokeWidth="1.2" />
      {/* Handle */}
      <line x1="20" y1="15" x2="34" y2="32" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Sound block */}
      <rect x="2" y="30" width="14" height="5" rx="1" stroke={color} strokeWidth="1" />
      {/* Decorative notch on head */}
      <line x1="6" y1="12" x2="24" y2="12" stroke={color} strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

// ── Quill ─────────────────────────────────────────────────
export function QuillMotif({ size = 40, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
    >
      {/* Feather body */}
      <path d="M32 4 C28 10, 8 18, 6 36" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Feather vanes left */}
      <path d="M32 4 C24 8, 15 14, 10 22" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.6" />
      {/* Feather vanes right */}
      <path d="M28 8 C22 12, 13 17, 8 28" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Nib tip */}
      <path d="M6 36 L4 38 L8 35 Z" fill={color} opacity="0.8" />
    </svg>
  );
}

// ── Scroll / Order Paper ──────────────────────────────────
export function ScrollMotif({ size = 40, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
    >
      {/* Scroll body */}
      <rect x="8" y="8" width="24" height="28" rx="2" stroke={color} strokeWidth="1.2" />
      {/* Top scroll roll */}
      <ellipse cx="20" cy="8" rx="12" ry="3.5" stroke={color} strokeWidth="1" />
      {/* Bottom scroll roll */}
      <ellipse cx="20" cy="36" rx="12" ry="3.5" stroke={color} strokeWidth="1" />
      {/* Text lines */}
      <line x1="13" y1="16" x2="27" y2="16" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <line x1="13" y1="20" x2="27" y2="20" stroke={color} strokeWidth="0.8" opacity="0.5" />
      <line x1="13" y1="24" x2="22" y2="24" stroke={color} strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
}

// ── Scales of Justice ─────────────────────────────────────
export function ScalesMotif({ size = 40, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
    >
      {/* Center post */}
      <line x1="20" y1="4" x2="20" y2="38" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Beam */}
      <line x1="6" y1="12" x2="34" y2="12" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Left pan cords */}
      <line x1="8" y1="12" x2="6" y2="24" stroke={color} strokeWidth="0.8" />
      <line x1="12" y1="12" x2="14" y2="24" stroke={color} strokeWidth="0.8" />
      {/* Right pan cords */}
      <line x1="28" y1="12" x2="26" y2="24" stroke={color} strokeWidth="0.8" />
      <line x1="32" y1="12" x2="34" y2="24" stroke={color} strokeWidth="0.8" />
      {/* Left pan */}
      <path d="M4 24 Q10 28 16 24" stroke={color} strokeWidth="1" fill="none" />
      {/* Right pan (slightly lower — tilted) */}
      <path d="M24 26 Q30 30 36 26" stroke={color} strokeWidth="1" fill="none" />
      {/* Base */}
      <path d="M16 38 L24 38" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
      {/* Top finial */}
      <circle cx="20" cy="6" r="2" stroke={color} strokeWidth="0.8" />
    </svg>
  );
}

// ── Lectern ────────────────────────────────────────────────
export function LecternMotif({ size = 40, color = 'currentColor', style = {} }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={style}
    >
      {/* Lectern top face */}
      <path d="M6 16 L20 8 L34 16 L28 18 L12 18 Z" stroke={color} strokeWidth="1.1" fill="none" />
      {/* Lectern front face */}
      <path d="M12 18 L12 34 L28 34 L28 18" stroke={color} strokeWidth="1.1" />
      {/* Center panel inset */}
      <rect x="16" y="21" width="8" height="10" rx="1" stroke={color} strokeWidth="0.8" opacity="0.5" />
      {/* Paper/notes on top */}
      <path d="M14 12 L26 12" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <path d="M15 14 L25 14" stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      {/* Base feet */}
      <line x1="14" y1="34" x2="11" y2="38" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <line x1="26" y1="34" x2="29" y2="38" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

// ── Ornamental Flourish Rule ───────────────────────────────
// Used as section top/bottom borders
export function OrnamentRule({
  color = 'var(--color-rule)',
  motif = 'scales',
  style = {},
  className = '',
}) {
  const motifs = { gavel: GavelMotif, quill: QuillMotif, scroll: ScrollMotif, scales: ScalesMotif, lectern: LecternMotif };
  const MotifComponent = motifs[motif] || ScalesMotif;

  return (
    <div
      className={`ornament-border ${className}`}
      style={{ ...style }}
      aria-hidden="true"
    >
      <MotifComponent size={28} color={color} />
    </div>
  );
}

// ── Matchbox Corner Border ─────────────────────────────────
// Thin geometric frame in the style of vintage matchbox labels
export function MatchboxBorder({
  color = 'var(--color-rule)',
  accentColor = 'var(--color-oxblood)',
  style = {},
  children,
}) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '1.5rem',
        ...style,
      }}
    >
      {/* Corner ornaments — SVG positioned absolutely at each corner */}
      {[
        { top: 0, left: 0, rotate: 0 },
        { top: 0, right: 0, rotate: 90 },
        { bottom: 0, right: 0, rotate: 180 },
        { bottom: 0, left: 0, rotate: 270 },
      ].map((pos, i) => (
        <svg
          key={i}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          style={{
            position: 'absolute',
            ...pos,
            transform: `rotate(${pos.rotate}deg)`,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        >
          <path d="M2 18 L2 2 L18 2" stroke={color} strokeWidth="1" />
          <circle cx="2" cy="2" r="1.5" fill={accentColor} />
        </svg>
      ))}

      {/* Border lines */}
      <div
        style={{
          position: 'absolute',
          inset: '8px',
          border: `1px solid ${color}`,
          pointerEvents: 'none',
        }}
        aria-hidden="true"
      />

      {children}
    </div>
  );
}
