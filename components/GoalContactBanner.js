"use client";

import FadeIn from "./FadeIn";

export default function GoalContactBanner() {
  return (
    <section className="goal-contact-banner" aria-label="Little Seeds contact information">
      <div className="goal-contact-overlay" />

      <FadeIn>
        <div className="goal-contact-content">
          <h2>Plant faith and knowledge. Grow purpose and light.</h2>

          <div className="goal-contact-card">
            <a className="goal-contact-item" href="tel:+14086066742">
              <span className="goal-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M8.6 5.3 10 8.6c.2.5.1 1.1-.3 1.5l-1 1c1.1 2.1 2.9 3.9 5 5l1-1c.4-.4 1-.5 1.5-.3l3.3 1.4c.6.2.9.8.8 1.4l-.5 3c-.1.7-.7 1.2-1.4 1.2C9.3 21.7 2.3 14.7 2.3 5.6c0-.7.5-1.3 1.2-1.4l3-.5c.6-.1 1.2.2 1.4.8Z" />
                </svg>
              </span>
              <span>
                <small>Phone no.</small>
                <strong>+1 (408) 606-6742</strong>
              </span>
            </a>

            <a className="goal-contact-item" href="mailto:info@littleseeds.kids">
              <span className="goal-contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M4 6h16v12H4z" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </span>
              <span>
                <small>Email</small>
                <strong style={{ textDecoration: "underline" }}>info@littleseeds.kids</strong>
              </span>
            </a>
          </div>
        </div>
      </FadeIn>

      <style>{`
        .goal-contact-content h2 {
          font-family: "Playfair Display", serif;
        }

        .goal-contact-item small,
        .goal-contact-item strong {
          font-family: "DM Sans", sans-serif;
        }

        .goal-contact-banner {
          position: relative;
          min-height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 78px 24px;
          background-image: url("/our-goal/goal-contact.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .goal-contact-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.48);
          pointer-events: none;
        }

        .goal-contact-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .goal-contact-content h2 {
          margin: 0 0 32px;
          color: #ffffff;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          line-height: 1.16;
          letter-spacing: -0.04em;
          text-shadow: 0 3px 18px rgba(0, 0, 0, 0.35);
        }

        .goal-contact-card {
          width: min(100%, 650px);
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0;
          overflow: hidden;
          border-radius: 16px;
          background: #FFFFFF3D;
          box-shadow: 0 22px 54px rgba(0, 0, 0, 0.18);
          backdrop-filter: blur(10px);
        }

        .goal-contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 20px 26px;
          color: #ffffff;
          text-align: left;
          text-decoration: none;
        }

        .goal-contact-item + .goal-contact-item {
          border-left: 1px solid rgba(255, 255, 255, 0.22);
        }

        .goal-contact-icon {
          width:52px;
          height:52px;
          flex: 0 0 52px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.2);
        }

        .goal-contact-icon svg {
          width: 24px;
          height: 24px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .goal-contact-item small {
          display: block;
          margin-bottom: 6px;
          color: #FFFFFF99;
          font-size: 14px;
          font-weight: 500;
          line-height: 1;
        }

        .goal-contact-item strong {
          display: block;
          color: #ffffff;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.2;
        }

        @media (max-width: 700px) {
          .goal-contact-banner {
            min-height: 380px;
            padding: 72px 18px;
            background-position: center;
          }

          .goal-contact-content h2 {
            margin-bottom: 24px;
            max-width: 360px;
          }

          .goal-contact-card {
            grid-template-columns: 1fr;
            width: min(100%, 360px);
            border-radius: 14px;
          }

          .goal-contact-item {
            padding: 18px 20px;
          }

          .goal-contact-item + .goal-contact-item {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.22);
          }
        }
      `}</style>
    </section>
  );
}
