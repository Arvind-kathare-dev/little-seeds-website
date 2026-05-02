import Image from "next/image";

const paragraphs = [
  "At Little Seeds, our mission is to nurture confident, compassionate, and knowledgeable young Muslims who are deeply rooted in faith and prepared to thrive in the modern world. Guided by the teachings of Prophet Muhammad ﷺ, we strive to create a balanced educational environment that harmonizes academic excellence, Islamic values, and character development.",
  "We are committed to providing a curriculum that blends faith-based learning with the best of modern education including STEAM, Common Core, and technology without compromising Islamic principles. Through both our full-time and part-time programs, we empower students to love and understand Islam, not only through memorization but through reflection, practice, and genuine connection.",
  "Our carefully selected teachers are passionate educators who see teaching as a mission, not just a profession. Together, we cultivate an inclusive environment that welcomes families of all backgrounds while strengthening the identity of every Muslim child.",
  "At our school, we believe in offering the best of both worlds: a place where faith and knowledge unite to inspire future generations of strong, confident, and mindful Muslims.",
];

export default function BrightRootsDesign() {
  return (
    <section className="bright-roots-section" aria-label="Bright Roots introduction">
      <div className="bright-roots-shell">
        <div className="bright-roots-image">
          <Image
            src="/bright-roots-children.png"
            alt="Smiling school children"
            fill
            sizes="(max-width: 768px) 88vw, 940px"
            priority
          />
        </div>

        <div className="bright-roots-content">
          <div className="bright-roots-heading">
            <h1>Nurturing Bright Minds Growing Strong Roots</h1>
            <p>A Loving, Academic-and-Values-Driven Early Childhood Experience in Sacramento.</p>
          </div>

          <div className="bright-roots-copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .bright-roots-section {
          background: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 72px;
        }

        .bright-roots-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .bright-roots-image {
          position: relative;
          width: 100%;
          height: clamp(134px, 24vw, 190px);
          overflow: hidden;
          border-radius: 7px;
          margin-bottom: 34px;
        }

        .bright-roots-image img {
          object-fit: cover;
          object-position: center 42%;
        }

        .bright-roots-content {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 84px;
          align-items: start;
        }

        .bright-roots-heading h1 {
          color: #202020;
          font-size: clamp(26px, 3.2vw, 38px);
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: -0.045em;
          margin: 0 0 18px;
          max-width: 370px;
        }

        .bright-roots-heading p {
          color: #262626;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.35;
          margin: 0;
          max-width: 292px;
        }

        .bright-roots-copy {
          padding-top: 2px;
        }

        .bright-roots-copy p {
          color: #6d7477;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.48;
          letter-spacing: -0.01em;
          margin: 0 0 17px;
        }

        .bright-roots-copy p:last-child {
          margin-bottom: 0;
        }

        @media (max-width: 768px) {
          .bright-roots-section {
            align-items: flex-start;
            padding: 86px 20px 54px;
          }

          .bright-roots-image {
            height: 155px;
            margin-bottom: 28px;
          }

          .bright-roots-content {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .bright-roots-heading h1,
          .bright-roots-heading p {
            max-width: none;
          }

          .bright-roots-heading h1 {
            line-height: 1.05;
          }

          .bright-roots-copy p {
            font-size: 12px;
          }
        }
      `}</style>
    </section>
  );
}
