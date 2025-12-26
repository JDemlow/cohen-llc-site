// app/about/page.tsx
import Image from "next/image";
import SectionHeader from "../components/SectionHeader";

export const metadata = {
  title: "About Us | Cohen, LLC",
  description:
    "Learn about the experienced attorneys and professionals at Cohen, LLC, a boutique Denver law firm specializing in commercial litigation and business law.",
};

export default function AboutPage() {
  return (
    <main className="py-16">
      {/* Page Header */}
      <SectionHeader
        as="h1"
        eyebrow="Who We Are"
        title="Our Team"
        description="Cohen, LLC is a boutique law firm committed to providing exceptional legal representation in commercial litigation, franchise law, bankruptcy, and business transactions."
      />

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Attorney Profiles */}
      <section className="space-y-16">
        {/* Katelyn Bowles */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg">
            <Image
              src="/images/katelyn-bowles.png"
              alt="Katelyn Bowles, Director of Operations at Cohen, LLC"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 300px"
              priority
            />
          </div>

          {/* Bio */}
          <div>
            <h2
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Katelyn Bowles
            </h2>
            <p className="mt-1 text-sm text-[var(--brand-gold)]">
              Director of Operations
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed">
              <p>
                Katelyn Bowles is a senior law firm professional with over a
                decade of experience supporting attorneys and managing the daily
                functions of law practices. At Cohen, LLC, she plays a key role
                in the firm&apos;s day-to-day operations and administrative
                oversight.
              </p>

              <p>
                Katelyn is responsible for client billing and invoicing, vendor
                coordination, internal workflows, and working closely with
                attorneys to ensure efficiency, accuracy, and consistency across
                the firm.
              </p>

              <p>
                Katelyn brings paralegal and management experience from both
                large international firms and boutique practices. She provides a
                broad understanding of law firm structure and business
                processes. She is known for her attention to detail, discretion,
                and ability to manage complex administrative and financial
                responsibilities with precision.
              </p>
            </div>
          </div>
        </div>

        {/* Attorney Two - Placeholder */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo Placeholder */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Photo Coming Soon</span>
          </div>

          {/* Bio Placeholder */}
          <div>
            <h2
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Attorney Name
            </h2>
            <p className="mt-1 text-sm text-[var(--brand-gold)]">
              Attorney Title
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed">
              <p>Attorney bio and background information will be added here.</p>
            </div>
          </div>
        </div>

        {/* Attorney Three - Placeholder */}
        <div className="grid gap-8 md:grid-cols-[300px_1fr] items-start">
          {/* Photo Placeholder */}
          <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg bg-white/5 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Photo Coming Soon</span>
          </div>

          {/* Bio Placeholder */}
          <div>
            <h2
              className="text-2xl font-semibold sm:text-3xl"
              style={{ fontFamily: "var(--playfair)" }}
            >
              Attorney Name
            </h2>
            <p className="mt-1 text-sm text-[var(--brand-gold)]">
              Attorney Title
            </p>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed">
              <p>Attorney bio and background information will be added here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Firm Philosophy */}
      <section>
        <h2
          className="text-2xl font-semibold sm:text-3xl"
          style={{ fontFamily: "var(--playfair)" }}
        >
          Our Approach
        </h2>

        <div className="mt-6 space-y-4 text-sm sm:text-base text-gray-200/90 leading-relaxed max-w-3xl">
          <p>
            Cohen, LLC combines deep legal expertise with a client-focused
            approach. We understand that every case is unique, and we tailor our
            strategies to meet each client&apos;s specific needs and objectives.
          </p>

          <p>
            Our boutique structure allows us to provide personalized attention
            and responsive service while maintaining the highest standards of
            legal excellence. We are committed to clear communication, strategic
            thinking, and achieving the best possible outcomes for our clients.
          </p>
        </div>
      </section>
    </main>
  );
}
