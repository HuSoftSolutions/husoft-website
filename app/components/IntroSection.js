const productPills = [
  { label: "TeeFindr", color: "#0EA5A4" },
  { label: "Leadr.golf", color: "#16A34A" },
  { label: "TeeWeathr", color: "#F59E0B" },
];

const stats = [
  { value: "3", label: "SaaS products live" },
  { value: "10+", label: "Years building" },
  { value: "99.9%", label: "Uptime targets" },
];

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden bg-canvas pt-12 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(234,88,12,0.10) 0%, rgba(250,250,249,0) 70%)",
        }}
      />

      <div className="container-tight relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Software studio · est. 2015
          </p>
          <h1 className="mt-6 text-display-xl font-semibold text-ink animate-fade-up">
            Software products built for the{" "}
            <span className="relative inline-block">
              <span className="relative z-10">golf industry</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-accent/25 sm:bottom-2 sm:h-4"
              />
            </span>
            
          </h1>


          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 animate-fade-in">
            {productPills.map((pill) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold text-ink"
              >
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: pill.color }}
                />
                {pill.label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-in">
            <a href="#products" className="btn-primary">
              See our products
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
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary">
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface px-6 py-8 text-center sm:py-10"
            >
              <div className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-ink-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
