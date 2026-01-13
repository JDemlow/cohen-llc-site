// app/practice-areas/page.tsx

import PrimaryButton from "../components/PrimaryButton";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export const metadata = {
  title: "Practice Areas | Cohen, LLC",
  description:
    "Explore Cohen, LLC's core practice areas, including commercial litigation, franchise litigation, bankruptcy restructuring, business and franchise transactions, and civil litigation.",
};

export default function PracticeAreasPage() {
  return (
    <main className="py-16">
      <SectionHeader
        as="h1"
        eyebrow="Focused Expertise"
        title="Practice Areas"
        description={
          <>
            Cohen, LLC represents clients in a broad range of commercial,
            franchise, bankruptcy, and civil matters. The sections below provide
            an overview of the firm&apos;s key practice areas and the types of
            disputes and transactions our attorneys handle.
          </>
        }
        withBackground
      />
      <div className="my-10 h-px w-full bg-white/10"></div>

      {/* Commercial Litigation */}
      <div id="commercial-litigation">
        <Card className="mt-12">
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

          <ul className="mt-5 list-disc pl-5 marker:text-gray-400 text-sm text-gray-200/80 space-y-1.5">
            <li>Intellectual property disputes</li>
            <li>Class action and mass tort litigation</li>
            <li>Restructuring and debt recovery matters</li>
            <li>Shareholder and partnership conflicts</li>
            <li>Municipal finance litigation</li>
          </ul>
        </Card>
      </div>

      <div className="my-10 h-px w-full bg-white/10"></div>

      {/* Franchise Litigation */}
      <div id="franchise-litigation">
        <Card className="mt-12">
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

          <ul className="mt-5 list-disc pl-5 marker:text-gray-400 text-sm text-gray-200/80 space-y-1.5">
            <li>FDD disclosure and compliance disputes</li>
            <li>Franchisee–franchisor conflict resolution</li>
            <li>Supply chain and vendor-related matters</li>
            <li>Representation in multi-party franchise actions</li>
          </ul>
        </Card>
      </div>

      <div className="my-10 h-px w-full bg-white/10"></div>

      {/* Bankruptcy & Restructuring */}
      <div id="bankruptcy-restructuring">
        <Card className="mt-12">
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

          <ul className="mt-5 list-disc pl-5 marker:text-gray-400 text-sm text-gray-200/80 space-y-1.5">
            <li>Creditor and debtor representation</li>
            <li>Chapter 11 reorganizations and structured workouts</li>
            <li>Business insolvency strategy and negotiations</li>
            <li>Disputes arising from financial distress</li>
          </ul>
        </Card>
      </div>

      <div className="mt-12 h-px w-full bg-white/10"></div>

      {/* Business & Franchise Transactions */}
      <div id="business-transactions">
        <Card className="mt-12">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Business & Franchise Transactions
          </h2>

          <div className="mt-1.5 h-[2px] w-16 bg-[var(--brand-gold)]"></div>

          <p className="mt-4 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
            Our firm drafts and reviews Franchise Disclosure Documents,
            franchise agreements, and a full range of business contracts. We
            assist clients with franchise structuring, mergers and acquisitions,
            operational support, and business divestitures.
          </p>

          <ul className="mt-5 list-disc pl-5 marker:text-gray-400 text-sm text-gray-200/80 space-y-1.5">
            <li>Drafting and review of FDDs and franchise agreements</li>
            <li>Franchise structuring and regulatory guidance</li>
            <li>Mergers and acquisitions support</li>
            <li>Contractual and operational business counseling</li>
            <li>Business sales and divestitures</li>
          </ul>
        </Card>
      </div>

      <div className="my-10 h-px w-full bg-white/10"></div>

      {/* Civil Litigation */}
      <div id="civil-litigation">
        <Card className="mt-12">
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

          <ul className="mt-5 list-disc pl-5 marker:text-gray-400 text-sm text-gray-200/80 space-y-1.5">
            <li>Contract and business disputes</li>
            <li>Fraud and misrepresentation matters</li>
            <li>Products liability litigation</li>
            <li>Consumer protection claims</li>
            <li>Professional liability matters</li>
          </ul>
        </Card>
      </div>

      {/* Bottom CTA */}
      <div className="mt-24 pt-16 border-t border-white/10 text-center">
        <p className="text-sm text-gray-200/80 tracking-wide">
          Ready to discuss your legal matter?
        </p>

        <div className="mt-6">
          <PrimaryButton href="/contact">
            Schedule a Free Consultation
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
}
