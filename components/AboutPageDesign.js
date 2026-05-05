"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import { C } from "./constants";
import aboutHeroImage from "@/public/about/about-header.png";
import teacherImage1 from "@/public/about/teacher1.png";
import teacherImage2 from "@/public/about/teacher2.png";
import teacherImage3 from "@/public/about/teacher3.png";
import teacherImage4 from "@/public/about/teacher4.png";
import teacherImage5 from "@/public/about/teacher5.png";
import teacherImage6 from "@/public/about/teacher6.png";
import GoalContactBanner from "./GoalContactBanner";

const teacherText = [
  "We invest deeply in continuous professional development, ensuring our teachers are equipped with the latest educational strategies while remaining grounded in Islamic pedagogy. By blending modern teaching methods such as STEAM, inquiry-based learning, and Common Core standards with faith-centered principles, our educators create classrooms that are both academically rigorous and morally nurturing.",
  "Our teachers receive ongoing training to integrate creativity, critical thinking, and character development into every lesson, fostering an environment where children thrive intellectually, socially, and spiritually. This commitment ensures that each child experiences meaningful, engaging learning while building a strong foundation in Islamic values, preparing them to navigate the modern world with confidence and integrity.",
];

export default function AboutPageDesign() {
  return (
    <>
      <section className="about-page-section">
        <div className="about-page-shell">
          <FadeIn>
            <div className="about-page-hero">
              <Image
                src={aboutHeroImage}
                alt="Little Seeds children learning together"
                fill
                priority
                sizes="(max-width: 768px) calc(100vw - 36px), 1100px"
                className="about-page-hero-image"
              />
              <span className="about-page-hero-overlay" />
            </div>
          </FadeIn>

          <div className="about-page-content">
            <FadeIn delay={0.08}>
              <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Who We Are</h2>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="about-page-copy">
                <p className="ls-lead">
                Little Seeds is a faith-centered learning community rooted in Islam, guided by love, and committed to nurturing the whole child. Our identity is built on balance where strong Islamic values, character development, and academic excellence come together without compromise. We believe children learn best when they feel safe, respected, and inspired, which is why we teach Islam with understanding and compassion, not pressure or fear. While proudly grounded in our Muslim identity, we warmly welcome families of all backgrounds, creating an environment of respect, inclusion, and purpose. At Little Seeds, we are more than a school we are a place where faith is lived daily, knowledge is nurtured intentionally, and children grow into confident, kind, and mindful individuals prepared for both this world and the next.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        id="about-teachers"
        className="about-teachers-band"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(168deg, ${C.cream} 0%, ${C.tealLight} 50%, ${C.coralPale} 100%)`,
          position: "relative",
          overflow: "hidden",
          padding: "88px 24px",
        }}
      >
        <div className="teachers-shell teachers-shell-image-left">
          <FadeIn>
            <div className="teachers-collage teachers-collage-left">
              <div className="teachers-image teachers-image-wide">
                <Image src={teacherImage1} alt="Little Seeds classroom learning" fill sizes="(max-width: 900px) 44vw, 270px" />
              </div>
              <div className="teachers-image teachers-image-small">
                <Image src={teacherImage2} alt="Young Little Seeds student" fill sizes="(max-width: 900px) 32vw, 160px" />
              </div>
              <div className="teachers-image teachers-image-tall">
                <Image src={teacherImage3} alt="Little Seeds teacher with students" fill sizes="(max-width: 900px) 36vw, 180px" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="teachers-copy">
              <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Teachers</h2>
              {teacherText.map((text) => (
                <p key={text} className="ls-body">{text}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="teachers-section teachers-section-green">
        <div className="teachers-shell teachers-shell-image-right">
          <FadeIn>
            <div className="teachers-copy">
              <h2 style={{ color: "#2C2C2C",fontSize:"36px",fontFamily:"Playfair Display",fontWeight:"700" }} className="ls-title">Teachers</h2>
              {teacherText.map((text) => (
                <p key={text} className="ls-body">{text}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="teachers-collage teachers-collage-right">
              <div className="teachers-image teachers-image-wide">
                <Image src={teacherImage4} alt="Students learning together" fill sizes="(max-width: 900px) 44vw, 270px" />
              </div>
              <div className="teachers-image teachers-image-small">
                <Image src={teacherImage5} alt="Little Seeds families and teachers" fill sizes="(max-width: 900px) 32vw, 160px" />
              </div>
              <div className="teachers-image teachers-image-tall">
                <Image src={teacherImage6} alt="Little Seeds classroom teacher" fill sizes="(max-width: 900px) 36vw, 180px" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <GoalContactBanner/>

      <style>{`
        .about-page-section {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background: #f3faf7;
          padding: 98px 24px 90px;
        }

        .about-page-copy,
        .about-page-tags span,
        .about-page-subject-card ul,
        .about-page-group-item ul,
        .about-page-visit-card p,
        .about-page-price,
        .about-page-tuition-copy p,
        .about-page-tuition-copy ul {
          font-family: "DM Sans", sans-serif;
        }

        .about-page-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .about-page-hero {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 20px;
          background: #d8ded9;
        }

        .about-page-hero-image {
          object-fit: cover;
          object-position: center 36%;
        }

        .about-page-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.44);
          pointer-events: none;
        }

        .about-page-content {
          display: grid;
          grid-template-columns: 0.85fr 1.45fr;
          gap: 84px;
          padding: 44px 0 0;
          align-items: start;
        }

        .about-page-content h2 {
          color:"#2D3436"
          margin: 0;
        }

        .about-page-copy p {
          color: "#797979";
          font-size: 14.5px;
          // font-weight: 500; 
          margin: 0 0 16px;
        }

        .about-page-copy p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .about-page-section {
            padding: 92px 22px 72px;
          }

          .about-page-hero {
            height: 220px;
          }

          .about-page-content {
            grid-template-columns: 1fr;
            gap: 22px;
            padding-top: 34px;
          }

          .about-page-copy {
            max-width: 680px;
          }
        }

        @media (max-width: 620px) {
          .about-page-section {
            padding: 82px 14px 50px;
          }

          .about-page-hero {
            height: 180px;
            border-radius: 4px;
          }

          .about-page-content {
            padding-top: 24px;
          }

        }

        .teachers-section {
          padding: 88px 24px;
        }

        .teachers-section-white {
          background: #ffffff;
        }

        .teachers-section-green {
          background: #f2f8f0;
        }

        .teachers-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.08fr;
          align-items: center;
          gap: 84px;
        }

        .teachers-shell-image-right {
          grid-template-columns: 1.08fr 1fr;
        }

        .teachers-collage {
          position: relative;
          width: 100%;
          max-width: 410px;
          height: 330px;
        }

        .teachers-collage-left {
          justify-self: center;
        }

        .teachers-collage-right {
          justify-self: center;
        }

        .teachers-image {
          position: absolute;
          overflow: hidden;
          background: #e8e8e8;
          box-shadow: 0 14px 28px rgba(31, 37, 39, 0.08);
        }

        .teachers-image img {
          object-fit: cover;
        }

        .teachers-image-wide {
          top: 0;
          left: 16px;
          width: 380px;
          height: 134px;
        }

        .teachers-image-small {
          left: 0;
          top: 152px;
          width: 200px;
          height: 150px;
        }

        .teachers-image-tall {
          right: 12px;
          bottom: 0;
          width: 184px;
          height: 178px;
        }

        .teachers-copy {
          max-width: 560px;
          color:"#2D3436"
          text-align: left;
        }

        .teachers-copy h2 {
          margin: 0 0 28px;
        }

        .teachers-copy p.ls-body {
          color: "#797979";
          margin: 0 0 18px;
          // font-weight: 500;
          font-size: 14.5px;
        }

        .teachers-copy p.ls-body:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 900px) {
          .teachers-section {
            padding: 70px 22px;
          }

          .teachers-shell,
          .teachers-shell-image-right {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .teachers-shell-image-left .teachers-collage {
            order: 1;
          }

          .teachers-shell-image-left .teachers-copy {
            order: 2;
          }

          .teachers-shell-image-right .teachers-copy {
            order: 2;
          }

          .teachers-shell-image-right .teachers-collage {
            order: 1;
          }

          .teachers-collage,
          .teachers-collage-left,
          .teachers-collage-right {
            justify-self: center;
            max-width: 410px;
          }

          .teachers-copy {
            max-width: 680px;
          }
        }

        @media (max-width: 620px) {
          .teachers-section {
            padding: 48px 14px;
          }

          .teachers-collage {
            max-width: 330px;
            height: 270px;
          }

          .teachers-image-wide {
            left: 14px;
            width: 220px;
            height: 102px;
          }

          .teachers-image-small {
            top: 126px;
            width: 128px;
            height: 108px;
          }

          .teachers-image-tall {
            right: 8px;
            width: 150px;
            height: 146px;
          }

          .teachers-copy h2 {
            margin-bottom: 18px;
          }
        }
      `}</style>
    </>
  );
}
