"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#products", label: "Products" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-canvas/90 backdrop-blur"
          : "border-b border-transparent bg-canvas"
      }`}
    >
      <nav className="container-tight flex h-16 items-center justify-between sm:h-20">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
          onClick={close}
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-ink text-surface font-display text-sm font-bold tracking-wider">
            Hu
          </span>
          <span className="font-display text-base font-semibold tracking-[0.2em] text-ink">
            HUSOFT
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary text-xs px-5 py-2.5">
              Start a project
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 right-0 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 bg-current transition-opacity duration-200 top-1/2 -translate-y-1/2 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 right-0 h-0.5 bg-current transition-transform duration-300 ${
                isOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-30 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`fixed right-0 top-0 z-30 h-full w-full max-w-sm border-l border-line bg-canvas px-6 py-20 transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-lg px-3 py-3 text-lg font-medium text-ink transition-colors hover:bg-surface"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="#contact"
              onClick={close}
              className="btn-primary w-full justify-center"
            >
              Start a project
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
