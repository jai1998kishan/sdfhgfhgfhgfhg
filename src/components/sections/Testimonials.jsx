import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <Section id="testimonials" className="border-t hairline">
      <div className="grid md:grid-cols-12 gap-8 mb-16 items-end">
        <div className="md:col-span-4">
          <Eyebrow>Client testimonials</Eyebrow>
          <p className="eyebrow mt-1">— perspectives</p>
        </div>
        <h3 className="display text-3xl md:text-5xl md:col-span-7 md:col-start-6 max-w-2xl">
          These are a few words from the clients who live with the result every day.
        </h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="border-t hairline pt-8 flex flex-col h-full"
          >
            <Quote size={28} strokeWidth={1} className="text-clay" />
            <p className="mt-6 text-lg leading-relaxed flex-1">{t.quote}</p>
            <footer className="mt-8">
              <p className="font-display text-xl">{t.name}</p>
              <p className="eyebrow mt-1">{t.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}