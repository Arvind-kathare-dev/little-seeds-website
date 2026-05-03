"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { C } from "./constants";
import galleryImage1 from "@/public/pictures/pictures1.png";
import galleryImage2 from "@/public/pictures/pictures2.png";
import galleryImage3 from "@/public/pictures/pictures3.png";
import galleryImage4 from "@/public/pictures/pictures4.png";
import galleryImage5 from "@/public/pictures/pictures5.png";
import galleryImage6 from "@/public/pictures/pictures6.png";
import galleryImage7 from "@/public/pictures/pictures7.png";
import galleryImage8 from "@/public/pictures/pictures8.png";
import GoalContactBanner from "./GoalContactBanner";

const galleryItems = [
  { image: galleryImage1, alt: "Children learning together around a classroom table" },
  { image: galleryImage2, alt: "Teacher reading with young students" },
  { image: galleryImage3, alt: "Children making colorful crafts together" },
  { image: galleryImage4, alt: "Students walking together outside school" },
  { image: galleryImage5, alt: "Teacher standing in front of students" },
  { image: galleryImage6, alt: "Students gathered inside the mosque" },
  { image: galleryImage7, alt: "Smiling Little Seeds students" },
  { image: galleryImage8, alt: "Student writing during a lesson" },
];

export default function PicturesPageDesign() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = activeIndex === null ? null : galleryItems[activeIndex];

  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((current) => (current === null ? 0 : (current - 1 + galleryItems.length) % galleryItems.length));
  const showNext = () => setActiveIndex((current) => (current === null ? 0 : (current + 1) % galleryItems.length));

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <>
    <section className="pictures-page-section">
      <div className="pictures-page-shell">
        <FadeIn>
          <h1>Pictures</h1>
        </FadeIn>

        <div className="pictures-grid">
          {galleryItems.map((item, index) => (
            <FadeIn delay={index * 0.04} key={item.alt}>
              <button className="pictures-card" type="button" onClick={() => setActiveIndex(index)} aria-label={`Open picture ${index + 1}`}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 620px) calc(50vw - 22px), (max-width: 900px) 22vw, 210px"
                  className="pictures-card-image"
                />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {activeItem && (
        <div className="pictures-lightbox" role="dialog" aria-modal="true" aria-label="Picture preview">
          <button className="pictures-lightbox-backdrop" type="button" onClick={closeLightbox} aria-label="Close picture preview" />

          <div className="pictures-lightbox-stage">
            <div className="pictures-lightbox-image-wrap">
              <Image
                src={activeItem.image}
                alt={activeItem.alt}
                fill
                priority
                sizes="(max-width: 760px) 78vw, 520px"
                className="pictures-lightbox-image"
              />
            </div>

            <div className="pictures-lightbox-controls">
              <button className="pictures-lightbox-arrow" type="button" onClick={showPrevious} aria-label="Previous picture">
                ‹
              </button>
              <button className="pictures-lightbox-arrow" type="button" onClick={showNext} aria-label="Next picture">
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .pictures-page-shell h1 {
          font-family: "Playfair Display", serif;
        }

        .pictures-page-section,
        .pictures-lightbox-arrow {
          font-family: "DM Sans", sans-serif;
        }

        .pictures-page-section {
          min-height: 100vh;
          background: #fbfdfa;
          padding: 112px 24px 92px;
        }

        .pictures-page-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .pictures-page-shell h1 {
          margin: 0;
          color: ${C.text};
          font-size: 36px;
          font-weight: 600;
          line-height: 1;
          margin-bottom: 42px;
        }

        .pictures-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .pictures-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          display: block;
          overflow: hidden;
          padding: 0;
          border: none;
          border-radius: 0;
          background: #e8eee9;
          cursor: pointer;
        }

        .pictures-card-image {
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1), filter 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .pictures-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.35s ease;
        }

        .pictures-card:hover .pictures-card-image,
        .pictures-card:focus-visible .pictures-card-image {
          transform: scale(1.06);
          filter: saturate(1.04);
        }

        .pictures-card:hover::after,
        .pictures-card:focus-visible::after {
          background: rgba(0, 0, 0, 0.16);
        }

        .pictures-lightbox {
          position: fixed;
          inset: 0;
          z-index: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 56px 24px;
        }

        .pictures-lightbox-backdrop {
          position: absolute;
          inset: 0;
          border: none;
          background: #0C0C0CF0;
          backdrop-filter: none;
          cursor: pointer;
        }

        .pictures-lightbox-stage {
          position: relative;
          z-index: 1;
          width: min(72vw, 360px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .pictures-lightbox-image-wrap {
          position: relative;
          width: min(72vw, 460px);
          height: min(72vw, 460px);
          max-height: 72vh;
          background: #222;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.5);
        }

        .pictures-lightbox-image {
          object-fit: cover;
        }

        .pictures-lightbox-close {
          position: absolute;
          top: -14px;
          right: -14px;
          z-index: 2;
          width: 28px;
          height: 28px;
          border: none;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.16);
          color: #ffffff;
          font-size: 21px;
          line-height: 1;
          cursor: pointer;
        }

        .pictures-lightbox-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 12px;
        }

        .pictures-lightbox-arrow {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.38);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }

        .pictures-lightbox-arrow:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.62);
          transform: scale(1.06);
        }

        @media (max-width: 900px) {
          .pictures-page-section {
            padding: 104px 22px 76px;
          }

          .pictures-page-shell {
            max-width: 620px;
          }

          .pictures-grid {
            gap: 12px;
          }
        }

        @media (max-width: 620px) {
          .pictures-page-section {
            padding: 86px 14px 56px;
          }

          .pictures-page-shell h1 {
            font-size: 28px;
            margin-bottom: 26px;
          }

          .pictures-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .pictures-lightbox-stage {
            width: 78vw;
          }

          .pictures-lightbox-image-wrap {
            width: 78vw;
            height: 78vw;
            max-height: 68vh;
          }

          .pictures-lightbox-arrow {
            width: 32px;
            height: 32px;
          }
        }
      `}</style>
    </section>

    <GoalContactBanner/>
    </>
  );
}
