import SectionHeading from "../components/ui/SectionHeading";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

export default function Contact() {
  return (
    <section className="bg-charcoal">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Tell us what's wrong. We'll tell you what it costs."
          description="Fill out the form or call the shop directly — either way, you'll get a real answer, not a runaround."
          light
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </div>
    </section>
  );
}