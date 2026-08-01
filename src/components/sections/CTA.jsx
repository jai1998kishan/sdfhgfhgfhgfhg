import { ArrowRight, Plus } from "lucide-react";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function CTA() {
  return (
    <section className="px-2 md:px-4 pt-6 pb-10">
      <div className="max-w-7xl mx-auto bg-[#daddd6] rounded-sm px-8 md:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-16 items-center">
          {/* Left: badge + heading */}
          <div className="text-center lg:text-center">
            <span className="inline-flex items-center gap-2 border border-black rounded-sm px-2 py-1 font-mono text-[11px] tracking-widest uppercase text-[#4a3a34] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a3a34]" />
              Action
            </span>
            <h2 className="font-sans text-xl md:text-2xl leading-[1.15] tracking-tight text-[#2d2420]">
              Thoughtful residential architecture and design begins here
            </h2>
          </div>

          {/* Center: image */}
          <div className="flex justify-center">
            <div className="w-full max-w-[420px] lg:w-[420px] aspect-[16/11] overflow-hidden rounded-sm shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&h=700&fit=crop"
                alt="Modern residential architecture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: tagline + CTA */}
          <div className="text-center flex flex-col items-center gap-8">
            <p className="font-mono text-sm md:text-base tracking-wide uppercase text-black leading-relaxed">
              Spaces crafted through warmth,
              {/* <br /> */}
              materiality, and clarity.
            </p>
            <button className="group inline-flex items-center gap-2 border border-[#4a3a34] rounded-sm px-4 py-2 font-mono text-sm uppercase tracking-widest text-[#4a3a34] transition-colors duration-300 hover:bg-[#8a6f66] hover:border-[#8a6f66] hover:text-[#f5f0eb] font-medium border-b-4">
              Start Your Project
              <span className="relative h-[18px] w-[18px] shrink-0">
                <Plus
                  size={18}
                  strokeWidth={1.5}
                  className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
                />
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
