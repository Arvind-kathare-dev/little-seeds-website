import Image from "next/image";

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
      <span>{item.highlight}</span>
      {after}
    </>
  );
}

export default function CorePrinciplesDesign() {
  return (
    <section className="core-principles-section" aria-labelledby="core-principles-title">
      <div className="core-principles-shell">
        <h2 id="core-principles-title">Our Core Principles</h2>

        <div className="core-principles-grid">
          {principles.map((item) => (
            <article className="core-principle-card" key={item.text}>
              <Image className="core-principle-icon" src={item.icon} alt="" width={43} height={43} />
              <p>{renderText(item)}</p>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .core-principles-section {
          background: #FCB19726;
          padding: 77px 24px 72px;
        }

        .core-principles-shell {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .core-principles-shell h2 {
          margin: 0 0 74px;
          color: #2c3032;
          font-size: clamp(30px, 3vw, 41px);
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .core-principles-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 12px;
        }

        .core-principle-card {
          min-height: 158px;
          padding: 35px 24px 24px;
          border: 1px solid #ccd2d1;
          border-radius: 7px;
          background: rgba(255, 255, 255, 0.82);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .core-principle-icon {
          width: 52px;
          height: 52px;
          margin-bottom: 20px;
          object-fit: contain;
        }

        .core-principle-card p {
          max-width: 160px;
          margin: 0;
          color: #2e3839;
          font-size: 14px;
          font-weight: 500;
          line-height: 1.24;
          letter-spacing: -0.01em;
        }

        .core-principle-card p span {
          color: #2f9b9a;
        }

        @media (max-width: 900px) {
          .core-principles-section {
            padding: 60px 20px;
          }

          .core-principles-shell h2 {
            margin-bottom: 42px;
          }

          .core-principles-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
        }

        @media (max-width: 520px) {
          .core-principles-grid {
            grid-template-columns: 1fr;
          }

          .core-principle-card {
            min-height: 150px;
          }
        }
      `}</style>
    </section>
  );
}
