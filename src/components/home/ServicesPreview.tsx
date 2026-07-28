import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section className="relative bg-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/2.webp')" }}
      />
      {/* Dark gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/85 to-black/95" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service repair, under one roof."
            description="From routine maintenance to complex diagnostics, every job comes with a written estimate before we touch your car."
            className="[&_p]:text-gray-light [&_h2]:text-white"
          />
          <Button to="/services" variant="ghost" className="shrink-0 !px-0 !text-gold hover:!text-gold-light">
            View all services →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {preview.map((s) => (
            <div
              key={s.code}
              className="bg-black/40 backdrop-blur-sm p-8 border border-transparent hover:border-gold/40 hover:bg-black/60 transition-all duration-300 group"
            >
              <span className="font-mono text-xs text-gold-dark group-hover:text-gold">
                {s.code}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm text-gray-light leading-relaxed">
                {s.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}