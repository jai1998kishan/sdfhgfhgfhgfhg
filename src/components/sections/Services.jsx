// "use client";

// import { useRef, useState } from "react";
// import Section from "@/components/ui/Section";
// import Eyebrow from "@/components/ui/Eyebrow";
// import services from "@/data/services";
// import { ArrowUpRight } from "lucide-react";

// export default function Services() {
//   const listRef = useRef(null);
//   const [active, setActive] = useState(null); // { index, y }

//   function handleMouseMove(e, index) {
//     const bounds = listRef.current.getBoundingClientRect();
//     setActive({
//       index,
//       y: e.clientY - bounds.top,
//     });
//   }

//   const activeService = active ? services[active.index] : null;

//   return (
//     <Section id="services" className="border-t hairline ">
//       <div className="mb-16">
//         <Eyebrow>Services</Eyebrow>
//         <h2 className="display text-5xl md:text-7xl mt-4">
//           Architecture <span className="italic text-clay">interior</span>
//           <br />
//           design <span className="italic text-clay">solutions</span>.
//         </h2>
//       </div>

//       <div
//         ref={listRef}
//         className="relative border-t hairline"
//         onMouseLeave={() => setActive(null)}
//       >
//         {services.map((s, i) => {
//           const Icon = s.icon;
//           return (
//             <a
//               key={s.title}
//               href="#"
//               onMouseMove={(e) => handleMouseMove(e, i)}
//               onMouseEnter={(e) => handleMouseMove(e, i)}
//               className="group relative z-10 flex items-center gap-4 sm:gap-5 px-2 md:px-6 py-6 sm:py-8 border-b hairline transition-colors hover:bg-[#5E3E3E] hover:text-bone"
//             >
//               <span className="hidden sm:inline eyebrow shrink-0 w-6 text-current/50 group-hover:text-bone/50">
//                 {s.id}
//               </span>

//               {/* Thumbnail — mobile only, stands in for the hover preview */}
//               <span className="sm:hidden relative shrink-0 w-16 h-16 overflow-hidden border hairline">
//                 <img
//                   src={s.image}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//                 <span className="absolute top-0 left-0 bg-ink/70 text-bone text-[10px] tracking-wide px-1 py-0.5">
//                   {s.id}
//                 </span>
//               </span>

//               {/* Icon — sm and up */}
//               <span className="hidden sm:flex shrink-0 w-8 items-center justify-center">
//                 <Icon
//                   size={20}
//                   strokeWidth={1.2}
//                   className="opacity-60 group-hover:opacity-100"
//                 />
//               </span>

//               <div className="flex-1 min-w-0">
//                 <div className="flex items-center gap-2">
//                   <p className="eyebrow text-current/50 group-hover:text-bone/50">
//                     {s.discipline}
//                   </p>
//                   <span className="sm:hidden eyebrow text-current/30 group-hover:text-bone/40">
//                     ·
//                   </span>
//                   <p className="sm:hidden eyebrow text-current/50 group-hover:text-bone/50">
//                     {s.metric}
//                   </p>
//                 </div>
//                 <h4 className="display text-2xl md:text-3xl mt-1.5 sm:mt-2">
//                   {s.title}
//                 </h4>
//                 <p className="mt-1.5 sm:mt-2 text-sm max-w-sm text-current/70 group-hover:text-bone/70 line-clamp-2 md:line-clamp-none">
//                   {s.description}
//                 </p>
//               </div>

//               <span className="hidden sm:block shrink-0 w-24 text-right eyebrow text-current/50 group-hover:text-bone/50">
//                 {s.metric}
//               </span>

//               <span className="shrink-0 flex justify-end">
//                 <ArrowUpRight
//                   size={22}
//                   strokeWidth={1.2}
//                   className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
//                 />
//               </span>
//             </a>
//           );
//         })}

//         {/* Preview — desktop only. Anchored to the right edge and only
//             follows the cursor vertically, so it never sits over the
//             title or description text. */}
//         <div
//           aria-hidden
//           className="hidden lg:block pointer-events-none absolute z-20 right-0 w-40 h-52 overflow-hidden border hairline bg-bone shadow-sm transition-[opacity,transform] duration-300 ease-out"
//           style={{
//             top: active ? active.y : 0,
//             opacity: active ? 1 : 0,
//             transform: `translateY(-50%) translateX(${active ? "1.5rem" : "0.5rem"})`,
//           }}
//         >
//           {activeService && (
//             <>
//               <img
//                 src={activeService.image}
//                 alt=""
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-ink/80 text-bone px-3 py-2">
//                 <p className="eyebrow text-bone/60">
//                   {activeService.discipline}
//                 </p>
//                 <p className="text-xs mt-0.5">{activeService.metric}</p>
//               </div>
//             </>
//           )}
//         </div>
//       </div>
//     </Section>
//   );
// }

