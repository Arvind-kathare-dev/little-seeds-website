import AboutSection from "@/components/AboutSection";
import ProgramCards from "@/components/ProgramCards";

export const metadata = {
  title: "Our Programs — Little Seeds",
  description: "Explore our daycare, Islamic roots, and enrichment programs designed for every stage of your child's growth.",
};

export default function ProgramsPage() {
  return (
    <main style={{ paddingTop: 80 }}>
      <ProgramCards />
      <AboutSection />
    </main>
  );
}
