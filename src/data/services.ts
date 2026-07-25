export interface Service {
  code: string;
  title: string;
  summary: string;
  details: string[];
}

export const services: Service[] = [
  {
    code: "SVC-01",
    title: "Engine Diagnostics",
    summary:
      "Comprehensive computer diagnostic scanning and pinpoint analysis to resolve check engine lights, misfires, and performance issues.",
    details: [
      "OBD-II error code scanning",
      "Live data stream analysis",
      "Ignition coil & spark plug test",
      "Fuel pressure verification",
    ],
  },
  {
    code: "SVC-02",
    title: "Brake Service & Repair",
    summary:
      "Precision pad replacement, rotor resurfacing, line inspection, and fluid flushes to keep your stopping power responsive and quiet.",
    details: [
      "Ceramic pad replacement",
      "Rotor resurfacing & replacement",
      "Brake fluid exchange",
      "Caliper & line safety inspection",
    ],
  },
  {
    code: "SVC-03",
    title: "Factory Maintenance",
    summary:
      "Scheduled 30k, 60k, and 90k mile services executed according to OEM specifications to protect your factory warranty.",
    details: [
      "Full synthetic oil change",
      "Engine & cabin filter replacement",
      "Multi-point safety inspection",
      "Tire rotation & pressure check",
    ],
  },
  {
    code: "SVC-04",
    title: "Suspension & Steering",
    summary:
      "Shocks, struts, control arms, and precision alignment checks to eliminate vibrations and restore factory ride quality.",
    details: [
      "Shock & strut replacement",
      "Control arm & bushing repair",
      "Wheel alignment inspection",
      "Power steering system service",
    ],
  },
  {
    code: "SVC-05",
    title: "Climate Control & A/C",
    summary:
      "Leak testing, refrigerant recharge, compressor repairs, and system flushes for optimal heating and cooling performance year-round.",
    details: [
      "R-134a & R-1234yf recharge",
      "UV dye leak detection",
      "Compressor clutch replacement",
      "Blower motor & heater core repair",
    ],
  },
  {
    code: "SVC-06",
    title: "Transmission & Drivetrain",
    summary:
      "Fluid exchanges, clutch replacements, and complete transmission diagnostics for seamless power delivery and gear shifting.",
    details: [
      "Transmission fluid flush",
      "Clutch kit installation",
      "CV axle & joint replacement",
      "Differential service",
    ],
  },
  {
    code: "SVC-07",
    title: "Electrical Systems",
    summary:
      "Advanced troubleshooting for starters, alternators, battery drains, wiring harness faults, and complex vehicle electronics.",
    details: [
      "Battery & alternator testing",
      "Parasitic drain troubleshooting",
      "Wiring harness repairs",
      "Starter motor replacement",
    ],
  },
  {
    code: "SVC-08",
    title: "Exhaust & Emissions",
    summary:
      "Catalytic converter replacements, muffler repairs, and exhaust leak fixes to pass state emissions tests cleanly.",
    details: [
      "Catalytic converter replacement",
      "Muffler & pipe welding",
      "Oxygen sensor replacement",
      "Emissions failure diagnosis",
    ],
  },
];