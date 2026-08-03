"use client";

import { useState } from "react";
import { Maximize2, X, ArrowUpRight } from "lucide-react";
import { thumbnails } from "@/data/about";

export default function AboutHero() {
  const [openImage, setOpenImage] = useState(null);

  return (
    <section className="relative bg-[#1a1512]">
      {/* Full-bleed photo */}
      <div className="relative h-[75vh] md:h-screen overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2000&q=80"
          alt="Architect arranging furniture in a residential interior"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Scrim so the thumbnails and statement stay legible — darker and taller */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-[#1a1512] via-[#1a1512]/70 to-transparent" />

        {/* Thumbnails (bottom-left) + statement (bottom-right) */}
        <div className="absolute inset-x-0 bottom-0 px-4 md:px-8 pb-20 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div className="flex gap-2 md:gap-3 shrink-0">
            {thumbnails.map((image, i) => (
              <button
                key={image.thumb}
                type="button"
                onClick={() => setOpenImage(image.full)}
                className="group relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 overflow-hidden border border-bone/25 rounded-sm"
              >
                <img
                  src={image.thumb}
                  alt={`Studio photo ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-2 right-2 text-bone">
                  <Maximize2 size={16} strokeWidth={1.5} />
                </span>
              </button>
            ))}
          </div>

          <p className="font-sans text-bone leading-snug text-xl sm:text-2xl md:text-3xl lg:text-4xl md:text-right max-w-md md:max-w-xl">
            Exploring refined residential environments through timeless
            materials, natural light, and thoughtful composition.
          </p>
        </div>
      </div>

      {/* Lightbox — click a thumbnail to view its HD version, click anywhere to close */}
      {openImage && (
        <div
          className="fixed inset-0 z-50 bg-[#1a1512]/95 flex items-center justify-center p-3 sm:p-6 md:p-10 cursor-zoom-out"
          onClick={() => setOpenImage(null)}
        >
          <button
            type="button"
            onClick={() => setOpenImage(null)}
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 text-bone hover:opacity-70 transition-opacity"
            aria-label="Close image"
          >
            <X size={28} strokeWidth={1.5} />
          </button>
          <img
            src={openImage}
            alt="Expanded studio photo"
            className="w-full h-full max-w-[95vw] max-h-[92vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
