import SectionHeading from "../ui/SectionHeading";
import RainDivider from "../ui/RainDivider";

export default function Story() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-16 items-start">
        <div className="border border-charcoal/10">
          <img
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=1000&auto=format&fit=crop"
            alt="Golden Rain Car Care workshop exterior"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Our Story"
            title="Started by two mechanics who were tired of the industry's reputation."
          />
          <div className="mt-6 space-y-4 font-body text-sm sm:text-base text-steel leading-relaxed">
            <p>
              Golden Rain Car Care opened in 2011 in a single-bay garage with
              two lifts and a reputation to build. The founders had spent
              years working at dealerships, watching customers get quoted
              for repairs they didn't need.
            </p>
            <p>
              Thirteen years later, we've grown to a six-bay shop with a full
              team of ASE-certified technicians — but the rule from day one
              hasn't changed: show the customer the problem, quote it in
              writing, and never touch the car until they say go.
            </p>
          </div>
          <RainDivider tone="on-cream" className="my-8 justify-start" />
          <p className="font-mono text-xs tracking-widest uppercase text-gold-dark">
            Independently owned & operated since 2011
          </p>
        </div>
      </div>
    </section>
  );
}