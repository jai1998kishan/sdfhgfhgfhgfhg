import React, { useState } from "react";
import { Plus, X, ArrowRight, Linkedin } from "lucide-react";
import ContactForm from "../components/sections/ContactForm";

const team = [
  {
    name: "Jonas Hartmann",
    role: "Senior Architect",
    email: "jonas@yourstudio.com",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lena Brandt",
    role: "Design Director",
    email: "lena@yourstudio.com",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
  },
];

const offices = [
  {
    city: "Berlin",
    address: "Linienstraße 156",
    area: "Mitte, 10115 Berlin",
    hours: "Mon to Fri: 9:00 to 18:00",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    city: "Hamburg",
    address: "Hopfensack 19",
    area: "Altstadt, 20457 Hamburg",
    hours: "Mon to Fri: 9:30 to 18:30",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
  },
];

const faqs = [
  {
    q: "What services do you provide?",
    a: "We offer architectural and interior architecture services across residential, hospitality, and heritage renovation projects, alongside home staging and material consultation.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary by scope. A private residence typically runs 24 to 36 months from initial brief to handover. Interior architecture projects run 6 to 18 months. We provide a detailed programme estimate after the initial consultation.",
  },
  {
    q: "How does the onboarding process work?",
    a: "Every engagement begins with an initial consultation to understand the brief, the site, and your ambitions. From there we prepare a tailored proposal covering scope, fees, and programme for approval before work begins.",
  },
  {
    q: "Do you work on international projects?",
    a: "Yes. We work with private and institutional clients on projects across diverse international markets, coordinating with consultant partners on site as required.",
  },
  {
    q: "What size of projects do you take on?",
    a: "We work on projects from roughly 80 m² through to 1,500 m². Our typical residential project falls between 200 and 600 m², and we're selective about smaller briefs.",
  },
];

function FaqItem({ index, q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-[#4a3a34]/15 py-6">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-[#a5673f]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg md:text-xl text-[#2d2420]">
            {q}
          </span>
        </span>
        {isOpen ? (
          <X size={18} strokeWidth={1.5} className="shrink-0 text-[#4a3a34]" />
        ) : (
          <Plus
            size={18}
            strokeWidth={1.5}
            className="shrink-0 text-[#4a3a34]"
          />
        )}
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-4"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-[#4a3a34]/70 leading-relaxed max-w-2xl">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-[11px] uppercase tracking-widest font-mono text-[#4a3a34] opacity-60 block mb-4">
              Get in touch
            </span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#4a3a34]">
              Contact
            </h1>
          </div>
          <div className="flex flex-col gap-3 lg:items-end text-[#4a3a34]">
            <a
              href="mailto:company@example.com"
              className="font-mono text-sm uppercase tracking-widest hover:text-[#a5673f] transition-colors"
            >
              company@example.com
            </a>
            <a
              href="tel:+493028048000"
              className="font-mono text-sm uppercase tracking-widest hover:text-[#a5673f] transition-colors"
            >
              +49 30 28 04 8000
            </a>
          </div>
        </div>
      </section>

      {/* Intro + team */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <p className="font-display text-3xl md:text-4xl leading-[1.2] tracking-tight text-[#2d2420] max-w-lg">
            Let's discuss your space.
          </p>

          <div className="grid sm:grid-cols-2 gap-10">
            {team.map((person) => (
              <div key={person.name}>
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-5">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-display text-xl text-[#2d2420]">
                  {person.name}
                </p>
                <p className="font-mono text-xs uppercase tracking-widest text-[#a5673f] mt-1 mb-3">
                  {person.role}
                </p>
                <div className="flex items-center gap-4">
                  <a
                    href={`mailto:${person.email}`}
                    className="text-sm text-[#4a3a34]/70 hover:text-[#4a3a34] transition-colors"
                  >
                    {person.email}
                  </a>
                  <a
                    href="#"
                    aria-label={`${person.name} on LinkedIn`}
                    className="text-[#4a3a34]/70 hover:text-[#4a3a34] transition-colors"
                  >
                    <Linkedin size={16} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[90vh] lg:min-h-[85vh] pb-24">
        <div className="relative h-full">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80"
            alt="Modern residential interior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Reduced container height and padding */}
          <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 lg:gap-6 h-full min-h-[90vh] lg:min-h-[85vh] items-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Left Side - Heading - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:flex flex-col justify-center text-white lg:pr-4">
              <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 w-fit mb-6">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                  Form
                </span>
              </div>

              <h1 className="font-serif font-bold leading-[1.05] tracking-tight">
                <span className="text-[5.5vw] xl:text-[4.8vw] block">
                  Schedule
                </span>
                <span className="text-[5.5vw] xl:text-[4.8vw] block">
                  An Expertise
                </span>
                <span className="text-[5.5vw] xl:text-[4.8vw] block">
                  Consultation
                </span>
              </h1>
            </div>

            {/* Mobile Heading - Visible only on mobile */}
            <div className="lg:hidden text-center text-white mb-4">
              <div className="inline-flex items-center gap-2 border border-white/40 px-4 py-1.5 w-fit mx-auto mb-4">
                <span className="w-2 h-2 rounded-full bg-white/80" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
                  Form
                </span>
              </div>
              <h2 className="font-serif font-bold leading-[1.1] tracking-tight">
                <span className="text-4xl sm:text-5xl block">Schedule</span>
                <span className="text-4xl sm:text-5xl block">An Expertise</span>
                <span className="text-4xl sm:text-5xl block">Consultation</span>
              </h2>
            </div>

            {/* Right Side - Form Card */}
            <div className="backdrop-blur-md bg-white/10 p-5 sm:p-6 md:p-7 w-full max-w-md sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0 border border-white/20">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto pb-24">
        <div className="grid sm:grid-cols-2 gap-8">
          {offices.map((office) => (
            <div key={office.city}>
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
                <img
                  src={office.image}
                  alt={office.city}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-display text-2xl text-[#2d2420] mb-2">
                {office.city}
              </p>
              <p className="text-[#4a3a34]/70">{office.address}</p>
              <p className="text-[#4a3a34]/70">{office.area}</p>
              <p className="text-[#4a3a34]/70 mt-2 font-mono text-xs uppercase tracking-widest">
                {office.hours}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto pb-24">
        <span className="inline-flex items-center gap-2 border border-[#4a3a34]/40 rounded px-2 py-1 font-mono text-[11px] uppercase tracking-widest text-[#4a3a34] mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4a3a34]" />
          FAQ
        </span>
        <h2 className="font-display text-3xl md:text-4xl text-[#2d2420] mb-10 max-w-xl">
          Answers to common questions about our process.
        </h2>

        <div>
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              index={i}
              q={item.q}
              a={item.a}
              isOpen={openFaq === i}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-2 md:px-4 pb-16">
        <div className="max-w-7xl mx-auto bg-[#daddd6] rounded-sm px-8 md:px-16 py-16 md:py-20">
          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-center">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.15] tracking-tight text-[#2d2420] max-w-xl">
              Have a project in mind? Let us hear about it.
            </h2>
            <button className="group inline-flex items-center gap-2 border border-[#4a3a34] rounded-sm px-6 py-3 font-mono text-sm uppercase tracking-widest text-[#4a3a34] transition-colors duration-300 hover:bg-[#4a3a34] hover:text-[#f5f0eb] whitespace-nowrap">
              Consultation
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
      </section>
    </div>
  );
}
