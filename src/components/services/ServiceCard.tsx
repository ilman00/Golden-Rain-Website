import { useState } from "react";
import type { Service } from "../../data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "default" | "flip";
}

export default function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);

  if (variant === "flip") {
    const canHover =
      typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches;

    return (
      <div
        className="group [perspective:1200px] h-80"
        onMouseEnter={canHover ? () => setFlipped(true) : undefined}
        onMouseLeave={canHover ? () => setFlipped(false) : undefined}
        onClick={!canHover ? () => setFlipped((f) => !f) : undefined}
      >
        <div
          className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${service.image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
            <div className="relative h-full flex flex-col justify-end p-6">
              <span className="font-mono text-xs text-gold">{service.code}</span>
              <h3 className="mt-2 font-display text-xl font-semibold text-white">
                {service.title}
              </h3>
              {!canHover && (
                <span className="mt-3 font-mono text-[10px] tracking-widest uppercase text-gold-light">
                  Tap for details
                </span>
              )}
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-black border border-gold/30 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col">
            <span className="font-mono text-xs text-gold-dark">{service.code}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-white">
              {service.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {service.details.map((d) => (
                <li key={d} className="flex items-start gap-2 font-body text-sm text-gray-light">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Default (unchanged, used elsewhere)
  return (
    <div className="bg-white border border-black/10 p-6 hover:border-gold/40 transition-colors">
      <span className="font-mono text-xs text-gold-dark">{service.code}</span>
      <h3 className="mt-2 font-display text-lg font-semibold text-black">{service.title}</h3>
      <p className="mt-2 font-body text-sm text-gray leading-relaxed">{service.summary}</p>
    </div>
  );
} 