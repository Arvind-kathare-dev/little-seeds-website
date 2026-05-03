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
    title: "Teachers Rooted in Loving and Prophetic Mercy",
    text: "Our teachers guide with warmth, patience, and mercy, creating classrooms where children feel safe, respected, and loved.",
    color: "#9FBA6214",
  },
  {
    icon: choosing2,
    title: "Educators with Established Educational Values",
    text: "Each teacher is chosen for strong teaching values, professionalism, and a genuine commitment to helping children grow with confidence.",
    color: "#5F9B9014",
  },
  {
    icon: choosing3,
    title: "Committed to Continuous Learning and Growth",
    text: "Our team continues to learn, improve, and develop so every child receives meaningful care and high-quality instruction.",
    color: "#F6D8902E",
  },
  {
    icon: choosing4,  
    title: "Loving, patient, and mindful in the classroom",
    text: "We look for teachers who bring calm energy, thoughtful guidance, and a sincere love for children into every classroom.",
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
      <section className="teachers-page-section">
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
              <h1>OUR TEAM</h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="teachers-page-copy">
                <p>
                  Our teachers don’t just teach; they nurture with love, following the example of Prophet Muhammad (peace be upon him), who guided with mercy, patience, and understanding.
                </p>
                <p>
                  We believe education is not a job, but a calling; a sacred trust between teachers, children, and families.
                </p>
                <p>
                  At Little Seeds, our teachers do more than teach. They nurture, inspire, and guide each child with love and care. Following the example of Prophet Muhammad (peace be upon him), mercy, patience, and understanding are central to our teaching environment where children can grow spiritually, academically, and emotionally.
                </p>
                <p>
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
              <h2>Choosing Our Teachers</h2>
              <p>
                At Little Seeds, we carefully select teachers who are more than educators; they are mentors, guides, and role models who inspire children every day. Our team embodies the following qualities:
              </p>
              <h3>In order to meet them:</h3>
              <p>
                We look for educators with a heart for children and a deep respect for faith, character, learning, and family partnership.
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
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
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
              <h2>Teachers</h2>
              {teachersText.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <GoalContactBanner/>

      <style>{`
        .teachers-page-section {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background:
            radial-gradient(circle at 16% 68%, rgba(47, 127, 125, 0.08), transparent 30%),
            radial-gradient(circle at 84% 42%, rgba(232, 155, 135, 0.07), transparent 28%),
            #fbfdfa;
          padding: 96px 24px 72px 24px;
        }

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
          pointer-events: none;
        }

        .teachers-page-content {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          align-items: start;
          gap: 96px;
          padding-top: 42px;
        }

        .teachers-page-content h1 {
          margin: 0;
          color: ${C.text};
          font-size: 36px;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 32px;
        }

        .teachers-page-copy {
          max-width: 560px;
          color: #293437;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.68;
          letter-spacing: -0.018em;
        }

        .teachers-page-copy p {
          margin: 0 0 18px;
        }

        .teachers-page-copy p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .teachers-page-section {
            padding: 92px 22px 74px;
          }

          .teachers-page-hero {
            height: 230px;
          }

          .teachers-page-content {
            grid-template-columns: 1fr;
            gap: 24px;
            padding-top: 34px;
          }

          .teachers-page-copy {
            max-width: 680px;
          }
        }

        @media (max-width: 620px) {
          .teachers-page-section {
            padding: 82px 14px 52px;
          }

          .teachers-page-hero {
            height: 190px;
            border-radius: 8px;
          }

          .teachers-page-content {
            padding-top: 24px;
          }

          .teachers-page-content h1 {
            font-size: 28px;
          }

          .teachers-page-copy {
            font-size: 12.5px;
            line-height: 1.62;
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
          gap: 86px;
          align-items: start;
        }

        .choosing-teachers-intro h2 {
          margin: 0 0 20px;
          color: #202729;
          font-size: 36px;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 32px;
        }

        .choosing-teachers-intro h3 {
          margin: 24px 0 8px;
          color: #202729;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.2;
        }

        .choosing-teachers-intro p {
          margin: 0;
          max-width: 420px;
          color: #3a4547;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.65;
          letter-spacing: -0.018em;
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
          margin: 0 0 8px;
          color: #202729;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.25;
        }

        .choosing-teachers-card p {
          margin: 0;
          color: #4a5557;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.55;
        }

        .teachers-training-section {
          background: #f2f8f0;
          padding: 78px 24px 86px;
        }

        .teachers-training-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 76px;
          align-items: center;
        }

        .teachers-training-image {
          position: relative;
          width: 360px;
          height: 300px;
          overflow: hidden;
          border-radius: 10px;
          background: #e7ece7;
        }

        .teachers-training-image img {
          object-fit: cover;
        }

        .teachers-training-copy {
          max-width: 560px;
        }

        .teachers-training-copy h2 {
          margin: 0 0 26px;
          color: #202729;
          font-size: 36px;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 32px;
        }

        .teachers-training-copy p {
          margin: 0 0 18px;
          color: #3a4547;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.66;
          letter-spacing: -0.018em;
        }

        .teachers-training-copy p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .choosing-teachers-section,
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
            font-size: 26px;
            margin-bottom: 20px;
          }

          .choosing-teachers-intro h3 {
            font-size: 14px;
          }

          .choosing-teachers-card {
            grid-template-columns: 30px 1fr;
            gap: 14px;
            padding: 18px 16px;
          }

          .choosing-teachers-card p,
          .teachers-training-copy p {
            font-size: 12.5px;
            line-height: 1.62;
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
