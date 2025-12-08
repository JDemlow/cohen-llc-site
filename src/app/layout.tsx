// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Header from "./components/Header";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="mx-auto max-w-6xl px-4">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
