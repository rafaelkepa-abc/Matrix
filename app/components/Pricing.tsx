import Image from "next/image";

const plans = [
  {
    title: "1 Room",
    price: "£55",
    featured: false,
  },
  {
    title: "2 Rooms",
    price: "£77",
    featured: true,
  },
  {
    title: "End of Tenancy",
    price: "£89+",
    featured: false,
  },
  {
    title: "Premium Add-ons",
    price: "£15–£50",
    desc: "Stain removal, deodorising, protection, and upholstery upsells.",
    featured: false,
  },
];

const storyParagraphStyle = {
  margin: "0 0 1.75rem",
  lineHeight: 1.6,
  fontSize: "1.05rem",
  color: "var(--text)",
} as const;

export default function Pricing() {
  return (
    <section id="pricing">
      <div
        style={{
          width: "min(1120px, calc(100% - 2rem))",
          margin: "0 auto",
          padding: "4.5rem 0 2rem",
        }}
      >
        <div
          className="story-responsive"
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "2.5rem",
            alignItems: "start",
          }}
        >
          <span className="eyebrow story-eyebrow">MEET RAFA</span>
          <div style={{ marginTop: "1.25rem" }} className="story-copy">
            <p style={storyParagraphStyle}>
              Hi, I am Rafa. After eight years of co-parenting my dog Sergio, life
              suddenly changed—and he became my full-time responsibility overnight.
              My ex-partner could no longer care for him due to health issues, and
              just like that, the cutest new member moved into my two-bedroom flat in
              Castlefield.
            </p>
            <p style={storyParagraphStyle}>I wouldn&apos;t have it any other way.</p>
            <p style={storyParagraphStyle}>But reality hit quickly.</p>
            <p style={storyParagraphStyle}>
              My Roche Bobois sofa became Sergio&apos;s favourite spot—covered in fur
              within days. The carpets? From muddy walk runways to invisible dining
              tables… and the occasional emergency toilet.
            </p>
            <p style={storyParagraphStyle}>
              I had a choice: lower my standards, or find a better solution.
            </p>
            <p style={storyParagraphStyle}>
              I care deeply about how my home looks, feels, and smells. Clean, fresh,
              and welcoming—that&apos;s non-negotiable for me. I even became slightly
              obsessed with Jo Malone London candles… but no candle in the world can
              fix what&apos;s embedded deep in carpet fibres.
            </p>
            <p style={storyParagraphStyle}>
              And tools like the Rug Doctor or Dr Beckhamm? They mask the
              problem—they don&apos;t solve it.
            </p>
            <p style={storyParagraphStyle}>What mattered was getting to the root.</p>
            <p style={storyParagraphStyle}>
              I never blamed Sergio. He&apos;s my best friend. Hair, mess,
              accidents—that&apos;s just part of having a dog you love.
            </p>
            <p style={storyParagraphStyle}>
              So instead of fighting it, I built a solution around it.
            </p>
            <p style={storyParagraphStyle}>
              That&apos;s how <strong>Matrix Cleaning Company</strong> was created—designed
              specifically for dog and cat owners who refuse to compromise on their
              home.
            </p>
            <p style={storyParagraphStyle}>
              We don&apos;t just clean carpets and upholstery. We restore freshness. We
              remove embedded hair, deep odours, and hidden contamination. We bring back
              comfort, hygiene, and that &ldquo;walk into your home and feel proud&rdquo;
              feeling.
            </p>
            <p style={storyParagraphStyle}>No embarrassment. No compromise.</p>
            <p style={storyParagraphStyle}>
              Just a home that looks, feels, and smells exactly how it should.
            </p>
            <p style={storyParagraphStyle}>
              So whether you&apos;re expecting guests, preparing for a landlord
              inspection, getting ready to sell—or simply want to feel proud of your
              space again…
            </p>
            <p style={{ ...storyParagraphStyle, marginBottom: 0 }}>
              <strong>Matrix Cleaning Company</strong> has you covered.
            </p>
          </div>
          <Image
            src="/hero.png"
            alt="Rafa from Matrix Cleaning Company"
            width={1451}
            height={1084}
            sizes="(max-width: 960px) 100vw, 420px"
            className="story-photo w-full h-auto rounded-[var(--radius)] object-cover"
          />
        </div>
      </div>

      {/* <div
        style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto", padding: "0 0 4.5rem" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1rem",
          }}
          className="pricing-responsive"
        >
          {plans.map((p) => (
            <article
              key={p.title}
              className="card-base"
              style={{
                padding: "1.4rem",
                ...(p.featured
                  ? {
                      border: "2px solid var(--orange)",
                      transform: "translateY(-4px)",
                    }
                  : {}),
              }}
            >
              <div style={{ color: "var(--muted)", fontWeight: 700 }}>
                {p.title}
              </div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: 800,
                  margin: "0.35rem 0 0.6rem",
                }}
              >
                {p.price}
              </div>
              <p style={{ color: "var(--muted)", margin: 0 }}>{p.desc}</p>
            </article>
          ))}
        </div>
      </div> */}

      <style>{`
        .story-responsive {
          grid-template-areas: "eyebrow photo" "copy photo";
        }
        .story-eyebrow { grid-area: eyebrow; }
        .story-copy { grid-area: copy; }
        .story-photo { grid-area: photo; }
        .story-copy p { text-align: justify; text-justify: inter-word; }

        @media (max-width: 960px) {
          .story-responsive {
            grid-template-columns: 1fr !important;
            grid-template-areas: "eyebrow" "photo" "copy";
          }
          .story-photo { max-width: 420px; }
          .pricing-responsive { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 680px) { .pricing-responsive { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
