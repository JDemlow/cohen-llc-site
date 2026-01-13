// app/about/page.tsx
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";
import PrimaryButton from "../components/PrimaryButton";

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
        withBackground
      />

      {/* Divider */}
      <div className="my-10 h-px w-full bg-white/10"></div>

      {/* Attorney Profiles */}
      <section className="space-y-12">
        {/* Jeffrey Cohen - Principal */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/jeffrey-cohen.jpeg"
              alt="Jeffrey Cohen, Principal at Cohen, LLC"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
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

              <ul className="space-y-1 text-sm text-[var(--brand-gold)]">
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
              className="object-cover object-top"
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
              <p>
                Tanner Sandor is an Associate Attorney at Cohen, LLC, where he
                focuses his practice on commercial litigation and trial work. He
                represents businesses and individuals in complex disputes
                involving contracts, commercial transactions, and related
                business matters, bringing a practical, solutions-oriented
                approach to each case.
              </p>

              <p>
                Before joining Cohen, LLC as an associate, Tanner served as a
                law clerk with the firm, where he gained hands-on experience
                supporting litigation strategy, legal research, and trial
                preparation. His background allows him to approach disputes with
                a strong understanding of both legal theory and real-world
                business considerations.
              </p>

              <p>
                Tanner earned his Juris Doctor from American University
                Washington College of Law, where he served as Business &
                Marketing Editor of the American University Business Law Review.
                In that role, he supported the journal&apos;s digital and
                public-facing presence and helped promote scholarship at the
                intersection of law, regulation, and commerce. He also served as
                Co-Chair of the Joint Journal Committee, helping administer the
                schoolwide write-on competition across the law review and
                academic journals.
              </p>

              <p>
                During law school, Tanner participated in the Criminal Justice
                Clinic (Defense) at American University Washington College of
                Law, representing clients in Maryland state court. He defended a
                client facing drug-related charges in Montgomery County and
                secured a dismissal (nolle prosequi) on the case.
              </p>

              <p>
                Before entering law school, Tanner worked as an Anti-Money
                Laundering Analyst II at Promontory Financial Group (IBM
                Promontory), where he supported global financial institutions
                with fraud detection, suspicious activity monitoring, and
                compliance risk analysis. His work included enhanced due
                diligence and matters involving anti-corruption frameworks such
                as the Foreign Corrupt Practices Act (FCPA) and the UK Bribery
                Act, as well as developing and delivering training for more than
                70 analysts. That background informs his practical approach to
                complex disputes, particularly matters involving financial
                transactions, compliance issues, and document-intensive
                investigations.
              </p>

              <p>
                Outside of the office, Tanner enjoys mountaineering and spending
                time with his fiancée, Arielle and his dog, Tonks.
              </p>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Education
              </h3>

              <ul className="space-y-1 text-sm">
                <li>• American University Washington College of Law (J.D.)</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Bar Admissions
              </h3>

              <ul className="space-y-1 text-sm">
                <li>• Colorado</li>
              </ul>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Court Admissions
              </h3>

              <ul className="space-y-1 text-sm">
                <li className="text-[var(--brand-gold)]">
                  • U.S. District Court, District of Colorado
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Katelyn Bowles - Practice Manager */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/katelyn-bowles.jpg"
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
                As Practice Manager at Cohen, LLC, Katelyn brings extensive
                legal experience and provides strategic oversight of the
                firm&apos;s operations and financial administration. She is
                responsible for firm billing and collections, budgeting and
                forecasting, trust and operating account management, vendor and
                contract oversight, and internal systems, ensuring efficiency,
                compliance, and operational continuity.
              </p>

              <p>
                Working closely with firm leadership, she supports the
                firm&apos;s business objectives, manages risk, and implements
                processes that promote accountability, scalability, and
                long-term stability. Katelyn is also an experienced and
                Certified Paralegal who brings both formal legal training and
                hands-on operational expertise to her role.
              </p>

              <p>
                In Katelyn&apos;s free time she enjoys traveling with her
                husband Gregg, hiking with her dogs, running, cycling and
                exploring the great outdoors. She is also a photographer who has
                had her work displayed in both Pittsburgh and Denver.
              </p>

              <h3
                className="text-lg font-semibold mt-8 mb-3"
                style={{ fontFamily: "var(--playfair)" }}
              >
                Education
              </h3>

              <ul className="space-y-1 text-sm">
                <li>
                  • Gannon University (B.A. in Legal Studies, ABA-accredited,
                  2009)
                </li>
                <li>
                  • Gannon University (Paralegal Certificate, ABA-accredited,
                  2009)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-10 h-px w-full bg-white/10"></div>

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
