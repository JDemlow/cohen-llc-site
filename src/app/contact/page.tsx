"use client";

import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xaqqyzoz", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/contact-success";
      } else {
        const errorData = await response.json();
        if (errorData.errors) {
          setError(
            errorData.errors
              .map((e: { message: string }) => e.message)
              .join(", ")
          );
        } else {
          setError(
            "There was a problem submitting your form. Please try again."
          );
        }
        setIsSubmitting(false);
      }
    } catch (err) {
      setError(
        "There was a problem submitting your form. Please check your connection and try again."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <main className="py-16">
      {/* Form + Contact Info Section */}
      <section className="rounded-lg bg-[var(--brand-navy)]/20 px-6 py-8 grid gap-8 sm:grid-cols-2 border border-white/20">
        {/* Contact Form */}
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

          {error && (
            <div
              role="alert"
              className="mt-4 rounded-md bg-red-900/20 border border-red-500/50 px-4 py-3 text-sm text-red-200"
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full rounded-md border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:border-[var(--brand-gold)] focus:ring focus:ring-[var(--brand-gold)] focus:ring-opacity-50"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full rounded-md border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:border-[var(--brand-gold)] focus:ring focus:ring-[var(--brand-gold)] focus:ring-opacity-50"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="mt-1 block w-full rounded-md border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-400 shadow-sm focus:border-[var(--brand-gold)] focus:ring focus:ring-[var(--brand-gold)] focus:ring-opacity-50 resize-none"
              ></textarea>
            </div>

            {/* Acknowledgment Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="acknowledgment"
                name="acknowledgment"
                required
                className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5 text-[var(--brand-gold)] focus:ring-[var(--brand-gold)] focus:ring-opacity-50"
              />
              <label
                htmlFor="acknowledgment"
                className="text-xs text-gray-300 leading-relaxed"
              >
                I acknowledge that contacting Cohen, LLC through this form does
                not create an attorney-client relationship. Do not include
                confidential or time-sensitive information in this message.
              </label>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-block rounded-md bg-[var(--brand-gold)] px-6 py-2.5 text-xs font-semibold uppercase tracking-wide text-black transition hover:bg-[var(--brand-gold)]/90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <h2
            className="text-xl font-semibold sm:text-2xl"
            style={{ fontFamily: "var(--playfair)" }}
          >
            Contact Information
          </h2>

          <p className="mt-3 text-sm text-gray-200/80 leading-relaxed">
            Reach out to Cohen, LLC by phone, email, or in person at our Denver
            office.
          </p>

          <div className="mt-6 space-y-4 text-sm text-gray-200/90">
            {/* Office Address */}
            <div>
              <h3 className="font-semibold text-white">Office</h3>
              <address className="mt-1 not-italic leading-relaxed">
                1600 N. Broadway, Suite 1660
                <br />
                Bok Financial Building
                <br />
                Denver, CO 80202
              </address>
            </div>

            {/* Phone */}
            <div>
              <h3 className="font-semibold text-white">Phone</h3>
              <p className="mt-1">
                <a
                  href="tel:+13035243636"
                  className="hover:text-[var(--brand-gold)] transition"
                >
                  (303) 524-3636
                </a>
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="mt-1">
                <a
                  href="mailto:frontdesk@cohentrial.com"
                  className="hover:text-[var(--brand-gold)] transition"
                >
                  frontdesk@cohentrial.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <div className="my-10 h-px w-full bg-white/10"></div>

      <section className="mt-12">
        <h2
          className="text-2xl sm:text-3xl font-semibold"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Our Location
        </h2>

        <p className="mt-3 text-sm text-gray-200/80 max-w-2xl">
          We are located in the Bok Financial Building in downtown Denver,
          Colorado.
        </p>

        <div className="mt-6 rounded-lg overflow-hidden border border-white/10">
          <iframe
            title="Cohen, LLC Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.566449704082!2d-104.98935842398887!3d39.74454159683326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d1f3f1e5d1%3A0x8e9f3e7e7e7e7e7e!2s1600%20N%20Broadway%2C%20Denver%2C%20CO%2080202!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="mt-12 rounded-md bg-[var(--brand-navy)]/20 border border-white/10 p-6">
        <p className="text-xs text-gray-300/80 leading-relaxed">
          <strong className="text-white">Important:</strong> The use of email or
          this contact form for communication with the firm or any individual
          member of the firm does not establish an attorney-client relationship.
          Confidential or time-sensitive information should not be sent through
          this form. Please contact our office directly if you need immediate
          legal assistance.
        </p>
      </div>
    </main>
  );
}
