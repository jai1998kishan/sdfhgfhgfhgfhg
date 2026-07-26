import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <main className="min-h-screen bg-[#f5f0eb] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#a5673f] mb-6">
              Error / 404
            </p>

            <h1 className="font-display text-[5rem] md:text-[8rem] leading-none tracking-tight text-[#2d2420]">
              404
            </h1>

            <h2 className="font-display text-4xl md:text-6xl leading-tight tracking-tight text-[#2d2420] mt-4">
              Page Not Found
            </h2>

            <p className="mt-8 max-w-md text-[#4a3a34]/70 text-lg leading-relaxed">
              The page you're looking for doesn't exist, may have been moved, or
              is temporarily unavailable.
            </p>

            <div className="mt-12">
              <Link
                to="/"
                className="group inline-flex items-center gap-4 border border-[#4a3a34] px-7 py-4 font-mono text-sm uppercase tracking-[0.18em] text-[#4a3a34] transition-all duration-300 hover:bg-[#4a3a34] hover:text-[#f5f0eb]"
              >
                Back To Home
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&h=1600&fit=crop"
                alt="Modern architecture"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-6 left-6 bg-[#f5f0eb]/95 rounded-full w-14 h-14 flex items-center justify-center font-mono text-sm tracking-widest text-[#2d2420]">
              404
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
