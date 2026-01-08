// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://choen-llc.netlify.app"),
  title: "Cohen, LLC | Trial & Business Litigation",
  description:
    "Cohen, LLC is a boutique Denver law firm focused on commercial litigation, franchise disputes, and complex bankruptcy matters.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Cohen, LLC",
    title: "Cohen, LLC | Trial & Business Litigation",
    description:
      "Cohen, LLC is a boutique Denver law firm focused on commercial litigation, franchise disputes, and complex bankruptcy matters.",
  },
  twitter: {
    card: "summary",
    title: "Cohen, LLC | Trial & Business Litigation",
    description:
      "Cohen, LLC is a boutique Denver law firm focused on commercial litigation, franchise disputes, and complex bankruptcy matters.",
  },
};

export default function HomePage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)] px-4 py-16 sm:px-8 sm:py-20">
        <div className="sm:max-w-2xl">
          <span className="text-sm font-semibold text-[color:var(--brand-gold)] tracking-wide uppercase">
            Attorneys and Counselors at Law
          </span>

          <h1
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Cohen Trial - The Commercial Litigation Attorneys of Denver
          </h1>

          <p className="mt-4 text-sm sm:text-base text-gray-200/90 max-w-2xl">
            Cohen, LLC is a boutique law firm in Denver representing clients in
            business, franchise, bankruptcy, and other civil and commercial
            matters.
          </p>

          <p className="mt-3 text-sm sm:text-base text-gray-200/90 max-w-2xl">
            Our trial attorneys have represented hundreds of clients before
            state and federal courts across the country. We also represent
            clients in transactional matters including franchising, mergers,
            acquisitions, and business legal strategy.
          </p>

          <div className="mt-8 flex justify-center sm:justify-start">
            <PrimaryButton href="/contact">
              Schedule a Consultation
            </PrimaryButton>
          </div>
        </div>
      </section>

      {/* Subtle section divider */}
      <div className="my-10 h-px w-full bg-white/10" />

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

        <p className="mt-3 text-sm sm:text-base text-gray-200/90 max-w-2xl">
          Our practice areas include bankruptcy and commercial disputes,
          business and franchise litigation, contract disputes, corporate
          conflicts, and other civil litigation and transactional matters.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <Link
            href="/practice-areas#commercial-litigation"
            className="block rounded-lg bg-[var(--brand-navy)] p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/90 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Commercial Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Business disputes including intellectual property, restructuring,
              debt recovery, shareholder conflicts, class actions, and municipal
              finance.
            </p>
          </Link>

          <Link
            href="/practice-areas#franchise-litigation"
            className="block rounded-lg bg-[var(--brand-navy)] p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/90 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Franchise Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Representation of franchisees and franchisors in disputes
              involving FDD laws, franchise conflicts, supply chain issues, and
              multi-plaintiff matters.
            </p>
          </Link>

          <Link
            href="/practice-areas#bankruptcy-restructuring"
            className="block rounded-lg bg-[var(--brand-navy)] p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/90 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Bankruptcy & Restructuring
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Bankruptcy restructuring for corporations, partnerships, LLCs, and
              businesses of all sizes, representing both creditors and debtors.
            </p>
          </Link>

          <Link
            href="/practice-areas#business-transactions"
            className="block rounded-lg bg-[var(--brand-navy)] p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/90 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Business & Franchise Transactions
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Drafting and review of FDDs, franchise structuring, mergers and
              acquisitions, agreements, business support, and divestitures.
            </p>
          </Link>

          <Link
            href="/practice-areas#civil-litigation"
            className="block rounded-lg bg-[var(--brand-navy)] p-4 border border-white/10 shadow-lg shadow-black/5 transition transform hover:-translate-y-1 hover:bg-[var(--brand-navy)]/90 hover:border-white/20 hover:shadow-black/10"
          >
            <h3
              className="text-base font-semibold"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Civil Litigation
            </h3>
            <p className="mt-2 text-sm text-gray-200/80">
              Individual and business disputes involving contracts, fraud,
              products liability, consumer protection, and professional
              liability.
            </p>
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2
          className="text-2xl sm:text-3xl font-semibold"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Our Team
        </h2>

        <p className="mt-3 text-sm sm:text-base text-gray-200/90 max-w-2xl">
          Our attorneys have a variety of backgrounds in business, politics,
          litigation, and the legal profession.
        </p>

        <div className="mt-10 flex justify-center sm:justify-start">
          <PrimaryButton href="/about">Learn More About Our Team</PrimaryButton>
        </div>
      </section>

      <section className="mt-16">
        <h2
          className="text-2xl sm:text-3xl font-semibold"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Recognition
        </h2>

        <div className="mt-6 rounded-lg bg-[var(--brand-navy)] p-6 border border-white/10 shadow-lg shadow-black/5">
          <p className="text-sm sm:text-base text-gray-200/90 leading-relaxed">
            &ldquo;Having seen a number of pleadings in this hard-fought matter,
            it is the court&apos;s belief that the quality of representation in
            this matter by both sides is nothing short of exceptional. . . . Mr.
            Cohen&apos;s resume and experience of 39 years, the numerous complex
            commercial cases and trials he has participated in, the honors
            bestowed upon him, and the quality of his clients would reflect he
            is at or near the top of counsel in his areas of practice.&rdquo;
          </p>

          <p className="mt-4 text-xs sm:text-sm text-gray-300/80">
            - G.D. Miller, District Court Judge.{" "}
            <span className="italic">
              Creekstone Development Inc. v. Top Down Construction, LLC.
            </span>{" "}
            2019CV31796
          </p>
        </div>
      </section>
    </main>
  );
}
