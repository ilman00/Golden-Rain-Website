import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    number: "01",
    title: "ASE-Certified Technicians",
    description: "Every technician on our floor holds current ASE certification, retested every five years.",
  },
  {
    number: "02",
    title: "Written Estimate First",
    description: "You approve the price before we start. No surprise line items on pickup.",
  },
  {
    number: "03",
    title: "12-Month Warranty",
    description: "Parts and labor on every repair are covered for 12 months or 12,000 miles.",
  },
  {
    number: "04",
    title: "Same-Day Turnaround",
    description: "Most repairs booked before 10am are ready for pickup the same afternoon.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Why Golden Rain"
          title="Trust is earned in the bay, not the ad."
          description="We built this shop on the parts of car repair most places skip: clear communication, fair pricing, and technicians who explain what they find."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10">
          {features.map((f) => (
            <div key={f.number} className="bg-offwhite p-8">
              <span className="font-display text-3xl font-semibold text-gold">
                {f.number}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold text-black">
                {f.title}
              </h3>
              <p className="mt-2 font-body text-sm text-gray leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}