import React, { useEffect, useState } from "react";
import Section from "@/components/ui/Section";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Plus } from "lucide-react";
import Principles from "../components/sections/Principles";

import { Maximize2, ArrowUpRight } from "lucide-react";
import AboutHero from "../components/sections/Abouthero";

const marqueeItems = Array(8).fill("Studio Achievements");

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2000&h=1200&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2000&h=1200&fit=crop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&h=1200&fit=crop",
  },
];

const principles = [
  {
    title: "Context",
    text: "Every project begins with understanding its environment, history, and relationship with people.",
  },
  {
    title: "Material",
    text: "We combine natural materials, craftsmanship, and technology to create lasting spaces.",
  },
  {
    title: "Longevity",
    text: "Our architecture is designed beyond trends, creating places that endure.",
  },
];

const timeline = [
  {
    year: "2003",
    title: "Studio Founded",
    text: "ApnaGhars began as an architecture studio focused on residential spaces.",
  },
  {
    year: "2010",
    title: "International Growth",
    text: "The studio expanded into hospitality and commercial projects.",
  },
  {
    year: "2018",
    title: "Global Recognition",
    text: "Projects received international design recognition.",
  },
  {
    year: "2026",
    title: "Future Vision",
    text: "Continuing to create meaningful architecture worldwide.",
  },
];

