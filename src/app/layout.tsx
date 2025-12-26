// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";
import Link from "next/link";

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
        <div className="mx-auto max-w-6xl px-4">
          <Header />
          {children}

          <footer className="mt-24 border-t border-white/10 py-10 text-center text-sm text-gray-300">
            <div
              className="font-semibold"
              style={{ fontFamily: playfair.style.fontFamily }}
            >
              Cohen, LLC
            </div>

            <nav className="mt-3 flex justify-center gap-6 text-xs sm:text-sm">
              <Link href="/">Home</Link>
              <Link href="/practice-areas">Practice Areas</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>

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
