import Section from "@/components/ui/Section";

const CDN = "https://cdn.prod.website-files.com/6a060cd7503d72ff714e6294";

export default function PrinciplesCTA() {
  return (
    <Section
      id="principles"
      className="py-20 lg:py-32 border-t border-black/10"
    >
      <div className="max-w-[1600px] ">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-x-10 relative">
          {/* Image */}
          <div className="col-span-3">
            <img
              src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
              alt=""
              className="w-[320px] h-[250px] object-cover"
            />
          </div>

          {/* Headline */}
          <div className="col-span-9 self-end -ml-10">
            <h2 className="uppercase font-sans font-black leading-[0.83] tracking-tight">
              <div className="text-[8vw] [-webkit-text-stroke:1px_currentColor]">
                Considered
              </div>

              <div className="text-[8vw] [-webkit-text-stroke:1px_currentColor] pl-[32%] text-right">
                Crafted
              </div>
            </h2>
          </div>

          {/* Third Line */}
          <div className="col-span-12 mt-2">
            <h2 className="uppercase font-sans font-black [-webkit-text-stroke:1px_currentColor] leading-[0.83] tracking-tight text-[9vw]">
              Lasting Solutions
            </h2>
          </div>

          {/* Copy */}
          <div className="col-span-4 mt-8">
            <p className="uppercase text-lg leading-snug max-w-sm">
              What the work is built on. Three principles that run through every
              project we take on.
            </p>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <img
            src={`${CDN}/6a060cd7503d72ff714e6608_d9376cd23fdf1d712352ed21555d1256_small-portrait1.avif`}
            alt=""
            className="w-28 mb-5"
          />

          <h2 className="uppercase font-sans font-black [-webkit-text-stroke:1px_currentColor]  leading-[0.85] tracking-tight">
            <div className="text-4xl ">Considered</div>

            <div className="text-4xl text-right">Crafted</div>

            <div className="text-4xl mt-1 ">Lasting Solutions</div>

            {/* <div className="text-4xl">Solutions</div> */}
          </h2>

          <p className="uppercase text-sm mt-6 max-w-xs leading-relaxed">
            What the work is built on. Three principles that run through every
            project we take on.
          </p>
        </div>
      </div>
    </Section>
  );
}
