// app/not-found.tsx
import Link from "next/link";
import PrimaryButton from "./components/PrimaryButton";

export const metadata = {
  title: "Page Not Found | Cohen, LLC",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="flex items-center justify-center min-h-[70vh] py-16">
      <div className="text-center max-w-2xl mx-auto px-4">
        {/* Error Code */}
        <div
          className="text-8xl sm:text-9xl font-bold text-[var(--brand-gold)]/20"
          style={{ fontFamily: "var(--playfair)" }}
          aria-hidden="true"
        >
          404
        </div>

        {/* Heading */}
        <h1
          className="mt-8 text-3xl sm:text-4xl font-semibold"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-gray-200/80 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Navigation Options */}
        <div className="mt-10 flex flex-col gap-4 justify-center items-center">
          <PrimaryButton href="/">Return to Homepage</PrimaryButton>

          <Link
            href="/contact"
            className="text-sm text-[var(--brand-gold)] hover:text-[var(--brand-gold)]/80 transition underline underline-offset-4"
          >
            Contact Us
          </Link>
        </div>

        {/* Divider */}
        <div className="my-12 h-px w-full bg-white/10"></div>

        {/* Helpful Links */}
        <div className="text-left sm:text-center">
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "var(--playfair)" }}
          >
            You might be looking for:
          </h2>

          <nav className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link
              href="/practice-areas"
              className="text-gray-200/80 hover:text-white transition"
            >
              Practice Areas
            </Link>
            <span className="hidden sm:inline text-gray-500">•</span>
            <Link
              href="/about"
              className="text-gray-200/80 hover:text-white transition"
            >
              Who We Are
            </Link>
            <span className="hidden sm:inline text-gray-500">•</span>
            <Link
              href="/contact"
              className="text-gray-200/80 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </main>
  );
}
