const services = [
  {
    title: "Use our products",
    description:
      "Drop into TeeFindr, Leadr, or TeeWeathr. Get up and running in days, not quarters — with white-label options for the right partners.",
    features: ["SaaS subscriptions", "White-label options", "Onboarding included"],
    cta: "Browse products",
    href: "#products",
  },
  {
    title: "Integrations & embeds",
    description:
      "Embed our weather widget, scoring board, or booking flow into your existing site. Stripe, Twilio, SendGrid, and Firebase pre-wired so you don't have to.",
    features: ["iframe embeds", "API & webhooks", "Theming via dashboard"],
    cta: "Discuss an embed",
    href: "#contact",
  },
  {
    title: "Custom builds",
    description:
      "Need something we haven't built yet?",
    features: [
      "Web & mobile applications",
      "Cloud-native architecture",
      "Senior team, no offshoring",
    ],
    cta: "Tell us about it",
    href: "#contact",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="border-t border-line bg-surface section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">How we work with you</p>
          <h2 className="mt-4 heading-section">
            Three ways to ship with Husoft.
          </h2>
          <p className="mx-auto mt-4 max-w-prose text-base text-ink-muted sm:text-lg">
            Most teams start with one of our products. Some embed pieces of our
            stack into theirs. A few hire us to build something new.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, idx) => (
            <article
              key={service.title}
              className="group flex flex-col rounded-2xl border border-line bg-canvas p-7 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-card"
            >
              <span
                aria-hidden
                className="font-display text-xs font-semibold tracking-widest text-accent"
              >
                0{idx + 1}
              </span>
              <h3 className="mt-3 text-xl font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-ink"
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
                      aria-hidden
                      className="mt-0.5 shrink-0 text-accent"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={service.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
              >
                {service.cta}
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
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
