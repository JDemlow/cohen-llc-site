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
      <section className="mt-12 rounded-lg bg-[var(--brand-navy)]/10 px-6 py-12 grid gap-12 sm:grid-cols-2">
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

          {/* Placeholder success / error states (visual only) */}
          <div className="mt-6 space-y-3 text-sm">
            <div className="rounded-md border border-emerald-600/50 bg-emerald-900/30 px-4 py-3 text-emerald-100">
              This is a placeholder for a success message. Once the form is
              wired up, this area can confirm that a message was sent
              successfully.
            </div>

            <div className="rounded-md border border-red-600/40 bg-red-900/30 px-4 py-3 text-red-100">
              This is a placeholder for an error message. If there is an issue
              with submission, this area can display a short explanation and
              next steps.
            </div>
          </div>
        </div>

        {/* Contact Information */}
        {/* Contact Details */}
        <div>
          <h2
            className="text-2xl font-semibold sm:text-3xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Contact Details
          </h2>

          <p className="mt-4 max-w-md text-sm sm:text-base text-gray-200/90 leading-relaxed">
            The firm&apos;s Denver office is located in the central downtown
            corridor. Contact information is provided below.
          </p>

          <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-200/90 leading-relaxed">
            <li>
              <span className="font-semibold text-white">Address:</span>
              <br />
              1600 Broadway
              <br />
              Suite 1660
              <br />
              Denver, CO 80202
            </li>

            <li>
              <span className="font-semibold text-white">Phone:</span>
              <br />
              303-524-3636
            </li>
          </ul>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Office Location */}
      <section className="mt-12">
        <h2
          className="text-xl font-semibold sm:text-2xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Office Location
        </h2>

        <p className="mt-3 text-sm text-gray-200/80 leading-relaxed max-w-xl">
          The Denver office is located at 1600 Broadway, Suite 1660, in the
          downtown corridor. The embedded map below can be used to view the
          building&apos;s location and surrounding area.
        </p>

        <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <iframe
            src="https://www.google.com/maps?q=1600+Broadway+Suite+1660+Denver+CO+80202&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 sm:h-80"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
