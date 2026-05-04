"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { C } from "./constants";
import teamImage from "@/public/teacher/teachers-header.png";
import teacherClassImage from "@/public/teacher/teachers-section.png";
import choosing1 from "@/public/teacher/choosing1.png";
import choosing2 from "@/public/teacher/choosing2.png";
import choosing3 from "@/public/teacher/choosing3.png";
import choosing4 from "@/public/teacher/choosing4.png";
import GoalContactBanner from "./GoalContactBanner";

const choosingCards = [
  {
    icon: choosing1,    
    title: "Passionate About Teaching and Shaping Young Hearts",
    text: "Our teachers genuinely love working with children and are dedicated to nurturing not just minds, but hearts. They inspire curiosity, confidence, and a lifelong love for learning.",
    color: "#9FBA6214",
  },
  {
    icon: choosing2,
    title: "Spiritually grounded and emotionally intelligent",
    text: "Guided by faith and emotional awareness, our educators model patience, empathy, and understanding. They help children grow spiritually while supporting their social and emotional development.",
    color: "#5F9B9014",
  },
  {
    icon: choosing3,
    title: "Committed to Continuous Learning and Growth",
    text: "Our teachers see education as a calling, not a job. They continually enhance their skills through professional development, staying up to date with the latest teaching practices and child development research.",
    color: "#F6D8902E",
  },
  {
    icon: choosing4,  
    title: "Loving, patient, and creative in the classroom",
    text: "Every lesson is delivered with warmth, patience, and creativity. Our educators use innovative approaches to make learning engaging, meaningful, and joyful for every child.",
    color: "#FFF7F5",
  },
];

const teachersText = [
  "We invest deeply in continuous professional development, ensuring our teachers are equipped with the latest educational strategies while remaining grounded in Islamic pedagogy. By blending modern teaching methods such as STEAM, inquiry-based learning, and Common Core standards with faith-centered principles, our educators create classrooms that are both academically rigorous and morally nurturing.",
  "Our teachers receive ongoing training to integrate creativity, critical thinking, and character development into every lesson, fostering an environment where children thrive intellectually, socially, and spiritually. This commitment ensures that each child experiences meaningful, engaging learning while building a strong foundation in Islamic values, preparing them to navigate the modern world with confidence and integrity.",
];

