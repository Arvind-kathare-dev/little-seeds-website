import Image from "next/image";
import { C } from "./constants";

const principles = [
  {
    icon: "/Vector.png",
    text: "Strengthening faith and identity from an early age",
  },
  {
    icon: "/Vector-1.png",
    text: "Providing modern, high-standard education aligned with Common Core",
    highlight: "high-standard education",
  },
  {
    icon: "/Vector-2.png",
    text: "Incorporating STEAM learning (Science, Technology, Engineering, Arts, Math)",
    highlight: "STEAM learning",
  },
  {
    icon: "/Vector-3.png",
    text: "Welcoming families of all backgrounds and beliefs",
  },
  {
    icon: "/Vector-4.png",
    text: "Preparing children for a balanced future strong in faith, confident in society",
  },
];

function renderText(item) {
  if (!item.highlight) return item.text;

  const [before, after] = item.text.split(item.highlight);
  return (
    <>
      {before}
      <span className="core-principle-highlight">{item.highlight}</span>
      {after}
    </>
  );
}

export default function CorePrinciplesDesign() {
  return (
    <section className="core-principles-section" aria-labelledby="core-principles-title">
      <div className="core-principles-shell">
        <h2 id="core-principles-title" className="ls-title">
          Our Core Principles
        </h2>

        <div className="core-principles-grid">
          {principles.map((item) => (
            <article className="core-principle-card" key={item.text}>
              <div className="core-principle-icon-wrap">
                <Image className="core-principle-icon" src={item.icon} alt="" width={43} height={43} />
              </div>
              <p className="ls-prose core-principle-text">{renderText(item)}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .core-principles-section {
          background: linear-gradient(180deg, ${C.coralPale} 0%, ${C.warm} 100%);
          padding: 88px 24px 80px;
        }

        .core-principles-copy,
        .core-principles-tags span {
          font-family: "DM Sans", sans-serif;
        }

        .core-principles-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .core-principles-shell h2 {
          margin: 0 0 52px;
        }

        .core-principles-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .core-principle-card {
          min-height: 176px;
          height: 100%;
          padding: 28px 16px 24px;
          border-radius: 18px;
          border: 1px solid ${C.teal}14;
          background: ${C.white};
          box-shadow: 0 10px 36px rgba(45, 52, 54, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          transition: box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease;
        }

        .core-principle-card:hover {
          border-color: ${C.teal}33;
          box-shadow: 0 16px 44px rgba(47, 127, 125, 0.1);
          transform: translateY(-2px);
        }

        .core-principle-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .core-principle-icon {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .core-principle-text {
          max-width: 168px;
          margin: 0;
          font-weight: 500;
          color: "#797979";
          font-size: 14.5px;
          line-height: 1.5;
          text-align: center;
        }

        .core-principle-highlight {
          color: ${C.teal};
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .core-principles-section {
            padding: 64px 20px 56px;
          }

          .core-principles-shell h2 {
            margin-bottom: 40px;
          }

          .core-principles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px;
          }

          .core-principle-card {
            min-height: 0;
            padding: 26px 18px 22px;
          }

          .core-principle-text {
            max-width: 100%;
          }
        }

        @media (max-width: 520px) {
          .core-principles-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }

        @media (hover: none) {
          .core-principle-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
