// app/about/page.tsx

export const metadata = {
  title: "About Our Firm | Cohen, LLC",
  description:
    "Learn about Cohen, LLC’s attorneys, backgrounds, philosophy, and decades of experience in business, franchise, bankruptcy, and commercial litigation matters.",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      {/* Intro Section */}
      <section className="rounded-lg bg-[var(--brand-navy)]/10 px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
          About the Firm
        </p>

        <h1
          className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Cohen, LLC
        </h1>

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          Cohen, LLC is a Denver-based boutique law firm focused on business,
          franchise, bankruptcy, and commercial litigation matters. Our
          attorneys bring extensive experience from private practice, business,
          and public service, allowing us to guide clients through complex
          disputes and transactional challenges.
        </p>
      </section>

      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Lead Attorney Bio */}
      <section className="mt-16 flex flex-col gap-10 sm:flex-row sm:items-start">
        {/* Photo */}
        <div className="sm:w-1/3">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
              alt="Lead attorney headshot placeholder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Block */}
        <div className="sm:w-2/3">
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Attorney Name One
          </h2>

          <p className="mt-1 text-sm text-gray-400 tracking-wide">
            Managing Partner
          </p>

          <p className="mt-3 text-sm text-gray-200/90 leading-relaxed">
            This section describes the attorney&apos;s background, areas of
            practice, and experience handling commercial litigation, franchise
            matters, bankruptcy, and related business disputes. Additional
            details will be provided as firm biographies are finalized.
          </p>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
            Additional details may include education, career milestones, notable
            verdicts, publications, community involvement, or bar association
            leadership positions. This section is intended to serve as the
            firm&apos;s central credibility anchor.
          </p>
        </div>
      </section>

      {/* Attorney Bio Section #2 */}
      <section className="mt-16 flex flex-col gap-10 sm:flex-row sm:items-start">
        {/* Photo */}
        <div className="sm:w-1/3">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
              alt="Attorney headshot placeholder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Block */}
        <div className="sm:w-2/3">
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Attorney Name Two
          </h2>

          <p className="mt-1 text-sm text-gray-400 tracking-wide">
            Associate Attorney
          </p>

          <p className="mt-3 text-sm text-gray-200/90 leading-relaxed">
            This section describes the attorney&apos;s background, areas of
            practice, and experience handling commercial litigation, franchise
            matters, bankruptcy, and related business disputes. Additional
            details will be provided as firm biographies are finalized.
          </p>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
            Additional information may include professional affiliations,
            litigation highlights, or specialized experience that contributes to
            the firm&apos;s capabilities.
          </p>
        </div>
      </section>

      {/* Attorney Bio Section #3 */}
      <section className="mt-16 flex flex-col gap-10 sm:flex-row sm:items-start">
        {/* Photo */}
        <div className="sm:w-1/3">
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <img
              src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80"
              alt="Attorney headshot placeholder"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text Block */}
        <div className="sm:w-2/3">
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Attorney Name Three
          </h2>

          <p className="mt-1 text-sm text-gray-400 tracking-wide">
            Senior Counsel
          </p>

          <p className="mt-3 text-sm text-gray-200/90 leading-relaxed">
            This section describes the attorney&apos;s background, areas of
            practice, and experience handling commercial litigation, franchise
            matters, bankruptcy, and related business disputes. Additional
            details will be provided as firm biographies are finalized.
          </p>

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
            Final content may include notable cases, publications, speaking
            engagements, or leadership roles within the community or legal
            organizations.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Philosophy / Values */}
      <section className="mt-12 px-6">
        <h2
          className="text-2xl font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Firm Philosophy
        </h2>
        <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          Our philosophy is grounded in thorough preparation, strategic
          thinking, and clear communication. We work closely with clients to
          understand their goals, assess legal risks, and pursue effective
          solutions through negotiation or litigation. Whether advising on
          transactions or trying complex cases, we approach each matter with the
          same level of diligence and care.
        </p>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Firm History & Mission */}
      <section className="mt-16 rounded-lg bg-[var(--brand-navy)]/5 px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)] text-center sm:text-left">
          History &amp; Mission
        </p>

        <h2
          className="mt-4 text-2xl font-semibold leading-tight text-center sm:text-left sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          A Focus on Precision, Advocacy, and Results
        </h2>

        <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          Cohen, LLC was founded to provide high-quality representation to
          clients facing significant business, commercial, and financial
          challenges. The firm’s mission is to deliver practical,
          results-oriented counsel backed by decades of legal experience. We aim
          to provide clients with clear guidance and unwavering advocacy
          throughout every stage of their matter.
        </p>
      </section>
    </main>
  );
}
