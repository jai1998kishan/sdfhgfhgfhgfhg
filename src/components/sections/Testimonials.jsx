import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="border-t hairline">
      {/* Header row: label — pill — label (labels hidden on mobile, pill only) */}
      <div className="flex items-center justify-start md:justify-between mb-10 md:mb-16">
        <p className="hidden md:block eyebrow">Client</p>
        <span className="inline-flex items-center gap-2 border hairline rounded-sm border-black px-4 py-1.5 eyebrow ">
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          <span className="text-black">Testimonials</span>
        </span>
        <p className="hidden md:block eyebrow">Perspectives</p>
      </div>

      <h3 className="font-sans text-left md:text-center text-lg font-medium md:text-3xl leading-tight max-w-3xl md:mx-auto mb-10 md:mb-20">
        These are a few words from the clients who live with the result every
        day.
      </h3>

      {/* Mobile: horizontal scroll, one card at a time with the next peeking in.
          The row keeps Section's normal left padding (no negative-margin trick),
          so it lines up with the headline above; only the right edge bleeds so
          the next card can peek in. Desktop: static 3-column grid with dividers. */}
      <div className="flex md:grid md:grid-cols-3 gap-2 md:gap-1 overflow-x-auto md:overflow-visible snap-x snap-mandatory pr-6 md:pr-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((t, i) => (
          <blockquote
            key={t.name}
            // className={`bg-[#daddd6] flex flex-col shrink-0 p-2 w-[78%] sm:w-[55%] md:w-auto snap-start md:px-10 ${
            //   i === 0 ? "" : "md:border-l hairline md:pl-10"
            // }`}

            className={`bg-[#daddd6] p-2 flex flex-col shrink-0 w-[78%] sm:w-[55%] md:w-auto snap-start md:px-5 ${
              i === 0 ? "" : "md:border-l hairline md:pl-5"
            }`}
          >
            <span className="display text-6xl md:text-7xl leading-none text-ink font-black">
              {/* &rdquo; */}
              <Quote size={32} fill="currentColor" color="currentColor" />
            </span>

            {t.image && (
              <div className="mt-4 md:mt-6 w-full aspect-[4/3] md:w-40 lg:w-44 md:aspect-[4/5] overflow-hidden bg-clay/20">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <span className="mt-4 md:mt-6 inline-flex items-center gap-2 self-start border hairline rounded-sm px-2 py-1 eyebrow border-black">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span className="text-black">{t.role}</span>
            </span>

            <p className="mt-2 md:mt-4 text-base md:text-lg leading-relaxed flex-1">
              {t.quote}
            </p>

            <footer className="mt-6 md:mt-8">
              <p className="display italic text-lg md:text-xl">{t.name}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
