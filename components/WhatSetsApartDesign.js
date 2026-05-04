"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import setsApartLeft from "@/public/f1.png";
import setsApartRight from "@/public/f2.png";

const apartTexts = [
  "Many Muslim families feel they must choose between quality education and Islamic values. At our school, there is no compromise we offer the best of both worlds: academic excellence, character development, and a deep love for Islam.",
  "We focus on the essential educational foundations children need before entering school, nurturing cognitive, social, and emotional growth in a developmentally appropriate way. At the same time, we remain firmly rooted in Islamic values that teach kindness, respect, responsibility, and strong moral character.",
  "Our goal is to help children develop a genuine understanding and love for Islam by naturally incorporating it into their daily routine. We believe learning - both academic and Islamic - should be experienced with joy, curiosity, and care. Children are guided with love, never force, allowing faith and knowledge to grow in a way that feels meaningful, engaging, and lasting.",
];

export default function WhatSetsApartDesign() {
  const [activeText, setActiveText] = useState(0);

  useEffect(() => {
    const slider = window.setInterval(() => {
      setActiveText((activeText + 1) % apartTexts.length);
    }, 3500);

    return () => window.clearInterval(slider);
  }, [activeText]);

  return (
    <section className="sets-apart-section" aria-labelledby="sets-apart-title">
      <div className="sets-apart-shell">
        <h2 id="sets-apart-title" className="ls-title">What Sets Little Seeds Apart</h2>

        <div className="sets-apart-stage">
          <div className="sets-apart-image sets-apart-image-left">
            <Image src={setsApartLeft} alt="Young child learning with care" fill sizes="(max-width: 768px) 76vw, 320px" priority />
          </div>

          <div className="sets-apart-card" aria-live="polite">
            <div className="sets-apart-text-wrap">
              {apartTexts.map((text, index) => (
                <p className={`ls-prose${activeText === index ? " active" : ""}`} key={text}>
                  {text}
                </p>
              ))}
            </div>

            <div className="sets-apart-dots" aria-label="What sets Little Seeds apart slides">
              {apartTexts.map((text, index) => (
                <button
                  key={text}
                  type="button"
                  className={`sets-apart-dot${activeText === index ? " active" : ""}`}
                  onClick={() => setActiveText(index)}
                  aria-label={`Show slide ${index + 1}`}
                  aria-current={activeText === index ? "true" : undefined}
                />
              ))}
            </div>
          </div>

          <div className="sets-apart-image sets-apart-image-right">
            <Image src={setsApartRight} alt="Smiling student holding books" fill sizes="(max-width: 768px) 42vw, 190px" priority />
          </div>
        </div>

      </div>

      <style>{`
        .sets-apart-section {
          position: relative;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 96px 24px 74px;
        }

        .sets-apart-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .sets-apart-shell h2 {
          margin: 0 0 74px;
        }

        .sets-apart-stage {
          position: relative;
          width: 100%;
          max-width: 1100px;
          height: 315px;
          margin: 0 auto;
        }

        .sets-apart-image {
          position: absolute;
          overflow: hidden;
          border-radius: 4px;
          background: #f4f4f4;
        }

        .sets-apart-image img {
          object-fit: cover;
        }

        .sets-apart-image-left {
          left: 0;
          top: 0;
          width: 453px;
          height: 315px;
        }

        .sets-apart-image-right {
          right: 0px;
          top: 50px;
          width: 280px; 
          height: 200px;
        }

        .sets-apart-card {
          position: absolute;
          z-index: 3;
          left: 50%;
          top: 118px;
          width: 700px;
          min-height: 110px;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 48px 18px;
          border: 1px solid #d7d7d7;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 22px 46px rgba(34, 34, 34, 0.08);
        }

        .sets-apart-text-wrap {
          display: grid;
          width: 100%;
          min-height: 54px;
          place-items: center;
        }

        .sets-apart-card p {
          grid-area: 1 / 1;
          margin: 0;
          text-align: center;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.45s ease, transform 0.45s ease;
          pointer-events: none;
        }

        .sets-apart-card p.active {
          opacity: 1;
          transform: translateY(0);
        }

        .sets-apart-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          margin-top: 14px;
        }

        .sets-apart-dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 999px;
          background: #d6d6d6;
          cursor: pointer;
          transition: width 0.25s ease, background 0.25s ease;
        }

        .sets-apart-dot.active {
          width: 24px;
          background: #2f9b9a;
        }

        @media (max-width: 1024px) {
          .sets-apart-section {
            padding: 72px 20px 60px;
          }

          .sets-apart-stage {
            height: 330px;
            max-width: 760px;
          }

          .sets-apart-image-left {
            left: 0;
            top: 0;
            width: 48%;
            height: 235px;
          }

          .sets-apart-image-right {
            right: 0;
            top: 72px;
            width: 28%;
            height: 126px;
          }

          .sets-apart-card {
            top: 112px;
            width: min(520px, 72vw);
            padding: 22px 30px 18px;
          }

          .sets-apart-card p {
            font-size: 12px;
          }
        }

        @media (max-width: 640px) {
          .sets-apart-shell h2 {
            margin-bottom: 30px;
          }

          .sets-apart-stage {
            height: 560px;
          }

          .sets-apart-image-left {
            width: 100%;
            height: 235px;
          }

          .sets-apart-image-right {
            top: 400px;
            width: 58%;
            height: 128px;
          }

          .sets-apart-card {
            top: 205px;
            width: 92%;
            min-height: 128px;
            padding: 22px 20px;
            border-radius: 16px;
          }

          .sets-apart-dots {
            margin-top: 12px;
          }

          .sets-apart-card p {
            font-size: 12px;
            line-height: 1.45;
          }
        }
      `}</style>
    </section>
  );
}
