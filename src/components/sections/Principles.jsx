import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { Plus } from "lucide-react";
import { principles } from "@/data/content";

export default function Principles() {
  return (
    <Section id="principles" className="border-t hairline">
      <div className="grid gap-16 md:grid-cols-12 items-start">
        <div className="md:col-span-5">
          <Eyebrow>Principles</Eyebrow>
          <div className="mt-8 display text-5xl md:text-7xl leading-[0.95]">
            <div>Considered</div>
            <div className="italic text-clay">Crafted</div>
            <div>Lasting</div>
            <div>solutions.</div>
          </div>
          <p className="mt-10 text-muted max-w-sm">
            What the work is built on. Three principles that run through every
            project we take on.
          </p>
        </div>

        <div className="md:col-span-7 space-y-6">
          {principles.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className="group grid grid-cols-12 gap-6 items-center border-t hairline py-6"
            >
              <div className="col-span-4 overflow-hidden aspect-[4/3]">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="col-span-7">
                <p className="eyebrow">{p.tag}</p>
                <h4 className="display text-3xl mt-2">{p.title}</h4>
                <p className="mt-2 text-sm text-muted max-w-md">{p.copy}</p>
              </div>
              <div className="col-span-1 flex justify-end">
                <Plus className="transition-transform group-hover:rotate-90" size={22} strokeWidth={1.2} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}