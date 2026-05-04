"use client";

import { C } from "./constants";
import FadeIn from "./FadeIn";
import Image from "next/image";
import GoalContactBanner from "./GoalContactBanner";
import ourGoalImage1 from "@/public/our-goal/v1.png";
import ourGoalImage2 from "@/public/our-goal/v2.png";
import ourGoalImage3 from "@/public/our-goal/v3.png";
import ourGoalImage4 from "@/public/our-goal/v4.png";
import ourGoalImage5 from "@/public/our-goal/v5.png";
import ourGoalImage6 from "@/public/our-goal/v6.png";
import bookletImage1 from "@/public/our-goal/goal-image1.png";
import bookletImage2 from "@/public/our-goal/goal-image2.png";
import bookletImage3 from "@/public/our-goal/goal-image3.png";
import bookletImage4 from "@/public/our-goal/goal-image4.png";
import bookletImage5 from "@/public/our-goal/goal-image5.png";
import bookletImage6 from "@/public/our-goal/goal-image6.png";

const goalCards = [
  {
    text: "A faith-based yet inclusive environment welcoming all families",
    icon: <Image src={ourGoalImage1} alt="Our Goal" width={40} height={40} className="our-goal-icon" />,
  },
  {
    text: "A curriculum that balances Islamic values with modern education",
    icon: <Image src={ourGoalImage2} alt="Our Goal" width={40} height={40} className="our-goal-icon" />,
  },
  {
    text: "Teachers who teach with purpose, love, and commitment",
    icon: <Image src={ourGoalImage3} alt="Our Goal" width={44} height={40} className="our-goal-icon" />,
  },
  {
    text: "Flexible programs for full-time and part-time families",
    icon: <Image src={ourGoalImage4} alt="Our Goal" width={54} height={40} className="our-goal-icon" />,
  },
  {
    text: "Integration of technology and STEAM within moral frameworks",
    icon: <Image src={ourGoalImage5} alt="Our Goal" width={50} height={40} className="our-goal-icon" />,
  },
  {
    text: "Strong communication between school and home",
    icon: <Image src={ourGoalImage6} alt="Our Goal" width={50} height={40} className="our-goal-icon" />,
  },
];

const bookletCards = [
  {
    title: "Purpose",
    description: "Our mission, values, and approach to nurturing every child.",
    image: bookletImage1,
  },
  {
    title: "Academics",
    description: "Curriculum overview and teaching methods.",
    image: bookletImage2,
  },
  {
    title: "Faculty",
    description: "Meet our caring teachers and classroom support team.",
    image: bookletImage3,
  },
  {
    title: "Policies",
    description: "Important school guidelines, expectations, and procedures.",
    image: bookletImage4,
  },
  {
    title: "Safety",
    description: "Daily routines that help children feel protected and cared for.",
    image: bookletImage5,
  },
  {
    title: "Schedules",
    description: "Program timing, classroom rhythm, and family planning details.",
    image: bookletImage6,
  },
];

