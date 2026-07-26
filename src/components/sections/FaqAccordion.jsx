import { useState } from "react";

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q} className="rule first:border-t-0">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="w-full flex items-start sm:items-center justify-between gap-4 py-6 sm:py-7 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-baseline gap-3 sm:gap-6 min-w-0">
                <span className="stat-label !text-stone/60 w-6 sm:w-8 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-lg sm:text-xl md:text-2xl text-ink">
                  {item.q}
                </span>
              </span>
              <span
                className={`shrink-0 text-2xl text-ink/50 transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-studio ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-6 sm:pb-7 max-w-2xl pl-9 sm:pl-14">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
