import Image from "next/image";

const services = [
  {
    title: "Carpet Cleaning",
    desc: "Deep clean for bedrooms, lounges, hallways, stairs, and whole homes.",
  },
  {
    title: "Premium Stain Removal",
    desc: "Targeted treatment for spills, marks, pet accidents, and stubborn spots.",
  },
  {
    title: "End of Tenancy",
    desc: "Ideal for move-outs, landlords, letting agents, and deposit-focused cleans.",
  },
  {
    title: "Sofa & Upholstery",
    desc: "Freshen sofas, fabric chairs, and upholstered furniture with quick drying times.",
  },
  {
    title: "Pet Odour Treatment",
    desc: "Neutralise smells and refresh carpets in homes with pets and heavy use.",
  },
  {
    title: "Commercial Cleaning",
    desc: "Flexible bookings for offices, serviced apartments, shops, and common areas.",
  },
];

const mutedParagraph = {
  margin: "0 0 1rem",
  color: "var(--muted)",
  lineHeight: 1.6,
} as const;

export default function Services() {
  return (
    <section style={{ padding: "4.5rem 0" }} id="services">
      <div
        style={{ width: "min(1120px, calc(100% - 2rem))", margin: "0 auto" }}
      >
        <div style={{ maxWidth: 720, marginBottom: "2rem" }}>
          <span className="eyebrow">SERVICES</span>
          <h2 style={{ margin: "0 0 0.9rem", lineHeight: 1.05 }}>
            Happy customers. 100% Satisfaction Guaranteed.
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "1rem",
          }}
          className="services-responsive"
        >
          {services.map((s) => (
            <article
              key={s.title}
              className="card-base"
              style={{ padding: "1.3rem" }}
            >
              <h3 style={{ marginTop: 0 }}>{s.title}</h3>
              <p style={{ color: "var(--muted)", margin: 0 }}>{s.desc}</p>
            </article>
          ))}

          <article className="card-base pet-home-refresh">
            <div className="phr-header">
              <div className="phr-logos">
                <Image
                  src="/pet-home-refresh-logo-pink.png"
                  alt="Matrix Pet Home Refresh"
                  width={800}
                  height={260}
                  className="phr-logo"
                />
              </div>
              <Image
                src="/new_premium_service_badge.png"
                alt="New Premium Service"
                width={840}
                height={260}
                className="phr-badge"
              />
            </div>

            <div className="phr-body-wrap">
              <p className="phr-hook">
                Fresh home is not just for Christmas.
              </p>

              <div className="phr-body">
                <div className="phr-copy">
                  <p style={mutedParagraph}>
                    You&apos;d never say the same about your dog. So why does your
                    home get a deep clean once a year, if that?
                  </p>
                  <p style={mutedParagraph}>
                    If you live in a city centre apartment or up in the sky in a
                    high-rise, you already know the deal: less square footage,
                    less airflow, and a carpet and sofa that absorb everything
                    your dog brings home: hair, dander, mud, bacteria.
                  </p>
                  <p style={{ ...mutedParagraph, fontStyle: "italic" }}>
                    Vacuuming isn&apos;t cleaning. It&apos;s maintenance. And
                    it&apos;s <em>so last century</em>.
                  </p>
                  <p style={mutedParagraph}>
                    <strong style={{ color: "var(--text)" }}>
                      Introducing Matrix Pet Home Refresh
                    </strong>{" "}
                    — a new hygiene standard for apartment-living pet owners who
                    want more than a tidy-looking home. We get rid of what you
                    can&apos;t see: the bacteria and allergens living deep in
                    your carpet and sofa fibres.
                  </p>
                  <p style={{ ...mutedParagraph, marginBottom: 0 }}>
                    This isn&apos;t about hiding odours. It&apos;s about removing
                    what&apos;s causing them — so the air you and your family
                    breathe every day is actually clean.
                  </p>
                </div>

                <div className="phr-panels">
                  <div className="phr-panel">
                    <strong className="phr-panel-title">
                      What we do — Home CheckUp
                    </strong>
                    <ul className="phr-list">
                      <li>Odour hotspot identification</li>
                      <li>Hair build-up inspection</li>
                      <li>Carpet condition examination</li>
                      <li>Sofa contamination check</li>
                    </ul>
                  </div>
                  <div className="phr-panel">
                    <strong className="phr-panel-title">
                      How we do it — The Refresh Process
                    </strong>
                    <ol className="phr-list phr-list-ordered">
                      <li>Hair extraction</li>
                      <li>Spot and odour treatment</li>
                      <li>Carpet and sofa refresh</li>
                    </ol>
                  </div>
                  <p className="phr-tagline">
                    Simple. Affordable. Sorted in one visit.
                  </p>
                  <p className="phr-closer">
                    Our dogs and cats give us everything. The least you can give
                    back is a home that&apos;s actually healthy for both of you.
                  </p>
                </div>
              </div>
            </div>

            <div className="phr-cta">
              <p className="phr-cta-text">
                <span className="phr-cta-accent">
                  Fresh home is not just for Christmas.
                </span>{" "}
                Book your HOME REFRESH this summer.
              </p>
              <a
                className="btn btn-small phr-cta-btn"
                href="https://wa.me/447902867017?text=Hi%20Matrix%2C%20I%27d%20like%20to%20book%20a%20Pet%20Home%20Refresh."
              >
                Book Home Refresh
              </a>
            </div>
          </article>

          <div className="phr-video-wrap">
            <iframe
              className="phr-video"
              src="https://www.youtube-nocookie.com/embed/F5PEnqH74Eg?si=FGY-RtwW8TKk6B8Q&autoplay=1&mute=1"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className="phr-evidence">
            If you need further evidence, please take a moment to read the short
            article{" "}
            <a
              href="https://www.independent.co.uk/life-style/university-of-leicester-listeria-mrsa-hiv-b2561090.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <a
            className="phr-independent-link"
            href="https://www.independent.co.uk/life-style/university-of-leicester-listeria-mrsa-hiv-b2561090.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Read the article on The Independent"
          >
            <Image
              src="/independent_logo.png"
              alt="The Independent"
              width={1536}
              height={1024}
              className="phr-independent-logo"
            />
          </a>
        </div>
      </div>

      <style>{`
        .pet-home-refresh {
          grid-column: 1 / -1;
          padding: 0;
          overflow: hidden;
          border-top: 3px solid var(--orange);
          box-shadow: 0 24px 50px rgba(10, 37, 64, 0.16);
        }

        .phr-header {
          background: #d6dbdf;
          border-bottom: 1px solid var(--border);
          padding: 1.75rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .phr-logos {
          display: flex;
          align-items: center;
          flex: 1;
          min-width: 0;
          gap: 1.5rem;
        }

        .phr-logo {
          width: auto;
          height: auto;
          max-height: 220px;
          max-width: min(720px, 65vw);
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

        .phr-badge {
          flex-shrink: 0;
          height: auto;
          width: auto;
          max-height: 200px;
          max-width: min(640px, 48vw);
          object-fit: contain;
          display: block;
        }

        .phr-copy p,
        .phr-tagline,
        .phr-closer,
        .phr-cta-text {
          text-align: justify;
          text-justify: inter-word;
        }

        .phr-body-wrap {
          padding: 1.75rem;
        }

        .phr-hook {
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 1.25rem;
          line-height: 1.2;
          color: #F567AD;
        }

        .phr-body {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2rem;
          align-items: start;
        }

        .phr-panel {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.1rem 1.2rem;
        }

        .phr-panel + .phr-panel {
          margin-top: 1rem;
        }

        .phr-panel-title {
          display: block;
          margin-bottom: 0.55rem;
          color: var(--text);
        }

        .phr-list {
          margin: 0;
          padding-left: 1.2rem;
          color: var(--muted);
          line-height: 1.65;
        }

        .phr-list-ordered {
          padding-left: 1.35rem;
        }

        .phr-tagline {
          margin: 1rem 0 0.5rem;
          font-weight: 700;
          color: var(--text);
        }

        .phr-closer {
          margin: 0;
          color: var(--muted);
          line-height: 1.6;
        }

        .phr-cta {
          background: linear-gradient(180deg, #fff8f3, var(--bg));
          border-top: 1px solid var(--border);
          padding: 1.25rem 1.75rem;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .phr-cta-text {
          margin: 0;
          font-weight: 700;
          line-height: 1.4;
        }

        .phr-cta-accent {
          color: #F567AD;
        }

        .phr-cta-btn {
          background: #000;
          color: #fff;
          border: 2px solid #000;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          font-weight: 700;
        }

        .phr-cta-btn:hover {
          background: #1a1a1a;
          border-color: #1a1a1a;
          color: #fff;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
        }

        .phr-video-wrap {
          grid-column: 1 / -1;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid var(--border);
          box-shadow: 0 12px 32px rgba(10, 37, 64, 0.1);
        }

        .phr-video {
          display: block;
          width: 100%;
          height: 100%;
          border: 0;
        }

        .phr-evidence {
          grid-column: 1 / -1;
          margin: 0.75rem 0 0;
          color: var(--muted);
          line-height: 1.6;
          text-align: center;
        }

        .phr-evidence a {
          color: var(--orange);
          font-weight: 600;
        }

        .phr-evidence a:hover {
          text-decoration: underline;
        }

        .phr-independent-link {
          grid-column: 1 / -1;
          display: block;
          width: 100%;
          margin: 1.25rem 0 0;
        }

        .phr-independent-logo {
          display: block;
          width: 100%;
          height: auto;
        }

        .phr-independent-link:hover .phr-independent-logo {
          opacity: 0.88;
        }

        @media (max-width: 960px) {
          .services-responsive { grid-template-columns: 1fr 1fr !important; }
          .phr-body { grid-template-columns: 1fr !important; }
        }

        @media (max-width: 680px) {
          .services-responsive { grid-template-columns: 1fr !important; }
          .phr-body-wrap { padding: 1.25rem; }
          .phr-header {
            padding: 1.25rem;
            flex-direction: column;
            align-items: stretch;
            gap: 1rem;
          }
          .phr-cta { padding: 1.25rem; }
          .phr-badge {
            order: -1;
            align-self: center;
            max-height: 155px;
            max-width: min(480px, 96vw);
            width: auto;
          }
          .phr-logos {
            flex: none;
            width: 100%;
            justify-content: center;
          }
          .phr-logo {
            max-height: none;
            max-width: 100%;
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
}
