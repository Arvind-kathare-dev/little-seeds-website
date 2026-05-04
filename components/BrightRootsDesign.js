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
            <h2 className="ls-title">Nurturing Bright Minds Growing Strong Roots</h2>
            <p className="ls-lead bright-roots-tagline">A Loving, Academic-and-Values-Driven Early Childhood Experience in Sacramento.</p>
          </div>

          <div className="bright-roots-copy">
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="ls-prose">{paragraph}</p>
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

        .bright-roots-copy,
        .bright-roots-tags span {
          color: #797979;
          font-family: "DM Sans", sans-serif;
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

        .bright-roots-heading h2 {
          margin: 0 0 18px;
          max-width: 420px;
        }

        .bright-roots-tagline {
          margin: 0;
          max-width: 360px;
          font-size: 14px;
          color: "#2C2C2C";
          font-weight: 700;
        }

        .bright-roots-copy {
          color: "#797979";
          padding-top: 2px;
        }

        .bright-roots-copy p {
          font-size: 14.5px;
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

          .bright-roots-heading h2,
          .bright-roots-tagline {
            max-width: none;
          }
        }
      `}</style>
    </section>
  );
}
