import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { projects } from "@/data/projects";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <Section id="projects" className="border-t hairline !px-0">
      <div className="flex items-end justify-between mb-16">
        <Eyebrow>Selected projects</Eyebrow>
        <p className="eyebrow hidden md:block">— 2024 / 2026</p>
      </div>

      {/* Stacked, full-width — one project after another rather than a grid */}
      <div className="">
        {projects.map((p) => (
          <div key={p.title} className="group block relative">
            <div className="relative overflow-hidden aspect-[4/5] sm:aspect-[16/10] lg:aspect-[21/9] bg-clay/20">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />

              {/* Scrim so the caption stays legible over any photo */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

              {/* Caption, overlaid at the base of the image */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 text-bone ">
                <Link
                  to={p.href}
                  className="inline-flex items-center gap-3 bg-bone text-ink px-5 py-2 rounded-sm hover:opacity-80 transition"
                >
                  <span className="font-sans font-black text-lg md:text-2xl">
                    {p.title}
                  </span>
                  <Plus
                    size={18}
                    strokeWidth={2.5}
                    className="shrink-0 transition-transform group-hover:rotate-90"
                  />
                </Link>

                <p className="mt-6 max-w-2xl text-lg md:text-2xl leading-snug">
                  {p.copy}
                </p>

                <div className="mt-6 pt-4 border-t border-bone/30 flex justify-between eyebrow text-bone/80">
                  <span>{p.place}</span>
                  <span>{p.year}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
