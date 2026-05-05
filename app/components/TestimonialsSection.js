const testimonials = [
  {
    quote:
      "Husoft's expertise and innovative solutions have greatly helped our business grow. The team is highly professional, responsive, and a pleasure to work with.",
    name: "Rich Scott",
    role: "Fox Run Golf Club",
    initial: "R",
  },
  {
    quote:
      "Cody and the team have been incredible to work with over the past two years. They've delivered tremendous value through their products and services. I highly recommend Husoft.",
    name: "Gabe August",
    role: "The Bunker",
    initial: "G",
  },
  {
    quote:
      "We are extremely satisfied with the services provided by Husoft. Their technical expertise and attention to detail have exceeded our expectations.",
    name: "Ken Handy",
    role: "Merchant Preferred",
    initial: "K",
  },
];

const QuoteMark = () => (
  <svg
    width="28"
    height="20"
    viewBox="0 0 28 20"
    fill="none"
    aria-hidden
    className="text-accent"
  >
    <path
      d="M0 20V12.7C0 9.4 0.7 6.3 2 3.5C3.4 0.7 5.5 -1 8.4 -1L9.6 1.5C8.1 2.1 6.9 3.1 6 4.5C5.1 5.9 4.6 7.5 4.5 9.3H9.6V20H0ZM18.4 20V12.7C18.4 9.4 19.1 6.3 20.4 3.5C21.8 0.7 23.9 -1 26.8 -1L28 1.5C26.5 2.1 25.3 3.1 24.4 4.5C23.5 5.9 23 7.5 22.9 9.3H28V20H18.4Z"
      fill="currentColor"
    />
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="bg-canvas section">
      <div className="container-tight">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In their words</p>
          <h2 className="mt-4 heading-section">
            Operators run their day on Husoft software.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:border-ink/20 hover:shadow-card"
            >
              <div>
                <QuoteMark />
                <blockquote className="mt-5 text-base leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
              </div>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-line pt-5">
                <span
                  aria-hidden
                  className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-surface"
                >
                  {t.initial}
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
