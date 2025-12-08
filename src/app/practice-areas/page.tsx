// app/practice-areas/page.tsx

export default function PracticeAreasPage() {
  return (
    <main className="py-16">
      <section className="rounded-lg bg-[var(--brand-navy)]/10 px-6 py-16">
        <p className="text-xs uppercase tracking-[0.25em] text-[var(--brand-gold)]">
          Focused Expertise
        </p>

        <h1 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
          Practice Areas
        </h1>

        <p className="mt-6 max-w-2xl text-sm text-gray-200/90 leading-relaxed">
          This is a placeholder page where we&apos;ll bring in the firm&apos;s
          actual practice area copy and structure it for a small, focused site.
          Each practice area will have a clear heading and a short description,
          consistent with the homepage card layout.
        </p>
      </section>
    </main>
  );
}
