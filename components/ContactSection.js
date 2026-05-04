"use client";

import { useState } from "react";
import Image from "next/image";
import { C, BRANCHES } from "./constants";
import FadeIn from "./FadeIn";
import { HeartIcon } from "./Icons";

export default function ContactSection() {
  const emptyChild = () => ({ name: "", age: "", program: "" });
  const [children, setChildren] = useState([emptyChild()]);
  const [parent, setParent] = useState({ name: "", email: "", phone: "", branch: "" });
  const [submitted, setSubmitted] = useState(false);

  const addChild = () => setChildren((p) => [...p, emptyChild()]);
  const removeChild = (idx) => setChildren((p) => p.filter((_, i) => i !== idx));
  const updateChild = (idx, field, val) => setChildren((p) => p.map((c, i) => (i === idx ? { ...c, [field]: val } : c)));

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "13px 16px",
    border: "1.5px solid rgba(47,127,125,.14)",
    borderRadius: 11,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14.5,
    color: C.text,
    marginBottom: 12,
    outline: "none",
    background: C.cream,
    boxSizing: "border-box",
    transition: "border-color .3s",
  };

  const selectStyle = {
    ...inputStyle,
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236B7B7D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 16px center",
    paddingRight: 40,
  };

  const focus = (e) => (e.target.style.borderColor = C.teal);
  const blur = (e) => (e.target.style.borderColor = "rgba(47,127,125,.14)");

  const sectionTitle = {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    color: C.teal,
    letterSpacing: ".08em",
    textTransform: "uppercase",
  };

  return (
    <section id="enroll" style={{ padding: "90px 24px", background: `linear-gradient(170deg, ${C.tealLight} 0%, ${C.cream} 100%)`, scrollMarginTop: 96 }}>
      <div id="contact" style={{ position: "relative", top: -96 }} />
      <div style={{ maxWidth: 620, margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <Image src="/logo-transparent.png" alt="" width={120} height={56} style={{ height: 56, width: "auto", margin: "0 auto 12px", display: "block" }} />
          <h2 className="ls-title" style={{ margin: "0 0 8px" }}>Ready to Enroll?</h2>
          <p className="ls-lead" style={{ marginBottom: 36 }}>
            Fill out the form and our team will help you find the perfect fit for your family.
          </p>
        </FadeIn>

        <FadeIn delay={0.12}>
          {submitted ? (
            <div style={{ background: C.white, borderRadius: 18, padding: 36, border: `1px solid ${C.teal}18` }}>
              <HeartIcon size={44} color={C.sage} />
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 17, fontWeight: 600, color: C.teal, marginTop: 14 }}>Thank you! We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <div style={{ background: C.white, borderRadius: 20, padding: "32px 28px", boxShadow: "0 8px 36px rgba(47,127,125,.07)", border: `1px solid ${C.teal}0D`, textAlign: "left" }}>
              {/* Parent info */}
              <p style={{ ...sectionTitle, marginBottom: 12 }}>Parent / Guardian</p>
              <input placeholder="Full name" value={parent.name} onChange={(e) => setParent((p) => ({ ...p, name: e.target.value }))} style={inputStyle} onFocus={focus} onBlur={blur} />
              <input placeholder="Email address" type="email" value={parent.email} onChange={(e) => setParent((p) => ({ ...p, email: e.target.value }))} style={inputStyle} onFocus={focus} onBlur={blur} />
              <input placeholder="Phone number" type="tel" value={parent.phone} onChange={(e) => setParent((p) => ({ ...p, phone: e.target.value }))} style={inputStyle} onFocus={focus} onBlur={blur} />

              {/* Branch */}
              <p style={{ ...sectionTitle, marginBottom: 10, marginTop: 20 }}>Select Branch</p>
              <select value={parent.branch} onChange={(e) => setParent((p) => ({ ...p, branch: e.target.value }))} style={{ ...selectStyle, color: parent.branch ? C.text : C.textMuted }} onFocus={focus} onBlur={blur}>
                <option value="" disabled>Choose a branch...</option>
                {BRANCHES.map((b) => (<option key={b} value={b}>{b}</option>))}
              </select>

              {/* Children */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, marginBottom: 12 }}>
                <p style={{ ...sectionTitle, margin: 0 }}>Child Information</p>
                <button
                  onClick={addChild}
                  style={{
                    background: C.teal,
                    color: C.white,
                    border: "none",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    fontSize: 20,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    lineHeight: 1,
                    flexShrink: 0,
                    transition: "all .2s",
                  }}
                  title="Add another child"
                >
                  +
                </button>
              </div>

              {children.map((child, idx) => (
                <div key={idx} style={{ background: idx % 2 === 0 ? C.tealPale : C.coralPale, borderRadius: 14, padding: "16px 16px 4px", marginBottom: 12, position: "relative" }}>
                  {children.length > 1 && (
                    <button
                      onClick={() => removeChild(idx)}
                      style={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: C.textMuted,
                        fontSize: 18,
                        fontWeight: 700,
                        lineHeight: 1,
                        width: 24,
                        height: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                      }}
                      title="Remove child"
                    >
                      &times;
                    </button>
                  )}
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: C.textMuted, margin: "0 0 8px" }}>Child {idx + 1}</p>
                  <input placeholder="Child's name" value={child.name} onChange={(e) => updateChild(idx, "name", e.target.value)} style={{ ...inputStyle, background: C.white }} onFocus={focus} onBlur={blur} />
                  <div style={{ display: "flex", gap: 10 }}>
                    <input placeholder="Age" value={child.age} onChange={(e) => updateChild(idx, "age", e.target.value)} style={{ ...inputStyle, background: C.white, flex: "0 0 80px" }} onFocus={focus} onBlur={blur} />
                    <select
                      value={child.program}
                      onChange={(e) => updateChild(idx, "program", e.target.value)}
                      style={{ ...selectStyle, background: C.white, flex: 1, backgroundPosition: "right 12px center", paddingRight: 34, color: child.program ? C.text : C.textMuted }}
                      onFocus={focus}
                      onBlur={blur}
                    >
                      <option value="" disabled>Program...</option>
                      <option>Daycare Program</option>
                      <option>Roots Program</option>
                      <option>Enrichment Programs</option>
                    </select>
                  </div>
                </div>
              ))}

              <button
                onClick={() => setSubmitted(true)}
                style={{
                  width: "100%",
                  padding: "15px 0",
                  borderRadius: 12,
                  background: C.teal,
                  color: C.white,
                  border: "none",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all .3s",
                  marginTop: 8,
                }}
              >
                Submit Enrollment Inquiry
              </button>
            </div>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
