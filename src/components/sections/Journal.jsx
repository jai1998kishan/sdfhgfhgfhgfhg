import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { journal } from "@/data/content";
import { Plus } from "lucide-react";

export default function Journal() {
  return (
    <Section id="journal" className="border-t hairline">
      <div className="flex items-end justify-between mb-16">
        <div>
          <Eyebrow>Discover</Eyebrow>
          <h2 className="display text-5xl md:text-7xl mt-4">Journal.</h2>
        </div>
        <div className="hidden md:flex gap-6 eyebrow">
          <span>Project Stories</span>
          <span>Design Insights</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {journal.map((j) => (
          <a key={j.title} href="#" className="group block">
            <div className="overflow-hidden aspect-[4/3]">
              <img
                src={j.image}
                alt={j.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <p className="eyebrow mt-6">{j.tag}</p>
            <div className="mt-3 flex items-start justify-between gap-6">
              <h3 className="display text-3xl leading-tight max-w-lg">{j.title}</h3>
              <Plus size={22} strokeWidth={1.2} className="transition-transform group-hover:rotate-90 shrink-0 mt-2" />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}