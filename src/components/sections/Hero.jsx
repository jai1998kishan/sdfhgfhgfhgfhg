import { Plus } from "lucide-react";
import { disciplines, recognitions, hero } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-clay text-ink">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{ backgroundImage: `url(${hero.video})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-clay/40 via-clay/20 to-bone/60" />
      <div className="grain absolute inset-0" />

      <div className="relative container-x pt-40 pb-16 min-h-screen flex flex-col justify-between">
        <div className="fade-up">
          <p className="eyebrow text-ink/70">Bespoke</p>
          <h1 className="display mt-6 text-[clamp(3.5rem,12vw,12rem)] text-ink">
            living
            <br />
            defined
            <br />
            by clarity
          </h1>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-6 space-y-3">
            {disciplines.map((d) => (
              <a
                key={d.title}
                href={d.href}
                className="group flex items-center justify-between border-t hairline border-ink/30 py-4 pr-2 max-w-md"
              >
                <span className="font-display text-2xl">{d.title}</span>
                <span className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest2">
                  Explore{" "}
                  <Plus
                    size={16}
                    strokeWidth={1.2}
                    className="transition-transform group-hover:rotate-90"
                  />
                </span>
              </a>
            ))}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <p className="eyebrow mb-4">Recognition</p>
            <ul className="space-y-2 text-sm">
              {recognitions.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between">
          <div>
            <p className="font-display text-4xl">ApnaGhar</p>
            <p className="eyebrow mt-1">
              Architecture & interior design studio
            </p>
          </div>
          <a href="#contact" className="btn-pill hidden md:inline-flex">
            Consultation <Plus size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}
