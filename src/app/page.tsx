// app/page.tsx
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)] px-4 py-16 sm:px-8 sm:py-20">
        <div className="sm:max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)] text-center sm:text-left">
            Cohen, LLC · Trial & Business Litigation
          </p>

          <h1
            className="mt-6 text-4xl font-semibold leading-tight text-center sm:text-left sm:text-5xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Boutique Denver law firm for complex business and franchise
            disputes.
          </h1>

          <p className="mt-6 text-lg text-gray-200/90 leading-relaxed text-center sm:text-left">
            This is placeholder copy we’ll refine once we shape the final
            messaging and client specifications.
          </p>

          <div className="mt-8 flex justify-center sm:justify-start">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-[var(--brand-gold)] px-8 py-4 text-base font-semibold tracking-wide text-black transition hover:bg-[var(--brand-gold)]/90"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Subtle section divider */}
      <div className="mt-16 h-px w-full bg-white/10" />

      {/* Practice Areas skeleton */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)]">
          Focused Expertise
        </p>

        <h2
          className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Practice Areas
        </h2>

        <p className="mt-6 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
          This is placeholder copy describing the firm&apos;s core focus areas.
          We&apos;ll replace it with real content based on the final client
          specs.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/practice-areas"
            className="block rounded-lg bg-[var(--brand-navy)]/40 p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Commercial Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </Link>

          <Link
            href="/practice-areas"
            className="block rounded-lg bg-[var(--brand-navy)]/40 p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Franchise Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </Link>

          <Link
            href="/practice-areas"
            className="block rounded-lg bg-[var(--brand-navy)]/40 p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Bankruptcy & Restructuring
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </Link>

          <Link
            href="/practice-areas"
            className="block rounded-lg bg-[var(--brand-navy)]/40 p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Business & Franchise Transactions
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </Link>

          <Link
            href="/practice-areas"
            className="block rounded-lg bg-[var(--brand-navy)]/40 p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/50 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Civil Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Placeholder summary we’ll refine later.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}
