// app/contact/page.tsx
import PrimaryButton from "../components/PrimaryButton";
import SectionHeader from "../components/SectionHeader";

export const metadata = {
  title: "Contact Us | Cohen, LLC",
  description:
    "Get in touch with Cohen, LLC regarding business, franchise, bankruptcy, and commercial litigation matters. Use our secure contact form to schedule a consultation.",
};

export default function ContactPage() {
  return (
    <main className="py-16">
      {/* Intro Section */}
      <SectionHeader
        as="h1"
        eyebrow="Contact"
        title="Schedule a Consultation"
        description={
          <>
            Use the form below to contact Cohen, LLC regarding business,
            franchise, bankruptcy, or commercial litigation matters. A member of
            our team will review your message and follow up to discuss next
            steps.
          </>
        }
      />
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
            Use this form to send a message to the firm regarding your legal
            matter.
          </p>

          {/* form */}
          <form
            name="contact"
            method="POST"
            action="/contact-success"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="mt-6 space-y-4"
          >
            <input type="hidden" name="form-name" value="contact" />

            {/* Netlify honeypot field */}
            <p className="hidden" aria-hidden="true">
              <label htmlFor="bot-field">Do not fill this field</label>
              <input
                id="bot-field"
                name="bot-field"
                type="text"
                autoComplete="off"
                tabIndex={-1}
              />
            </p>

            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm text-gray-200/80"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
        border border-white/20 focus:border-[var(--brand-gold)] 
        focus:outline-none"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm text-gray-200/80"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
        border border-white/20 focus:border-[var(--brand-gold)] 
        focus:outline-none"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label
                htmlFor="message"
                className="mb-1 block text-sm text-gray-200/80"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="h-32 w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
        border border-white/20 focus:border-[var(--brand-gold)] 
        focus:outline-none"
              />
            </div>

            {/* Compliance Notice */}
            <p className="text-xs leading-relaxed text-gray-400">
              Submitting this form does not create an attorney&ndash;client
              relationship. Please do not include confidential or
              time&ndash;sensitive information.
            </p>

            {/* Acknowledgment Checkbox */}
            <div className="pt-2">
              <div className="flex items-start gap-3">
                <input
                  id="acknowledgment"
                  name="acknowledgment"
                  type="checkbox"
                  required
                  className="mt-1 h-4 w-4 rounded-sm border border-white/20 bg-white/5 
          text-[var(--brand-gold)] focus:ring-[var(--brand-gold)]"
                  aria-describedby="acknowledgment-description"
                />

                <div className="text-xs leading-relaxed text-gray-300">
                  <p id="acknowledgment-description">
                    I understand that submitting this form does not create an
                    attorney&ndash;client relationship and that no confidential
                    information should be included.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <PrimaryButton type="submit">Submit</PrimaryButton>
          </form>

          {/* Contact Page Disclaimer */}
          <div className="mt-10 rounded-lg bg-white/5 border border-white/20 px-6 py-4">
            <p className="text-xs text-gray-300 leading-relaxed">
              Information submitted through this form is for general inquiry
              purposes only and does not create an attorney&ndash;client
              relationship. Do not include confidential or time&ndash;sensitive
              information. An attorney will contact you if the firm is able to
              assist with your matter.
            </p>
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
              1600 N Broadway
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
          The Denver office is located at 1600 N Broadway, Suite 1660, in the
          downtown corridor. The embedded map below can be used to view the
          building&apos;s location and surrounding area.
        </p>

        <div className="mt-6 overflow-hidden rounded-lg border border-white/20 bg-white/5">
          <iframe
            title="Map showing Cohen, LLC Denver office location"
            src="https://www.google.com/maps?q=1600+N+Broadway+Suite+1660+Denver+CO+80202&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 sm:h-80"
            allowFullScreen
          />
        </div>
        {/* Netlify Forms: detection-only hidden form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          hidden
        >
          <input type="hidden" name="form-name" value="contact" />
          <input name="bot-field" />
          <input name="name" />
          <input name="email" />
          <textarea name="message" />
          <input name="acknowledgment" />
        </form>
      </section>
    </main>
  );
}
