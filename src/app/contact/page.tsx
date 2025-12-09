// app/contact/page.tsx

export default function ContactPage() {
  return (
    <main className="py-16">
      {/* Intro Section */}
      <section className="rounded-lg bg-[var(--brand-navy)]/10 px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
          Contact
        </p>

        <h1
          className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Schedule a Consultation
        </h1>

        <p className="mt-6 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          This page will provide a simple contact form and essential details for
          reaching the firm. We&apos;ll refine the layout and messaging once we
          receive the client&apos;s preferences for intake and communication.
        </p>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Form + Contact Info Section */}
      <section className="mt-12 grid gap-12 sm:grid-cols-2">
        {/* Contact Form Placeholder */}
        <div>
          <h2
            className="text-xl font-semibold sm:text-2xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Send a Message
          </h2>

          <p className="mt-3 text-sm text-gray-200/80 leading-relaxed">
            This placeholder form will be replaced with a functional version.
            Fields shown here are only structural.
          </p>

          {/* Placeholder form */}
          <div className="mt-6 space-y-4">
            <div className="h-12 w-full rounded-md bg-white/5 border border-white/10"></div>
            <div className="h-12 w-full rounded-md bg-white/5 border border-white/10"></div>
            <div className="h-12 w-full rounded-md bg-white/5 border border-white/10"></div>
            <div className="h-32 w-full rounded-md bg-white/5 border border-white/10"></div>

            <button className="h-12 w-40 rounded-md bg-[var(--brand-gold)] text-black font-semibold tracking-wide text-sm hover:bg-[var(--brand-gold)]/90 transition">
              Submit
            </button>
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h2
            className="text-xl font-semibold sm:text-2xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Contact Details
          </h2>

          <p className="mt-3 text-sm text-gray-200/80 leading-relaxed">
            This section will contain the firm&apos;s preferred email, phone
            number, and office location once provided.
          </p>

          <ul className="mt-6 space-y-4 text-sm text-gray-200/80">
            <li className="opacity-60">• Phone number placeholder</li>
            <li className="opacity-60">• Email placeholder</li>
            <li className="opacity-60">• Office address placeholder</li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Map Placeholder */}
      <section className="mt-12">
        <h2
          className="text-xl font-semibold sm:text-2xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Office Location
        </h2>

        <p className="mt-3 text-sm text-gray-200/80 leading-relaxed">
          We can embed a Google Map here or use a static image. This placeholder
          block represents the future map section.
        </p>

        <div className="mt-6 h-64 w-full rounded-lg bg-white/5 border border-white/10"></div>
      </section>
    </main>
  );
}
