import BackButton from "@/components/BackButton";
import ContactSection from "@/components/ContactSection";
import SectionLabel from "@/components/SectionLabel";
import FadeIn from "@/components/FadeIn";
import { C } from "@/components/constants";
import { StarIcon, BookSmallIcon, ClockIcon, MapPinIcon, PhoneIcon, MailIcon, UsersIcon, HeartIcon } from "@/components/Icons";
import QuranTreasuresForm from "@/components/QuranTreasuresForm";

export const metadata = {
  title: "Qur’an Treasures Competition — Little Seeds",
  description: "A unique summer journey that encourages children to connect deeply with the Qur’an through memorization, understanding, reflection, and friendly competition.",
};

export default function QuranTreasuresPage() {
  return (
    <div style={{ paddingTop: 80, background: C.cream }}>
      {/* Hero */}
      <section className="ls-res-section" style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.goldLight} 0%, ${C.cream} 100%)`, textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ls-back-btn-wrap" style={{ display: "flex", justifyContent: "flex-start", marginBottom: 20 }}>
            <BackButton />
          </div>
          <FadeIn>
            <SectionLabel text="Summer Competition" color={C.gold} />
            <h1 className="ls-hero-title" style={{ margin: "16px 0 10px" }}>
              Summer Qur’an Treasures Competition
            </h1>
            <h2 className="ls-title" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: C.goldDark, marginBottom: 20 }}>
              رﺣﻠﺔ ﻣﻊ اﻟﻘرآن
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 18, fontWeight: 700, color: C.goldDark, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
              Reflect • Learn • Compete
            </p>
            <p className="ls-lead" style={{ maxWidth: 740, margin: "0 auto" }}>
              A unique summer journey that encourages children to connect deeply with the Qur’an through memorization, understanding, reflection, and friendly competition.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Overview & Levels */}
      <section className="ls-res-section" style={{ padding: "80px 24px", background: C.white }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <FadeIn>
              <h2 className="ls-title" style={{ marginBottom: 16 }}>Program Overview</h2>
              <p className="ls-prose" style={{ maxWidth: 700, margin: "0 auto", fontSize: 17 }}>
                This 8-week weekend program helps children strengthen their relationship with the Qur’an while learning valuable Islamic lessons and developing confidence through a positive and motivating environment.
              </p>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
            {[
              {
                level: "Level 1",
                surah: "Surah Al-Kahf",
                subtitle: "Faith • Trials • Patience",
                desc: "Children will explore the lessons and meanings of Surah Al-Kahf while strengthening memorization and reflection skills.",
                color: C.teal
              },
              {
                level: "Level 2",
                surah: "Surah Yaseen",
                subtitle: "The Heart of the Qur’an",
                desc: "Students will study important themes and meanings from Surah Yaseen while improving recitation and understanding.",
                color: C.gold
              },
              {
                level: "Level 3",
                surah: "Surah Al-Waqi’ah",
                subtitle: "The Reality of the Hereafter",
                desc: "Children will reflect on the powerful reminders and lessons found within Surah Al-Waqi’ah.",
                color: C.coral
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ background: C.cream, padding: 40, borderRadius: 28, border: `1px solid ${item.color}15`, height: "100%" }}>
                  <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: 20, background: item.color + "15", color: item.color, fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 16 }}>
                    {item.level}
                  </div>
                  <h3 className="ls-card-title" style={{ fontSize: 26, marginBottom: 8 }}>{item.surah}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 700, color: item.color, marginBottom: 16 }}>{item.subtitle}</p>
                  <p className="ls-prose">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div style={{
              marginTop: 60,
              background: C.goldLight,
              padding: "48px 40px",
              borderRadius: 32,
              textAlign: "center",
              border: `1px solid ${C.gold}20`,
              boxShadow: "0 10px 40px rgba(0,0,0,0.03)"
            }}>
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
                <div style={{ background: C.white, padding: 14, borderRadius: 50, boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
                  <StarIcon size={36} color={C.gold} />
                </div>
              </div>
              <h3 className="ls-title" style={{ fontSize: 32, marginBottom: 12, color: C.goldDark }}>Final Competition Day</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 22, fontWeight: 800, color: C.text, marginBottom: 12 }}>August 9, 2026</p>
              <div style={{ maxWidth: 600, margin: "0 auto", padding: "16px 24px", background: C.white, borderRadius: 16, border: `1px solid ${C.gold}10` }}>
                <p className="ls-prose" style={{ fontSize: 16, margin: 0, color: C.text }}>
                  Each level will have <span style={{ fontWeight: 700, color: C.goldDark }}>one winner</span> recognized during our final celebration day.
                </p>
              </div>
            </div>
          </FadeIn>
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
                    <ClockIcon size={28} color={C.gold} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Schedule</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>June 19 – August 9</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Saturday & Sunday</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>2:00 PM – 4:00 PM</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <UsersIcon size={28} color={C.teal} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Ages</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>5 – 14 Years</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
                    <MapPinIcon size={28} color={C.coral} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 16 }}>Location</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>1420 River Park Dr, Suite 100</p>
                      <p style={{ margin: 0, fontSize: 14, color: C.textMuted }}>Sacramento, CA 95815</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 16 }}>
                    <PhoneIcon size={28} color={C.gold} />
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
              <QuranTreasuresForm />
            </FadeIn>
          </div>
        </div>
      </section>


      <style>{`
        @media (max-width: 600px) {
          .ls-res-section { padding: 48px 16px !important; }
        }
        @media (min-width: 1024px) {
          .ls-back-btn-wrap { margin-left: -60px; }
        }
      `}</style>
    </div>
  );
}
