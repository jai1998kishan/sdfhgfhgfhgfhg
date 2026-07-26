import { clients } from "@/data/content";

export default function Clients() {
  const loop = [...clients, ...clients];
  return (
    <section className="border-t hairline py-20 overflow-hidden">
      <div className="container-x mb-10 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-4">
          <p className="eyebrow">Trusted clients</p>
          <p className="eyebrow mt-1">— partnerships</p>
        </div>
        <h3 className="display text-3xl md:text-5xl md:col-span-7 md:col-start-6 max-w-2xl">
          Collaborating with homeowners, developers, and residential partners on
          architecture and interior projects.
        </h3>
      </div>

      <div className="relative">
        <div className="flex marquee whitespace-nowrap">
          {loop.map((c, i) => (
            <div
              key={`${c}-${i}`}
              className="flex items-center gap-6 px-10 border-l hairline"
            >
              <span className="font-display text-3xl md:text-5xl">{c}</span>
              <span className="text-clay">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}