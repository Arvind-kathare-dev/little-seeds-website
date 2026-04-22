"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { C } from "./constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinkStyle = {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    color: C.textMuted,
    padding: "4px 0",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(251,248,244,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(47,127,125,.08)" : "1px solid transparent",
        transition: "all .35s ease",
        padding: scrolled ? "8px 0" : "14px 0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
          <Image src="/logo-transparent.png" alt="Little Seeds" width={120} height={42} style={{ height: 42, width: "auto", objectFit: "contain" }} priority />
        </Link>

        <div className="ls-nav-d" style={{ display: "flex", gap: 26, alignItems: "center" }}>
          <button onClick={() => scrollTo("programs")} style={navLinkStyle}>Programs</button>
          <button onClick={() => scrollTo("about")} style={navLinkStyle}>About</button>
          <button onClick={() => scrollTo("contact")} style={navLinkStyle}>Contact</button>
          <button
            onClick={() => scrollTo("enroll")}
            style={{
              background: C.teal,
              color: C.white,
              border: "none",
              padding: "10px 24px",
              borderRadius: 28,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all .3s",
            }}
          >
            Enroll Now
          </button>
        </div>

        <button
          className="ls-nav-m"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke={C.teal} strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" stroke={C.teal} strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke={C.teal} strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="18" x2="21" y2="18" stroke={C.teal} strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: C.cream, padding: "12px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
          <Link href="/" style={{ ...navLinkStyle, fontSize: 16, color: C.text, textDecoration: "none" }}>Home</Link>
          <button onClick={() => scrollTo("programs")} style={{ ...navLinkStyle, fontSize: 16, color: C.text, textAlign: "left" }}>Programs</button>
          <button onClick={() => scrollTo("about")} style={{ ...navLinkStyle, fontSize: 16, color: C.text, textAlign: "left" }}>About</button>
          <button onClick={() => scrollTo("contact")} style={{ ...navLinkStyle, fontSize: 16, color: C.text, textAlign: "left" }}>Contact</button>
          <button onClick={() => scrollTo("enroll")} style={{ ...navLinkStyle, fontSize: 16, color: C.text, textAlign: "left" }}>Enroll Now</button>
        </div>
      )}
    </nav>
  );
}
