import BackButton from "@/components/BackButton";
import ContactSection from "@/components/ContactSection";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import { C } from "@/components/constants";
import { SunIcon, BookSmallIcon, RocketIcon, UsersIcon, MapPinIcon, ClockIcon, HeartIcon, PhoneIcon } from "@/components/Icons";
import SummerCampForm from "@/components/SummerCampForm";

export const metadata = {
  title: "Summer Camp 2026 — Little Seeds",
  description: "Join us for an exciting summer filled with creativity, confidence-building, and hands-on learning at Little Seeds Summer Camp 2026.",
};

export default function SummerCampPage() {
  return (
    <div style={{ paddingTop: 80, background: C.cream }}>
      {/* Hero */}
      <section className="ls-res-section" style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.goldLight} 0%, ${C.cream} 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ls-back-btn-wrap" style={{ display: "flex", justifyContent: "flex-start", marginBottom: 20 }}>
            <BackButton />
          </div>
          <FadeIn>
            <SectionLabel text="Summer Camp 2026" color={C.gold} />
            <h1 className="ls-hero-title" style={{ margin: "16px 0 10px" }}>
              Little Seeds Summer Camp 2026
            </h1>
            <h2 className="ls-title" style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: 20, color: C.goldDark }}>
              A Project-Based Learning Experience
            </h2>
            <p className="ls-lead" style={{ maxWidth: 740, margin: "0 auto 32px" }}>
              An exciting summer filled with creativity, confidence-building, teamwork, and hands-on learning! Our Summer Camp is designed to help children explore their imagination, develop real-world skills, and make unforgettable memories in a safe and nurturing environment.
            </p>
            <div className="ls-hero-tags" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <div style={{ background: C.white, padding: "10px 20px", borderRadius: 30, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <MapPinIcon size={18} color={C.gold} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>2 mins from Cal Expo</span>
              </div>
              <div style={{ background: C.white, padding: "10px 20px", borderRadius: 30, display: "flex", alignItems: "center", gap: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                <ClockIcon size={18} color={C.gold} />
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600 }}>June 22 – August 14</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Program Overview */}
      <section className="ls-res-section" style={{ padding: "80px 24px", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 50 }}>
              <h2 className="ls-title">Two Exciting Sessions</h2>
              <p className="ls-prose">Choose a session or join us for the full summer experience.</p>
            </div>
          </FadeIn>

          <div className="ls-session-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32 }}>
            {/* Session 1 */}
            <FadeIn delay={0.1}>
              <div className="ls-session-card" style={{ background: C.goldLight, borderRadius: 24, padding: 40, height: "100%", border: `1px solid ${C.gold}15` }}>
                <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 20, background: C.gold + "15", color: C.goldDark, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>
                  Session 1 — Weeks 1–4
                </div>
                <h3 className="ls-card-title" style={{ fontSize: 26, marginBottom: 8 }}>My First Comic Book Project</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: C.goldDark, marginBottom: 16 }}>June 22 – July 17</p>
                <p className="ls-prose" style={{ marginBottom: 24 }}>Children will explore storytelling through reading, imagination, art, and creativity while designing and creating their own personal comic book.</p>

                <h5 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: C.goldDark, marginBottom: 12 }}>What Children Will Learn:</h5>
                <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                  {["Guided reading & storytelling", "Character and scene design", "Creative writing basics", "Story sequencing", "Art & illustration techniques", "Confidence in sharing ideas"].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                      <span style={{ color: C.gold }}>●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Session 2 */}
            <FadeIn delay={0.2}>
              <div className="ls-session-card" style={{ background: C.tealLight, borderRadius: 24, padding: 40, height: "100%", border: `1px solid ${C.teal}15` }}>
                <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 20, background: C.teal + "15", color: C.tealDark, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>
                  Session 2 — Weeks 5–8
                </div>
                <h3 className="ls-card-title" style={{ fontSize: 26, marginBottom: 8 }}>Young Entrepreneurs Project</h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: C.tealDark, marginBottom: 16 }}>July 20 – August 14</p>
                <p className="ls-prose" style={{ marginBottom: 24 }}>Children will learn how to turn ideas into real projects while exploring leadership, teamwork, creativity, and basic business concepts.</p>

                <h5 style={{ fontSize: 14, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: C.tealDark, marginBottom: 12 }}>What Children Will Learn:</h5>
                <ul style={{ padding: 0, listStyle: "none", display: "grid", gap: 8 }}>
                  {["Creating a business idea", "Branding & product design", "Communication & presentation skills", "Team collaboration", "Financial & entrepreneurial basics", "Creative problem-solving"].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                      <span style={{ color: C.teal }}>●</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Highlights & Details */}
      <section className="ls-res-section" style={{ padding: "80px 24px", background: C.cream }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48 }}>
            <FadeIn>
              <h2 className="ls-title" style={{ marginBottom: 24 }}>Program Highlights</h2>
              <div className="ls-highlight-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: <SunIcon size={20} />, text: "STEAM-Based Learning" },
                  { icon: <BookSmallIcon size={20} />, text: "Creative Arts & Storytelling" },
                  { icon: <RocketIcon size={20} />, text: "Hands-On Activities" },
                  { icon: <UsersIcon size={20} />, text: "Confidence Building" },
                  { icon: <UsersIcon size={20} />, text: "Social & Teamwork Skills" },
                  { icon: <HeartIcon size={20} />, text: "Safe & Nurturing Environment" },
                  { icon: <SunIcon size={20} />, text: "Small Group Learning" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: C.white, padding: "12px 16px", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.03)" }}>
                    {item.icon}
                    <span style={{ fontSize: 13, fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>{item.text}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 40, background: C.white, padding: 32, borderRadius: 20, boxShadow: "0 4px 20px rgba(0,0,0,0.04)" }}>
                <h3 className="ls-card-title" style={{ fontSize: 20, marginBottom: 20 }}>Quick Info</h3>
                <div style={{ display: "grid", gap: 20 }}>
                  <div style={{ display: "flex", gap: 16 }}>
                    <ClockIcon size={24} color={C.gold} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Schedule</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Monday – Friday</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Full Day: 8:30 AM – 3:00 PM</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Extended: 3:00 PM – 4:00 PM</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16 }}>
                    <UsersIcon size={24} color={C.teal} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Ages</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>3 Years – 6th Grade</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Open to all children</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <MapPinIcon size={24} color={C.coral} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Location</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>1420 River Park Dr, Suite 100</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Sacramento, CA 95815</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16 }}>
                    <PhoneIcon size={24} color={C.teal} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>Contact</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>(408) 606-7126</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>info@littleseeds.kids</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Registration Form (Client Component) */}
            <FadeIn delay={0.2}>
              <SummerCampForm />
            </FadeIn>
          </div>
        </div>
      </section>


      <style>{`
        @media (max-width: 600px) {
          .ls-res-section { padding: 48px 16px !important; }
          .ls-session-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .ls-session-card { padding: 28px 20px !important; }
          .ls-session-head { flex-direction: column; align-items: flex-start !important; gap: 16px !important; }
          .ls-highlight-grid { grid-template-columns: 1fr !important; }
          .ls-hero-tags { flex-direction: column; align-items: stretch; }
          .ls-hero-tags > div { justify-content: center; }
        }
        @media (min-width: 1024px) {
          .ls-back-btn-wrap { margin-left: -60px; }
        }
      `}</style>
    </div>
  );
}
