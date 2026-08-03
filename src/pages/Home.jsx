import Hero from "@/components/sections/Hero";
import Achievements from "@/components/sections/Achievements";
import About from "@/components/sections/About";
import PrinciplesCTA from "@/components/sections/PrinciplesCTA";
import FounderQuote from "@/components/sections/FounderQuote";
import Services from "@/components/sections/Services";
import Clients from "@/components/sections/Clients";
import Projects from "@/components/sections/Projects";
import CTA from "@/components/sections/CTA";
import Testimonials from "@/components/sections/Testimonials";
import Journal from "@/components/sections/Journal";

export default function Home() {
  return (
    <>
      <Hero />
      <Achievements />
      <About />
      <PrinciplesCTA />
      <FounderQuote />
      <Services />
      <Clients />
      <Projects />
      <CTA />
      <Testimonials />
      <Journal />
    </>
  );
}
