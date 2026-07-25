const stats = [
  { value: "13+", label: "Years in Business" },
  { value: "24K", label: "Vehicles Serviced" },
  { value: "9", label: "ASE-Certified Techs" },
  { value: "97%", label: "Customers Who Return" },
];

export default function Stats() {
  return (
    <section className="bg-gold">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-display text-3xl sm:text-4xl font-semibold text-black">
              {s.value}
            </p>
            <p className="mt-1 font-body text-xs sm:text-sm tracking-wide uppercase text-black/70">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}