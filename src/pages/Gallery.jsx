import { useMemo, useState, useEffect } from "react";
import { X, Plus, Maximize2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e629a";

const images = [
  {
    src: `${CDN}/6a0b555a9896f08c0ede8603_staircase-1.avif`,
    category: "Architecture",
    title: "Sculpted staircase",
  },
  {
    src: `${CDN}/6a0b55154e49860ec2fb8469_interior-design-10.avif`,
    category: "Living",
    title: "Quiet living room",
  },
  {
    src: `${CDN}/6a0b5508c60c76eabf4898f7_interior-service-43.avif`,
    category: "Interiors",
    title: "Panelled hallway",
  },
  {
    src: `${CDN}/6a108b2049a6a6dca89fb586_homestaging-5.avif`,
    category: "Interiors",
    title: "Home staging study",
  },
  {
    src: `${CDN}/6a0b552205dc48c16492d028_architecture-sketching-1.avif`,
    category: "Studio",
    title: "Studio sketching",
  },
  {
    src: `${CDN}/6a0b554624feaae874258e14_library-shelf-3.avif`,
    category: "Interiors",
    title: "Library shelf",
  },
  {
    src: `${CDN}/6a0b54cf47e90151576ed31f_interior-shot-6.avif`,
    category: "Living",
    title: "Wannsee interior",
  },
  {
    src: `${CDN}/6a0b54a83d63e20441d6e6cf_exterior-through-window-6.avif`,
    category: "Architecture",
    title: "Framed exterior",
  },
  {
    src: `${CDN}/6a0b53b14ed1aecc0ca4ac65_interior-design-16.avif`,
    category: "Living",
    title: "Soft daylight",
  },
  {
    src: `${CDN}/6a0b535d3d63e20441d6af93_interior-service-30.avif`,
    category: "Interiors",
    title: "Composed corner",
  },
  {
    src: `${CDN}/6a0b538d27119facd978e89e_interior-design-4.avif`,
    category: "Architecture",
    title: "Timber threshold",
  },
  {
    src: `${CDN}/6a0b55b0021b82f52db4bc6d_sunlight-interior-4.avif`,
    category: "Living",
    title: "Late afternoon",
  },
  {
    src: `${CDN}/6a0b55aa20b3033620dfb2a5_sunlight-interior-1.avif`,
    category: "Living",
    title: "Reading nook",
  },
  {
    src: `${CDN}/6a0dfda45445af0bb978392f_architecture-sketching-10.avif`,
    category: "Studio",
    title: "Working drawing",
  },
  {
    src: `${CDN}/6a0dfdcfcfdea070be608442_homestaging-6.avif`,
    category: "Interiors",
    title: "Dressed table",
  },
  {
    src: `${CDN}/6a0dfdc768178d9cd64d24b8_interior-service-2.avif`,
    category: "Living",
    title: "Sitting area",
  },
  {
    src: `${CDN}/6a0dfdbb0e5c980ea824fb3a_interior-service-37.avif`,
    category: "Interiors",
    title: "Detail vignette",
  },
];

const categories = ["All", "Architecture", "Interiors", "Living", "Studio"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All" ? images : images.filter((i) => i.category === active),
    [active],
  );

  useEffect(() => {
    document.body.style.overflow = lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setLightbox(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 border-b hairline">
        <div className="container-x">
          <div className="flex items-center gap-3 eyebrow mb-10">
            <span>ApnaGhars</span>
            <span className="opacity-40">/</span>
            <span>Gallery</span>
          </div>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <h1 className="display text-6xl md:text-8xl">
                A visual collection
                <br />
                of residences, refined
                <br />
                interiors & details.
              </h1>
            </div>
            <div className="md:col-span-4 md:pl-10">
              <p className="text-muted leading-relaxed">
                From architecture to interiors, every frame is composed with
                clarity, balance, and restraint — a considered study of light,
                material, and atmosphere.
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {[
                  "Timeless interiors",
                  "Material harmony",
                  "Residential atmosphere",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <span className="w-4 h-px bg-ink/60" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <div
        id="explore"
        className="border-b hairline sticky top-20 z-20 bg-bone/90 backdrop-blur"
      >
        <div className="container-x py-5 flex items-center gap-3 overflow-x-auto">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`shrink-0 px-4 py-2 rounded-full border hairline text-[11px] uppercase tracking-widest2 font-mono transition-colors ${
                active === c
                  ? "bg-ink text-bone border-ink"
                  : "hover:bg-ink hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto eyebrow hidden md:inline">
            {filtered.length} images
          </span>
        </div>
      </div>

      {/* Grid */}
      <Section className="pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(img)}
              className={`group relative overflow-hidden bg-clay/20 text-left ${
                i % 7 === 0 ? "sm:col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute left-5 bottom-5 right-5 flex items-end justify-between text-bone opacity-0 group-hover:opacity-100 transition-opacity">
                <div>
                  <div className="eyebrow text-bone/70">{img.category}</div>
                  <div className="font-display text-2xl mt-1">{img.title}</div>
                </div>
                <Maximize2 size={18} strokeWidth={1.5} />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#contact" className="btn-pill">
            Start a project <Plus size={14} strokeWidth={1.5} />
          </a>
        </div>
      </Section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-ink/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-bone p-2 rounded-full border border-bone/40 hover:bg-bone hover:text-ink transition-colors"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <figure
            className="max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="w-full max-h-[80vh] object-contain"
            />
            <figcaption className="mt-4 flex items-center justify-between text-bone">
              <span className="font-display text-2xl">{lightbox.title}</span>
              <span className="eyebrow text-bone/70">{lightbox.category}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
