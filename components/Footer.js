"use client";

import Link from "next/link";
import Image from "next/image";
import { C, BRANCHES } from "./constants";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const scrollTo = (id) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkStyle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13.5,
    color: "rgba(255,255,255,.65)",
    textDecoration: "none",
    display: "block",
    padding: "4px 0",
    transition: "color .2s",
    background: "none",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
  };

  const colTitle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: C.coral,
    letterSpacing: ".1em",
    textTransform: "uppercase",
    marginBottom: 14,
  };

  return (
    <footer style={{ padding: "56px 24px 32px", background: C.tealDark }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40, marginBottom: 40 }}>
        {/* Brand */}
        <div>
          <Image src="/logo.jpg" alt="Little Seeds" width={180} height={90} style={{ height: 90, width: "auto", marginBottom: 14, objectFit: "contain" }} />
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,.5)", lineHeight: 1.7, margin: 0 }}>
            Faith-centered learning programs for children ages toddler through 6th grade.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
            {[
              { label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
              { label: "Instagram", path: "M16 2H8a6 6 0 00-6 6v8a6 6 0 006 6h8a6 6 0 006-6V8a6 6 0 00-6-6zm4 14a4 4 0 01-4 4H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4z" },
              { label: "Twitter", path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
            ].map((s) => (
              <a key={s.label} href="#" aria-label={s.label} style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .2s" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p style={colTitle}>Quick Links</p>
          <Link href="/" style={linkStyle}>Home</Link>
          <button onClick={() => scrollTo("programs")} style={linkStyle}>Programs</button>
          <Link href="/daycare" style={linkStyle}>Daycare</Link>
          <Link href="/roots" style={linkStyle}>Roots Program</Link>
          <Link href="/enrichment" style={linkStyle}>Enrichment</Link>
          <button onClick={() => scrollTo("about")} style={linkStyle}>About Us</button>
          <button onClick={() => scrollTo("contact")} style={linkStyle}>Enroll Now</button>
        </div>

        {/* Branches */}
        <div>
          <p style={colTitle}>Our Branches</p>
          {BRANCHES.map((b) => (
            <p key={b} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,.6)", margin: "0 0 6px" }}>{b}</p>
          ))}
        </div>

        {/* Headquarters */}
        <div>
          <p style={colTitle}>Headquarters</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>, text: "1234 Faith Avenue, Suite 200\nAustin, TX 78701" },
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, text: "support@littleseeds.edu" },
              { icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>, text: "(512) 555-SEED" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <div style={{ marginTop: 2, flexShrink: 0 }}>{item.icon}</div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13.5, color: "rgba(255,255,255,.6)", margin: 0, lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 20, textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,.35)", margin: 0 }}>
          © {new Date().getFullYear()} Little Seeds · Rooted in Faith · Nurturing Growth · One Seed at a Time
        </p>
      </div>
    </footer>
  );
}
