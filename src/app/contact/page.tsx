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
            Use this form to send a message to the firm. We&apos;ll tailor the
            final instructions and intake preferences once we receive input from
            the client.
          </p>

          {/* Placeholder form */}
          <form
            name="contact"
            method="POST"
            action="/contact-success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mt-6 space-y-4"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            <input type="text" name="bot-field" className="hidden" />

            {/* FIRST NAME */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm text-gray-200/80 mb-1"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
                 border border-white/10 focus:border-[var(--brand-gold)] 
                 focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-gray-200/80 mb-1"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
                 border border-white/10 focus:border-[var(--brand-gold)] 
                 focus:outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-200/80 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
                 border border-white/10 focus:border-[var(--brand-gold)] 
                 focus:outline-none h-32"
              ></textarea>
            </div>

            {/* Compliance Notice */}
            <p className="text-xs text-gray-400 leading-relaxed">
              Submitting this form does not create an attorney&ndash;client
              relationship. Please do not include confidential or
              time&ndash;sensitive information.
            </p>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-4 inline-block rounded-md bg-[var(--brand-gold)] px-8 py-3 
               text-sm font-semibold tracking-wide text-black transition 
               hover:bg-[var(--brand-gold)]/90"
            >
              Submit
            </button>
          </form>
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
