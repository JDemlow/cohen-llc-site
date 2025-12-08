import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 border-b border-white/10">
      <nav className="flex items-center justify-between">
        <div
          className="text-xl font-semibold"
          style={{ fontFamily: "var(--playfair)" }}
        >
          <Link href="/">Cohen, LLC</Link>
        </div>

        <ul className="flex flex-wrap gap-4 text-xs sm:gap-6 sm:text-sm">
          <li>
            <Link href="/" className="opacity-80 hover:opacity-100 transition">
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/practice-areas"
              className="opacity-80 hover:opacity-100 transition"
            >
              Practice Areas
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="opacity-80 hover:opacity-100 transition"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="opacity-80 hover:opacity-100 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
