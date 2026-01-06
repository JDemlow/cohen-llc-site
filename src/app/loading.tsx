// app/loading.tsx
export default function Loading() {
  return (
    <main className="py-16 animate-pulse">
      {/* Hero Section Skeleton */}
      <section className="rounded-lg bg-[var(--brand-navy)] px-4 py-16 sm:px-8 sm:py-20">
        <div className="sm:max-w-2xl">
          {/* Eyebrow */}
          <div className="h-4 w-48 bg-white/10 rounded"></div>

          {/* Title */}
          <div className="mt-4 space-y-3">
            <div className="h-8 w-full bg-white/10 rounded"></div>
            <div className="h-8 w-4/5 bg-white/10 rounded"></div>
          </div>

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-3/4 bg-white/10 rounded"></div>
          </div>

          {/* Button */}
          <div className="mt-8 h-12 w-48 bg-white/10 rounded-md"></div>
        </div>
      </section>

      {/* Practice Areas Section Skeleton */}
      <section className="mt-16">
        {/* Section Header */}
        <div className="h-4 w-32 bg-white/10 rounded mb-4"></div>
        <div className="h-8 w-64 bg-white/10 rounded"></div>

        {/* Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-white/5 border border-white/10 p-4 h-32"
            >
              <div className="h-5 w-3/4 bg-white/10 rounded mb-3"></div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-white/10 rounded"></div>
                <div className="h-3 w-full bg-white/10 rounded"></div>
                <div className="h-3 w-2/3 bg-white/10 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
