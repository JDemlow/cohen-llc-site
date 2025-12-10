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
            We represent businesses in complex commercial disputes, including
            matters involving intellectual property, restructuring, debt
            recovery, shareholder conflicts, class actions, and municipal
            finance. Our attorneys handle cases at every stage of litigation in
            state and federal courts.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Intellectual property disputes</li>
            <li>Class action and mass tort litigation</li>
            <li>Restructuring and debt recovery matters</li>
            <li>Shareholder and partnership conflicts</li>
            <li>Municipal finance litigation</li>
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
            We represent both franchisees and franchisors in disputes involving
            FDD disclosure requirements, franchise system conflicts, supply
            chain issues, and multi-plaintiff franchise matters. Our work spans
            pre-litigation strategy through trial and appeals.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>FDD disclosure and compliance disputes</li>
            <li>Franchisee–franchisor conflict resolution</li>
            <li>Supply chain and vendor-related matters</li>
            <li>Representation in multi-party franchise actions</li>
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
            We represent both creditors and debtors in business bankruptcy and
            restructuring matters. Our experience includes Chapter 11
            reorganizations, structured workouts, and insolvency-related
            litigation for corporations, partnerships, LLCs, and businesses of
            all sizes.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Creditor and debtor representation</li>
            <li>Chapter 11 reorganizations and structured workouts</li>
            <li>Business insolvency strategy and negotiations</li>
            <li>Disputes arising from financial distress</li>
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
            Our firm drafts and reviews Franchise Disclosure Documents,
            franchise agreements, and a full range of business contracts. We
            assist clients with franchise structuring, mergers and acquisitions,
            operational support, and business divestitures.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Drafting and review of FDDs and franchise agreements</li>
            <li>Franchise structuring and regulatory guidance</li>
            <li>Mergers and acquisitions support</li>
            <li>Contractual and operational business counseling</li>
            <li>Business sales and divestitures</li>
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
            We handle civil disputes between individuals and businesses,
            including contract disagreements, fraud claims, products liability
            matters, consumer protection disputes, and professional liability
            issues. Our attorneys manage cases from early investigation through
            trial.
          </p>

          <ul className="mt-5 list-disc list-inside text-sm text-gray-200/80 space-y-1.5">
            <li>Contract and business disputes</li>
            <li>Fraud and misrepresentation matters</li>
            <li>Products liability litigation</li>
            <li>Consumer protection claims</li>
            <li>Professional liability matters</li>
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
