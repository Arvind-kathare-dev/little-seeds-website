import BackButton from "@/components/BackButton";
import AboutSection from "@/components/AboutSection";
import SectionLabel from "@/components/SectionLabel";
import { C } from "@/components/constants";
import Link from "next/link";
import { RootsIllustration } from "@/components/Illustrations";
import { MoonIcon, SeedlingIcon, BookSmallIcon, StarIcon } from "@/components/Icons";

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
    href: "/ramadan",
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
  {
    icon: <BookSmallIcon size={34} color={C.sage} />,
    title: "Arabic Program",
    text: "Our Arabic Program is designed for beginner and intermediate learners who want to strengthen their Arabic skills in a warm, encouraging, and enjoyable environment.",
    color: C.sage,
    bg: C.sageLight,
    href: "/arabic-program",
  },
  {
    icon: <StarIcon size={34} color={C.gold} />,
    title: "Qur’an Treasures",
    text: "This 8-week weekend program helps children strengthen their relationship with the Qur’an while learning valuable Islamic lessons and developing confidence through a positive and motivating environment. ",
    color: C.gold,
    bg: C.goldLight,
    href: "/quran-treasures",
  },
];

export default function RootsPage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.tealPale} 0%, ${C.cream} 100%)` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ls-back-btn-wrap">
            <BackButton />
          </div>
          <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px" }}>
              <SectionLabel text="Roots Program" color={C.teal} />
              <h1 className="ls-title" style={{ margin: "10px 0 14px" }}>
                Grounding Children in Faith
              </h1>
              <p className="ls-lead" style={{ margin: "0 0 24px" }}>
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
          <h2 className="ls-title" style={{ marginBottom: 28 }}>Programs Within Roots</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {SUB_PROGRAMS.map((c, i) => (
              <div key={i} style={{ background: c.bg, borderRadius: 18, padding: "28px 24px", border: `1px solid ${c.color}15`, display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: 12 }}>{c.icon}</div>
                <h3 className="ls-card-title" style={{ fontSize: 17, margin: "0 0 10px" }}>{c.title}</h3>
                <p className="ls-prose" style={{ lineHeight: 1.7, margin: "0 0 16px", flex: 1 }}>{c.text}</p>
                {c.href && (
                  <Link href={c.href} style={{ color: c.color, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    Learn More
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />

      <style>{`
        @media (min-width: 1024px) {
          .ls-back-btn-wrap { margin-left: -60px; }
        }
      `}</style>
    </div>
  );
}