export default function TeachersPageDesign() {
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
          padding: "120px 0px 80px", 
        }}
      >
        <div className="teachers-page-shell">
          <FadeIn>
            <div className="teachers-page-hero">
              <Image
                src={teamImage}
                alt="Little Seeds teachers working together"
                fill
                priority
                sizes="(max-width: 768px) calc(100vw - 36px), 1100px"
                className="teachers-page-hero-image"
              />
              <span className="teachers-page-hero-overlay" />
            </div>
          </FadeIn>

          <div className="teachers-page-content">
            <FadeIn delay={0.08}>
              <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Our Team</h2>  
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="teachers-page-copy">
                <p className="ls-body">
                  Our teachers don’t just teach; they nurture with love, following the example of Prophet Muhammad (peace be upon him), who guided with mercy, patience, and understanding.
                </p>
                <p className="ls-body">
                  We believe education is not a job, but a calling; a sacred trust between teachers, children, and families.
                </p>
                <p className="ls-body">
                  At Little Seeds, our teachers do more than teach. They nurture, inspire, and guide each child with love and care. Following the example of Prophet Muhammad (peace be upon him), mercy, patience, and understanding are central to our teaching environment where children can grow spiritually, academically, and emotionally.
                </p>
                <p className="ls-body">
                  We believe that education is not just a job; it is a calling, a sacred trust between teachers, children, and families. Our educators are chosen for their passion, enthusiasm, and commitment to making a difference. Compassionate and mindful, young Muslims learn love, empathy, and respect in a guided, purposeful way, and the goal of helping each child reach their highest potential while fostering a genuine love for learning and for Islam.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="choosing-teachers-section">
        <div className="choosing-teachers-shell">
          <FadeIn>
            <div className="choosing-teachers-intro">
              <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Choosing Our Teachers</h2>
              <p className="ls-lead" style={{ maxWidth: 420, color: "#2C2C2C",fontWeight:"600" }}>
                At Little Seeds, we carefully select teachers who are more than educators; they are mentors, guides, and role models who inspire children every day. Our team embodies the following qualities:
              </p>
              <p style={{ color: "#2C2C2C",fontWeight:"500",paddingTop:"12px",paddingBottom:"12px",fontSize:"14.5px" }}>Role Models of Faith and Character:</p>
              <p className="ls-prose">
              Beyond academics, our teachers embody Islamic values in their actions and interactions, inspiring children to live with integrity, kindness, and respect.
              </p>
            </div>
          </FadeIn>

          <div className="choosing-teachers-cards">
            {choosingCards.map((card, index) => (
              <FadeIn delay={index * 0.08} key={card.title}>
                <article className="choosing-teachers-card" style={{ background: card.color }}>
                  <span>
                    <Image src={card.icon} alt="" width={24} height={24} />
                  </span>
                  <div>
                    <p style={{ color: "#2C2C2C",fontWeight:"700",fontSize:"16px",paddingBottom:"12px" }}>{card.title}</p>
                    <p className="ls-prose">{card.text}</p>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="teachers-training-section">
        <div className="teachers-training-shell">
          <FadeIn>
            <div className="teachers-training-image">
              <Image
                src={teacherClassImage}
                alt="Teacher reading with children"
                fill
                sizes="(max-width: 700px) calc(100vw - 36px), 360px"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="teachers-training-copy">
              <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Teachers</h2>
              {teachersText.map((text) => (
                <p key={text} className="ls-body">{text}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <GoalContactBanner/>

      <style>{`
        .teachers-page-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .teachers-page-hero {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 20px;
          background: #d8ded9;
        }

        .teachers-page-hero-image {
          object-fit: cover;
          object-position: center 42%;
        }

        .teachers-page-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.44);
          pointer-events: none;
        }

        .teachers-page-content {
          display: grid;
          grid-template-columns: 0.85fr 1.45fr;
          align-items: start;
          gap: 84px;
          padding-top: 44px;
        }

        .teachers-page-content h1 {
          margin: 0;
        }

        .teachers-page-copy {
          max-width: 560px;
          text-align: left;
        }

        .teachers-page-copy p.ls-body {
          color: "#2C2C2C";
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14.5px;
          margin: 0 0 18px;
        }

        .teachers-page-copy p.ls-body:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .teachers-page-hero {
            height: 230px;
          }

          .teachers-page-content {
            grid-template-columns: 1fr;
            gap: 22px;
            padding-top: 34px;
          }

          .teachers-page-copy {
            max-width: 680px;
          }
        }

        @media (max-width: 620px) {
          .teachers-page-hero {
            height: 190px;
            border-radius: 4px;
          }

          .teachers-page-content {
            padding-top: 24px;
          }
        }

        .choosing-teachers-section {
          background: #ffffff;
          padding: 88px 24px 92px;
        }

        .choosing-teachers-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.9fr 1.25fr;
          gap: 52px;
          align-items: start;
        }

        .choosing-teachers-intro h2 {
          font-size: 36px;
          font-family: "Playfair Display", sans-serif;
          font-weight: 700;
          margin: 0 0 32px;
        }

        .choosing-teachers-intro h3 {
          margin: 24px 0 8px;
        }

        .choosing-teachers-intro p {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14.5px;
          max-width: 420px;
        }

        .choosing-teachers-intro p.ls-prose {
          margin-top: 0;
        }

        .choosing-teachers-cards {
          display: grid;
          gap: 18px;
        }

        .choosing-teachers-card {
          display: grid;
          grid-template-columns: 38px 1fr;
          gap: 18px;
          align-items: start;
          padding: 20px 24px;
          border-radius: 10px;
          box-shadow: 0 12px 28px rgba(31, 37, 39, 0.035);
        }

        .choosing-teachers-card span {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
        }

        .choosing-teachers-card span img {
          width: 24px;
          height: 24px;
          object-fit: contain;
        }

        .choosing-teachers-card h3 {
          font-family: "DM Sans", sans-serif;
          font-weight: 700;
          margin: 0 0 8px;
        }

        .choosing-teachers-card p {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          color: "#0000008A";
          font-size: 14.5px;
        }

        .teachers-training-section {
          background: #f2f8f0;
          padding: 88px 24px;
        }

        .teachers-training-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 360px) 1fr;
          gap: 84px;
          align-items: center;
        }

        .teachers-training-image {
          position: relative;
          width: 100%;
          max-width: 360px;
          height: 300px;
          overflow: hidden;
          border-radius: 20px;
          background: #e7ece7;
          box-shadow: 0 14px 28px rgba(31, 37, 39, 0.08);
        }

        .teachers-training-image img {
          object-fit: cover;
        }

        .teachers-training-copy {
          max-width: 560px;
          text-align: left;
        }

        .teachers-training-copy h2 {
          font-size: 36px;
          font-family: "Playfair Display", sans-serif;
          font-weight: 700;
          margin: 0 0 28px;
        }

        .teachers-training-copy p.ls-body {
          color: "#777777";
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14.5px;
          margin: 0 0 18px;
        }

        .teachers-training-copy p.ls-body:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .choosing-teachers-section {
            padding: 70px 22px;
          }

          .teachers-training-section {
            padding: 70px 22px;
          }

          .choosing-teachers-shell,
          .teachers-training-shell {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .choosing-teachers-intro p,
          .teachers-training-copy {
            max-width: 680px;
          }

          .teachers-training-image {
            width: min(100%, 420px);
            height: 300px;
          }
        }

        @media (max-width: 620px) {
          .choosing-teachers-section,
          .teachers-training-section {
            padding: 48px 14px;
          }

          .choosing-teachers-shell,
          .teachers-training-shell {
            gap: 28px;
          }

          .choosing-teachers-intro h2,
          .teachers-training-copy h2 {
            margin-bottom: 20px;
          }

          .choosing-teachers-card {
            grid-template-columns: 30px 1fr;
            gap: 14px;
            padding: 18px 16px;
          }


          .teachers-training-image {
            width: 100%;
            height: 245px;
          }
        }
      `}</style>
    </>
  );
}