const About = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className=" text-[#2d2420]">
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Architecture"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        {/* Top gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-transparent" />

        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 w-full text-white">
          <div className="px-5 md:px-8 pb-10">
            <h1 className="font-sans font-bold uppercase text-xl md:text-2xl leading-[0.9]">
              Architecture And
              <br />
              Interior Design Studio
            </h1>
          </div>

          <div className="border-t border-white/30 grid md:grid-cols-2">
            <div className="px-5 md:px-8 py-8 border-r border-white/20">
              <h2 className="uppercase font-sans font-bold text-l md:text-xl leading-tight">
                Residential Design Shaped Through
                <br />
                Clarity, Warmth, And Timeless
                <br />
                Architecture
              </h2>
            </div>

            <div className="grid grid-cols-3">
              <div className="px-6 py-8 border-r border-white/20">
                <p className="font-display text-5xl md:text-6xl">96%</p>
                <span className="font-mono text-xs uppercase opacity-70">
                  Satisfaction
                </span>
              </div>

              <div className="px-6 py-8 border-r border-white/20">
                <p className="font-display text-5xl md:text-6xl">48+</p>
                <span className="font-mono text-xs uppercase opacity-70">
                  Awards
                </span>
              </div>

              <div className="px-6 py-8">
                <p className="font-display text-5xl md:text-6xl">2012</p>
                <span className="font-mono text-xs uppercase opacity-70">
                  Since
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section id="about" className="border-t hairline p-0">
        {/* =========================
          FIRST SPLIT SECTION
      ========================== */}
        <div className="grid md:min-h-[90vh] md:grid-cols-5 ">
          {/* Text — sits at the top on mobile, bottom-aligned at md+ */}
          <div className="md:col-span-2 text-black flex items-start md:items-end">
            <div className="p-6 md:p-10 lg:p-12">
              <h2 className="font-sans text-xl md:text-2xl lg:text-2xl font-medium leading-[1.15] max-w-xl">
                ApnaGhars is an architecture and interior design studio working
                on private houses, considered interiors, and heritage homes. We
                take the brief, the site, and the client equally seriously, from
                the first conversation to the final detail.
              </h2>
            </div>
          </div>

          {/* Image — natural height on mobile, fills the column at md+ */}
          <div className="md:col-span-3 aspect-[4/3] md:aspect-auto md:min-h-0">
            <img
              src={`${CDN}/6a060cd7503d72ff714e65ff_48c19f09c8468d5bc67a2efb745438e2_template-img-3.avif`}
              alt="Modern residential interior"
              loading="lazy"
              className="h-full w-full object-cover p-4"
            />
          </div>
        </div>

        {/* =========================
          SECOND SPLIT SECTION
      ========================== */}
        <div className="grid md:min-h-[90vh] md:grid-cols-2 bg-[#B9B7B2]">
          {/* Image — natural height on mobile, fills the column at md+ */}
          <div className="aspect-[4/3] md:aspect-auto md:min-h-0 p-4">
            <img
              src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
              alt="ApnaGhars studio"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-start">
            <div className="p-6 md:p-10 lg:p-12">
              <h2 className="font-sans text-xl md:text-xl lg:text-2xl font-medium leading-[1.15] max-w-2xl mb-5">
                Architecture and interior design studio
              </h2>
              <h5 className="font-sans text-sm md:text-base lg:text-lg font-medium leading-[1.15] max-w-2xl">
                Every project begins with reading the site and the brief
                honestly, then deciding what the new work should add, contrast,
                or preserve. Nothing is drawn before the questions have been
                asked properly.
              </h5>
            </div>
          </div>
        </div>
      </Section>

      <section className="flex flex-col items-center px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto ">
        <h2 className="font-sans font-bold leading-tight max-w-4xl text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          <span className="text-[#2d2420]">
            From architecture to interiors, we create refined residential spaces
            shaped by{" "}
          </span>
          <span className="text-[#2d2420]/50">detail and intention.</span>
        </h2>

        <Link
          to="/gallery"
          className="mt-8 md:mt-10 inline-flex items-center gap-2 border border-[#2d2420] border-b-2 border-b[#2d2420] px-5 py-2.5 font-mono text-xs uppercase tracking-widest transition-colors hover-split-up"
        >
          Gallery
          <Plus size={16} strokeWidth={1.5} />
        </Link>
      </section>

      <Principles />

      <section className="relative  text-[#1a1512] overflow-hidde">
        {/* Marquee strip */}
        <div className="border-y border-[#1a1512] py-2 overflow-hidden">
          <div className="flex w-max animate-[marquee_24s_linear_infinite]">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span
                key={i}
                className="mx-4 shrink-0 font-mono text-xs md:text-sm uppercase tracking-widest"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

        <div className="relative px-4 md:px-6 pt-8 md:pt-16 pb-16 md:pb-12 max-w-[1800px] mx-auto">
          {/* Headline — three lines, staggered spread */}
          <h1 className="font-sans font-bold uppercase leading-[0.95] tracking-tight">
            <span className="block text-[10vw] sm:text-[11vw] md:text-[8.5vw]">
              People who
            </span>
            <span className="block text-[10vw] sm:text-[11vw] md:text-[8.5vw] text-right md:text-left md:pl-[18vw]">
              Understand
            </span>
            <span className="flex items-baseline justify-between gap-4 text-[10vw] sm:text-[11vw] md:text-[8.5vw]">
              <span>Modern</span>
              <span>Living</span>
            </span>
          </h1>

          {/* Stack on mobile (description, then button, left-aligned);
              switch to a side-by-side row only at md and up. */}
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-0 mt-8 md:mt-10">
            {/* Description */}
            <p className="max-w-md uppercase text-sm md:text-base leading-relaxed">
              Meet the architects and interior designers shaping refined
              residential spaces through clarity, collaboration, and timeless
              design.
            </p>

            {/* Get in touch button */}
            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 border border-b-2 border-[#1a1512] px-5 py-3 md:px-6 md:py-3.5 font-mono text-xs md:text-sm uppercase tracking-widest hover-split-up  transition-colors"
            >
              Get in touch
              <Plus size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </section>

      <AboutHero />

      <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900"
            className="aspect-[4/5] object-cover"
            alt="Founder"
          />

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[#a5673f] mb-8">
              Studio Director
            </p>
            <h2 className="font-display text-4xl md:text-5xl">
              "Architecture is about creating experiences, not objects."
            </h2>
            <p className="mt-8 font-mono text-sm uppercase">
              Alexander ApnaGhars
              <br />
              Founder & Principal Architect
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#2d2420] text-[#f5f0eb] px-4 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-12">
            Our Journey
          </p>

          {timeline.map((item) => (
            <div
              key={item.year}
              className="grid md:grid-cols-3 gap-6 border-t border-white/20 py-8"
            >
              <span className="font-mono">{item.year}</span>
              <h3 className="font-display text-3xl">{item.title}</h3>
              <p className="text-white/60">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 md:px-8 py-32 text-center">
        <h2 className="font-display text-5xl md:text-7xl">
          Let's create something
          <br />
          meaningful together.
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center gap-4 mt-10 border border-[#4a3a34] px-8 py-4 font-mono uppercase text-sm hover:bg-[#4a3a34] hover:text-white transition"
        >
          Start A Project
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
};

export default About;
