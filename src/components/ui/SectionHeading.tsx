interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean; 
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}: SectionHeadingProps) {
  const alignClasses = align === "center" ? "text-center mx-auto" : "text-left";
  const titleColor = light ? "text-cream" : "text-charcoal";
  const descColor = light ? "text-steel-light" : "text-steel";

  return (
    <div className={`max-w-2xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <p className="mb-3 font-mono text-xs tracking-[0.2em] uppercase text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl font-semibold tracking-tight ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 font-body text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}