import Image from "next/image";

const copyBlocks = [
  "Little Seeds Inc. believes that every child is a divine trust, entrusted to us to be nurtured with love, faith, and a sense of purpose. Our approach to education is holistic, intentionally designed to support children's academic, social, emotional, and spiritual growth. Through a thoughtful blend of STEAM education, British Montessori principles, real-life responsibility training, and Islamic values, children are encouraged to grow with curiosity, creativity, and confidence.",
  "We place strong emphasis on character development, manners, and moral responsibility, helping children build a solid foundation that will guide them throughout their lives. Faith is taught with love and understanding, integrated naturally into daily routines, allowing children to develop a genuine connection to Islamic values without pressure or force.",
  "Little Seeds proudly welcomes families of all faiths and backgrounds, offering an inclusive and respectful environment where every child feels safe, valued, and supported. By integrating modern education, technology, and Common Core standards with faith-inspired values, we prepare children to think critically, act compassionately, and thrive in both their identity and the wider world.",
];

export default function GrowingLearnersDesign() {
  return (
    <section className="growing-learners-section" aria-label="Growing confident learners">
      <div className="growing-learners-wrap">
        <div className="growing-learners-card">
          <Image
            src="/growing-learners-card.png"
            alt="Children learning together at a classroom table"
            fill
            sizes="(max-width: 768px) 90vw, 272px"
            priority
          />
          <div className="growing-learners-overlay" />
          <div className="growing-learners-card-content">
            <h2 className="ls-title ls-on-dark">Growing Confident, Kind &amp; Curious Learners</h2>
            <a href="#programs">Explore Programs</a>
          </div>
        </div>

        <div style={{ color: "#2C2C2C",fontSize:"14.5px",fontFamily:"DM Sans",fontWeight:"500" }} className="growing-learners-copy">
          {copyBlocks.map((text) => (
            <p key={text} className="ls-prose">{text}</p>
          ))}
        </div>
      </div>

      <style>{`
        .growing-learners-section {
          background: #5F9B9021;
          min-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 90px 24px 60px;
        }

        .growing-learners-copy,
        .growing-learners-tags span {
          font-family: "DM Sans", sans-serif;
        }

        .growing-learners-wrap {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: minmax(0, 540px) minmax(0, 494px);
          column-gap: 66px;
          align-items: start;
          justify-content: center;
        }

        .growing-learners-card {
          position: relative;
          width: 100%;
          aspect-ratio: 272 / 268;
          overflow: hidden;
          border-radius: 10px;
        }

        .growing-learners-card img {
          object-fit: cover;
        }

        .growing-learners-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(90deg, rgba(20, 28, 27, 0.62) 0%, rgba(20, 28, 27, 0.5) 44%, rgba(20, 28, 27, 0.24) 100%);
        }

        .growing-learners-card-content {
          position: absolute;
          inset: 38px 31px 32px;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
        }

        .growing-learners-card-content h2 {
          margin: 0;
          max-width: 500px;
        }

        .growing-learners-card-content a {
          font-family: var(--ls-font-body, "DM Sans", sans-serif);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 188px;
          min-height: 56px;
          padding: 0 29px;
          border-radius: 999px;
          background: #2f9b9a;
          color: #ffffff;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.12);
        }

        .growing-learners-copy {
          padding-top: 8px;
        }

        .growing-learners-copy p {
          color: "#797979";
          font-weight: 500;
          margin: 0 0 34px;
          font-size: 14.5px;
          line-height: 1.65;
        }

        .growing-learners-copy p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 1180px) {
          .growing-learners-section {
            min-height: 0;
            padding: 70px 24px 54px;
          }

          .growing-learners-wrap {
            max-width: 900px;
            grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr);
            column-gap: 52px;
          }

          .growing-learners-copy p {
            margin-bottom: 24px;
          }
        }

        @media (max-width: 640px) {
          .growing-learners-section {
            padding: 36px 20px;
          }

          .growing-learners-wrap {
            width: min(360px, 100%);
            max-width: 360px;
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .growing-learners-card {
            width: 100%;
            height: auto;
            aspect-ratio: 272 / 268;
          }

          .growing-learners-card-content {
            inset: 25px 22px 22px;
          }

          .growing-learners-card-content h2 {
            max-width: 260px;
          }

          .growing-learners-card-content a {
            min-width: 126px;
            min-height: 38px;
            padding: 0 18px;
            font-size: 10px;
          }

          .growing-learners-copy {
            padding-top: 0;
          }

          .growing-learners-copy p {
            line-height: 1.65;
            margin-bottom: 18px;
          }
        }
      `}</style>
    </section>
  );
}
