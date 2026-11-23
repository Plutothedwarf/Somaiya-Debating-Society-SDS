/**
 * Marginalia Collage Layout System
 * Reusable patterns for arch masking, torn edges, and layered compositions.
 * Each image slot is labelled with data-image-slot for easy replacement.
 */

// ── Arch-masked image container ───────────────────────────
export function ArchImage({
  slot,           // e.g. "hero-collage-1"
  width = '100%',
  height = '320px',
  bgColor = 'var(--color-rule)',
  label,          // optional visible label for placeholder
  rotate = 0,
  style = {},
}) {
  return (
    <div
      data-image-slot={slot}
      className="arch-mask halftone-overlay"
      style={{
        width,
        height,
        position: 'relative',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        className="img-placeholder"
        style={{ backgroundColor: bgColor }}
      >
        {label || slot}
      </div>
    </div>
  );
}

// ── Torn-edge image container ─────────────────────────────
export function TornImage({
  slot,
  width = '100%',
  height = '280px',
  bgColor = 'var(--color-rule)',
  label,
  rotate = 0,
  edge = 'bottom',  // 'top' | 'bottom' | 'both'
  style = {},
}) {
  return (
    <div
      data-image-slot={slot}
      className={`torn-edge torn-edge--${edge} halftone-overlay`}
      style={{
        width,
        height,
        position: 'relative',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        overflow: 'visible', // clip-path handles the crop
        ...style,
      }}
    >
      <div
        className="img-placeholder"
        style={{ backgroundColor: bgColor, clipPath: 'none' }}
      >
        {label || slot}
      </div>
    </div>
  );
}

// ── Layered collage composition ───────────────────────────
// Renders multiple image slots at different z-depths, rotated,
// positioned relative to a containing box.
// On mobile (<768px), simplifies to a single primary image.
export function CollageComposition({
  layers,        // array of { slot, width, height, top, left, rotate, zIndex, bgColor, label, mask }
  containerHeight = '480px',
  style = {},
}) {
  return (
    <>
      {/* Mobile: single primary image only */}
      <div
        className="collage-mobile-fallback"
        style={{ display: 'none', width: '100%' }}
        aria-hidden="true"
      >
        {layers[0] && (
          <div
            data-image-slot={layers[0].slot}
            style={{
              width: '100%',
              height: '280px',
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <div className="img-placeholder" style={{ backgroundColor: layers[0].bgColor || 'var(--color-rule)' }}>
              {layers[0].label || layers[0].slot}
            </div>
          </div>
        )}
      </div>

      {/* Desktop: full layered collage */}
      <div
        className="collage-desktop"
        style={{
          position: 'relative',
          height: containerHeight,
          ...style,
        }}
        aria-label="Collage composition"
      >
        {layers.map((layer, i) => {
          const MaskComp = layer.mask === 'arch' ? ArchImage : layer.mask === 'torn' ? TornImage : null;

          if (MaskComp) {
            return (
              <div
                key={layer.slot}
                className="collage-layer"
                style={{
                  position: 'absolute',
                  top: layer.top,
                  left: layer.left,
                  right: layer.right,
                  bottom: layer.bottom,
                  width: layer.width,
                  height: layer.height,
                  zIndex: layer.zIndex || i,
                  transform: layer.rotate ? `rotate(${layer.rotate}deg)` : undefined,
                }}
              >
                <MaskComp
                  slot={layer.slot}
                  width={layer.width}
                  height={layer.height}
                  bgColor={layer.bgColor}
                  label={layer.label}
                  edge={layer.edge}
                />
              </div>
            );
          }

          // Plain rectangular layer
          return (
            <div
              key={layer.slot}
              data-image-slot={layer.slot}
              className="collage-layer"
              style={{
                position: 'absolute',
                top: layer.top,
                left: layer.left,
                right: layer.right,
                bottom: layer.bottom,
                width: layer.width,
                height: layer.height,
                zIndex: layer.zIndex || i,
                transform: layer.rotate ? `rotate(${layer.rotate}deg)` : undefined,
                overflow: 'hidden',
                borderRadius: layer.borderRadius,
              }}
            >
              <div className="img-placeholder" style={{ backgroundColor: layer.bgColor || 'var(--color-rule)' }}>
                {layer.label || layer.slot}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .collage-desktop { display: none !important; }
          .collage-mobile-fallback { display: block !important; }
        }
      `}</style>
    </>
  );
}

// ── Scrapbook gallery item ────────────────────────────────
// Gallery photo with torn or arch mask, slight rotation, overlap
export function ScrapbookPhoto({
  slot,
  src,
  alt,
  width = '100%',
  height = '240px',
  rotate = 0,
  mask = 'torn',   // 'torn' | 'arch' | 'none'
  edge = 'both',
  bgColor = 'var(--color-rule)',
  onClick,
  caption,
  style = {},
}) {
  const maskClass = mask === 'arch' ? 'arch-mask' : mask === 'torn' ? `torn-edge torn-edge--${edge}` : '';

  return (
    <button
      onClick={onClick}
      aria-label={alt || caption || slot}
      style={{
        padding: 0,
        border: 'none',
        cursor: 'pointer',
        background: 'none',
        display: 'block',
        transform: rotate ? `rotate(${rotate}deg)` : undefined,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        ...style,
      }}
      className="scrapbook-photo"
    >
      <div
        data-image-slot={slot}
        className={`${maskClass} halftone-overlay`}
        style={{
          width,
          height,
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(23,21,18,0.18)',
        }}
      >
        {src ? (
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div className="img-placeholder" style={{ backgroundColor: bgColor }}>
            {slot}
          </div>
        )}
        {/* Oxblood tint overlay on hover */}
        <div
          className="gallery-overlay"
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'var(--color-oxblood)',
            opacity: 0,
            transition: 'opacity 0.35s ease',
            mixBlendMode: 'multiply',
          }}
        />
      </div>
      {caption && (
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.75rem',
            color: 'var(--color-chalk)',
            marginTop: '0.5rem',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          {caption}
        </p>
      )}
    </button>
  );
}
