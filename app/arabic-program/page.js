import BackButton from "@/components/BackButton";
import ContactSection from "@/components/ContactSection";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import { C } from "@/components/constants";
import { BookSmallIcon, UsersIcon, StarIcon, HeartIcon, PaletteIcon, ClockIcon, MapPinIcon, PhoneIcon, MailIcon } from "@/components/Icons";
import ArabicProgramForm from "@/components/ArabicProgramForm";

export const metadata = {
  title: "Arabic Program — Little Seeds",
  description: "An engaging Arabic learning journey designed to help children build confidence in speaking, reading, and writing Arabic through fun and interactive activities.",
};

export default function ArabicProgramPage() {
  return (
    <div style={{ paddingTop: 80, background: C.cream }}>
      {/* Hero */}
      <section className="ls-res-section" style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.sagePale} 0%, ${C.cream} 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: 20 }}>
            <BackButton />
          </div>
          <FadeIn>
            <SectionLabel text="Arabic Program" color={C.sage} />
            <h1 className="ls-title" style={{ margin: "16px 0 20px", fontSize: "clamp(32px, 5vw, 48px)" }}>
              Let’s Learn Arabic! <span style={{ color: C.sage, display: "block", marginTop: 8, fontSize: "0.8em" }}>اللغة العربية</span>
            </h1>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: C.sageDark, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 20 }}>
              Read • Write • Speak • Have Fun!
            </p>
            <p className="ls-lead" style={{ maxWidth: 700, margin: "0 auto" }}>
              An engaging Arabic learning journey designed to help children build confidence in speaking, reading, and writing Arabic through fun and interactive activities.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview & What Kids Learn */}
      <section className="ls-res-section" style={{ padding: "80px 24px", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 60, alignItems: "start" }}>
            <FadeIn>
              <h2 className="ls-title" style={{ marginBottom: 24 }}>Program Overview</h2>
              <p className="ls-prose" style={{ fontSize: 17, marginBottom: 24 }}>
                Our Arabic Program is designed for beginner and intermediate learners who want to strengthen their Arabic skills in a warm, encouraging, and enjoyable environment.
              </p>
              <h3 className="ls-card-title" style={{ fontSize: 20, marginBottom: 16 }}>Children will learn through:</h3>
              <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 12 }}>
                {["Games", "Conversation practice", "Interactive activities", "Reading exercises", "Creative learning projects"].map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: 10, fontSize: 15, fontFamily: "'DM Sans', sans-serif" }}>
                    <span style={{ color: C.sage }}>●</span> {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="ls-arabic-learn-card" style={{ background: C.sageLight, padding: 40, borderRadius: 28, border: `1px solid ${C.sage}15` }}>
                <h2 className="ls-title" style={{ fontSize: 28, marginBottom: 24 }}>What Kids Will Learn</h2>
                <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 16 }}>
                  {[
                    "Arabic letters & reading skills",
                    "Writing step by step",
                    "Everyday Arabic conversation",
                    "Vocabulary building",
                    "Listening & pronunciation skills",
                    "Confidence in speaking Arabic"
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 12, fontSize: 16, fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}>
                      <div style={{ width: 20, height: 20, borderRadius: 10, background: C.sage, color: C.white, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, flexShrink: 0 }}>✓</div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Details & Registration */}
      <section className="ls-res-section" style={{ padding: "80px 24px", background: C.cream }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>
            <FadeIn>
              <h2 className="ls-title" style={{ marginBottom: 32 }}>Program Details</h2>
              <div style={{ display: "grid", gap: 24 }}>
                <div style={{ background: C.white, padding: 32, borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <UsersIcon size={28} color={C.sage} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Target Audience</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Beginner & Intermediate Learners</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Ages 5 – 14 Years</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <ClockIcon size={28} color={C.sage} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Schedule (First Session)</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>June 20 – July 12</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Saturday & Sunday</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>10:00 AM – 1:00 PM</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <MapPinIcon size={28} color={C.sage} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Location</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>1420 River Park Dr, Suite 100</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Sacramento, CA 95815</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16 }}>
                    <PhoneIcon size={28} color={C.sage} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Contact</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>(408) 606-7126</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>info@littleseeds.kids</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <ArabicProgramForm />
            </FadeIn>
          </div>
        </div>
      </section>


      <style>{`
        @media (max-width: 600px) {
          .ls-res-section { padding: 48px 16px !important; }
          .ls-arabic-learn-card { padding: 28px 20px !important; }
        }
      `}</style>
    </div>
  );
}