//=========================================

"use client";

import { useRef, useState } from "react";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import services from "@/data/services";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const listRef = useRef(null);
  const [active, setActive] = useState(null); // { index, y }

  function handleMouseMove(e, index) {
    const bounds = listRef.current.getBoundingClientRect();
    setActive({
      index,
      y: e.clientY - bounds.top,
    });
  }

  const activeService = active ? services[active.index] : null;

  return (
    <Section id="services" className="border-t hairline bg-[#2F2E2C]">
      <div className="mb-16">
        <Eyebrow className="text-bone/60">Services</Eyebrow>
        <h2 className="display text-5xl md:text-7xl mt-4 text-bone">
          Architecture <span className="italic text-clay">interior</span>
          <br />
          design <span className="italic text-clay">solutions</span>.
        </h2>
      </div>

      <div
        ref={listRef}
        className="relative border-t hairline broder-t border-clay"
        onMouseLeave={() => setActive(null)}
      >
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <a
              key={s.title}
              href="#"
              onMouseMove={(e) => handleMouseMove(e, i)}
              onMouseEnter={(e) => handleMouseMove(e, i)}
              className="group relative z-10 flex items-center gap-4 sm:gap-5 px-2 md:px-6 py-6 sm:py-8 border-b  border-clay hairline transition-colors hover-split-up"
            >
              <span className="hidden sm:inline eyebrow shrink-0 w-6 text-bone/40 group-hover:text-bone/70">
                {s.id}
              </span>

              {/* Thumbnail — mobile only, stands in for the hover preview */}
              <span className="sm:hidden relative shrink-0 w-16 h-16 overflow-hidden border hairline">
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-0 left-0 bg-ink/70 text-bone text-[10px] tracking-wide px-1 py-0.5">
                  {s.id}
                </span>
              </span>

              {/* Icon — sm and up */}
              <span className="hidden sm:flex shrink-0 w-8 items-center justify-center text-bone/60 group-hover:text-bone">
                <Icon size={20} strokeWidth={1.2} />
              </span>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="eyebrow text-bone/50 group-hover:text-bone/80">
                    {s.discipline}
                  </p>
                  <span className="sm:hidden eyebrow text-bone/30 group-hover:text-bone/50">
                    ·
                  </span>
                  <p className="sm:hidden eyebrow text-bone/50 group-hover:text-bone/80">
                    {s.metric}
                  </p>
                </div>
                <h4 className="display text-2xl md:text-3xl mt-1.5 sm:mt-2 text-bone group-hover:text-clay transition-colors">
                  {s.title}
                </h4>
                <p className="mt-1.5 sm:mt-2 text-sm max-w-sm text-bone/60 group-hover:text-bone/85 line-clamp-2 md:line-clamp-none">
                  {s.description}
                </p>
              </div>

              <span className="hidden sm:block shrink-0 w-24 text-right eyebrow text-bone/50 group-hover:text-bone/80">
                {s.metric}
              </span>

              <span className="shrink-0 flex justify-end text-bone/70 group-hover:text-bone">
                <ArrowUpRight
                  size={22}
                  strokeWidth={1.2}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </span>
            </a>
          );
        })}

        {/* Preview — desktop only. Anchored to the right edge and only
            follows the cursor vertically, so it never sits over the
            title or description text. */}
        <div
          aria-hidden
          className="hidden lg:block pointer-events-none absolute z-20 right-0 w-40 h-52 overflow-hidden border hairline bg-bone shadow-sm transition-[opacity,transform] duration-300 ease-out"
          style={{
            top: active ? active.y : 0,
            opacity: active ? 1 : 0,
            transform: `translateY(-50%) translateX(${active ? "1.5rem" : "0.5rem"})`,
          }}
        >
          {activeService && (
            <>
              <img
                src={activeService.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-ink/80 text-bone px-3 py-2">
                <p className="eyebrow text-bone/60">
                  {activeService.discipline}
                </p>
                <p className="text-xs mt-0.5">{activeService.metric}</p>
              </div>
            </>
          )}
        </div>
      </div>
    </Section>
  );
}
