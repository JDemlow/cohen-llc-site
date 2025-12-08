// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)] px-8 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)]">
          Cohen, LLC · Trial & Business Litigation
        </p>

        <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
          Boutique Denver law firm for complex business and franchise disputes.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200/90 leading-relaxed">
          This is placeholder copy we’ll refine once we shape the final
          messaging and client specifications.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-md bg-[var(--brand-gold)] px-8 py-4 text-base font-semibold tracking-wide text-black transition hover:bg-[var(--brand-gold)]/90"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Subtle section divider */}
      <div className="mt-16 h-px w-full bg-white/10"></div>

      {/* Practice Areas skeleton */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)]">
          Focused Expertise
        </p>

        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
          Practice Areas
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
          This is placeholder copy describing the firm&apos;s core focus areas.
          We&apos;ll replace it with real content based on the final client
          specs.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg bg-[var(--brand-navy)]/40 p-4 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 cursor-pointer">
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Commercial Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </div>

          <div className="rounded-lg bg-[var(--brand-navy)]/40 p-4 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 cursor-pointer">
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Franchise Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </div>

          <div className="rounded-lg bg-[var(--brand-navy)]/40 p-4 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 cursor-pointer">
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Bankruptcy & Restructuring
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </div>

          <div className="rounded-lg bg-[var(--brand-navy)]/40 p-4 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 cursor-pointer">
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Business & Franchise Transactions
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </div>

          <div className="rounded-lg bg-[var(--brand-navy)]/40 p-4 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 cursor-pointer">
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Civil Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
