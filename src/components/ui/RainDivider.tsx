interface RainDividerProps {
  tone?: "on-cream" | "on-charcoal";
  className?: string;
}

/**
 * Thin diagonal gold streaks — the site's recurring "rain" motif.
 * Used between sections instead of a plain <hr>. Kept quiet: low opacity,
 * no animation, a handful of uneven-length strokes rather than a repeating
 * pattern, so it reads as a mark rather than a texture/background.
 */
export default function RainDivider({ tone = "on-cream", className = "" }: RainDividerProps) {
  const stroke = tone === "on-cream" ? "#B68A35" : "#D4AF6A";
  const opacity = tone === "on-cream" ? 0.55 : 0.4;

  const streaks = [
    { x: 40, len: 22 },
    { x: 90, len: 14 },
    { x: 160, len: 30 },
    { x: 230, len: 16 },
    { x: 310, len: 24 },
    { x: 380, len: 12 },
    { x: 460, len: 26 },
    { x: 540, len: 16 },
    { x: 610, len: 20 },
    { x: 680, len: 14 },
  ];

  return (
    <div className={`w-full flex justify-center py-2 ${className}`} aria-hidden="true">
      <svg width="100%" height="24" viewBox="0 0 720 24" preserveAspectRatio="none" className="max-w-6xl">
        {streaks.map((s, i) => (
          <line
            key={i}
            x1={s.x}
            y1={12 - s.len / 2}
            x2={s.x - 6}
            y2={12 + s.len / 2}
            stroke={stroke}
            strokeWidth={1.5}
            strokeLinecap="round"
            opacity={opacity}
          />
        ))}
      </svg>
    </div>
  );
}