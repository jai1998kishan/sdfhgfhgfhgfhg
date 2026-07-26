// components/sections/AchievementsScroll.jsx
import React, { useEffect, useRef, useState } from "react";

const achievementsData = [
  {
    id: 1,
    stat: "96%",
    label: "CLIENT SATISFACTION",
    description:
      "MEASURED ACROSS RESIDENTIAL, COMMERCIAL, AND HOSPITALITY CLIENTS THROUGH POST-COMPLETION SATISFACTION SURVEYS CONDUCTED WITHIN SIX MONTHS OF HANDOVER.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
  },
  {
    id: 2,
    stat: "48+",
    label: "AWARDS WON",
    description:
      "CUMULATIVE ARCHITECTURAL AWARDS RECEIVED SINCE 2003 ACROSS DEZEEN, ARCHITIZER, WORLD ARCHITECTURE FESTIVAL, AND ARCHITECTURAL REVIEW AWARDS PROGRAMMES.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop",
  },
  {
    id: 3,
    stat: "2012",
    label: "YEARS IN PRACTICE",
    description:
      "FOUNDED IN 2003, ApnaGhar HAS BUILT A SPECIALIST ARCHITECTURAL PRACTICE OVER 23 YEARS OF FOCUSED WORK IN RESIDENTIAL, COMMERCIAL, AND CULTURAL ARCHITECTURE.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop",
  },
];

const AchievementsScroll = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const imageContainerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    if (!imageContainer || isMobile) return;

    let isScrolling = false;

    const handleWheel = (e) => {
      e.preventDefault();

      const container = imageContainer;
      const scrollAmount = e.deltaY;
      const maxScroll = container.scrollHeight - container.clientHeight;
      const currentScroll = container.scrollTop;

      // Calculate new scroll position
      let newScroll = currentScroll + scrollAmount;
      newScroll = Math.max(0, Math.min(maxScroll, newScroll));

      // Smooth scroll
      container.scrollTo({
        top: newScroll,
        behavior: "smooth",
      });

      // Update active index based on scroll position
      const progress = newScroll / maxScroll;
      const index = Math.min(
        Math.floor(progress * achievementsData.length),
        achievementsData.length - 1,
      );
      setActiveIndex(index);
    };

    // Add wheel event listener to the image container
    imageContainer.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      imageContainer.removeEventListener("wheel", handleWheel);
    };
  }, [isMobile]);

  // Update active index when image container scrolls
  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    if (!imageContainer || isMobile) return;

    const handleScroll = () => {
      const maxScroll =
        imageContainer.scrollHeight - imageContainer.clientHeight;
      const progress = imageContainer.scrollTop / maxScroll;
      const index = Math.min(
        Math.floor(progress * achievementsData.length),
        achievementsData.length - 1,
      );
      setActiveIndex(index);
    };

    imageContainer.addEventListener("scroll", handleScroll);
    return () => {
      imageContainer.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  // Handle dot click navigation
  const scrollToIndex = (index) => {
    const imageContainer = imageContainerRef.current;
    if (!imageContainer) return;

    const maxScroll = imageContainer.scrollHeight - imageContainer.clientHeight;
    const targetScroll = (index / (achievementsData.length - 1)) * maxScroll;

    imageContainer.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
    setActiveIndex(index);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {isMobile ? (
        // Mobile: Stacked layout with normal scroll
        <div className="overflow-y-auto">
          {achievementsData.map((item, index) => (
            <div key={item.id} className="min-h-screen flex flex-col">
              <div className="relative h-[50vh]">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex items-center px-6 py-12 ">
                <div>
                  <span className="text-[11px] uppercase tracking-widest font-mono text-[#4a3a34] opacity-60">
                    Achievement
                  </span>
                  <p className="font-display text-7xl font-light tracking-tight text-[#4a3a34] mb-2">
                    {item.stat}
                  </p>
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-[#4a3a34] mb-4">
                    {item.label}
                  </h3>
                  <p className="text-[#4a3a34]/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Desktop: Split layout with scroll-jacking
        <div className="grid grid-cols-2 h-screen">
          {/* Left - Text content (fixed) */}
          <div className="flex items-center px-12 lg:px-16 py-12  h-screen sticky top-0">
            <div className="w-full max-w-xl">
              {achievementsData.map((item, index) => (
                <div
                  key={item.id}
                  className={`transition-all duration-700 ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8 absolute"
                  }`}
                  style={{
                    position: index === activeIndex ? "relative" : "absolute",
                    pointerEvents: index === activeIndex ? "auto" : "none",
                  }}
                >
                  <span className="text-[11px] uppercase tracking-widest font-mono text-[#4a3a34] opacity-60">
                    Achievement
                  </span>
                  <p className="font-display text-8xl lg:text-9xl font-light tracking-tight text-[#4a3a34] mb-2">
                    {item.stat}
                  </p>
                  <h3 className="font-display text-3xl lg:text-4xl font-semibold tracking-tight text-[#4a3a34] mb-4">
                    {item.label}
                  </h3>
                  <p className="text-[#4a3a34]/70 text-sm lg:text-base leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              ))}

              {/* Navigation dots */}
              <div className="flex gap-3 mt-12 relative z-10">
                {achievementsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "w-8 bg-[#4a3a34]"
                        : "bg-[#4a3a34]/30 hover:bg-[#4a3a34]/60"
                    }`}
                    aria-label={`Go to achievement ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Images scrolling */}
          <div
            ref={imageContainerRef}
            className="relative h-screen overflow-y-scroll no-scrollbar"
            style={{ scrollSnapType: "y mandatory" }}
          >
            {achievementsData.map((item, index) => (
              <div
                key={item.id}
                className="h-screen w-full flex-shrink-0 relative"
                style={{ scrollSnapAlign: "start" }}
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsScroll;
