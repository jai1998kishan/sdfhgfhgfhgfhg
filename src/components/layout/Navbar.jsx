import { useEffect, useState } from "react";
import { Plus, Menu as MenuIcon, X } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

// Navigation links as objects
const navLinks = {
  primary: [
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "gallery", label: "Gallery", path: "/gallery" },
  ],
  secondary: [
    { id: "home", label: "Home", path: "/" },
    { id: "architecture", label: "Architecture", path: "/architecture" },
    { id: "offices", label: "Offices", path: "/offices" },
    { id: "contact", label: "Contact", path: "/contact" },
  ],
  tertiary: [
    { id: "disciplines", label: "Disciplines", path: "/disciplines" },
    {
      id: "interior-design",
      label: "Interior Design",
      path: "/interior-design",
    },
    { id: "journal", label: "Journal", path: "/journal" },
  ],
};

// Latest projects data
const latestProjects = [
  { id: "wannsee", name: "WANNSEE RESIDENCE", path: "/projects/wannsee" },
  { id: "hexagon", name: "HEXAGON OFFICE", path: "/projects/hexagon" },
  {
    id: "speicherstadt",
    name: "SPEICHERSTADT HOTEL",
    path: "/projects/speicherstadt",
  },
];

// Featured project with image
const featuredProject = {
  name: "Wannsee Residence +",
  path: "/projects/wannsee",
  image:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Don't hide navbar when menu is open
      if (open) {
        setLastScrollY(currentScrollY);
        return;
      }

      // Update scrolled state for background
      setScrolled(currentScrollY > 40);

      // Hide/show logic
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down - hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "scroll";
      document.body.classList.add("menu-open");
      setVisible(true); // Show navbar when menu opens
    } else {
      document.body.style.overflowY = "";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflowY = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Check if link is active
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        open || scrolled
          ? "bg-bone/95 backdrop-blur-md border-b hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 bg-white/40">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-display font-extrabold text-3xl tracking-tight"
          >
            ApnaGhar<span className="text-clay">.</span>
          </Link>

          {/* Desktop menu button — unchanged position, just hidden on mobile now */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="hidden md:inline-flex items-center gap-2 bg-[#7e665e] text-white border hairline rounded-sm px-2 py-2 text-[11px] uppercase tracking-widest2 font-mono hover:bg-[#2d2420] hover:text-bone transition-colors"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? (
              <X size={14} strokeWidth={1.75} />
            ) : (
              <MenuIcon size={14} strokeWidth={1.75} />
            )}
            {open ? "Close" : "Menu"}
          </button>

          {open && (
            <span className="hidden md:inline text-[11px] uppercase tracking-widest2 font-mono text-muted">
              Architecture Studio
            </span>
          )}
        </div>

        {!open && (
          <nav className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest2 font-mono">
            {navLinks.primary.slice(0, 2).map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `link-underline ${isActive ? "text-clay font-semibold" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/disciplines"
              className={({ isActive }) =>
                `link-underline ${isActive ? "text-clay font-semibold" : ""}`
              }
            >
              Disciplines
            </NavLink>
            {navLinks.primary.slice(2, 3).map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `link-underline ${isActive ? "text-clay font-semibold" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            {navLinks.tertiary.slice(2, 3).map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `link-underline ${isActive ? "text-clay font-semibold" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        )}

        {!open && (
          <Link
            to="/contact"
            className="hidden md:inline-flex btn-pill border border-b-4 hover-split-up"
          >
            Consultation
            <Plus size={14} strokeWidth={1.5} />
          </Link>
        )}

        {/* Mobile-only menu button, positioned on the far right */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center gap-2 bg-[#8a6f66] text-white border hairline rounded-sm px-2 py-2 text-[11px] uppercase tracking-widest2 font-mono hover:bg-[#2d2420] hover:text-bone transition-colors"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={14} strokeWidth={1.75} />
          ) : (
            <MenuIcon size={14} strokeWidth={1.75} />
          )}
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <MegaMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MegaMenu({ open, onClose }) {
  const location = useLocation();

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "scroll";
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflowY = "";
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.style.overflowY = "";
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <div
      className={`fixed inset-x-0 top-20 bottom-0 z-30 transition-all duration-500 ${
        open
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-black/20" onClick={onClose} />

      <div
        className={`relative mx-2 pt-2 pb-6 transition-transform duration-500 ${
          open ? "translate-y-0" : "-translate-y-4"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-4">
          {/* Main nav panel */}
          <div className="rounded-lg p-6 sm:p-8 md:p-10 bg-[#4a3a34] text-[#efeae2]">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 sm:gap-x-8 md:gap-x-10 gap-y-2 md:gap-y-6">
              <MenuColumn items={navLinks.primary} onClose={onClose} />
              <MenuColumn items={navLinks.secondary} onClose={onClose} />
              <MenuColumn items={navLinks.tertiary} onClose={onClose} />
            </div>

            {/* Latest Projects & Featured - Desktop */}
            <div className="hidden lg:grid grid-cols-2 gap-8 mt-8 pt-6 border-t border-[#efeae2]/20">
              <div>
                <span className="text-[10px] uppercase tracking-widest2 font-mono opacity-60">
                  Latest Project
                </span>
                <div className="mt-2 space-y-1">
                  {latestProjects.map((project) => (
                    <Link
                      key={project.id}
                      to={project.path}
                      onClick={onClose}
                      className="block font-display text-base hover:opacity-70 transition-opacity"
                    >
                      {project.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-widest2 font-mono opacity-60 block text-right">
                  Featured
                </span>
                <Link
                  to={featuredProject.path}
                  onClick={onClose}
                  className="block mt-2 group"
                >
                  <div className="aspect-square w-32 ml-auto rounded overflow-hidden mb-1">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="font-display text-base hover:opacity-70 transition-opacity block text-right">
                    {featuredProject.name}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Get in touch panel */}
          <div className="rounded-lg p-6 sm:p-8 flex flex-col justify-between bg-[#4a3a34] text-[#efeae2]">
            <span className="text-[11px] uppercase tracking-widest2 font-mono opacity-70">
              Get in touch
            </span>
            <div className="mt-4 space-y-2 font-display text-lg sm:text-xl leading-snug text-[#efeae2] ">
              <div>Consultation</div>
              <Link
                to="mailto:company@example.com"
                className="block hover:opacity-70 transition-opacity break-all text-[#efeae2] text-base"
              >
                company@example.com
              </Link>
              <Link
                to="tel:+493028048000"
                className="block hover:opacity-70 transition-opacity text-[#efeae2] text-base"
              >
                +49 30 28 04 8000
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile bottom section */}
        <div className="lg:hidden mt-3 bg-[#4a3a34] rounded-lg p-5 text-[#efeae2]">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-widest2 font-mono opacity-60">
                Latest Project
              </span>
              <div className="mt-2 space-y-1">
                {latestProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={project.path}
                    onClick={onClose}
                    className="block font-display text-sm hover:opacity-70 transition-opacity"
                  >
                    {project.name}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest2 font-mono opacity-60 block text-right">
                Featured
              </span>
              <Link
                to={featuredProject.path}
                onClick={onClose}
                className="block mt-2 group"
              >
                <div className="aspect-square w-24 ml-auto rounded overflow-hidden mb-1">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <span className="font-display text-sm hover:opacity-70 transition-opacity block text-right">
                  {featuredProject.name}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MenuColumn({ items, onClose }) {
  return (
    <ul className="space-y-2 sm:space-y-3 md:space-y-4">
      {items.map((link) => (
        <li key={link.id}>
          <NavLink
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block font-sans font-medium text-base sm:text-lg md:text-xl leading-tight tracking-tight text-[#efeae2] hover:opacity-70 transition-opacity ${
                isActive ? "opacity-100 underline" : "opacity-80"
              }`
            }
          >
            {link.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
