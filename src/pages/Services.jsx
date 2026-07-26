import React, { useRef, useState } from "react";
import { Plus, X, ArrowRight } from "lucide-react";
import services from "../data/services";
import ContactForm from "../components/sections/ContactForm";
import AchievementsScroll from "../components/sections/Achievementsscroll";

const ServicesPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const sectionRefs = useRef([]);

  const scrollToIndex = (index) => {
    const target = sectionRefs.current[index];
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-4">
          <span className="text-[11px] uppercase tracking-widest font-mono text-[#4a3a34] opacity-60">
            Our
          </span>
        </div>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#4a3a34]">
          Services
        </h1>
      </section>

      {/* Services Slider */}
      <div className="relative">
        {services.map((service, index) => {
          const isOpen = expandedId === service.id;
          return (
            <div
              key={service.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="min-h-[90vh] flex items-center border-b border-[#4a3a34]/10 last:border-b-0"
            >
              <div className="px-4 md:px-8 max-w-7xl mx-auto w-full ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
                  {/* Image panel */}
                  <div className="relative order-1">
                    <div className="relative overflow-hidden rounded-sm aspect-[4/5]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="absolute top-5 left-5 font-mono text-xs tracking-[0.2em] bg-[#f5f0eb]/90 text-[#4a3a34] rounded-full h-9 w-9 flex items-center justify-center">
                      {service.id}
                    </span>
                  </div>

                  {/* Content panel */}
                  <div className="order-2 max-w-md">
                    <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#a5673f] mb-5">
                      Service {service.id} /{" "}
                      {String(services.length).padStart(2, "0")}
                    </p>

                    <h2 className="font-display font-semibold text-[clamp(1.9rem,3.6vw,2.8rem)] leading-[1.08] tracking-tight text-[#4a3a34] mb-6">
                      {service.title}
                    </h2>

                    <p className="text-[#4a3a34]/70 text-lg leading-relaxed mb-10">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-6 mb-10 pb-10 border-b border-[#4a3a34]/15">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-mono opacity-60">
                          Discipline
                        </span>
                        <p className="font-display text-lg mt-1 text-[#4a3a34]">
                          {service.discipline}
                        </p>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase tracking-widest font-mono opacity-60">
                          Metric
                        </span>
                        <p className="font-display text-lg mt-1 text-[#4a3a34]">
                          {service.metric}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedId(isOpen ? null : service.id)}
                      aria-expanded={isOpen}
                      className="group inline-flex items-center justify-between gap-6 w-full sm:w-auto sm:min-w-[280px] border border-[#4a3a34] px-6 py-4 font-mono text-sm uppercase tracking-widest text-[#4a3a34] transition-colors hover:bg-[#4a3a34] hover:text-[#efeae2]"
                    >
                      Service Details
                      {isOpen ? (
                        <X size={18} strokeWidth={1.5} />
                      ) : (
                        <Plus size={18} strokeWidth={1.5} />
                      )}
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-6"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <ul className="overflow-hidden space-y-2">
                        {service.scope.map((item) => (
                          <li
                            key={item}
                            className="font-mono text-xs text-[#4a3a34]/70 flex items-center gap-3 py-1"
                          >
                            <span className="h-1 w-1 rounded-full bg-[#a5673f]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Closing Statement 1 — text left, image right */}
      <section className="min-h-screen flex items-center border-b border-[#4a3a34]/10 ">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="flex items-center px-6 md:px-16 py-20 md:py-0 order-2 md:order-1">
            <div className="max-w-lg">
              <span className="block font-mono text-xs tracking-[0.2em] uppercase text-[#a5673f] mb-6">
                How We Work
              </span>
              <p className="font-display text-3xl md:text-5xl leading-[1.2] tracking-tight text-[#4a3a34]">
                Whether you are building from the ground up, reworking an
                interior, or preparing a finished home to be seen, there is a
                clear way to begin. Every engagement is led by the principal and
                shaped around your brief.
              </p>
            </div>
          </div>
          <div className="relative order-1 md:order-2 min-h-[50vh] md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&h=1500&fit=crop"
              alt="Studio desk with lamp and sketches"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Closing Statement 2 — image left, text right */}
      <section className="min-h-screen flex items-center bg-[#8F7A7B]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="relative order-1 min-h-[50vh] md:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=1500&fit=crop"
              alt="Architectural interior detail"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center px-6 md:px-16 py-20 md:py-0 order-2">
            <div className="max-w-lg">
              <span className="block font-mono text-xs tracking-[0.2em] uppercase text-gray-900 mb-6">
                What Stays Constant
              </span>
              <p className="font-display text-3xl md:text-5xl leading-[1.2] tracking-tight text-black">
                Every material, junction, and line is considered on its own
                terms. The result is architecture that feels inevitable, as
                though it could not have been drawn any other way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
              <button className="group inline-flex items-center gap-2 border border-[#4a3a34] rounded-sm px-4 py-2 font-mono text-sm uppercase tracking-widest text-[#4a3a34] transition-colors duration-300 hover:bg-[#8a6f66] hover:border-[#8a6f66] hover:text-[#f5f0eb]">
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

      <section className="w-full">
        <AchievementsScroll />
      </section>

      {/* Schedule Consultation — marquee + oversized headline */}
      <section className="relative overflow-hidden  border-y border-[#4a3a34]/15">
        <div className="border-b border-[#4a3a34]/15 py-3 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, group) => (
              <span key={group} className="inline-flex">
                {[...Array(6)].map((_, i) => (
                  <span
                    key={i}
                    className="mx-8 font-mono text-xs uppercase tracking-[0.2em] text-[#4a3a34]"
                  >
                    Get in touch with us
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-8 py-16 md:py-24 max-w-[1600px] mx-auto">
          <div className="space-y-4">
            {/* Line 1 */}
            <div className="flex justify-start">
              <h2 className="font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-[#2d2420] text-[13vw] md:text-[8vw] lg:text-8xl">
                Schedule
              </h2>
            </div>

            {/* Line 2 */}
            <div className="flex justify-end items-center gap-4 md:gap-8">
              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop"
                alt="Design studio consultation"
                className="w-24 h-16 md:w-40 md:h-28 lg:w-56 lg:h-36 object-cover rounded-sm shrink-0"
              />
              <h2 className="font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-[#4a3a34]/40 text-[13vw] md:text-[8vw] lg:text-8xl">
                An Expert
              </h2>
            </div>

            {/* Line 3 */}
            <div className="flex justify-start">
              <h2 className="font-sans font-extrabold uppercase leading-[0.92] tracking-tight text-[#2d2420] text-[13vw] md:text-[8vw] lg:text-8xl">
                Consultation
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 md:py-24">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <span className="inline-flex items-center gap-2 border border-[#4a3a34]/40 rounded px-2 py-1 font-mono text-[11px] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4a3a34]" />
            Form
          </span>

          <h2 className="font-sans text-2xl uppercase text-[#2d2420]">
            Get In Touch
          </h2>

          <div className="w-12" />
        </div>

        <div className="border-t border-[#4a3a34]/30 mb-14" />

        {/* Form Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Empty left side */}
          <div />

          {/* Right Side Form */}
          <>
            <ContactForm />
          </>
        </div>
      </section>

      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className="w-2 h-2 rounded-full bg-[#4a3a34]/30 hover:bg-[#4a3a34]/60 transition-colors duration-300"
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
