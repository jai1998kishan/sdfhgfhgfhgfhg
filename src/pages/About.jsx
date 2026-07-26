// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const principles = [
//   {
//     title: "Context",
//     text: "Every project begins with understanding its surroundings, history, and relationship with people.",
//   },
//   {
//     title: "Material",
//     text: "We believe materials create atmosphere. Every texture, surface, and detail has purpose.",
//   },
//   {
//     title: "Longevity",
//     text: "Our architecture is designed beyond trends, creating spaces that age with elegance.",
//   },
// ];

// const timeline = [
//   {
//     year: "2003",
//     title: "Studio Founded",
//     text: "Halston began as a small architecture practice focused on residential design.",
//   },
//   {
//     year: "2010",
//     title: "International Work",
//     text: "The studio expanded into hospitality and commercial architecture.",
//   },
//   {
//     year: "2018",
//     title: "Global Recognition",
//     text: "Projects received recognition across international architecture platforms.",
//   },
//   {
//     year: "2026",
//     title: "Future Vision",
//     text: "Continuing to design thoughtful spaces for generations ahead.",
//   },
// ];

// const About = () => {
//   return (
//     <main className="bg-[#f5f0eb] text-[#2d2420]">
//       {/* Hero */}
//       <section className="px-4 md:px-8 pt-32 pb-20 max-w-7xl mx-auto">
//         <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#a5673f] mb-6">
//           About Studio
//         </p>

//         <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.9] tracking-tight">
//           Designing
//           <br />
//           Spaces
//           <br />
//           With Meaning
//         </h1>
//       </section>

//       {/* Hero Image */}
//       <section className="px-4 md:px-8">
//         <div className="max-w-[1600px] mx-auto aspect-[16/8] overflow-hidden">
//           <img
//             src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop"
//             alt="Architecture interior"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16">
//           <h2 className="font-display text-4xl md:text-6xl leading-tight">
//             Architecture that connects people, place, and purpose.
//           </h2>

//           <div className="space-y-6 text-lg text-[#4a3a34]/75 leading-relaxed">
//             <p>
//               Halston is an architecture studio creating refined residential,
//               commercial, and cultural environments.
//             </p>

//             <p>
//               Our approach combines timeless design principles with modern
//               technology, creating spaces that feel natural, balanced, and
//               enduring.
//             </p>

//             <p>
//               From the first sketch to the final detail, we collaborate closely
//               with clients to transform ideas into meaningful architecture.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Principles */}

//       <section className="px-4 md:px-8 py-20 bg-[#ebe5dd]">
//         <div className="max-w-7xl mx-auto">
//           <p className="font-mono text-xs uppercase tracking-widest mb-12">
//             Our Philosophy
//           </p>

//           <div className="grid md:grid-cols-3 gap-10">
//             {principles.map((item) => (
//               <div
//                 key={item.title}
//                 className="border-t border-[#4a3a34]/30 pt-8"
//               >
//                 <h3 className="font-display text-3xl mb-5">{item.title}</h3>

//                 <p className="text-[#4a3a34]/70 leading-relaxed">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Founder */}

//       <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="aspect-[4/5] overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&h=1100&fit=crop"
//               alt="Studio founder"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div>
//             <p className="font-mono text-xs uppercase tracking-widest text-[#a5673f] mb-8">
//               Studio Director
//             </p>

//             <blockquote className="font-display text-4xl md:text-5xl leading-tight">
//               "Great architecture is not about creating objects. It is about
//               creating experiences."
//             </blockquote>

//             <p className="mt-8 font-mono text-sm uppercase tracking-widest">
//               Alexander Halston
//               <br />
//               Founder & Principal Architect
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}

//       <section className="px-4 md:px-8 py-24 bg-[#2d2420] text-[#f5f0eb]">
//         <div className="max-w-7xl mx-auto">
//           <p className="font-mono text-xs uppercase tracking-widest mb-12 opacity-60">
//             Our Journey
//           </p>

//           <div className="space-y-10">
//             {timeline.map((item) => (
//               <div
//                 key={item.year}
//                 className="grid md:grid-cols-3 border-t border-white/20 pt-8"
//               >
//                 <span className="font-mono">{item.year}</span>

//                 <h3 className="font-display text-3xl">{item.title}</h3>

//                 <p className="text-white/60">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}

//       <section className="px-4 md:px-8 py-32 max-w-7xl mx-auto text-center">
//         <h2 className="font-display text-5xl md:text-7xl leading-tight">
//           Let's create something
//           <br />
//           meaningful together.
//         </h2>

//         <Link
//           to="/contact"
//           className="inline-flex items-center gap-4 mt-10 border border-[#4a3a34] px-8 py-4 font-mono uppercase tracking-widest text-sm hover:bg-[#4a3a34] hover:text-[#f5f0eb] transition"
//         >
//           Start A Project
//           <ArrowRight size={18} />
//         </Link>
//       </section>
//     </main>
//   );
// };

// export default About;

//========================================

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    text: "Halston began as an architecture studio focused on residential spaces.",
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
    <main className="bg-[#f5f0eb] text-[#2d2420]">
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={slide.image}
            alt="Architecture"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${activeSlide === index ? "opacity-100" : "opacity-0"}`}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

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

      <section className="px-4 md:px-8 py-24 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <h2 className="font-display text-4xl md:text-6xl">
            Architecture that connects people, place and purpose.
          </h2>

          <div className="space-y-6 text-lg text-[#4a3a34]/70">
            <p>
              Halston is an architecture and interior design studio creating
              refined residential, commercial and cultural spaces.
            </p>
            <p>
              Our approach combines timeless principles with contemporary
              solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#ebe5dd] px-4 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-xs uppercase tracking-widest mb-12">
            Our Philosophy
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {principles.map((item) => (
              <div
                key={item.title}
                className="border-t border-[#4a3a34]/30 pt-8"
              >
                <h3 className="font-display text-3xl mb-5">{item.title}</h3>
                <p className="text-[#4a3a34]/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              Alexander Halston
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
