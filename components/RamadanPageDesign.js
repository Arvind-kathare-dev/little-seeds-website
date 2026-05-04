"use client";

import Image from "next/image";
import FadeIn from "./FadeIn";
import ramadanHeroImage from "@/public/teacher/teachers-header.png";
import quranImage from "@/public/ramadan/subject1.png";
import arabicImage from "@/public/ramadan/subject2.png";
import characterImage from "@/public/ramadan/subject3.png";
import groupImage1 from "@/public/ramadan/group1.png";
import groupImage2 from "@/public/ramadan/group2.png";
import groupImage3 from "@/public/ramadan/group3.png";
import tuitionImage from "@/public/pictures/pictures5.png";
import ContactSection from "./ContactSection";
import { C } from "./constants";

const subjectCards = [
  {
    title: "Qur'an Studies",
    image: quranImage,
    bg: "#9FBA6212",
    points: [
      "Correct Quran recitation with focus on Makharij",
      "Introduction to Tajweed in a child-friendly approach",
      "Memorization and review of selected short surahs",
      "Individual guidance to build confidence and love for the Quran",
    ],
  },
  {
    title: "Arabic Language",
    image: arabicImage,
    bg: "#FCB1971F",
    points: [
      "Foundational Arabic reading and vocabulary",
      "Interactive lessons supporting Quran comprehension",
      "Age-appropriate activities that encourage engagement and retention",
    ],
  },
  {
    title: "Character Building & Seerah",
    image: characterImage,
    bg: "#F6CF7F17",
    points: [
      "Islamic manners and daily etiquette",
      "Lessons inspired by the lives and character of the Prophets",
      "Focus on kindness, honesty, patience, responsibility, and empathy",
      "Reflection activities that help children apply Islamic values in daily life",
    ],
  },
];

const studentGroups = [
  {
    title: "Prophet Adam Group (4-6)",
    image: groupImage1,
    points: [
      "Faith, leadership, and trust in Allah",
      "Qur'an listening, repetition, short surahs",
      "Arabic letters & sounds",
      "Character stories, role-play, kindness activities",
    ],
  },
  {
    title: "Prophet Yunus Group (6-8)",
    image: groupImage2,
    points: [
      "Integrity, patience, and resilience",
      "Qur'an reading - basic tajweed",
      "Arabic reading & simple sentences",
      "Character: patience, dua, discussion",
    ],
  },
  {
    title: "Prophet Ibrahim Group (8-12)",
    image: groupImage3,
    points: [
      "Mercy, character, and compassion",
      "Qur'an advanced recitation & tajweed",
      "Arabic reading, writing & vocabulary",
      "Character: leadership, faith, reflection",
    ],
  },
];

