const phases = [
  {
    id: "01",
    name: "Discover",
    description:
      "We map the problem to one of our existing products, a focused integration, or a fresh build. You leave the first call with a clear next step.",
  },
  {
    id: "02",
    name: "Design & scope",
    description:
      "Tight UX flows, a measurable scope, and a fixed plan. No vague estimates — you see exactly what ships, and when.",
  },
  {
    id: "03",
    name: "Ship",
    description:
      "Weekly demos, real environments, and production-ready code from day one. Stripe, Firebase, and Twilio wired up so you don't have to.",
  },
  {
    id: "04",
    name: "Operate",
    description:
      "Once it's live we keep it that way — monitoring, support, and roadmap iteration. Most of our partners stay with us for years.",
  },
];

export default function DevelopmentCycle() {
  return (
    <section id="process" className="bg-canvas section">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">How we ship</p>
            <h2 className="mt-4 heading-section">
              A process built around real launches.
            </h2>
            <p className="mt-5 max-w-prose text-base text-ink-muted sm:text-lg">
              Whether you&apos;re onboarding to one of our products or commissioning
              a new build, the rhythm is the same: ship something useful, fast,
              and keep iterating.
            </p>
            <a href="#contact" className="btn-secondary mt-8">
              Talk to the team
            </a>
          </div>

          <ol className="relative space-y-2">
            {phases.map((phase) => (
              <li
                key={phase.id}
                className="group relative rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:border-ink/20 hover:shadow-card sm:p-7"
              >
                <div className="flex items-baseline gap-5">
                  <span className="font-display text-sm font-semibold tracking-widest text-accent">
                    {phase.id}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-ink sm:text-xl">
                      {phase.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                      {phase.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
