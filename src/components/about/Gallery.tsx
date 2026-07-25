import SectionHeading from "../ui/SectionHeading";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    caption: "Diagnostic bay",
  },
  {
    src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    caption: "Brake service",
  },
  {
    src: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop",
    caption: "Alignment rack",
  },
  {
    src: "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=800&auto=format&fit=crop",
    caption: "Parts inventory",
  },
];

export default function Gallery() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Inside The Shop"
          title="A look at where the work happens."
          light
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-1">
          {photos.map((p) => (
            <figure key={p.caption} className="relative group overflow-hidden aspect-square">
              <img
                src={p.src}
                alt={p.caption}
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-charcoal/80 px-3 py-2 font-mono text-[11px] tracking-wide uppercase text-gold-light">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}