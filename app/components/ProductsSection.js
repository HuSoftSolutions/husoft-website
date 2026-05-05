import Image from "next/image";

const products = [
  {
    name: "TeeFindr",
    tagline: "Simulator & tee-time booking",
    description:
      "Multi-tenant booking platform for golf simulators and tee times. White-label ready, real-time inventory, Stripe payments, and SMS confirmations baked in.",
    features: [
      "Real-time availability & inventory",
      "Stripe payments + Twilio SMS",
      "Per-tenant branding & theming",
    ],
    href: null,
    cta: "Talk to us",
    accent: "#0EA5A4",
    accentSoft: "rgba(14, 165, 164, 0.10)",
    accentRgb: "14,165,164",
    visual: "teefindr",
  },
  {
    name: "Leadr",
    tagline: "Live tournament leaderboards",
    description:
      "Real-time scoring and leaderboards for charity outings, corporate events, and club tournaments. QR-code scoring means players never download an app.",
    features: [
      "QR-code mobile scoring",
      "Stripe + PayPal registration",
      "Sponsorships & side games",
    ],
    href: "https://leadr.golf",
    cta: "Visit leadr.golf",
    accent: "#16A34A",
    accentSoft: "rgba(22, 163, 74, 0.10)",
    accentRgb: "22,163,74",
    visual: "leadr",
  },
  {
    name: "TeeWeathr",
    tagline: "Embeddable golf-weather widgets",
    description:
      "Drop a single iframe onto any tee-sheet or course site and show real-time conditions. Four responsive layouts, server-configured theming, free tier with sponsor ads.",
    features: [
      "One-line iframe embed",
      "4 responsive layouts",
      "Free + premium plans",
    ],
    href: "https://teeweathr.com",
    cta: "Visit teeweathr.com",
    accent: "#F59E0B",
    accentSoft: "rgba(245, 158, 11, 0.10)",
    visual: "teeweathr",
  },
];

const Visual = ({ visual, accentRgb }) => {
  if (visual === "teefindr") {
    return (
      <div
        className="relative grid h-full w-full place-items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1f2937 50%, #0a0a0a 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 60% at 70% 30%, rgba(${accentRgb},0.25) 0%, rgba(0,0,0,0) 70%)`,
          }}
        />
        <Image
          src="/products/teefindr-logo.svg"
          alt=""
          width={120}
          height={120}
          className="relative h-28 w-28 sm:h-32 sm:w-32"
        />
      </div>
    );
  }
  if (visual === "leadr") {
    return (
      <div
        className="relative grid h-full w-full place-items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1f2937 50%, #0a0a0a 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: `radial-gradient(60% 60% at 70% 30%, rgba(${accentRgb},0.25) 0%, rgba(0,0,0,0) 70%)`,
          }}
        />
        <Image
          src="/products/leadr.svg"
          alt=""
          width={120}
          height={120}
          className="relative h-40 w-40 sm:h-32 sm:w-32"
        />
      </div>
    );
  }
  if (visual === "teeweathr") {
    return (
      <div
        className="relative grid h-full w-full place-items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1f2937 50%, #0a0a0a 100%)",
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 70% 30%, rgba(245,158,11,0.25) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="relative grid place-items-center gap-3 text-center">
          <Image
            src="/products/teeweathr-icon.svg"
            alt=""
            width={64}
            height={64}
            className="h-14 w-14"
          />
          <div className="font-display text-3xl font-bold tracking-tight text-white">
            72°
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-white/60">
            8 mph SW · clear
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const ProductCard = ({ product }) => {
  const Wrapper = product.href ? "a" : "div";
  const wrapperProps = product.href
    ? { href: product.href, target: "_blank", rel: "noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-card-hover"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line">
        <Visual visual={product.visual} accentRgb={product.accentRgb} />
      </div>

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {product.name}
            </h3>
            <p
              className="mt-1 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: product.accent }}
            >
              {product.tagline}
            </p>
          </div>
          <span
            className="hidden h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-all duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-surface sm:grid"
            aria-hidden
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M9 7h8v8" />
            </svg>
          </span>
        </div>

        <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink-muted sm:text-base">
          {product.description}
        </p>

        <ul className="mt-5 space-y-2 border-t border-line pt-5">
          {product.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-ink"
            >
              <span
                aria-hidden
                className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ background: product.accent }}
              />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink">
          {product.cta}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Wrapper>
  );
};

const ProductsSection = () => {
  return (
    <section id="products" className="border-t border-line bg-canvas section">
      <div className="container-tight">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Our products</p>
            <h2 className="mt-4 heading-section">
              SaaS we build, ship, and run.
            </h2>
          </div>
          <p className="max-w-md text-base text-ink-muted sm:text-lg">
            Purpose-built tools for the golf industry — and a growing roster of
            platforms beyond it. Used by venues, tournaments, and operators
            every day.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
