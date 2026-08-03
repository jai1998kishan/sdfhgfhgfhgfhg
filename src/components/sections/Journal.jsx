// import Section from "@/components/ui/Section";
// import { journal } from "@/data/content";
// import { Plus } from "lucide-react";

// export default function Journal() {
//   return (
//     <Section id="journal" className="border-t hairline !p-4">
//       {/* Heading */}
//       <h2 className="display text-5xl md:text-7xl">Journal.</h2>

//       {/* Divider + filter row: tabs on the left, "Discover" pill on the right */}
//       <div className="mt-8 pt-6 border-t hairline flex items-center justify-between mb-12 md:mb-16">
//         <div className="flex gap-6 eyebrow">
//           <span className="text-clay">Project Stories</span>
//           <span className="text-clay">Design Insights</span>
//         </div>
//         <span className="inline-flex items-center gap-2 border hairline rounded-sm px-3 py-1 eyebrow shrink-0 border-black">
//           <span className="w-1.5 h-1.5 rounded-full bg-current " />
//           <span className="text-black">Discover</span>
//         </span>
//       </div>

//       {/* Every entry renders full-bleed with a centered caption card,
//           stacked one after another. */}
//       <div className="space-y-12 md:space-y-16">
//         {journal.map((j) => (
//           <a
//             key={j.title}
//             href="#"
//             className="group relative block aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9] overflow-hidden"
//           >
//             <img
//               src={j.image}
//               alt={j.title}
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 flex items-center justify-center p-4 md:items-end md:justify-start md:p-8">
//               <div
//                 className="w-full max-w-lg bg-bone/95 backdrop-blur-sm rounded-sm
//                   flex flex-col items-center justify-center
//                   text-center px-8 py-10 md:px-12 md:py-12"
//               >
//                 <p className="eyebrow">{j.tag}</p>

//                 <h3 className="display text-2xl md:text-3xl leading-snug mt-3">
//                   {j.title}
//                 </h3>

//                 <span className="mt-6 inline-flex items-center  hover-split-up gap-2 border border-ink border-b-2  px-6 py-3 eyebrow">
//                   Read
//                   <Plus
//                     size={16}
//                     strokeWidth={1.5}
//                     className="transition-transform group-hover:rotate-90"
//                   />
//                 </span>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </Section>
//   );
// }

//========================================

// import Section from "@/components/ui/Section";
// import { journal } from "@/data/content";
// import { Plus } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Journal() {
//   return (
//     <Section id="journal" className="border-t hairline !px-4">
//       {/* Heading */}
//       <h2 className="display text-5xl md:text-7xl">Journal.</h2>

//       {/* Divider + filter row: tabs on the left, "Discover" pill on the right */}
//       <div className="mt-4 pt-2 border-t hairline flex items-center justify-between mb-12 md:mb-16">
//         <div className="flex gap-6 eyebrow">
//           <span className="text-clay">Project Stories</span>
//           <span className="text-clay">Design Insights</span>
//         </div>
//         <span className="inline-flex items-center gap-2 border hairline rounded-sm px-3 py-1 eyebrow shrink-0 border-black">
//           <span className="w-1.5 h-1.5 rounded-full bg-current " />
//           <span className="text-black">Discover</span>
//         </span>
//       </div>

//       {/* Every entry renders full-bleed with a centered caption card,
//           stacked one after another. */}
//       <div className="space-y-12 md:space-y-16">
//         {journal.map((j) => (
//           <Link
//             key={j.title}
//             to={j.href}
//             className="group relative block aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9] overflow-hidden"
//           >
//             <img
//               src={j.image}
//               alt={j.title}
//               loading="lazy"
//               className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
//             />

//             <div className="absolute inset-0 flex items-center justify-center p-4 md:items-end md:justify-start md:p-8">
//               <div
//                 className="w-full max-w-lg bg-bone/95 backdrop-blur-sm rounded-sm
//                   flex flex-col items-center justify-center
//                   text-center px-8 py-10 md:px-12 md:py-12"
//               >
//                 <p className="eyebrow">{j.tag}</p>

//                 <h3 className="display text-2xl md:text-3xl leading-snug mt-3">
//                   {j.title}
//                 </h3>

//                 <span className="mt-6 inline-flex items-center  hover-split-up gap-2 border border-ink border-b-2  px-6 py-3 eyebrow">
//                   Read
//                   <Plus
//                     size={16}
//                     strokeWidth={1.5}
//                     className="transition-transform group-hover:rotate-90"
//                   />
//                 </span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </Section>
//   );
// }

//=========================================

import Section from "@/components/ui/Section";
import { journal } from "@/data/content";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

export default function Journal() {
  return (
    <Section id="journal" className="border-t hairline !p-4">
      {/* Heading */}
      <h2 className="display text-5xl md:text-7xl">Journal.</h2>

      {/* Divider + filter row: tabs on the left, "Discover" pill on the right */}
      <div className="mt-8 pt-6 border-t hairline flex items-center justify-between mb-12 md:mb-16">
        <div className="flex gap-3 sm:gap-6 eyebrow whitespace-nowrap text-[10px] sm:text-xs">
          <span className="text-clay">Project Stories</span>
          <span className="text-clay">Design Insights</span>
        </div>
        <span className="inline-flex items-center gap-2 border hairline rounded-sm px-3 py-1 eyebrow text-[10px] sm:text-xs shrink-0 border-black whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-current " />
          <span className="text-black">Discover</span>
        </span>
      </div>

      {/* Every entry renders full-bleed with a centered caption card,
          stacked one after another. */}
      <div className="space-y-12 md:space-y-16">
        {journal.map((j) => (
          <Link
            key={j.title}
            to={j.href}
            className="group relative block aspect-[4/3] sm:aspect-[16/10] lg:aspect-[21/9] overflow-hidden"
          >
            <img
              src={j.image}
              alt={j.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:items-end md:justify-start md:p-8">
              <div
                className="w-[85%] max-w-xs sm:max-w-sm md:max-w-lg bg-bone/95 backdrop-blur-sm rounded-sm
                  flex flex-col items-center justify-center
                  text-center px-5 py-6 md:px-12 md:py-12"
              >
                <p className="eyebrow text-[10px] sm:text-xs">{j.tag}</p>

                <h3 className="display text-base sm:text-lg md:text-3xl leading-snug mt-3">
                  {j.title}
                </h3>

                <span className="mt-4 md:mt-6 inline-flex items-center hover-split-up gap-2 border border-ink border-b-2 px-4 py-2 md:px-6 md:py-3 eyebrow text-[10px] sm:text-xs">
                  Read
                  <Plus
                    size={14}
                    strokeWidth={1.5}
                    className="transition-transform group-hover:rotate-90"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
