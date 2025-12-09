// app/practice-areas/page.tsx
import Link from "next/link";

export default function PracticeAreasPage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)]/10 px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
          Focused Expertise
        </p>

        <h1
          className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Practice Areas
        </h1>

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          This page provides an overview of the firm&apos;s core litigation and
          transactional practice areas. Each section outlines the types of
          matters the firm handles and offers a brief description of its
          approach and focus.
        </p>

        <div className="my-16 h-px w-full bg-white/10"></div>
        <div
          className="mt-12 rounded-lg bg-white/5 p-8 border border-white/10 
             shadow-lg shadow-black/5 transition 
             hover:-translate-y-0.5 hover:border-white/20 hover:shadow-black/10"
        >
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Commercial Litigation
          </h2>

          <div className="mt-1.5 h-[2px] w-16 bg-[var(--brand-gold)]"></div>

          <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
            Placeholder description for Commercial Litigation. This will become
            a short paragraph summarizing the firm&apos;s approach, typical
            matters, and key strengths. No styling yet.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Placeholder bullet point one</li>
            <li>Placeholder bullet point two</li>
            <li>Placeholder bullet point three</li>
          </ul>
        </div>

        <div className="my-16 h-px w-full bg-white/10"></div>
        <div
          className="mt-12 rounded-lg bg-white/5 p-8 border border-white/10 
             shadow-lg shadow-black/5 transition 
             hover:-translate-y-0.5 hover:border-white/20 hover:shadow-black/10"
        >
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Franchise Litigation
          </h2>

          <div className="mt-1.5 h-[2px] w-16 bg-[var(--brand-gold)]"></div>

          <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
            Placeholder description for Franchise Litigation. This will later
            include a short summary of the firm&apos;s litigation strategy,
            common dispute types, and representative matters.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Placeholder bullet point one</li>
            <li>Placeholder bullet point two</li>
            <li>Placeholder bullet point three</li>
          </ul>
        </div>

        <div className="my-16 h-px w-full bg-white/10"></div>
        <div
          className="mt-12 rounded-lg bg-white/5 p-8 border border-white/10 
             shadow-lg shadow-black/5 transition 
             hover:-translate-y-0.5 hover:border-white/20 hover:shadow-black/10"
        >
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Bankruptcy & Restructuring
          </h2>

          <div className="mt-1.5 h-[2px] w-16 bg-[var(--brand-gold)]"></div>

          <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
            Placeholder description for Bankruptcy & Restructuring. This
            paragraph will later describe the firm&apos;s experience with
            insolvency matters, creditor and debtor representation, structured
            workouts, and related disputes.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Placeholder bullet point one</li>
            <li>Placeholder bullet point two</li>
            <li>Placeholder bullet point three</li>
          </ul>
        </div>

        <div className="mt-12 h-px w-full bg-white/10"></div>
        <div
          className="mt-12 rounded-lg bg-white/5 p-8 border border-white/10 
             shadow-lg shadow-black/5 transition 
             hover:-translate-y-0.5 hover:border-white/20 hover:shadow-black/10"
        >
          <h2 className="text-xl font-semibold">
            Business & Franchise Transactions
          </h2>

          <div className="mt-1.5 h-[2px] w-16 bg-[var(--brand-gold)]"></div>

          <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
            Placeholder description for Business & Franchise Transactions. This
            will later describe the firm&apos;s experience handling franchise
            agreements, business formation, operational contracts, and general
            transactional matters.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Placeholder bullet point one</li>
            <li>Placeholder bullet point two</li>
            <li>Placeholder bullet point three</li>
          </ul>
        </div>

        <div className="my-16 h-px w-full bg-white/10"></div>
        <div
          className="mt-12 rounded-lg bg-white/5 p-8 border border-white/10 
             shadow-lg shadow-black/5 transition 
             hover:-translate-y-0.5 hover:border-white/20 hover:shadow-black/10"
        >
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Civil Litigation
          </h2>

          <div className="mt-1.5 h-[2px] w-16 bg-[var(--brand-gold)]"></div>

          <p className="mt-6 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
            Placeholder description for Civil Litigation. This will eventually
            summarize the types of civil matters the firm handles, such as
            disputes between individuals or organizations, contract
            disagreements, and general business-related conflicts.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Placeholder bullet point one</li>
            <li>Placeholder bullet point two</li>
            <li>Placeholder bullet point three</li>
          </ul>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 pt-16 border-t border-white/10 text-center">
          <p className="text-sm text-gray-200/80 tracking-wide">
            Ready to discuss your legal matter?
          </p>

          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block rounded-md bg-[var(--brand-gold)] px-10 py-4 
                 text-sm font-semibold tracking-wide text-black transition 
                 hover:bg-[var(--brand-gold)]/90"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
