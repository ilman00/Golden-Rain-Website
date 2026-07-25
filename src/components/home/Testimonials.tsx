import { testimonials } from "../../data/testimonials";
import SectionHeading from "../ui/SectionHeading";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < count ? "#B68A35" : "none"}
          stroke="#B68A35"
          strokeWidth="1"
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Customer Word"
          title="What people say after they pick up their keys."
          align="center"
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-white border border-charcoal/10 p-6 flex flex-col">
              <Stars count={t.rating} />
              <blockquote className="mt-4 font-body text-sm text-charcoal/80 leading-relaxed grow">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-charcoal/10">
                <p className="font-display text-sm font-semibold text-charcoal">{t.name}</p>
                <p className="font-mono text-xs text-steel mt-0.5">{t.vehicle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}