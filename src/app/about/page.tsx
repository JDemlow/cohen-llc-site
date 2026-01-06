// app/about/page.tsx
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";

export const metadata = {
  title: "About Us | Cohen, LLC",
  description:
    "Learn about the experienced attorneys and professionals at Cohen, LLC, a boutique Denver law firm specializing in commercial litigation and business law.",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      {/* Page Header */}
      <SectionHeader
        as="h1"
        eyebrow="Who We Are"
        title="Our Team"
        description="Cohen, LLC is a boutique law firm committed to providing exceptional legal representation in commercial litigation, franchise law, bankruptcy, and business transactions."
      />

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Attorney Profiles */}
      <section className="space-y-16">
        {/* Jeffrey Cohen - Principal */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo Placeholder */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Photo Coming Soon</span>
          </div>

          {/* Bio */}
          <div>
            <h2
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Jeffrey Cohen
            </h2>
            <p className="mt-1 text-sm text-[var(--brand-gold)]">Principal</p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed">
              <p>
                An accomplished litigator with more than 40 years of experience,
                Mr. Cohen represents clients in complex commercial litigation,
                bankruptcy reorganization and municipal bond defaults and
                insolvency.
              </p>

              <p>
                Named one of the leading litigation and general commercial law
                attorneys in Colorado by Chambers USA, Mr. Cohen frequently
                advises creditors, investors, and municipalities on various
                aspects of litigation surrounding bond defaults and other
                financial reorganization and bankruptcy issues. He has served as
                lead counsel for the planning and execution of numerous business
                restructuring cases, including the restructuring of troubled
                municipal bonds, as well as lead creditor and debtor counsel for
                several multimillion-dollar bankruptcies.
              </p>

              <p>
                Having litigated in more than 150 state and federal jury and
                non-jury trials to verdict, Mr. Cohen has significant experience
                briefing and arguing appeals as well as conducting all aspects
                of discovery and pre-trial motions.
              </p>

              <p>
                Additionally, Mr. Cohen handles a variety of municipal financial
                issues for both rated and non-rated issuers, advising on the
                nature of the bondholder&apos;s rights and the implications of
                the default.
              </p>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Representative Matters
              </h3>

              <ul className="space-y-2 text-sm">
                <li>
                  • Served as lead national franchise counsel in opt-out
                  litigation against an international sandwich franchise.
                </li>
                <li>
                  • Hamilton Creek Metropolitan District v. Colorado Bond Shares
                  (98CV59, District Court, Summit County, Colorado)
                </li>
                <li>
                  • Served as lead exchanger counsel in $250 million Chapter 11
                  bankruptcy of 1031 Tax Group in the U.S. District Court for
                  the Southern District of New York and negotiated a $14 million
                  settlement in the main adversary proceeding.
                </li>
                <li>
                  • Served as lead advisor to one of the world&apos;s largest
                  hedge funds in acquisition of $1.1 billion of financially
                  distressed municipal bonds.
                </li>
                <li>
                  • Served as lead advisor to one of the nation&apos;s largest
                  municipal bond mutual funds regarding $4.6 billion of Alabama
                  revenue bonds that are in default and the subject of
                  litigation in the U.S. District Court for the Northern
                  District of Alabama.
                </li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Additional Information
              </h3>

              <p>
                Mr. Cohen is a frequent speaker on municipal and bankruptcy
                matters and has provided legal insight to a variety of media
                outlets throughout his career. He has been published and quoted
                in The Denver Business Journal, Continuing Legal Education in
                Colorado, Inc., The Colorado Lawyer, The Bond Buyer, Business
                Week, The Rocky Mountain News, The Birmingham News, and The
                Denver Post. Mr. Cohen has also served as an editor-in-chief of
                the Colorado Bankruptcy Court Reporter, Texas Bankruptcy Court
                Reporter, and the 4th Circuit Bankruptcy Court Reporter.
              </p>

              <p>
                Mr. Cohen was also an adjunct professor at the University of
                Denver Sturm College of Law, teaching classes on debtors and
                creditors as well as bankruptcy and creditors&apos; rights.
              </p>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Honors and Awards
              </h3>

              <ul className="space-y-1 text-sm">
                <li>
                  • Named as one of the leading litigation and general
                  commercial law attorneys in Colorado by Chambers USA (2013 –
                  2020)
                </li>
                <li>
                  • Included in &quot;Who&apos;s Who in American Law&quot;
                  (2003, 2004)
                </li>
                <li>
                  • Included in &quot;Who&apos;s Who in America&quot; (2003,
                  2004)
                </li>
                <li>
                  • Recipient of the American Jurisprudence Award in Civil
                  Procedure
                </li>
                <li>
                  • Recipient of the Rose Memorial Scholarship from Brooklyn Law
                  School
                </li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Education
              </h3>

              <ul className="space-y-1 text-sm">
                <li>• Brandeis University (B.A., magna cum laude, 1977)</li>
                <li>• Brooklyn Law School (J.D., 1980)</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Bar Admissions
              </h3>

              <ul className="space-y-1 text-sm">
                <li>• Colorado</li>
                <li>• New York</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Court Admissions
              </h3>

              <ul className="space-y-1 text-sm">
                <li>• U.S. Bankruptcy Court, District of Colorado</li>
                <li>• U.S. Bankruptcy Court, Eastern District of New York</li>
                <li>• U.S. Bankruptcy Court, Southern District of New York</li>
                <li>• U.S. Court of Appeals, Second Circuit</li>
                <li>• U.S. Court of Appeals, Tenth Circuit</li>
                <li>• U.S. District Court, District of Colorado</li>
                <li>• U.S. District Court, District of North Dakota</li>
                <li>• U.S. District Court, Eastern District of New York</li>
                <li>• U.S. District Court, Southern District of New York</li>
                <li>• U.S. District Court, Western District of New York</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Professional Organizations
              </h3>

              <ul className="space-y-1 text-sm">
                <li>• Aspen Institute, Society of Fellows</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tanner Sandor - Associate Attorney */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/tanner-sandor.jpg"
              alt="Tanner Sandor, Associate Attorney at Cohen, LLC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>

          {/* Bio */}
          <div>
            <h2
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Tanner Sandor
            </h2>
            <p className="mt-1 text-sm text-[var(--brand-gold)]">
              Associate Attorney
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed">
              <p>Attorney bio and background information will be added here.</p>
            </div>
          </div>
        </div>

        {/* Katelyn Bowles - Practice Manager */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/katelyn-bowles.png"
              alt="Katelyn Bowles, Practice Manager at Cohen, LLC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>

          {/* Bio */}
          <div>
            <h2
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Katelyn Bowles
            </h2>
            <p className="mt-1 text-sm text-[var(--brand-gold)]">
              Practice Manager
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed">
              <p>
                Katelyn Bowles is a senior law firm professional with over a
                decade of experience supporting attorneys and managing the daily
                functions of law practices. At Cohen, LLC, she plays a key role
                in the firm&apos;s day-to-day operations and administrative
                oversight.
              </p>

              <p>
                Katelyn is responsible for client billing and invoicing, vendor
                coordination, internal workflows, and working closely with
                attorneys to ensure efficiency, accuracy, and consistency across
                the firm.
              </p>

              <p>
                Katelyn brings paralegal and management experience from both
                large international firms and boutique practices. She provides a
                broad understanding of law firm structure and business
                processes. She is known for her attention to detail, discretion,
                and ability to manage complex administrative and financial
                responsibilities with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Firm Philosophy */}
      <section>
        <h2
          className="text-2xl font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Our Approach
        </h2>

        <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed max-w-3xl">
          <p>
            Cohen, LLC combines deep legal expertise with a client-focused
            approach. We understand that every case is unique, and we tailor our
            strategies to meet each client&apos;s specific needs and objectives.
          </p>

          <p>
            Our boutique structure allows us to provide personalized attention
            and responsive service while maintaining the highest standards of
            legal excellence. We are committed to clear communication, strategic
            thinking, and achieving the best possible outcomes for our clients.
          </p>
        </div>
      </section>
    </main>
  );
}