export default function RamadanPageDesign() {
  return (
    <>
      <section className="ramadan-page-section">
        <div className="ramadan-page-shell">
          <FadeIn>
            <div className="ramadan-page-hero">
              <Image
                src={ramadanHeroImage}
                alt="Little Seeds Ramadan program"
                fill
                priority
                sizes="(max-width: 768px) calc(100vw - 36px), 1100px"
                className="ramadan-page-hero-image"
              />
              <span className="ramadan-page-hero-overlay" />

              <div className="ramadan-page-hero-content">
                <h1 className="ls-title ls-on-dark">
                  Saturday &amp; Sunday 
                  <span className="border-right"></span>
                   <span>11:00 AM - 3:00 PM</span>
                </h1>
                <div className="ramadan-page-tags">
                  <span>Ages Required 4 - 12</span>
                  <span>Registration Required</span>
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="ramadan-page-content">
            <FadeIn delay={0.08}>
              <h2 className="ls-title">Little Seeds Ramadan Program</h2>
            </FadeIn>

            <FadeIn delay={0.16}>
              <div className="ramadan-page-copy">
                <p className="ls-lead">
                  The Little Seeds Ramadan Program is a carefully designed weekend program that nurtures children’s faith, learning, and character during the blessed month of Ramadan. Through structured learning, reflection, and community engagement, children build a meaningful connection to the Quran and Islamic values in a warm and supportive environment.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="ramadan-subjects-section">
        <div className="ramadan-subjects-shell">
          <FadeIn>
            <h2 className="ls-title">Subjects Offered</h2>
          </FadeIn>

          <div className="ramadan-subjects-grid">
            {subjectCards.map((subject, index) => (
              <FadeIn delay={index * 0.08} key={subject.title}>
                <article className="ramadan-subject-card" style={{ background: subject.bg }}>
                  <div className="ramadan-subject-image">
                    <Image src={subject.image} alt={subject.title} fill sizes="(max-width: 700px) 100vw, 300px" />
                  </div>
                  <h3 className="ls-card-title">{subject.title}</h3>
                  <ul>
                    {subject.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ramadan-groups-section">
        <div className="ramadan-groups-shell">
          <FadeIn>
            <h2 className="ls-title">Student Groups</h2>
          </FadeIn>

          <div className="ramadan-groups-list">
            {studentGroups.map((group, index) => (
              <FadeIn delay={index * 0.08} key={group.title}>
                <article className="ramadan-group-item">
                  <div className="ramadan-group-image">
                    <Image src={group.image} alt={group.title} fill sizes="(max-width: 700px) 100vw, 180px" />
                  </div>
                  <div>
                    <h3 className="ls-card-title">{group.title}</h3>
                    <ul>
                      {group.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="ramadan-location-section">
        <div className="ramadan-map-wrap">
          <iframe
            title="Little Seeds location map"
            src="https://maps.google.com/maps?q=1420%20River%20Park%20Dr%20Suite%20100%20Sacramento%20CA%2095815&t=m&z=8&output=embed&iwloc=near"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="ramadan-map-iframe"
          />

          <aside className="ramadan-visit-card">
            <h2 className="ls-title">Visit Us</h2>
            <p className="ls-prose">
              1420 River Park Dr, Suite 100,
              <br />
              Sacramento, CA 95815, USA
              <br />
              Across from families in the Sacramento area.
            </p>
          </aside>
        </div>
      </section>

      <section className="ramadan-tuition-section">
        <div className="ramadan-tuition-shell">
          <FadeIn>
            <div className="ramadan-tuition-image">
              <Image
                src={tuitionImage}
                alt="Teacher leading a Ramadan classroom"
                fill
                sizes="(max-width: 700px) calc(100vw - 36px), 360px"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div className="ramadan-tuition-copy">
              <h2 className="ls-title">Tuition &amp; Enrollment</h2>
              <div className="ramadan-price">
                <strong>$300</strong>
                <span>/ per child</span>
                <small>(Program Fee)</small>
              </div>
              <p className="ls-prose">The fee includes:</p>
              <ul className="ls-prose">
                <li>Full Ramadan weekend program</li>
                <li>Instructional materials and supplies</li>
                <li>Structured learning, assemblies, and guided Salah</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactSection/>

      <style>{`
        .border-right {
          padding-right: 32px;
          height: 30px;
          margin-right: 32px;
          display: inline-block;
          position: relative;
        }
        .border-right::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: -5px;
          width: 5px;
          height: 100%;
          background: #ffffff;
        }

        .ramadan-page-copy,
        .ramadan-page-tags span,
        .ramadan-subject-card ul,
        .ramadan-group-item ul,
        .ramadan-visit-card p,
        .ramadan-price,
        .ramadan-tuition-copy p,
        .ramadan-tuition-copy ul {
          font-family: "DM Sans", sans-serif;
        }

        .ramadan-page-section {
          min-height: 100vh;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background:
            radial-gradient(circle at 14% 70%, rgba(47, 127, 125, 0.08), transparent 30%),
            radial-gradient(circle at 86% 42%, rgba(232, 155, 135, 0.07), transparent 28%),
            #fbfdfa;
          padding: 96px 24px 92px;
        }

        .ramadan-page-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ramadan-page-hero {
          position: relative;
          width: 100%;
          height: 300px;
          overflow: hidden;
          border-radius: 16px;
          background: #d8ded9;
        }

        .ramadan-page-hero-image {
          object-fit: cover;
          object-position: center 42%;
        }

        .ramadan-page-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.48);
          pointer-events: none;
        }

        .ramadan-page-hero-content {
          position: absolute;
          inset: 0;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 24px;
        }

        .ramadan-page-hero-content h1 {
          margin: 0 0 24px;
        }

        .ramadan-page-hero-content h1 span {
          font-weight: 500;
        }

        .ramadan-page-tags {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .ramadan-page-tags span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 8px 18px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
          backdrop-filter: blur(6px);
        }

        .ramadan-page-content {
          display: grid;
          grid-template-columns: 0.92fr 1.18fr;
          align-items: start;
          gap: 96px;
          padding-top: 42px;
        }

        .ramadan-page-content h2 {
          margin: 0;
          max-width: 420px;
        }

        .ramadan-page-copy {
          max-width: 590px;
        }

        .ramadan-page-copy p {
          margin: 0;
        }

        @media (max-width: 900px) {
          .ramadan-page-section {
            padding: 92px 22px 74px;
          }

          .ramadan-page-hero {
            height: 260px;
          }

          .ramadan-page-content {
            grid-template-columns: 1fr;
            gap: 22px;
            padding-top: 34px;
          }

          .ramadan-page-copy {
            max-width: 680px;
          }
        }

        @media (max-width: 620px) {
          .ramadan-page-section {
            padding: 82px 14px 52px;
          }

          .ramadan-page-hero {
            height: 230px;
            border-radius: 12px;
          }

          .ramadan-page-hero-content h1 {
            margin-bottom: 18px;
          }

          .ramadan-page-tags {
            gap: 10px;
          }

          .ramadan-page-tags span {
            min-height: 34px;
            padding: 8px 14px;
            font-size: 12px;
          }

          .ramadan-page-content {
            padding-top: 24px;
          }

        }

        .ramadan-subjects-section {
          background: #ffffff;
          padding: 76px 24px 82px;
        }

        .ramadan-subjects-shell {
          width: 100%;
          max-width: 1100px; 
          margin: 0 auto;
        }

        .ramadan-subjects-shell h2,
        .ramadan-groups-shell h2 {
          margin: 0 0 32px;
          text-align: center;
        }

        .ramadan-subjects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .ramadan-subject-card {
          height: 100%;
          overflow: hidden;
          padding: 12px 12px 20px;
          border: 1px solid #00000026;
          border-radius: 12px;
          box-shadow: 0 14px 28px rgba(31, 37, 39, 0.04);
        }

        .ramadan-subject-image {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 14px;
          background: #e8eee9;
        }

        .ramadan-subject-image img,
        .ramadan-group-image img {
          object-fit: cover;
        }

        .ramadan-subject-card h3,
        .ramadan-group-item h3 {
          margin: 0 0 12px;
        }

        .ramadan-subject-card ul,
        .ramadan-group-item ul {
          margin: 0;
          padding-left: 16px;
          font-size: 14px;
          line-height: 1.65;
          color: ${C.textMuted};
        }

        .ramadan-subject-card li,
        .ramadan-group-item li {
          padding-left: 2px;
          margin-bottom: 6px;
        }

        .ramadan-groups-section {
          background: #f2f8f0;
          padding: 72px 24px 84px;
        }

        .ramadan-groups-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 48px;
          align-items: start;
        }

        .ramadan-groups-shell h2 {
          text-align: left;
          margin-bottom: 0;
        }

        .ramadan-groups-list {
          display: grid;
          gap: 28px;
          // padding-left: 42px;
          // border-left: 1px solid rgba(47, 127, 125, 0.2);
        }

        .ramadan-group-item {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 28px;
          align-items: start;
        }

        .ramadan-group-image {
          position: relative;
          width: 160px;
          height: 160px;
          overflow: hidden;
          border-radius: 8px;
          background: #e8eee9;
        }


        .ramadan-location-section {
          background: #ffffff;
        }

        .ramadan-map-wrap {
          position: relative;
          width: 100%;
          height: 330px;
          overflow: hidden;
          background: #c7e4e8;
        }

        .ramadan-map-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
          border: 0;
          filter: saturate(0.9);
          z-index: 1;
        }

        .ramadan-visit-card {
          position: absolute;
          top: 34px;
          right: 24px;
          z-index: 2;
          width: 240px;
          height:80%;
          padding: 28px 26px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 18px 42px rgba(31, 37, 39, 0.14);
        }

        .ramadan-visit-card h2 {
          margin: 0 0 24px;
        }

        .ramadan-visit-card p {
          margin-top: 100px;
        }

        .ramadan-tuition-section {
          background: #ffffff;
          padding: 76px 24px 88px;
        }

        .ramadan-tuition-shell {
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 360px 1fr;
          gap: 72px;
          align-items: center;
        }

        .ramadan-tuition-image {
          position: relative;
          width: 360px;
          height: 230px;
          overflow: hidden;
          border-radius: 8px;
          background: #e8eee9;
        }

        .ramadan-tuition-image img {
          object-fit: cover;
        }

        .ramadan-tuition-copy h2 {
          margin: 0 0 18px;
        }

        .ramadan-price {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-bottom: 28px;
          color: ${C.text};
        }

        .ramadan-price strong {
          color: ${C.teal};
          font-size: 34px;
          font-weight: 700;
          line-height: 1;
        }

        .ramadan-price span {
          color: ${C.teal};
          font-size: 13px;
          font-weight: 500;
        }

        .ramadan-price small {
          margin-left: 5px;
          color: ${C.text};
          font-size: 13px;
          font-weight: 600;
        }

        .ramadan-tuition-copy p.ls-prose {
          margin: 0 0 10px;
          font-weight: 700;
          color: ${C.text};
        }

        .ramadan-tuition-copy ul {
          margin: 0;
          padding-left: 16px;
          font-size: 14px;
          line-height: 1.72;
          color: ${C.textMuted};
        }

        @media (max-width: 900px) {
          .ramadan-subjects-section,
          .ramadan-groups-section {
            padding: 64px 22px 72px;
          }

          .ramadan-subjects-grid {
            grid-template-columns: 1fr;
          }

          .ramadan-subject-card {
            min-height: auto;
          }

          .ramadan-subject-image {
            height: 210px;
          }

          .ramadan-groups-shell {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .ramadan-groups-list {
            padding-left: 0;
            border-left: none;
          }

          .ramadan-map-wrap {
            height: 360px;
          }

          .ramadan-visit-card {
            top: 24px;
            right: 22px;
          }

          .ramadan-tuition-section {
            padding: 64px 22px 72px;
          }

          .ramadan-tuition-shell {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 680px;
          }

          .ramadan-tuition-image {
            width: min(100%, 420px);
            height: 260px;
          }
        }

        @media (max-width: 620px) {
          .ramadan-subjects-section,
          .ramadan-groups-section {
            padding: 48px 14px 56px;
          }

          .ramadan-subjects-shell h2,
          .ramadan-groups-shell h2 {
            margin-bottom: 28px;
          }

          .ramadan-subject-image {
            height: 170px;
          }

          .ramadan-group-item {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .ramadan-group-image {
            width: 100%;
            height: 180px;
          }

          .ramadan-map-wrap {
            height: 430px;
          }

          .ramadan-visit-card {
            left: 14px;
            right: 14px;
            top: 22px;
            width: auto;
            min-height: auto;
            padding: 22px 20px;
            border-radius: 16px;
          }

          .ramadan-tuition-section {
            padding: 48px 14px 56px;
          }

          .ramadan-tuition-image {
            width: 100%;
            height: 220px;
          }

          .ramadan-price {
            flex-wrap: wrap;
            margin-bottom: 22px;
          }

        }
      `}</style>
    </>
  );
}
