import Section from "@/components/ui/Section";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function About() {
  return (
    <Section id="about" className="border-t hairline p-0">
      {/* =========================
          FIRST SPLIT SECTION
      ========================== */}
      <div className="grid min-h-[90vh] md:grid-cols-5 bg-[#5E3E3E]">
        {/* Left: Text */}
        <div className="md:col-span-2  text-bone flex items-end">
          <div className="p-6 md:p-10 lg:p-12">
            <h2 className="font-sans text-xl md:text-2xl lg:text-2xl leading-[1.08] max-w-xl">
              Founded in 2003, ApnaGhar is a deliberately small practice. The
              principal architect leads every project from brief to handover —
              so the thinking that shapes the first sketch carries all the way
              through to the last detail on site.
            </h2>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:col-span-3 min-h-[60vh] md:min-h-0">
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
      <div className="grid min-h-[90vh] md:grid-cols-2 bg-clay ">
        {/* Left: Image */}
        <div className="min-h-[60vh] md:min-h-0 p-4">
          <img
            src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
            alt="ApnaGhar studio"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="flex items-start">
          <div className="p-6 md:p-10 lg:p-12">
            <h3 className="font-sans text-xl md:text-2xl lg:text-3xl leading-[1.08] max-w-2xl">
              Every project begins with reading the site and the brief honestly,
              then deciding what the new work should add, contrast, or preserve.
              Nothing is drawn before the questions have been asked properly.
            </h3>

            <Link
              to="/about"
              className="btn-pill mt-10 flex w-full max-w-[250px] items-center justify-between border border-b-4 hover:bg-[#5E3E3E]"
            >
              <span>About us</span>
              <Plus size={18} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
