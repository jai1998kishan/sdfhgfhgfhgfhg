import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects } from "@/data/content";
import { Plus } from "lucide-react";

export default function Projects() {
  return (
    <Section id="projects" className="border-t hairline">
      <div className="flex items-end justify-between mb-16">
        <Eyebrow>Selected projects</Eyebrow>
        <p className="eyebrow hidden md:block">— 2024 / 2026</p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {projects.map((p) => (
          <a key={p.title} href="#" className="group block">
            <div className="overflow-hidden aspect-[4/5] bg-clay/20">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h4 className="display text-3xl">{p.title}</h4>
                <p className="text-sm text-muted mt-2 max-w-md">{p.copy}</p>
              </div>
              <Plus size={22} strokeWidth={1.2} className="transition-transform group-hover:rotate-90 shrink-0 mt-2" />
            </div>
            <div className="mt-4 flex justify-between eyebrow">
              <span>{p.place}</span>
              <span>{p.year}</span>
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}