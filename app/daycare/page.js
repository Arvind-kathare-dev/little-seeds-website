import BackButton from "@/components/BackButton";
import AboutSection from "@/components/AboutSection";
import SectionLabel from "@/components/SectionLabel";
import { C } from "@/components/constants";
import { DaycareIllustration } from "@/components/Illustrations";
import { HeartIcon, BookSmallIcon, PaletteIcon, SunIcon } from "@/components/Icons";

export const metadata = {
  title: "Daycare Program — Little Seeds",
  description: "A safe, loving start for every child. Toddlers through Kindergarten.",
};

const OFFERS = [
  { icon: <HeartIcon size={30} />, title: "Nurturing Care", text: "Small group sizes with dedicated, caring teachers who know your child by name." },
  { icon: <BookSmallIcon size={30} />, title: "Early Learning", text: "Age-appropriate literacy, numeracy, and creative exploration woven into every day." },
  { icon: <PaletteIcon size={30} />, title: "Creative Play", text: "Art, music, sensory play, and outdoor time that sparks curiosity and joy." },
  { icon: <SunIcon size={30} />, title: "Structured Routine", text: "Predictable daily rhythms that help little ones feel safe and confident." },
];

export default function DaycarePage() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.coralPale} 0%, ${C.cream} 100%)` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <BackButton />
          <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px" }}>
              <SectionLabel text="Daycare Program" color={C.coral} />
              <h1 className="ls-title" style={{ margin: "10px 0 14px" }}>
                A Safe, Loving Start for Every Child
              </h1>
              <p className="ls-lead" style={{ margin: "0 0 24px" }}>
                Our Daycare Program welcomes families of all backgrounds. We provide a nurturing, structured environment where toddlers through Kindergarten-age children learn through play, build friendships, and develop the confidence to thrive.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Toddlers – Kindergarten", "All families welcome", "Full & half day"].map((t) => (
                  <span key={t} style={{ background: C.coral + "18", color: C.coralDark, padding: "8px 16px", borderRadius: 20, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 280px", maxWidth: 340 }}>
              <DaycareIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ padding: "60px 24px", background: C.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 className="ls-title" style={{ marginBottom: 28 }}>What We Offer</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {OFFERS.map((c, i) => (
              <div key={i} style={{ background: C.coralPale, borderRadius: 16, padding: "24px 20px" }}>
                <div style={{ marginBottom: 10 }}>{c.icon}</div>
                <h3 className="ls-card-title" style={{ fontSize: 16, margin: "0 0 8px" }}>{c.title}</h3>
                <p className="ls-prose" style={{ margin: 0 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection />
    </div>
  );
}
