import Button from "../ui/Button";

export default function Hero() {
    return (
        <section className="relative bg-charcoal overflow-hidden">
            {/* Rain-streak texture — sparse, low-opacity diagonal lines behind the headline */}
            <svg
                className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden="true"
            >
                {Array.from({ length: 26 }).map((_, i) => {
                    const x = (i * 47) % 100;
                    const len = 40 + ((i * 13) % 90);
                    const delay = (i * 7) % 100;
                    return (
                        <line
                            key={i}
                            x1={`${x}%`}
                            y1={`${-10 + (delay % 20)}%`}
                            x2={`${x - 3}%`}
                            y2={`${(-10 + (delay % 20)) + len / 6}%`}
                            stroke="#D4AF6A"
                            strokeWidth="1"
                        />
                    );
                })}
            </svg>

            <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-36 grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-6">
                        Est. 2011 — Independent Automotive Repair
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-cream leading-[1.05] tracking-tight">
                        Repairs done right,
                        <span className="block text-gold">the first time.</span>
                    </h1>
                    <p className="mt-6 font-body text-base sm:text-lg text-steel-light leading-relaxed max-w-md">
                        Golden Rain Car Care is an independent shop staffed by
                        ASE-certified technicians. No upsells, no guesswork —
                        just diagnosis, a written quote, and honest work.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Button to="/contact" variant="primary">
                            Book a Service
                        </Button>
                        <Button to="/services" variant="outline">
                            View Services
                        </Button>
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-[4/5] border border-gold/30 bg-charcoal-soft flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1000&auto=format&fit=crop"
                            onError={(e) => {
                                // Fallback to another working car repair photo if main link fails
                                e.currentTarget.src = "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop";
                            }}
                            alt="Technician inspecting a car engine at Golden Rain Car Care"
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 hidden sm:block bg-gold text-charcoal px-6 py-4">
                        <p className="font-display text-2xl font-semibold leading-none">4.9 / 5</p>
                        <p className="font-body text-[11px] tracking-wide uppercase mt-1">
                            From 600+ reviews
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}