"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  return (
    <header className="py-4 border-b border-white/10">
      <nav className="flex items-center justify-between">
        {/* Brand */}
        <div
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--playfair)" }}
        >
          <Link href="/">Cohen, LLC</Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden sm:flex flex-wrap gap-4 text-xs sm:gap-6 sm:text-sm">
          <li>
            <Link href="/" className="opacity-80 hover:opacity-100 transition">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          className="sm:hidden inline-flex items-center justify-center rounded-md p-3 text-gray-100 hover:bg-white/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-navy)]"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1.5">
            <span className="block h-[2px] w-6 bg-current" />
            <span className="block h-[2px] w-6 bg-current" />
            <span className="block h-[2px] w-6 bg-current" />
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
              About
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
