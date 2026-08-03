import { useState } from "react";
import { Plus, X } from "lucide-react";
import { principles } from "@/data/principles.js";

export default function Principles() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section className="relative overflow-hidden">
      {/* Background photo + dark overlay.. */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
        alt="Contemporary living room interior"
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 text-bone">
        {/* Top bar: flanking labels */}
        <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.3em] text-bone/80 pb-6 md:pb-8">
          <span>Modern</span>
          <span>Living</span>
        </div>

        {/* Divider with a centered "Principles" pill, and the statement below it */}
        <div className="relative border-t border-bone/25 pt-8 md:pt-10 pb-10 md:pb-14 text-center">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 bg-[#26221d] px-3 py-1 border border-bone/30 text-[10px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-bone/70" />
            Principles
          </span>

          <p className="font-sans font-semibold leading-snug max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl">
            A contemporary residential design studio focused on timeless
            architecture, refined interiors, and thoughtful everyday living.
          </p>
        </div>

        {/* Numbered list — full width at desktop, gap between rows.
            Each row has its own dark number strip on the left and expands
            on click to reveal the detail text, swapping + for ×. */}
        <div className="w-full space-y-2 md:space-y-2.5">
          {principles.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.title}
                className="flex items-stretch bg-bone/80 backdrop-blur-md text-[#2d2420] hover:bg-bone"
              >
                {/* Dark number strip */}
                <div className="flex items-start justify-center w-10 md:w-12 shrink-0 bg-[#2d2420] text-bone/70 font-mono text-xs pt-5 md:pt-6">
                  {i + 1}
                </div>

                {/* Row content */}
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex-1 text-left"
                >
                  <div className="flex items-center gap-3 md:gap-6 px-5 md:px-7 py-5 md:py-6">
                    <span className="hidden md:block font-mono text-[10px] uppercase tracking-widest text-[#2d2420]/50 w-52 shrink-0">
                      {item.title}
                    </span>
                    <span className="flex-1 text-sm md:text-base">
                      {item.text}
                    </span>
                    {isOpen ? (
                      <X
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#2d2420]/60 transition-transform"
                      />
                    ) : (
                      <Plus
                        size={16}
                        strokeWidth={1.5}
                        className="shrink-0 text-[#2d2420]/60 transition-transform"
                      />
                    )}
                  </div>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {item.detail && (
                        <div className="px-5 md:px-7 md:pl-[16.5rem] pb-5 md:pb-6">
                          <p className="text-sm md:text-base text-[#2d2420]/70 max-w-2xl">
                            {item.detail}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
