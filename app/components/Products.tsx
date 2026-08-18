import Image from "next/image";

const products = [
  {
    step: "Step 01",
    name: "Pet Mess Destroyer",
    src: "/products/pet_mess_destroyer.png",
    alt: "Matrix Pet Mess Destroyer spray bottle with yellow label",
    tagline: "Enzymatic stain & odour removal",
    accent: "#F5C400",
    stepInk: "#1a1400",
  },
  {
    step: "Step 02",
    name: "Fabric Spray",
    src: "/products/fabric_spray.png",
    alt: "Matrix Fabric Spray bottle with pink label",
    tagline: "Luxury fabric deodoriser",
    accent: "#F567AD",
    stepInk: "#ffffff",
  },
];

export default function Products() {
  return (
    <section className="products" id="products">
      <div className="products-inner">
        <div className="products-intro">
          <div className="products-head">
            <span className="eyebrow">SIGNATURE PRODUCTS</span>
            <h2 className="products-title">
              Two bottles. Two steps. A fresh home every day.
            </h2>
          </div>

          <div className="products-letter">
            <p className="letter-greeting">Dear Pet Parents,</p>
            <p className="letter-copy">
              I&apos;ve created two signature products designed to keep your
              home fresh, healthy and beautifully maintained every day.
            </p>
            <p className="letter-copy">
              A powerful solution in just two steps, two beautiful bottles so
              you can keep up with all the challenges between professional
              carpet treatments and these two products are your daily
              defence, tackling everyday pet mess, keeping fabrics fresh and
              helping maintain those high standards for longer.
            </p>
          </div>
        </div>

        <div className="products-gallery">
          {products.map((p) => (
            <figure
              key={p.name}
              className="product-shot"
              style={{
                ["--accent" as string]: p.accent,
                ["--step-ink" as string]: p.stepInk,
              }}
            >
              <div className="product-frame">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1254}
                  height={1254}
                  sizes="(max-width: 680px) 92vw, (max-width: 1120px) 46vw, 540px"
                  quality={95}
                  className="product-img"
                />
              </div>
              <figcaption className="product-caption">
                <span className="product-step">{p.step}</span>
                <h3 className="product-name">{p.name}</h3>
                <p className="product-tagline">{p.tagline}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="products-closer">
          <p className="closer-line">
            Winning every day. Proudly mastering special tasks.
          </p>
          <p className="closer-love">
            Love your pet <span aria-hidden="true">+</span> Love your home.
          </p>
          <p className="closer-avail">
            Soon available online, your local pet store and makers markets near
            you.
          </p>
        </div>
      </div>

      <style>{`
        .products {
          position: relative;
          overflow: hidden;
          padding: 5.5rem 0 5rem;
          background:
            radial-gradient(48% 42% at 6% 8%, rgba(245, 196, 0, 0.18), transparent 68%),
            radial-gradient(46% 40% at 96% 92%, rgba(245, 103, 173, 0.14), transparent 70%),
            linear-gradient(180deg, #fbf8f4 0%, #ffffff 38%, var(--bg) 100%);
        }

        .products-inner {
          width: min(1120px, calc(100% - 2rem));
          margin: 0 auto;
        }

        .products-intro {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 2.25rem;
          align-items: start;
          margin-bottom: 2.75rem;
        }

        .products-title {
          margin: 0;
          line-height: 1.08;
          font-size: clamp(1.7rem, 3vw, 2.35rem);
        }

        .products-letter {
          padding-left: 1.35rem;
          border-left: 3px solid var(--orange);
        }

        .letter-greeting {
          margin: 0 0 0.85rem;
          font-size: 1.22rem;
          font-weight: 800;
          letter-spacing: 0.01em;
          color: var(--navy);
        }

        .letter-copy {
          margin: 0 0 0.95rem;
          color: var(--muted);
          line-height: 1.75;
          text-align: justify;
          text-justify: inter-word;
        }

        .letter-copy:last-child {
          margin-bottom: 0;
        }

        .products-gallery {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.75rem;
        }

        .product-shot {
          margin: 0;
        }

        .product-frame {
          overflow: hidden;
          border-radius: 28px;
          line-height: 0;
          border-bottom: 5px solid var(--accent);
          box-shadow:
            0 4px 14px rgba(10, 37, 64, 0.06),
            0 22px 48px rgba(10, 37, 64, 0.12);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .product-shot:hover .product-frame {
            transform: translateY(-6px);
            box-shadow:
              0 10px 24px rgba(10, 37, 64, 0.08),
              0 28px 56px rgba(10, 37, 64, 0.16);
          }
        }

        .product-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .product-caption {
          margin-top: 1.15rem;
          text-align: center;
        }

        .product-step {
          display: inline-block;
          margin-bottom: 0.5rem;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          background: var(--accent);
          color: var(--step-ink);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .product-name {
          margin: 0 0 0.28rem;
          font-size: 1.4rem;
          line-height: 1.2;
        }

        .product-tagline {
          margin: 0;
          color: var(--muted);
          font-size: 0.98rem;
        }

        .products-closer {
          margin-top: 2.75rem;
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
        }

        .closer-line {
          margin: 0 0 0.45rem;
          font-size: clamp(1.15rem, 2vw, 1.45rem);
          font-weight: 800;
          line-height: 1.3;
          color: var(--navy);
        }

        .closer-love {
          margin: 0 0 0.7rem;
          font-size: 1.15rem;
          font-weight: 700;
          color: #F567AD;
        }

        .closer-love span {
          color: #F5C400;
          padding: 0 0.2rem;
        }

        .closer-avail {
          margin: 0 auto;
          max-width: 46ch;
          color: var(--muted);
          line-height: 1.65;
        }

        @media (max-width: 960px) {
          .products-intro {
            grid-template-columns: 1fr;
            gap: 1.35rem;
            margin-bottom: 2.25rem;
          }
        }

        @media (max-width: 680px) {
          .products {
            padding: 3.75rem 0 3.5rem;
          }

          .products-letter {
            padding-left: 1.1rem;
          }

          .products-gallery {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .product-frame {
            border-radius: 22px;
          }

          .products-closer {
            margin-top: 2.25rem;
            padding-top: 1.6rem;
          }
        }
      `}</style>
    </section>
  );
}
