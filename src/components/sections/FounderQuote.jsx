import Section from "@/components/ui/Section";
import { Quote } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function FounderQuote() {
  return (
    <Section className="border-t hairline">
      <div className="grid gap-12 md:grid-cols-12 items-center">
        <div className="md:col-span-4">
          <img
            src={`${CDN}/6a060cd7503d72ff714e660a_c1fa0ab362a4d2d3fb45f65ea1499e2c_small-portrait3.avif`}
            alt="Edward Halston"
            loading="lazy"
            className="w-full aspect-[3/4] object-cover"
          />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Quote size={36} strokeWidth={1} className="text-clay" />
          <p className="display text-3xl md:text-5xl leading-[1.1] mt-8">
            We founded Halston with the belief that residential design should feel
            timeless, calm, and deeply personal. Every project is approached with
            clarity, warmth, and careful attention to detail.
          </p>
          <div className="mt-10">
            <p className="font-display text-xl">Edward Halston</p>
            <p className="eyebrow mt-1">Founder & Principal Architect</p>
          </div>
        </div>
      </div>
    </Section>
  );
}