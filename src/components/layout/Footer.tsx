import { Link } from "react-router-dom";

const hours = [
  { day: "Mon – Fri", time: "08:00 – 19:00" },
  { day: "Saturday", time: "09:00 – 17:00" },
  { day: "Sunday", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/25">
      <div className="mx-auto max-w-6xl px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <span className="font-display text-white text-lg tracking-wide">
            GOLDEN RAIN
            <span className="block text-[10px] font-body font-medium tracking-[0.3em] text-gold mt-1">
              CAR CARE
            </span>
          </span>
          <p className="mt-4 font-body text-sm text-gray-light leading-relaxed">
            Honest diagnostics, certified technicians, and workmanship backed
            by warranty — every car, every time.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
            Navigate
          </h3>
          <ul className="space-y-2.5 font-body text-sm text-gray-light">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
            Workshop Hours
          </h3>
          <ul className="space-y-2.5 font-mono text-sm text-gray-light">
            {hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-6">
                <span>{h.day}</span>
                <span className="text-white/80">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm tracking-widest uppercase text-gold mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-2.5 font-mono text-sm text-gray-light">
            <li>+1 (555) 210-4477</li>
            <li>service@goldenraincarcare.com</li>
            <li className="font-body">1420 Foundry Road, Unit 6</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray">
            © {new Date().getFullYear()} Golden Rain Car Care. All rights reserved.
          </p>
          <p className="font-body text-xs text-gray">
            Licensed &amp; Insured Automotive Repair
          </p>
        </div>
      </div>
    </footer>
  );
}