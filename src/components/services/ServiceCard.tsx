// ServiceCard.tsx
import type { Service } from "../../data/services";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="border border-black/10 bg-white p-7 hover:border-gold/50 transition-colors">
      <span className="font-display text-2xl font-semibold text-gold/60">
        {service.code}
      </span>
      <h3 className="mt-3 font-display text-lg font-semibold text-black">
        {service.title}
      </h3>
      <p className="mt-2 font-body text-sm text-gray leading-relaxed">
        {service.summary}
      </p>
      <ul className="mt-4 space-y-1.5">
        {service.details.map((d) => (
          <li key={d} className="flex items-start gap-2 font-body text-xs text-black/60">
            <span className="mt-1.5 w-1 h-1 bg-gold shrink-0" />
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}