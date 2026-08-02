// ServiceList.tsx
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceList() {
  return (
    <section className="bg-offwhite">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.code} service={s} variant="flip" />
          ))}
        </div>
      </div>
    </section>
  );
}