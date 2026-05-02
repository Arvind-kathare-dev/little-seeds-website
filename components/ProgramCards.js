"use client";

import Link from "next/link";
import { C } from "./constants";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { DaycareIllustration, RootsIllustration, EnrichmentIllustration } from "./Illustrations";

const PROGRAMS = [
  { id: "daycare", title: "Daycare Program", subtitle: "Toddlers – Kindergarten", tagline: "For Muslim & non-Muslim families", desc: "A safe, loving environment where young children learn, play, and grow through nurturing care and early learning.", color: C.coral, Illustration: DaycareIllustration },
  { id: "roots", title: "Roots Program", subtitle: "Ages 3 – 14", tagline: "Designed for Muslim children", desc: "Ground your child in faith with our Islamic education programs — from Ramadan studies to Sunday School.", color: C.teal, Illustration: RootsIllustration },
  { id: "enrichment", title: "Enrichment Programs", subtitle: "Ages 3 – 6th Grade", tagline: "Year-round flexible programs", desc: "Keep your child engaged and growing all year with Summer, Off-Track, and Before & After School programs.", color: C.sage, Illustration: EnrichmentIllustration },
];

export default function ProgramCards() {
  return (
    <section id="programs" style={{ padding: "80px 24px 60px", background: C.white }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionLabel text="Our Programs" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 700, color: C.text, margin: "10px 0 0" }}>Three Pathways, One Purpose</h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, color: C.textMuted, marginTop: 8 }}>Every program is built around care, community, and growth.</p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))", gap: 28 }}>
          {PROGRAMS.map((prog, i) => (
            <FadeIn key={prog.id} delay={i * 0.12}>
              <Link
                href={`/${prog.id}`}
                style={{
                  borderRadius: 22,
                  overflow: "hidden",
                  textDecoration: "none",
                  border: `1px solid ${prog.color}20`,
                  background: C.white,
                  transition: "all .4s cubic-bezier(.22,1,.36,1)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ height: 200, overflow: "hidden" }}><prog.Illustration /></div>
                <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 700, color: prog.color, letterSpacing: ".1em", textTransform: "uppercase" }}>{prog.tagline}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: C.text, margin: "8px 0 4px" }}>{prog.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: prog.color, margin: "0 0 10px" }}>{prog.subtitle}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14.5, lineHeight: 1.65, color: C.textMuted, margin: 0, flex: 1 }}>{prog.desc}</p>
                  <div style={{ marginTop: 18, display: "flex", alignItems: "center", gap: 6, fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 600, color: prog.color }}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 16 16"><path d="M6 4l4 4-4 4" stroke={prog.color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
