import BackButton from "@/components/BackButton";
import AboutSection from "@/components/AboutSection";
import SectionLabel from "@/components/SectionLabel";
import { C } from "@/components/constants";
import { RootsIllustration } from "@/components/Illustrations";
import { MoonIcon, SeedlingIcon, BookSmallIcon } from "@/components/Icons";

export const metadata = {
  title: "Roots Program — Little Seeds",
  description: "Islamic education for Muslim children ages 3–14. Ramadan Program, Journey of Faith, Sunday School.",
};

const SUB_PROGRAMS = [
  {
    icon: <MoonIcon size={34} />,
    title: "Ramadan Program",
    text: "A seasonal program immersing children in the spirit of Ramadan — fasting awareness, Quran recitation, charitable giving, and community iftars.",
    color: C.gold,
    bg: C.goldLight,
  },
  {
    icon: <SeedlingIcon size={34} color={C.teal} />,
    title: "Journey of Faith",
    text: "Year-round curriculum covering Quran memorization, Seerah, Islamic manners, and foundational beliefs — tailored by age group.",
    color: C.teal,
    bg: C.tealLight,
  },
  {
    icon: <BookSmallIcon size={34} color={C.teal} />,
    title: "Sunday School",
    text: "Weekly weekend sessions combining Islamic studies, Arabic language basics, and community bonding.",
    color: C.teal,
    bg: C.tealPale,
  },
];

export default function RootsPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.tealPale} 0%, ${C.cream} 100%)` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <BackButton />
          <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px" }}>
              <SectionLabel text="Roots Program" color={C.teal} />
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 700, color: C.text, margin: "10px 0 14px", lineHeight: 1.15 }}>
                Grounding Children in Faith
              </h1>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, lineHeight: 1.75, color: C.textMuted, margin: "0 0 24px" }}>
                The Roots Program is designed for Muslim children ages 3 – 14. Through engaging, age-appropriate Islamic education, we help young learners build a strong spiritual foundation for life.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Ages 3 – 14", "Islamic education", "Spiritual growth"].map((t) => (
                  <span key={t} style={{ background: C.teal + "18", color: C.tealDark, padding: "8px 16px", borderRadius: 20, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 280px", maxWidth: 340 }}>
              <RootsIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-programs */}
      <section style={{ padding: "60px 24px", background: C.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, color: C.text, marginBottom: 28 }}>Programs Within Roots</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {SUB_PROGRAMS.map((c, i) => (
              <div key={i} style={{ background: c.bg, borderRadius: 18, padding: "28px 24px", border: `1px solid ${c.color}15` }}>
                <div style={{ marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: C.text, margin: "0 0 10px" }}>{c.title}</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.7, color: C.textMuted, margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}
