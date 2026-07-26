// import Section from "@/components/ui/Section";
// import { achievements } from "@/data/content";

// export default function Achievements() {
//   return (
//     <Section id="achievements">
//       {/* MOBILE */}
//       <div className="md:hidden">
//         {/* Heading */}
//         <div className="border-t border-x border-border px-4 pt-4">
//           <span className="inline-flex items-center gap-2 border border-black rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[#4a3a34]">
//             <span className="h-1.5 w-1.5 rounded-full bg-[#4a3a34]" />
//             Achievements
//           </span>

//           {/* Images */}
//           <div className="grid grid-cols-5 gap-1 mt-4">
//             {achievements.map((item) => (
//               <div key={item.label} className="aspect-square overflow-hidden">
//                 <img
//                   src={item.image}
//                   alt={item.label}
//                   className="h-full w-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stats */}
//         <div className="border-x border-b border-border">
//           {achievements.map((item) => (
//             <div
//               key={item.label}
//               className="relative flex h-[90px] items-center border-t border-border"
//             >
//               <span className="absolute left-3 top-1/2 h-14 w-px -translate-y-1/2 bg-black" />

//               <div className="flex items-center gap-6 pl-6">
//                 <h2 className="display min-w-[70px] text-2xl leading-none">
//                   {item.value}
//                 </h2>

//                 <p className="display text-2xl font-light text-muted leading-none">
//                   {item.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* DESKTOP */}
//       <div className="hidden md:grid md:grid-cols-2 border-t border-border">
//         {/* LEFT */}
//         <div className="flex flex-col">
//           {/* Row 1 */}
//           <div className="border border-border h-[110px] flex items-center px-8">
//             <span className="inline-flex items-center gap-2 border border-black rounded-sm px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[#4a3a34]">
//               <span className="h-1.5 w-1.5 rounded-full bg-[#4a3a34]" />
//               Achievements
//             </span>
//           </div>

//           {/* Row 2 */}
//           <div className="h-[110px] border-b border-border" />

//           {/* Images */}
//           <div className="h-[110px] border-b border-border flex items-center pr-8">
//             <div className="grid w-full grid-cols-5 gap-4">
//               {achievements.map((item) => (
//                 <div key={item.label} className="aspect-square overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.label}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Empty Rows */}
//           <div className="h-[110px] border-b border-border" />
//           <div className="h-[110px]" />
//         </div>

//         {/* RIGHT */}
//         <div className="border-l border-border">
//           {achievements.map((item) => (
//             <div
//               key={item.label}
//               className="relative flex h-[110px] items-center border-b border-border"
//             >
//               <span className="absolute left-0 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-black" />

//               <div className="flex items-center gap-10 pl-10">
//                 <h2 className="display min-w-[140px] text-5xl lg:text-6xl leading-none">
//                   {item.value}
//                 </h2>

//                 <p className="display text-4xl lg:text-5xl font-light text-muted leading-none">
//                   {item.label}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// }

//=====================================

import Section from "@/components/ui/Section";
import { achievements } from "@/data/content";

export default function Achievements() {
  return (
    <Section id="achievements">
      {/* ================= MOBILE ================= */}
      <div className="md:hidden border-t border-border">
        {/* Heading + Images */}
        <div className="">
          <span className="inline-flex items-center gap-2 border border-black rounded-sm px-2.5 py-1.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[#4a3a34]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4a3a34]" />
            Achievements
          </span>

          <div className="mt-6 grid grid-cols-5 gap-2">
            {achievements.map((item) => (
              <div key={item.label} className="aspect-[0.8] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div>
          {achievements.map((item, index) => (
            <div
              key={item.label}
              className={`relative flex h-[108px] items-center ${
                index !== achievements.length - 1
                  ? "border-b border-border"
                  : ""
              }`}
            >
              {/* Vertical Line */}
              <span className="absolute left-4 top-1/2 h-16 w-px -translate-y-1/2 bg-black" />

              <div className="flex w-full items-center gap-10 pl-8">
                <h2 className="display min-w-[82px] text-[38px] leading-none">
                  {item.value}
                </h2>

                <p className="display text-[34px] font-light text-muted leading-none">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:grid md:grid-cols-2 border-t border-border border-gray-400">
        {/* LEFT */}
        <div className="flex flex-col">
          {/* Row 1 */}
          <div className="flex h-[115px] items-center border-b border-r border-border border-gray-400 px-8">
            <span className="inline-flex items-center gap-2 border border-black rounded-sm px-2 py-1.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[#4a3a34]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a3a34]" />
              Achievements
            </span>
          </div>

          {/* Row 2 */}
          <div className="h-[115px] border-b border-border border-gray-400" />

          {/* Images */}
          <div className="flex h-[115px] items-center border-b border-border border-gray-400 pr-8">
            <div className="grid w-full grid-cols-5 gap-4">
              {achievements.map((item) => (
                <div key={item.label} className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Empty Rows */}
          <div className="h-[115px] border-b border-border border-gray-400" />
          <div className="h-[115px] border-b border-r border-border border-gray-400" />
        </div>

        {/* RIGHT */}
        <div className="border-l border-border border-gray-400">
          {achievements.map((item) => (
            <div
              key={item.label}
              className="relative flex h-[115px] items-center border-b border-border border-gray-400"
            >
              {/* Intersection */}
              <span className="absolute left-0 top-1/2 h-20 w-px -translate-x-1/2 -translate-y-1/2 bg-black" />

              <div className="flex items-center gap-12 pl-10">
                <h2 className="display min-w-[150px] text-5xl lg:text-6xl leading-none">
                  {item.value}
                </h2>

                <p className="display text-4xl lg:text-5xl font-light text-muted leading-none">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
