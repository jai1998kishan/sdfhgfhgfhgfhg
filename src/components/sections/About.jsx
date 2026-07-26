import Section from "@/components/ui/Section";
import { Plus } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function About() {
  return (
    <Section id="about" className="border-t hairline">
      <div className="grid gap-16 md:grid-cols-12 items-start">
        <div className="md:col-span-7">
          <h2 className="display text-4xl md:text-6xl leading-[1.05] max-w-3xl">
            Founded in 2003, ApnaGhar is a deliberately small practice. The
            principal architect leads every project from brief to handover — so
            the thinking that shapes the first sketch carries all the way
            through to the last detail on site.
          </h2>

          <div className="mt-16">
            <img
              src={`${CDN}/6a060cd7503d72ff714e65ff_48c19f09c8468d5bc67a2efb745438e2_template-img-3.avif`}
              alt="Modern residential interior"
              loading="lazy"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>

          <h3 className="display text-3xl md:text-4xl mt-16 max-w-2xl">
            Every project begins with reading the site and the brief honestly,
            then deciding what the new work should add, contrast, or preserve.
          </h3>

          <a href="#about" className="btn-pill mt-10">
            About us <Plus size={14} strokeWidth={1.5} />
          </a>
        </div>

        <aside className="md:col-span-4 md:col-start-9 md:sticky md:top-28 space-y-8">
          <img
            src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
            alt="Portrait"
            loading="lazy"
            className="w-full aspect-[3/4] object-cover"
          />
          <div>
            <p className="eyebrow">Studio</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A Berlin-based practice working across residential architecture,
              interior design, and heritage renovation — with projects in twelve
              countries.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  );
}