export default function OurGoal() {
  return (
    <>
      <section
        id="our-goal"
        className="our-goal-section"
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
        <div className="our-goal-glow our-goal-glow-left" />
        <div className="our-goal-glow our-goal-glow-right" />

        <div className="our-goal-shell">
          <FadeIn>
            <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Our Goal</h2>
          </FadeIn>

          <FadeIn delay={0.12}>
            <p style={{ color: "#2C2C2C" }} className="our-goal-intro ls-lead">
              We provide a faith-centered, inclusive learning environment rooted in Islamic values and modern education.
            </p>
          </FadeIn>

          <div className="our-goal-grid">
            {goalCards.map((card, index) => (
              <FadeIn delay={0.08 * index} key={card.text}>
                <article className="our-goal-card">
                  <div className="our-goal-icon">{card.icon}</div>
                  <p className="ls-prose">{card.text}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="school-booklet-section" aria-labelledby="school-booklet-title">
        <div className="school-booklet-shell">
          <FadeIn>
            <h2 id="school-booklet-title" style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">School Booklet Overview</h2>
            <p style={{ color: "#2C2C2C" }} className="school-booklet-intro ls-lead">
              The Little Seeds School Booklet provides parents with everything they need to know about our programs and philosophy.
            </p>
          </FadeIn>

          <div className="school-booklet-grid">
            {bookletCards.map((card, index) => (
              <FadeIn delay={0.06 * index} key={card.title}>
                <article className="school-booklet-card">
                  <div className="school-booklet-image-wrap">
                    <Image
                      src={card.image}
                      alt={`${card.title} booklet preview`}
                      fill
                      sizes="(max-width: 620px) calc(100vw - 36px), (max-width: 900px) calc((100vw - 64px) / 2), 455px"
                      className="school-booklet-image"
                    />
                    <span className="school-booklet-hover" />
                  </div>
                  <div className="school-booklet-copy">
                    <h3 style={{ color: "#2C2C2C",fontSize:"14.5px",fontFamily:"DM Sans",fontWeight:"700" }} className="ls-card-title">{card.title}</h3>
                    <p style={{ color: "#2C2C2C",fontSize:"12.5px",fontFamily:"DM Sans",fontWeight:"500" }} className="ls-prose">{card.description}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <GoalContactBanner />

      <style>{`
        .our-goal-shell {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .our-goal-intro {
          color: "#2C2C2C";
          font-size: 14.5px;
          font-weight: 700;
          font-family: "DM Sans", sans-serif;
        }

        .our-goal-shell h2 {
          margin: 0;
        }

        .our-goal-intro {
          max-width: 420px;
          margin: 28px auto 112px;
        }

        .our-goal-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .our-goal-card {
          min-height: 132px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 26px 22px 24px;
          border: 1px solid rgba(47, 127, 125, 0.22);
          border-radius: 9px;
          background: rgba(255, 255, 255, 0.82);
          box-shadow: 0 17px 38px rgba(45, 52, 54, 0.04);
        }

        .our-goal-icon {
          object-fit: contain;
          margin-bottom: 6px;
        }

        .our-goal-card p {
          max-width: 250px;
          margin: 0 auto;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          color: "#3D3D3D";
          font-size: 14.5px;
        }

        @media (max-width: 900px) {
          .our-goal-intro {
            margin-bottom: 64px;
          }

          .our-goal-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 620px) {
          .our-goal-section {
            padding: 94px 14px 48px !important;
          }

          .our-goal-intro {
            margin: 18px auto 36px;
          }

          .our-goal-grid {
            grid-template-columns: 1fr;
          }

          .our-goal-card {
            min-height: 118px;
          }
        }

        .school-booklet-section {
          background: #ffffff;
          padding: 66px 24px 86px;
        }

        .school-booklet-shell {
          width: 1100px;
          margin: 0 auto;
        }

        .school-booklet-shell h2 {
          margin: 0 0 12px;
        }

        .school-booklet-intro {
          font-size: 14.5px;
          font-weight: 700;
          font-family: "DM Sans", sans-serif;
          margin: 0 0 36px;
        }

        .school-booklet-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 455px));
          justify-content: center;
          gap: 22px 24px;
        }

        .school-booklet-card {
          --booklet-image-height: 300px;
          --booklet-image-hover-height: 250px;
          display: block;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        .school-booklet-image-wrap {
          position: relative;
          width: 100%;
          height: var(--booklet-image-height);
          overflow: hidden;
          border-radius: 3px;
          background: #f1eee9;
          box-shadow: 0 12px 30px rgba(24, 29, 31, 0.08);
          transform: translateZ(0);
          transition:
            height 0.55s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.55s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: height;
        }

        .school-booklet-image {
          object-fit: cover;
          transform: scale(1);
          transition:
            transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.75s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: transform;
        }

        .school-booklet-hover {
          position: absolute;
          inset: 0;
          background: #00000099;
          transition: background 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .school-booklet-card:hover .school-booklet-image-wrap,
        .school-booklet-card:focus-within .school-booklet-image-wrap {
          height: var(--booklet-image-hover-height);
          box-shadow: 0 16px 34px rgba(24, 29, 31, 0.12);
        }

        .school-booklet-card:hover .school-booklet-image,
        .school-booklet-card:focus-within .school-booklet-image {
          transform: scale(1.06);
          filter: saturate(1.06) contrast(1.03);
        }

        .school-booklet-card:hover .school-booklet-hover,
        .school-booklet-card:focus-within .school-booklet-hover {
          background: rgba(0, 0, 0, 0.08);
        }

        .school-booklet-copy {
          min-height: 46px;
          padding-top: 8px;
        }

        .school-booklet-card h3 {
          margin: 0;
          color: "#2C2C2C"; 
          font-weight: 700;
          font-family: "DM Sans", sans-serif;
          font-size: clamp(14px, 2vw, 16px);
        }

        .school-booklet-card p {
          max-width: 220px;
          margin: 4px 0 0;
          font-size: 13px;
          color: "#888888";
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          line-height: 1.45;
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(-4px);
          transition:
            opacity 0.38s cubic-bezier(0.22, 1, 0.36, 1),
            max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.38s cubic-bezier(0.22, 1, 0.36, 1);
          pointer-events: none;
        }

        .school-booklet-card:hover p,
        .school-booklet-card:focus-within p {
          opacity: 1;
          max-height: 32px;
          transform: translateY(0);
        }

        @media (max-width: 1460px) {
          .school-booklet-shell {
            max-width: 100%;
          }

          .school-booklet-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .school-booklet-card {
            --booklet-image-height: 300px;
            --booklet-image-hover-height: 250px;
          }
        }

        @media (max-width: 900px) {
          .school-booklet-section {
            padding: 58px 22px 76px;
          }

          .school-booklet-shell {
            width: 100%;
            max-width: 720px;
          }

          .school-booklet-card {
            --booklet-image-height: clamp(240px, 39vw, 300px);
            --booklet-image-hover-height: clamp(205px, 33vw, 250px);
          }

          .school-booklet-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 18px;
          }
        }

        @media (max-width: 620px) {
          .school-booklet-section {
            padding: 44px 14px 56px;
          }

          .school-booklet-intro {
            margin-bottom: 24px;
          }

          .school-booklet-grid {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .school-booklet-card {
            --booklet-image-height: clamp(230px, 78vw, 300px);
            --booklet-image-hover-height: clamp(205px, 68vw, 250px);
          }

          .school-booklet-card h3 {
            font-size: 14px;
          }

          .school-booklet-card p {
            max-width: 100%;
            font-size: 13px;
            opacity: 1;
            max-height: 40px;
            transform: none;
          }
        }

        @media (hover: none) {
          .school-booklet-card .school-booklet-image-wrap {
            height: var(--booklet-image-height);
          }

          .school-booklet-card p {
            opacity: 1;
            max-height: 40px;
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
