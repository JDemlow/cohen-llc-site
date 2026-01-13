// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Cohen, LLC | Trial & Business Litigation",
  description:
    "Cohen, LLC is a boutique Denver law firm focused on commercial litigation, franchise disputes, and complex bankruptcy matters.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <div className="mx-auto max-w-6xl px-4">
          <Header />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>

          <footer className="mt-24 border-t border-white/10 py-10 text-center text-sm text-gray-300">
            {/* Logo - Now Clickable */}
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/cohen-logo.svg"
                alt="Cohen, LLC - Attorneys At Law"
                width={396}
                height={119}
                className="w-[250px] sm:w-[330px] lg:w-[396px] h-auto mx-auto"
              />
            </Link>

            <nav className="mt-3 flex justify-center gap-6 text-xs sm:text-sm text-[var(--brand-gold)]">
              <Link
                href="/"
                className="hover:text-[var(--brand-gold)]/80 transition"
              >
                Home
              </Link>
              <Link
                href="/practice-areas"
                className="hover:text-[var(--brand-gold)]/80 transition"
              >
                Practice Areas
              </Link>
              <Link
                href="/about"
                className="hover:text-[var(--brand-gold)]/80 transition"
              >
                Who We Are
              </Link>
              <Link
                href="/contact"
                className="hover:text-[var(--brand-gold)]/80 transition"
              >
                Contact
              </Link>
            </nav>

            {/* Contact Info */}
            <div className="mt-6 text-xs text-gray-400">
              <a
                href="https://www.google.com/maps/place/1600+N+Broadway+Suite+1660+Denver+CO+80202"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--brand-gold)] transition"
              >
                Bok Financial Building, 1600 N Broadway, Suite 1660, Denver, CO
                80202
              </a>
              {" • "}
              <a
                href="tel:+13035243636"
                className="hover:text-[var(--brand-gold)] transition"
              >
                303-524-3636
              </a>
            </div>

            <p className="mt-4 mx-auto max-w-3xl text-center text-xs leading-relaxed text-gray-400">
              The information on this website is provided for general
              informational purposes only and does not constitute legal advice.
              Viewing this site or contacting Cohen, LLC through this website
              does not create an attorney–client relationship. Prior results do
              not guarantee a similar outcome.
            </p>

            <p className="mt-4 text-[11px] text-gray-400">
              © {new Date().getFullYear()} Cohen, LLC. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
