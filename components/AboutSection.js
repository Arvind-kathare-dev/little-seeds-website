"use client";

import Image from "next/image";
import { C } from "./constants";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";
import { HeartIcon, StarIcon, BookSmallIcon } from "./Icons";

const CARDS = [
  { title: "Our Mission", text: "To provide a safe, faith-centered space where children develop academically, spiritually, and socially — supported by dedicated educators and a values-driven curriculum.", icon: <HeartIcon size={32} />, bg: C.coralLight },
  { title: "Our Vision", text: "To be the most trusted name in faith-based early childhood and youth education — where every family feels welcome and every seed planted grows into something beautiful.", icon: <StarIcon size={32} />, bg: C.goldLight },
  { title: "Our Programs", text: "From full-day daycare to Islamic education through our Roots Program, to year-round enrichment — Little Seeds offers flexible, high-quality programming for real families.", icon: <BookSmallIcon size={32} />, bg: C.tealLight },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "90px 24px", background: C.warm }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Image src="/logo-transparent.png" alt="" width={140} height={70} style={{ height: 70, width: "auto", margin: "0 auto 12px", display: "block" }} />
            <SectionLabel text="About Us" color={C.teal} />
            <h2 className="ls-title" style={{ margin: "10px 0 16px" }}>Rooted in Faith, Growing Together</h2>
            <p className="ls-lead" style={{ maxWidth: 680, margin: "0 auto" }}>
              Little Seeds was founded on a simple belief: every child deserves a nurturing environment where faith, character, and curiosity grow hand in hand. We are a community-driven learning center serving families across all backgrounds.
            </p>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
          {CARDS.map((c, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ background: c.bg, borderRadius: 18, padding: "28px 24px", height: "100%" }}>
                <div style={{ marginBottom: 12 }}>{c.icon}</div>
                <h3 className="ls-card-title" style={{ margin: "0 0 10px" }}>{c.title}</h3>
                <p className="ls-prose" style={{ lineHeight: 1.7, margin: 0 }}>{c.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
