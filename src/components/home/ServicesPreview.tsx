import { services } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

export default function ServicesPreview() {
  const preview = services.slice(0, 6);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-service repair, under one roof."
            description="From routine maintenance to complex diagnostics, every job comes with a written estimate before we touch your car."
          />
          <Button to="/services" variant="ghost" className="shrink-0 !px-0">
            View all services →
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
          {preview.map((s) => (
            <div key={s.code} className="bg-white p-8 hover:bg-black transition-colors duration-300 group">
              <span className="font-mono text-xs text-gold-dark group-hover:text-gold">
                {s.code}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-black group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 font-body text-sm text-gray group-hover:text-gray-light leading-relaxed transition-colors">
                {s.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}