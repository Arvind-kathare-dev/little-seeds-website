"use client";

import BackButton from "@/components/BackButton";
import AboutSection from "@/components/AboutSection";
import SectionLabel from "@/components/SectionLabel";
import { C } from "@/components/constants";
import Link from "next/link";
import { EnrichmentIllustration } from "@/components/Illustrations";
import { SunIcon, CalendarIcon, ClockIcon } from "@/components/Icons";

const SUB_SECTIONS = [
  {
    icon: <SunIcon size={38} />,
    title: "Summer Program",
    color: C.gold,
    bg: C.goldLight,
    desc: "Make summer unforgettable with outdoor adventures, arts and crafts, STEM explorations, field trips, and faith-based activities.",
    tags: ["Outdoor play", "Arts & STEM", "Field trips", "Weekly enrollment"],
    href: "/summer-camp",
  },
  {
    icon: <CalendarIcon size={38} />,
    title: "Off-Track Program",
    color: C.teal,
    bg: C.tealLight,
    desc: "When school is out, Little Seeds is in. Structured activities, games, projects, and social time during school holidays.",
    tags: ["School break coverage", "Structured activities", "Drop-in friendly"],
  },
  {
    icon: <ClockIcon size={38} />,
    title: "Before & After School",
    color: C.sage,
    bg: C.sageLight,
    desc: "Safe, supervised care with homework help, snack time, free play, and enrichment — perfectly timed around the school day.",
    tags: ["Morning & afternoon", "Homework help", "Safe & supervised"],
  },
];

export default function EnrichmentPageDesign() {
  return (
    <div style={{ paddingTop: 80 }}>
      {/* Hero */}
      <section style={{ padding: "60px 24px 80px", background: `linear-gradient(170deg, ${C.sagePale} 0%, ${C.cream} 100%)` }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="ls-back-btn-wrap">
            <BackButton />
          </div>
          <div style={{ display: "flex", gap: 48, alignItems: "center", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 400px" }}>
              <SectionLabel text="Enrichment Programs" color={C.sage} />
              <h1 className="ls-title" style={{ margin: "10px 0 14px" }}>
                Year-Round Growth & Fun
              </h1>
              <p className="ls-lead" style={{ margin: "0 0 24px" }}>
                Our Enrichment Programs support families year-round with flexible, engaging options — summer break, off-track weeks, or before and after school care.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {["Ages 3 – 6th Grade", "Flexible scheduling", "Year-round"].map((t) => (
                  <span key={t} style={{ background: C.sage + "20", color: C.sageDark, padding: "8px 16px", borderRadius: 20, fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 280px", maxWidth: 340 }}>
              <EnrichmentIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* Sub-sections */}
      <section style={{ padding: "60px 24px 40px", background: C.white }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          {SUB_SECTIONS.map((sub, i) => (
            <div
              key={i}
              style={{
                marginBottom: 36,
                background: sub.bg,
                borderRadius: 20,
                padding: "32px 28px",
                border: `1px solid ${sub.color}12`,
                display: "flex",
                gap: 28,
                alignItems: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: C.white,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  boxShadow: `0 4px 16px ${sub.color}12`,
                }}
              >
                {sub.icon}
              </div>
              <div style={{ flex: 1, minWidth: 240 }}>
                <h3 className="ls-card-title" style={{ fontSize: 22, margin: "0 0 10px" }}>{sub.title}</h3>
                <p className="ls-prose" style={{ fontSize: 14.5, lineHeight: 1.7, margin: "0 0 14px" }}>{sub.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {sub.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: C.white,
                        color: sub.color,
                        border: `1px solid ${sub.color}30`,
                        padding: "5px 14px",
                        borderRadius: 16,
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {sub.href && (
                  <div style={{ marginTop: 24, display: "flex", justifyContent: "flex-end" }}>
                    <Link
                      href={sub.href}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: sub.color,
                        color: C.white,
                        padding: "10px 24px",
                        borderRadius: 24,
                        textDecoration: "none",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14,
                        fontWeight: 600,
                        transition: "opacity .3s",
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.opacity = 0.9)}
                      onMouseOut={(e) => (e.currentTarget.style.opacity = 1)}
                    >
                      View More
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
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
