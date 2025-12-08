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

      {/* Practice Areas skeleton */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
          Practice Areas
        </h2>

        <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
          This is placeholder copy describing the firm&apos;s core focus areas.
          We&apos;ll replace it with real content based on the final client
          specs.
        </p>

        <ul className="mt-6 space-y-2 text-sm text-gray-200/80">
          <li>• Commercial Litigation</li>
          <li>• Franchise Litigation</li>
          <li>• Bankruptcy & Restructuring</li>
          <li>• Franchise & Business Transactions</li>
          <li>• Civil Litigation</li>
        </ul>
      </section>
    </main>
  );
}
