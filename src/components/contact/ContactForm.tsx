import { type FormEvent, useState } from "react";

const services = [
  "Oil & Fluid Service",
  "Brake Repair",
  "Engine Diagnostics",
  "Transmission Service",
  "AC & Heating",
  "Tires & Alignment",
  "Something Else",
];

const inputClasses =
  "w-full bg-white border border-black/15 px-4 py-3 font-body text-sm text-black placeholder:text-gray focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors";

const labelClasses =
  "block font-mono text-xs tracking-wide uppercase text-gold-dark mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your backend / form service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-gold/40 bg-white p-10 text-center">
        <p className="font-display text-xl font-semibold text-black">
          Request received.
        </p>
        <p className="mt-2 font-body text-sm text-gray">
          We'll call you within one business day to confirm a time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-black/10 p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClasses}>
            Full Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} placeholder="Jordan Smith" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone Number
          </label>
          <input id="phone" name="phone" type="tel" required className={inputClasses} placeholder="(555) 000-0000" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input id="email" name="email" type="email" required className={inputClasses} placeholder="you@email.com" />
      </div>

      <div>
        <label htmlFor="service" className={labelClasses}>
          Service Needed
        </label>
        <select id="service" name="service" required defaultValue="" className={inputClasses}>
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClasses}>
          Tell us what's going on
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={`${inputClasses} resize-none`}
          placeholder="Any noises, warning lights, or symptoms — the more detail, the faster we can help."
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-black px-8 py-3.5 font-body text-sm font-semibold tracking-wide uppercase transition-colors"
      >
        Request a Callback
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}