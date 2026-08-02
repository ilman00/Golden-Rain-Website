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
  const alignClasses = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  const titleColor = light ? "text-white" : "text-black";
  const descColor = light ? "text-gray-light" : "text-gray";

  return (
    <div className={`max-w-2xl flex flex-col ${alignClasses} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 flex items-center gap-3 ${align === "center" ? "" : ""}`}>
          <span className="h-px w-8 bg-gold" />
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
            {eyebrow}
          </p>
        </div>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 font-body text-base leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}