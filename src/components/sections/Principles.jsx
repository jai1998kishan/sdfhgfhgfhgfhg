// import Section from "@/components/ui/Section";
// import Eyebrow from "@/components/ui/Eyebrow";
// import { Plus } from "lucide-react";
// import { principles } from "@/data/content";

// export default function Principles() {
//   return (
//     <Section id="principles" className="border-t hairline">
//       <div className="grid gap-16 md:grid-cols-12 items-start">
//         <div className="md:col-span-5">
//           <Eyebrow>Principles</Eyebrow>
//           <div className="mt-8 display text-5xl md:text-7xl leading-[0.95]">
//             <div>Considered</div>
//             <div className="italic text-clay">Crafted</div>
//             <div>Lasting</div>
//             <div>solutions.</div>
//           </div>
//           <p className="mt-10 text-muted max-w-sm">
//             What the work is built on. Three principles that run through every
//             project we take on.
//           </p>
//         </div>

//         <div className="md:col-span-7 space-y-6">
//           {principles.map((p, i) => (
//             <a
//               key={p.title}
//               href="#"
//               className="group grid grid-cols-12 gap-6 items-center border-t hairline py-6"
//             >
//               <div className="col-span-4 overflow-hidden aspect-[4/3]">
//                 <img
//                   src={p.image}
//                   alt={p.title}
//                   loading="lazy"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//               </div>
//               <div className="col-span-7">
//                 <p className="eyebrow">{p.tag}</p>
//                 <h4 className="display text-3xl mt-2">{p.title}</h4>
//                 <p className="mt-2 text-sm text-muted max-w-md">{p.copy}</p>
//               </div>
//               <div className="col-span-1 flex justify-end">
//                 <Plus
//                   className="transition-transform group-hover:rotate-90"
//                   size={22}
//                   strokeWidth={1.2}
//                 />
//               </div>
//             </a>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

//===========================================

// import Section from "@/components/ui/Section";
// import Eyebrow from "@/components/ui/Eyebrow";

// const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

// export default function Principles() {
//   return (
//     <Section
//       id="principles"
//       className="relative overflow-hidden border-t border-neutral-200 bg-[#f4f3ef] py-28"
//     >
//       <Eyebrow>Principles</Eyebrow>

//       <div className="relative mt-12 min-h-[600px]">
//         {/* Floating Image */}
//         <div className="absolute left-0 top-0 z-20">
//           <img
//             src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
//             alt="Portrait"
//             className="w-44 md:w-56 lg:w-64 h-20 object-cover"
//           />
//         </div>

//         {/* Heading */}
//         <div className="relative pl-0 md:pl-72">
//           <h2
//             className="
//               font-sans
//               font-black
//               uppercase
//               leading-[0.82]
//               tracking-[-0.06em]
//               text-[70px]
//               sm:text-[88px]
//               md:text-[105px]
//               lg:text-[125px]
//               xl:text-[145px]
//             "
//           >
//             <div>CONSIDERED</div>

//             <div className="text-right">CRAFTED</div>

//             <div>LASTING SOLUTIONS</div>
//           </h2>
//         </div>

//         {/* Description */}
//         <div className="absolute left-0 bottom-0 max-w-[260px]">
//           <p className="text-sm uppercase leading-relaxed tracking-tight">
//             WHAT THE WORK IS BUILT ON. THREE PRINCIPLES THAT RUN THROUGH EVERY
//             PROJECT WE TAKE ON.
//           </p>
//         </div>
//       </div>
//     </Section>
//   );
// }

//===========================================

// import Section from "@/components/ui/Section";
// import Eyebrow from "@/components/ui/Eyebrow";
// import { ArrowUpRight, ShoppingBag } from "lucide-react";

// // Swap these for your real assets.
// const HERO_IMAGE = "/images/principles-portrait.jpg";
// const SECONDARY_IMAGE = "/images/principles-interior.jpg";

// const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

// export default function Principles() {
//   return (
//     <Section id="principles" className="border-t hairline">
//       {/* ---------- Image + headline block ---------- */}
//       <div className="grid md:grid-cols-12 md:gap-x-8">
//         {/* Portrait image: top-left on desktop, small overlapping frame on mobile */}
//         <div className="relative z-10 md:col-span-3 w-32 md:w-auto">
//           <img
//             src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
//             alt="Portrait"
//             className="w-full aspect-[4/5] object-cover"
//           />
//         </div>

//         {/* Lines 1 & 2 sit in the column to the right of the image on desktop;
//             on mobile they simply follow the image, "Crafted" indented in from the left. */}
//         <div className="md:col-span-9 md:col-start-4 mt-6 md:mt-0 flex flex-col md:justify-start">
//           <Eyebrow className="hidden md:block mb-6">Principles</Eyebrow>
//           <div className="font-sans uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
//             <div>Considered</div>
//             <div className="pl-10 sm:pl-16 md:pl-24 lg:pl-32">Crafted</div>
//           </div>
//         </div>

