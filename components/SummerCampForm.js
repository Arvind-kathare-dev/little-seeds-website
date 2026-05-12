"use client";

import { useState } from "react";
import { C } from "./constants";

export default function SummerCampForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    gradeLevel: "",
    programSelection: [],
    emergencyName: "",
    emergencyPhone: "",
    notes: ""
  });

  const handleCheckboxChange = (val) => {
    setFormData(prev => {
      const current = prev.programSelection;
      if (current.includes(val)) {
        return { ...prev, programSelection: current.filter(i => i !== val) };
      } else {
        return { ...prev, programSelection: [...current, val] };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for registering! We will contact you soon.");
    console.log("Registration Data:", formData);
  };

  const inputStyle = {
    width: "100%",
    padding: "16px 20px",
    borderRadius: 14,
    border: "1px solid transparent",
    background: C.warm,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 15,
    marginBottom: 16,
    outline: "none",
    transition: "all .3s",
    color: C.text,
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 12,
    fontWeight: 800,
    color: C.teal,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 12,
    marginTop: 8,
  };

  return (
    <div id="register" className="ls-form-card" style={{ background: C.white, padding: "48px 40px", borderRadius: 32, boxShadow: "0 20px 60px rgba(0,0,0,0.06)", border: `1px solid ${C.teal}10` }}>
      <h2 className="ls-title" style={{ fontSize: 28, marginBottom: 8 }}>Register for 2026</h2>
      <p className="ls-prose" style={{ fontSize: 14, marginBottom: 40 }}>Space is limited. Please complete the form below to reserve your spot.</p>
      
      <form onSubmit={handleSubmit}>
        <h3 style={labelStyle}>Parent / Guardian</h3>
        <input type="text" placeholder="Full name" style={inputStyle} required />
        
        <div className="ls-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <input type="email" placeholder="Email address" style={inputStyle} required />
          </div>
          <div>
            <input type="tel" placeholder="Phone number" style={inputStyle} required />
          </div>
        </div>

        <h3 style={labelStyle}>Student Information</h3>
        <input type="text" placeholder="Child's full name" style={inputStyle} required />
        
        <div className="ls-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <input type="number" placeholder="Age" style={inputStyle} required />
          </div>
          <div>
            <input type="text" placeholder="Grade level (e.g. 2nd Grade)" style={inputStyle} required />
          </div>
        </div>

        <h3 style={labelStyle}>Program Selection</h3>
        <div style={{ background: C.tealPale, padding: 24, borderRadius: 20, marginBottom: 24 }}>
          <div style={{ display: "grid", gap: 14 }}>
            {[
              { id: "s1", label: "Session 1 (June 22 – July 17)" },
              { id: "s2", label: "Session 2 (July 20 – August 14)" },
              { id: "full", label: "Full 8-Week Program" },
              { id: "ext", label: "Extended Day Add-On (3pm–4pm)" },
            ].map((opt) => (
              <label key={opt.id} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.text }}>
                <input type="checkbox" onChange={() => handleCheckboxChange(opt.id)} style={{ width: 18, height: 18, accentColor: C.teal }} />
                {opt.label}
              </label>
            ))}
          </div>
        </div>

        <h3 style={labelStyle}>Emergency Contact</h3>
        <div className="ls-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <input type="text" placeholder="Contact name" style={inputStyle} required />
          </div>
          <div>
            <input type="tel" placeholder="Emergency phone" style={inputStyle} required />
          </div>
        </div>

        <h3 style={labelStyle}>Additional Notes</h3>
        <textarea placeholder="Allergies, medical needs, special accommodations, etc." style={{ ...inputStyle, height: 100, resize: "none" }}></textarea>

        <button 
          type="submit"
          className="ls-form-submit"
          style={{ 
            width: "100%", 
            background: C.teal, 
            color: C.white, 
            border: "none", 
            padding: "20px", 
            borderRadius: 16, 
            fontSize: 16, 
            fontWeight: 700, 
            fontFamily: "'DM Sans', sans-serif",
            cursor: "pointer",
            transition: "all .3s",
            marginTop: 10,
            boxShadow: `0 8px 24px ${C.teal}30`
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "translateY(-2px)";
            e.target.style.boxShadow = `0 12px 30px ${C.teal}40`;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = `0 8px 24px ${C.teal}30`;
          }}
        >
          Submit Registration
        </button>
      </form>

      <style>{`
        @media (max-width: 600px) {
          .ls-form-card { padding: 32px 24px !important; }
          .ls-form-grid { grid-template-columns: 1fr !important; gap: 0 !important; }
        }
        input:focus, textarea:focus {
          background: ${C.white} !important;
          border-color: ${C.teal}40 !important;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }
      `}</style>
    </div>

  );
}
