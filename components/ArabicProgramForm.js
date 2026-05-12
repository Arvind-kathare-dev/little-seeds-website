"use client";

import { useState } from "react";
import { C } from "./constants";

export default function ArabicProgramForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "",
    arabicLevel: "Beginner",
    experience: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for registering for the Arabic Program! We will contact you soon.");
    console.log("Arabic Program Registration Data:", formData);
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
      <h2 className="ls-title" style={{ fontSize: 28, marginBottom: 8 }}>Register for Arabic Program</h2>
      <p className="ls-prose" style={{ fontSize: 14, marginBottom: 40 }}>Reserve your child’s spot for our engaging Arabic learning journey.</p>
      
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
        <div className="ls-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div>
            <input type="text" placeholder="Child's full name" style={inputStyle} required />
          </div>
          <div>
            <input type="number" placeholder="Age" style={inputStyle} required />
          </div>
        </div>

        <h3 style={labelStyle}>Arabic Level</h3>
        <div style={{ background: C.tealPale, padding: "16px 24px", borderRadius: 16, display: "flex", gap: 32, marginBottom: 24 }}>
          {["Beginner", "Intermediate"].map((level) => (
            <label key={level} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, color: C.text }}>
              <input 
                type="radio" 
                name="arabicLevel" 
                value={level} 
                checked={formData.arabicLevel === level}
                onChange={(e) => setFormData({...formData, arabicLevel: e.target.value})}
                style={{ width: 18, height: 18, accentColor: C.teal }} 
              />
              {level}
            </label>
          ))}
        </div>

        <h3 style={labelStyle}>Previous Arabic Experience</h3>
        <textarea 
          placeholder="Briefly describe your child's previous experience with Arabic..." 
          style={{ ...inputStyle, height: 100, resize: "none" }}
        ></textarea>

        <h3 style={labelStyle}>Additional Notes</h3>
        <textarea 
          placeholder="Allergies, accommodations, learning support, etc." 
          style={{ ...inputStyle, height: 100, resize: "none" }}
        ></textarea>

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
