// import Section from "@/components/ui/Section";
// import { Quote } from "lucide-react";

// const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

// export default function FounderQuote() {
//   return (
//     <Section className="border-t hairline">
//       <div className="grid gap-12 md:grid-cols-12 items-center">
//         <div className="md:col-span-4">
//           <img
//             src={`${CDN}/6a060cd7503d72ff714e660a_c1fa0ab362a4d2d3fb45f65ea1499e2c_small-portrait3.avif`}
//             alt="Edward ApnaGhars"
//             loading="lazy"
//             className="w-full aspect-[3/4] object-cover"
//           />
//         </div>
//         <div className="md:col-span-7 md:col-start-6">
//           <Quote size={36} strokeWidth={1} className="text-clay" />
//           <p className="display text-3xl md:text-5xl leading-[1.1] mt-8">
//             We founded ApnaGhars with the belief that residential design should
//             feel timeless, calm, and deeply personal. Every project is
//             approached with clarity, warmth, and careful attention to detail.
//           </p>
//           <div className="mt-10">
//             <p className="font-display text-xl">Edward ApnaGhars</p>
//             <p className="eyebrow mt-1">Founder & Principal Architect</p>
//           </div>
//         </div>
//       </div>
//     </Section>
//   );
// }

//=========================================

import Section from "@/components/ui/Section";
import { Quote } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function FounderQuote() {
  return (
    <Section className="border-t hairline">
      <div className="grid gap-8 md:gap-12 md:grid-cols-12 md:items-center">
        {/* Mobile: small portrait + quote mark side by side.
            Desktop: portrait becomes the tall left column, quote mark moves
            into the header row on the right instead. */}
        <div className="flex items-start justify-between md:col-span-4 md:block">
          <img
            src={`${CDN}/6a060cd7503d72ff714e660a_c1fa0ab362a4d2d3fb45f65ea1499e2c_small-portrait3.avif`}
            alt="Edward ApnaGhars"
            loading="lazy"
            className="w-24 h-24 aspect-square md:w-full md:h-auto md:aspect-[3/4] object-cover"
          />
          <Quote size={40} strokeWidth={1} className="md:hidden text-ink" />
        </div>

        <div className="md:col-span-7 md:col-start-6">
          {/* Desktop-only header row: quote mark + "Quote" pill, opposite ends */}
          <div className="hidden md:flex items-center justify-between">
            <Quote size={40} strokeWidth={1} className="text-ink" />
            <span className="inline-flex items-center gap-2 border border-black hairline rounded-sm px-3 py-1 eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              <span className="text-black">Quote</span>
            </span>
          </div>

          {/* Mobile-only: divider, then the "Quote" pill on its own */}
          <div className="md:hidden border-t hairline pt-6 mt-6">
            <span className="inline-flex items-center gap-2 border hairline rounded-sm px-3 py-1 eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
              Quote
            </span>
          </div>

          <p className="font-sans text-2xl md:text-4xl font-bold leading-[1.15] mt-6 md:mt-8">
            <span className="text-ink">
              We founded ApnaGhars with the belief that residential design
              should feel timeless, calm, and deeply personal.
            </span>{" "}
            <span className="text-muted">
              Every project is approached with clarity, warmth, and careful
              attention to detail — creating spaces that feel refined,
              functional, and made to last.
            </span>
          </p>

          <p className="eyebrow mt-8 md:mt-10">
            Edward ApnaGhars <span className="mx-2">·</span> Founder &amp;
            Principal Architect
          </p>
        </div>
      </div>
    </Section>
  );
}
