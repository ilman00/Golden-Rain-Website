export interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  vehicle: string;
}

export const testimonials: Testimonial[] = [
  {
    rating: 5,
    quote:
      "Honest shop! They showed me the worn-out suspension parts before doing any work and stuck exactly to the written quote.",
    name: "Marcus Vance",
    vehicle: "2018 Ford F-150",
  },
  {
    rating: 5,
    quote:
      "Diagnosed an electrical issue two other shops couldn't figure out. Clear communication throughout the entire repair.",
    name: "Sarah Jenkins",
    vehicle: "2021 BMW 330i",
  },
  {
    rating: 5,
    quote:
      "Brought my car in for a complete brake replacement. The pedal response feels factory-new, and they had it ready ahead of schedule.",
    name: "David Miller",
    vehicle: "2019 Toyota Camry",
  },
  {
    rating: 5,
    quote:
      "Fair pricing, zero high-pressure upsells, and super professional service. It is hard to find auto repair shops you can trust like this.",
    name: "Elena Rostova",
    vehicle: "2017 Audi Q5",
  },
];