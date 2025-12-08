// app/page.tsx
export default function HomePage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)] px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)]">
          Cohen, LLC · Trial & Business Litigation
        </p>

        <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
          Boutique Denver law firm for complex business and franchise disputes.
        </h1>

        <p className="mt-4 max-w-xl text-base text-gray-200/90 leading-relaxed">
          This is placeholder copy we’ll refine once we shape the final
          messaging and client specifications.
        </p>
      </section>
    </main>
  );
}