//         {/* Line 3 breaks out to the full container width, dropping below the image */}
//         <div className="md:col-span-12 mt-2 md:mt-4">
//           <div className="font-sans uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
//             Lasting Solutions
//           </div>
//         </div>

//         {/* Supporting copy, aligned with the "Lasting Solutions" line */}
//         <div className="md:col-span-12 mt-8">
//           <p className="uppercase text-sm md:text-base tracking-wide text-muted max-w-md">
//             What the work is built on. Three principles that run through every
//             project we take on.
//           </p>
//         </div>
//       </div>
//     </Section>
//   );
// }

//=================================================

// import Section from "@/components/ui/Section";
// import Eyebrow from "@/components/ui/Eyebrow";
// import { ArrowUpRight, ShoppingBag } from "lucide-react";

// // Swap these for your real assets.
// const HERO_IMAGE = "/images/principles-portrait.jpg";
// const SECONDARY_IMAGE = "/images/principles-interior.jpg";

// const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

// export default function Principles() {
//   return (
//     <Section id="principles" className="border-t hairline">
//       {/* ---------- Image + headline block ---------- */}
//       <div className="grid md:grid-cols-12 md:gap-x-8">
//         {/* Portrait image: top-left on desktop, small overlapping frame on mobile */}
//         <div className="relative z-10 md:col-span-3 w-32 md:w-auto">
//           <img
//             src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
//             alt="Portrait"
//             className="w-full aspect-[4/5] object-cover"
//           />
//         </div>

//         {/* Lines 1 & 2 sit in the column to the right of the image on desktop;
//             "Crafted" is right-aligned to the column edge so it lines up with
//             the right edge of "Lasting Solutions" below, matching the reference. */}
//         <div className="md:col-span-9 md:col-start-4 mt-6 md:mt-0 flex flex-col md:justify-start">
//           <Eyebrow className="hidden md:block mb-6">Principles</Eyebrow>
//           <div className="font-sans uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
//             <div className="text-left">Considered</div>
//             <div className="text-right">Crafted</div>
//           </div>
//         </div>

//         {/* Line 3 breaks out to the full container width, dropping below the image */}
//         <div className="md:col-span-12 mt-2 md:mt-4">
//           <div className="font-sans uppercase leading-[0.95] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
//             Lasting Solutions
//           </div>
//         </div>

//         {/* Supporting copy, aligned with the "Lasting Solutions" line */}
//         <div className="md:col-span-12 mt-8">
//           <p className="uppercase text-sm md:text-base tracking-wide text-muted max-w-md">
//             What the work is built on. Three principles that run through every
//             project we take on.
//           </p>
//         </div>
//       </div>
//     </Section>
//   );
// }

//===============================

import Section from "@/components/ui/Section";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function Principles() {
  return (
    <Section
      id="principles"
      className="py-20 lg:py-32 border-t border-black/10"
    >
      <div className="max-w-[1600px] ">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-x-10 relative">
          {/* Image */}
          <div className="col-span-3">
            <img
              src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
              alt=""
              className="w-[320px] h-[250px] object-cover"
            />
          </div>

          {/* Headline */}
          <div className="col-span-9 self-end -ml-10">
            <h2 className="uppercase font-sans font-black leading-[0.83] tracking-tight">
              <div className="text-[8vw] [-webkit-text-stroke:1px_currentColor]">
                Considered
              </div>

              <div className="text-[8vw] [-webkit-text-stroke:1px_currentColor] pl-[32%] text-right">
                Crafted
              </div>
            </h2>
          </div>

          {/* Third Line */}
          <div className="col-span-12 mt-2">
            <h2 className="uppercase font-sans font-black [-webkit-text-stroke:1px_currentColor] leading-[0.83] tracking-tight text-[9vw]">
              Lasting Solutions
            </h2>
          </div>

          {/* Copy */}
          <div className="col-span-4 mt-8">
            <p className="uppercase text-lg leading-snug max-w-sm">
              What the work is built on. Three principles that run through every
              project we take on.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <img
            src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
            alt=""
            className="w-28 mb-5"
          />

          <h2 className="uppercase font-sans font-black [-webkit-text-stroke:1px_currentColor]  leading-[0.85] tracking-tight">
            <div className="text-4xl ">Considered</div>

            <div className="text-4xl text-right">Crafted</div>

            <div className="text-4xl mt-1 ">Lasting Solutions</div>

            {/* <div className="text-4xl">Solutions</div> */}
          </h2>

          <p className="uppercase text-sm mt-6 max-w-xs leading-relaxed">
            What the work is built on. Three principles that run through every
            project we take on.
          </p>
        </div>
      </div>
    </Section>
  );
}
