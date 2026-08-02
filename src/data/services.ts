export interface Service {
  code: string;
  title: string;
  summary: string;
  details: string[];
  image: string;
}

export const services: Service[] = [
  {
    code: "SVC-01",
    title: "Auto Mechanical Repair",
    summary:
      "General mechanical diagnostics and repair covering engine, transmission, and drivetrain issues, handled with OEM-level precision.",
    details: [
      "Engine diagnostics & repair",
      "Transmission service",
      "Drivetrain & CV joint repair",
      "Timing belt & chain replacement",
    ],
    image: "/images/services/Auto+repair.webp",
  },
  {
    code: "SVC-02",
    title: "Auto Electric Repair",
    summary:
      "Full electrical troubleshooting for starters, alternators, batteries, wiring faults, and onboard vehicle electronics.",
    details: [
      "Battery & alternator testing",
      "Wiring harness repairs",
      "Starter motor replacement",
      "Dashboard & sensor diagnostics",
    ],
    image: "/images/services/auto-electric-repair.jpg",
  },
  {
    code: "SVC-03",
    title: "Maintenance & General Repair",
    summary:
      "Scheduled maintenance and general repair work to keep your vehicle running reliably, backed by a written estimate before we start.",
    details: [
      "Full & synthetic oil change",
      "Filter replacement",
      "Multi-point safety inspection",
      "Fluid top-ups & flushes",
    ],
    image: "/images/services/general-repair.jpg",
  },
  {
    code: "SVC-04",
    title: "Auto Air Conditioning Repair",
    summary:
      "Leak testing, refrigerant recharge, and compressor repair to keep your cabin cool through Dubai summers.",
    details: [
      "Refrigerant recharge",
      "Leak detection",
      "Compressor & clutch repair",
      "Blower motor service",
    ],
    image: "/images/services/AC-reepair.webp",
  },
  {
    code: "SVC-05",
    title: "Auto Denting & Painting",
    summary:
      "Panel beating, dent removal, and colour-matched paintwork that restores your car's body to a factory finish.",
    details: [
      "Dent & panel repair",
      "Colour-matched spray painting",
      "Rust treatment",
      "Bumper & panel refinishing",
    ],
    image: "/images/services/denting-and-painting.jpg",
  },
  {
    code: "SVC-06",
    title: "Auto Accessories Fitting",
    summary:
      "Professional fitting of accessories and add-ons, installed cleanly with no shortcuts on your wiring or trim.",
    details: [
      "Audio & infotainment fitting",
      "Body kit & trim installation",
      "Parking sensor & camera fitting",
      "Lighting upgrades",
    ],
    image: "/images/services/accessories-fitting.jpg",
  },
  {
    code: "SVC-07",
    title: "Auto Oil Change",
    summary:
      "Quick, thorough oil and filter changes using the correct grade for your engine, done while you wait.",
    details: [
      "Full synthetic & semi-synthetic oil",
      "Oil filter replacement",
      "Fluid level check",
      "Under-car inspection",
    ],
    image: "/images/services/oil-change.jpg",
  },
  {
    code: "SVC-08",
    title: "Car Polish Services",
    summary:
      "Machine polishing and finishing that lifts swirl marks and restores depth and shine to your paintwork.",
    details: [
      "Machine cut & polish",
      "Swirl mark removal",
      "Wax & sealant application",
      "Headlight restoration",
    ],
    image: "/images/services/car-polish.jpg",
  },
  {
    code: "SVC-09",
    title: "Auto Seats Cleaning",
    summary:
      "Deep interior cleaning for seats and upholstery, removing stains and odours and restoring a fresh cabin feel.",
    details: [
      "Fabric & leather deep clean",
      "Stain & odour removal",
      "Leather conditioning",
      "Full interior detail",
    ],
    image: "/images/services/seats-cleaning.jpg",
  },
];