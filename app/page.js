import Hero from "@/components/Hero";
import BrightRootsDesign from "@/components/BrightRootsDesign";
import GrowingLearnersDesign from "@/components/GrowingLearnersDesign";
import CorePrinciplesDesign from "@/components/CorePrinciplesDesign";
import WhatSetsApartDesign from "@/components/WhatSetsApartDesign";
import ProgramCards from "@/components/ProgramCards";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProgramCards />
      <BrightRootsDesign />
      <AboutSection />
      <GrowingLearnersDesign />
      <WhatSetsApartDesign />
      <CorePrinciplesDesign />
      <ContactSection />
    </>
  );
}
