const info = [
  { label: "Phone", value: "+971 4 210 4477" },
  { label: "Email", value: "service@goldenraincarcare.com" },
  { label: "Address", value: "Al Quoz Industrial Area 3, Dubai, UAE" },
];

const hours = [
  { day: "Sunday – Thursday", time: "08:00 – 19:00" },
  { day: "Saturday", time: "09:00 – 17:00" },
  { day: "Friday", time: "Closed" },
];

export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
          Contact Details
        </h3>
        <ul className="space-y-3">
          {info.map((i) => (
            <li key={i.label} className="flex flex-col">
              <span className="font-mono text-xs text-black">{i.label}</span>
              <span className="font-body text-sm text-gray">{i.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
          Workshop Hours
        </h3>
        <ul className="space-y-2 font-mono text-sm">
          {hours.map((h) => (
            <li key={h.day} className="flex justify-between gap-6 text-gray-light">
              <span>{h.day}</span>
              <span className="text-gray/90">{h.time}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-white/15 aspect-video overflow-hidden">
        <iframe
          title="Golden Rain Car Care location in Dubai"
          src="https://www.google.com/maps?q=Al+Quoz+Industrial+Area+3,+Dubai,+UAE&output=embed"
          className="w-full h-full grayscale contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}