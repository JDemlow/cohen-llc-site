// app/about/page.tsx

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
          This placeholder introduction will eventually describe the firm&apos;s
          background, philosophy, and approach to handling complex litigation
          and business matters. The final copy will be informed by the
          client&apos;s own tone, experience, and values.
        </p>
      </section>

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

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
            This placeholder biography will eventually be updated with the
            primary attorney&apos;s background, litigation experience, and areas
            of focus. The final text will reflect the attorney&apos;s real
            credentials and representative matters.
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

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
            This placeholder biography will be customized once the client
            provides details regarding this attorney&apos;s background, areas of
            practice, education, and representative matters.
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

          <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
            This placeholder biography will be filled in with professional
            details relating to this attorney&apos;s experience,
            specializations, and contributions to the firm&apos;s litigation or
            transactional practice.
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
      {/* Philosophy / Values */}
      <section className="mt-12 px-6">
        <h2
          className="text-2xl font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Firm Philosophy
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          This area will contain a short statement about the firm&apos;s
          litigation approach, responsiveness, client service focus, and
          strategic mindset. We will tailor the content to reflect the
          firm&apos;s real values.
        </p>
      </section>

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

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          This placeholder section will eventually highlight the firm&apos;s
          founding story, its guiding principles, and the values that shape its
          client relationships. The final version may emphasize the firm&apos;s
          commitment to meticulous preparation, strategic thinking, and
          delivering practical, results-oriented counsel.
        </p>

        <p className="mt-4 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          When we receive input from the client, this section will reflect the
          firm&apos;s real origins, motivations, and long-term mission—framing
          the identity of the practice in a way that supports trust and
          credibility.
        </p>
      </section>
    </main>
  );
}
