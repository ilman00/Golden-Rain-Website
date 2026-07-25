import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

const links = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gold/25">
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="w-8 h-8 border border-gold flex items-center justify-center">
            <span className="font-display text-gold text-lg leading-none">G</span>
          </span>
          <span className="font-display text-white text-lg tracking-wide leading-tight">
            GOLDEN RAIN
            <span className="block text-[10px] font-body font-medium tracking-[0.3em] text-gold">
              CAR CARE
            </span>
          </span>
        </NavLink>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-body text-sm font-medium tracking-wide uppercase transition-colors ${
                    isActive ? "text-gold" : "text-white/80 hover:text-gold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button to="/contact" variant="primary" className="text-xs px-5 py-2.5">
            Book a Service
          </Button>
        </div>

        <button
          className="md:hidden text-white w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`block h-px w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-gold/25 bg-black">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block font-body text-sm font-medium tracking-wide uppercase ${
                      isActive ? "text-gold" : "text-white/80"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Button to="/contact" variant="primary" className="w-full text-xs">
                Book a Service
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}