const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const productLinks = [
  { href: "https://leadr.golf", label: "Leadr" },
  { href: "https://teeweathr.com", label: "TeeWeathr" },
  { href: "#contact", label: "TeeFindr — request access" },
];

const contactLinks = [
  { href: "mailto:team@husoftsolutions.com", label: "team@husoftsolutions.com" },
  { href: null, label: "Amsterdam, NY 12010" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-tight py-16 sm:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-surface font-display text-sm font-bold tracking-wider">
                Hu
              </span>
              <span className="font-display text-base font-semibold tracking-[0.2em] text-ink">
                HUSOFT
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              The studio behind TeeFindr, Leadr.golf, and TeeWeathr. Software
              products built for the golf industry.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-sm text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-muted">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              {contactLinks.map((link, i) => (
                <li key={i}>
                  {link.href ? (
                    <a
                      href={link.href}
                      className="text-sm text-ink transition-colors hover:text-accent"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <span className="text-sm text-ink-muted">{link.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-muted">
            © {year} Husoft Solutions. All rights reserved.
          </p>
          <p className="text-xs text-ink-muted">
            Crafted in Amsterdam, NY.
          </p>
        </div>
      </div>
    </footer>
  );
}
