// app/contact/page.tsx

"use client";

import { useState } from "react";
import SectionHeader from "../components/SectionHeader";

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
      const response = await fetch("https://formspree.io/f/mdaokyld", {
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
      {/* Intro Section */}
      <SectionHeader
        as="h1"
        eyebrow="Contact"
        title="Schedule a Free Consultation"
        description={
          <>
            Use the form below to contact Cohen, LLC regarding business,
            franchise, bankruptcy, or commercial litigation matters. A member of
            our team will review your message and follow up to discuss next
            steps.
          </>
        }
        withBackground
      />
      {/* Divider */}
      <div className="my-10 h-px w-full bg-white/10"></div>
      {/* Form + Contact Info Section */}
      <section className="mt-8 rounded-lg bg-[var(--brand-navy)]/20 px-6 py-8 grid gap-8 sm:grid-cols-2 border border-white/20">
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

          {/* Error Message */}
          {error && (
            <div className="mt-6 rounded-lg bg-red-900/20 border border-red-500/50 px-4 py-3">
              <p className="text-sm text-red-200">{error}</p>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                disabled={isSubmitting}
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
                  border border-white/20 focus:border-[var(--brand-gold)] 
                  focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address"
                required
                disabled={isSubmitting}
                className="w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
                  border border-white/20 focus:border-[var(--brand-gold)] 
                  focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed
                  invalid:border-red-500"
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
                disabled={isSubmitting}
                className="h-32 w-full rounded-md bg-white/5 px-4 py-3 text-sm text-white 
                  border border-white/20 focus:border-[var(--brand-gold)] 
                  focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
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
                  value="yes"
                  required
                  disabled={isSubmitting}
                  className="mt-1 h-4 w-4 rounded-sm border border-white/20 bg-white/5 
                    text-[var(--brand-gold)] focus:ring-[var(--brand-gold)] 
                    disabled:opacity-50 disabled:cursor-not-allowed"
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
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--brand-gold)] px-8 py-4 text-base font-semibold tracking-wide text-black transition hover:bg-[var(--brand-gold)]/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
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
              <a
                href="https://www.google.com/maps/place/1600+N+Broadway+Suite+1660+Denver+CO+80202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand-gold)] transition"
              >
                1600 N Broadway
                <br />
                Suite 1660
                <br />
                Denver, CO 80202
              </a>
            </li>

            <li>
              <span className="font-semibold text-white">Phone:</span>
              <br />
              <a
                href="tel:+13035243636"
                className="hover:text-[var(--brand-gold)] transition"
              >
                303-524-3636
              </a>
            </li>
          </ul>
        </div>
      </section>
      {/* Divider */}
      <div className="my-10 h-px w-full bg-white/10"></div>
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
          downtown corridor. View the location on Google Maps below.
        </p>

        {/* Map Container with Link Fallback */}
        <div className="mt-6">
          <a
            href="https://www.google.com/maps/place/1600+N+Broadway+Suite+1660+Denver+CO+80202"
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden rounded-lg border border-white/20 bg-white/5 hover:border-white/30 transition"
          >
            <iframe
              title="Map showing Cohen, LLC Denver office location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.0429892547205!2d-105.00270492346655!3d39.74313029647586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78c4bb0a5a8f%3A0x4e4e4e4e4e4e4e4e!2s1600%20N%20Broadway%2C%20Denver%2C%20CO%2080202!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full border-0 sm:h-80 pointer-events-none"
              allowFullScreen
            />
          </a>
          <p className="mt-2 text-xs text-gray-400 text-center">
            Click map to open in Google Maps •
            <a
              href="https://www.google.com/maps/dir//1600+N+Broadway+Suite+1660+Denver+CO+80202"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-[var(--brand-gold)] hover:text-[var(--brand-gold)]/80 underline"
            >
              Get Directions
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
