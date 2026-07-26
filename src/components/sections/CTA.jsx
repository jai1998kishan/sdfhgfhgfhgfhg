import { Plus } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function CTA() {
  return (
    <section id="contact" className="relative border-t hairline overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${CDN}/6a060cd7503d72ff714e65ff_48c19f09c8468d5bc67a2efb745438e2_template-img-3.avif)`,
        }}
      />
      <div className="absolute inset-0 bg-ink/50" />
      <div className="relative container-x py-40 text-bone">
        <p className="eyebrow text-bone/70">Action</p>
        <h2 className="display text-5xl md:text-8xl mt-6 max-w-4xl leading-[1]">
          Thoughtful residential architecture and design begins here.
        </h2>
        <p className="mt-8 text-bone/70 max-w-md">
          Spaces crafted through warmth, materiality, and clarity.
        </p>
        <a href="#" className="btn-pill btn-pill--light mt-12">
          Start your project <Plus size={14} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
}