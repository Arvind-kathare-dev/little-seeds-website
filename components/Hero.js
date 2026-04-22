"use client";

import Image from "next/image";
import { C } from "./constants";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(168deg, ${C.cream} 0%, ${C.tealLight} 50%, ${C.coralPale} 100%)`,
        position: "relative",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ position: "absolute", top: -100, right: -60, width: 360, height: 360, borderRadius: "50%", background: C.coral, opacity: 0.05 }} />
      <div style={{ position: "absolute", bottom: -40, left: -80, width: 300, height: 300, borderRadius: "50%", background: C.sage, opacity: 0.07 }} />

      <div style={{ textAlign: "center", maxWidth: 760, position: "relative", zIndex: 1 }}>
        <FadeIn>
          <Image src="/logo.jpg" alt="Little Seeds" width={260} height={130} style={{ height: 130, width: "auto", margin: "0 auto 16px", display: "block" }} priority />
        </FadeIn>

        <FadeIn delay={0.12}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(34px, 6vw, 60px)", fontWeight: 700, lineHeight: 1.12, color: C.text, margin: "0 0 8px" }}>
            Nurturing Every{" "}
            <span style={{ color: C.teal, position: "relative" }}>
              Little Seed
              <svg style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 10 }} viewBox="0 0 200 10" preserveAspectRatio="none">
                <path d="M2 7Q50 1 100 5T198 3" stroke={C.coral} strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.25}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(15px, 2.2vw, 19px)", color: C.textMuted, lineHeight: 1.7, maxWidth: 540, margin: "16px auto 36px" }}>
            Faith-centered learning programs for children ages toddler through 6th grade. Daycare, Islamic education, and enrichment — all under one nurturing roof.
          </p>
        </FadeIn>

        <FadeIn delay={0.38}>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })} style={{ background: C.teal, color: C.white, border: "none", padding: "15px 34px", borderRadius: 30, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", boxShadow: "0 4px 20px rgba(47,127,125,.25)", transition: "all .3s" }}>
              Explore Programs
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ background: "rgba(47,127,125,.08)", color: C.teal, border: "1.5px solid rgba(47,127,125,.2)", padding: "15px 34px", borderRadius: 30, fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 600, cursor: "pointer", transition: "all .3s" }}>
              Enroll Now
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
