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
          This placeholder introduction will eventually describe the firm’s
          background, philosophy, and approach to handling complex litigation
          and business matters. The final copy will be informed by the client’s
          own tone, experience, and values.
        </p>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Attorney Bio Placeholder */}
      <section className="mt-12">
        <h2
          className="text-2xl font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Attorney Profile
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          This section will later include a professional biography highlighting
          the attorney’s experience, representative matters, education, and
          credentials. We’ll refine this once we receive details from the
          client.
        </p>

        {/* Placeholder for a future headshot or bio layout */}
        <div className="mt-8 h-40 w-full rounded-lg bg-white/5 border border-white/10"></div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Philosophy / Values placeholder */}
      <section className="mt-12">
        <h2
          className="text-2xl font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Firm Philosophy
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          This area will contain a short statement about the firm’s litigation
          approach, responsiveness, client service focus, and strategic mindset.
          We will tailor the content to reflect the firm’s real values.
        </p>
      </section>

      {/* Firm History & Mission */}
      <section className="mt-16 rounded-lg bg-[var(--brand-navy)]/5 px-6 py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
          History &amp; Mission
        </p>

        <h2
          className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl"
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
