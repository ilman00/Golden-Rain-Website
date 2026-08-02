import SectionHeading from "../components/ui/SectionHeading";
import ServiceList from "../components/services/ServiceList";
import CTASection from "../components/home/CTASection";

export default function Services() {
  return (
    <>
      <section className="bg-black">
        <div className="mx-auto max-w-6xl px-6 py-40">
          <SectionHeading
            eyebrow="Our Services"
            title="Everything your car needs, done in-house."
            description="Nine core service lines, one estimate before any work starts. Don't see what you're looking for — call the shop and we'll tell you straight if we can help."
            light
          />
        </div>
      </section>
      <ServiceList />
      <CTASection />
    </>
  );
}