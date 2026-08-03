import React from "react";
import { Plus } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const navColumns = [
  {
    items: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Journal", to: "/journal" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    items: [
      { label: "About", to: "/about" },
      { label: "Interior Design", to: "/interior-design" },
      { label: "Gallery", to: "/gallery" },
      { label: "Style Guide", to: "/style-guide" },
    ],
  },
  {
    items: [
      { label: "Disciplines", to: "/disciplines" },
      { label: "Projects", to: "/projects" },
      { label: "Offices", to: "/offices" },
    ],
  },
  {
    items: [
      { label: "Architecture", to: "/architecture" },
      { label: "Project Detail", to: "/projects/detail" },
      { label: "Consultation", to: "/consultation" },
    ],
  },
];

const metaLinks = [
  { label: "Instructions", to: "/instructions" },
  { label: "Licences", to: "/licences" },
  { label: "Powered by Webflow", to: "/powered-by-webflow" },
  { label: "Made by Metrik.studio", to: "/made-by-metrik-studio" },
];

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#d6d3cb]">
      <section className="relative h-[380px] sm:h-[440px] md:h-[500px] lg:h-[560px] overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=2000&q=80"
          alt="Hand-finished wood flooring detail"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left-to-right scrim so the text stays legible over the photo */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end px-6 sm:px-10 md:px-16 pb-8 sm:pb-10 md:pb-14">
          <div className="max-w-lg">
            <h2 className="font-sans font-bold uppercase leading-snug text-bone text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              Have a project in mind?
              <br />
              Let us hear about it.
            </h2>

            <Link
              to="/contact"
              className="mt-6 md:mt-8 inline-flex items-center gap-2 border border-bone/50 text-bone px-5 py-2.5 font-mono text-[11px] md:text-xs uppercase tracking-widest transition-colors hover-split-up"
            >
              Consultation
              <Plus size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto pt-14 md:pt-16">
        {/* Top Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          <div>
            <Link
              to="/"
              className="font-display text-2xl md:text-3xl text-[#2d2420]"
            >
              ApnaGhars
            </Link>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#4a3a34]/50 mb-1">
              About
            </p>

            <p className="font-mono text-sm text-[#2d2420]">
              Architecture Studio
            </p>
          </div>

          <div>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[#4a3a34]/50 mb-1">
              Address
            </p>

            <p className="font-mono text-sm text-[#2d2420]">
              Linienstrasse 156, Berlin
            </p>
          </div>

          <div>
            <a
              href="mailto:company@example.com"
              className="block font-mono text-sm text-[#8a6f66] hover:text-[#4a3a34] transition-colors"
            >
              company@example.com
            </a>

            <a
              href="tel:+493028048000"
              className="block font-mono text-sm text-[#8a6f66] hover:text-[#4a3a34] transition-colors mt-1"
            >
              +49 30 28 04 8000
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 mt-14 md:mt-16">
          {navColumns.map((column, index) => (
            <ul
              key={index}
              className="space-y-3 border-l border-[#4a3a34]/20 pl-4"
            >
              {column.items.map(({ label, to }) => {
                // const isActive = location.pathname === to;

                return (
                  <li key={label}>
                    <NavLink
                      to={to}
                      className={({ isActive }) =>
                        `text-sm tracking-wide transition-colors hover:text-[#4a3a34] ${
                          isActive
                            ? "font-semibold text-[#0a0a0a]"
                            : "text-black/70"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#4a3a34]/20 mt-14 md:mt-16">
        <div className="px-4 md:px-8 max-w-7xl mx-auto py-6">
          <div className="grid grid-cols-2 gap-y-3 md:flex md:flex-wrap md:items-center md:justify-between font-mono text-xs uppercase tracking-wide text-[#2d2420]">
            {metaLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="hover:text-[#4a3a34]/70 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
