"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--brand-charcoal)] py-4 border-b border-white/10">
      <nav className="flex items-center justify-between">
        {/* Brand Logo with Gold Underline */}
        <Link href="/" className="group inline-block">
          <Image
            src="/cohen-logo-header.svg"
            alt="Cohen, LLC"
            width={160}
            height={32}
            priority
          />
          <div className="h-[2px] w-0 bg-[var(--brand-gold)] transition-all duration-300 group-hover:w-full"></div>
        </Link>

        {/* Desktop nav + CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex flex-wrap gap-6 text-sm">
            <li>
              <Link
                href="/"
                className="opacity-80 hover:opacity-100 transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/practice-areas"
                className="opacity-80 hover:opacity-100 transition"
              >
                Practice Areas
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="opacity-80 hover:opacity-100 transition"
              >
                Who We Are
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="opacity-80 hover:opacity-100 transition"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[var(--brand-gold)] px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-[var(--brand-gold)]/90 whitespace-nowrap"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-md p-3 text-gray-100 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-navy)]"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
            <span className="block h-0.5 w-6 bg-current" />
          </span>
        </button>
      </nav>

      {/* Mobile nav panel with smooth open/close */}
      <div
        className={`mt-4 sm:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-64" : "opacity-0 max-h-0"
        }`}
      >
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/"
              className="block rounded-md px-3 py-2 bg-white/5 border border-white/10 opacity-90 hover:opacity-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/practice-areas"
              className="block rounded-md px-3 py-2 bg-white/5 border border-white/10 opacity-90 hover:opacity-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Practice Areas
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 bg-white/5 border border-white/10 opacity-90 hover:opacity-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Who We Are
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 bg-white/5 border border-white/10 opacity-90 hover:opacity-100 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
