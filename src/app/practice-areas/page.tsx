// app/practice-areas/page.tsx

export default function PracticeAreasPage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)]/10 px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)]">
          Focused Expertise
        </p>

        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
          Practice Areas
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
          This is a placeholder page where we&apos;ll bring in the firm&apos;s
          actual practice area copy and structure it for a small, focused site.
          Each practice area will have a clear heading and a short description,
          consistent with the homepage card layout.
        </p>

        <div className="my-16 h-px w-full bg-white/10"></div>
        <div className="mt-8">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Commercial Litigation
          </h2>

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
        <div className="mt-8">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Franchise Litigation
          </h2>

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
        <div className="mt-8">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Bankruptcy & Restructuring
          </h2>

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
        <div className="mt-8">
          <h2 className="text-xl font-semibold">
            Business & Franchise Transactions
          </h2>

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
        <div className="mt-8">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Civil Litigation
          </h2>

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
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-200/80">
            Ready to discuss your legal matter?
          </p>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block rounded-md bg-[var(--brand-gold)] px-8 py-4 text-base font-semibold tracking-wide text-black transition hover:bg-[var(--brand-gold)]/90"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
