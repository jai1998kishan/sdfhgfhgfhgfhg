import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { services } from "@/data/content";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <Section id="services" className="border-t hairline">
      <div className="flex items-end justify-between mb-16">
        <div>
          <Eyebrow>Services</Eyebrow>
          <h2 className="display text-5xl md:text-7xl mt-4">
            Architecture <span className="italic text-clay">interior</span><br />
            design <span className="italic text-clay">solutions</span>.
          </h2>
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-t hairline">
        {services.map((s) => (
          <a
            key={s.title}
            href="#"
            className="group flex items-center justify-between px-2 md:px-6 py-8 border-b hairline md:[&:nth-child(odd)]:border-r hairline hover:bg-ink hover:text-bone transition-colors"
          >
            <div>
              <p className="eyebrow group-hover:text-bone/60">{s.meta}</p>
              <h4 className="display text-3xl mt-2">{s.title}</h4>
            </div>
            <ArrowUpRight size={28} strokeWidth={1.2} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        ))}
      </div>
    </Section>
  );
}