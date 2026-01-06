// app/about/loading.tsx
export default function Loading() {
  return (
    <main className="py-16 animate-pulse">
      {/* Header Skeleton */}
      <div>
        <div className="h-4 w-32 bg-white/10 rounded mb-4"></div>
        <div className="h-10 w-48 bg-white/10 rounded mb-4"></div>
        <div className="space-y-2 max-w-3xl">
          <div className="h-4 w-full bg-white/10 rounded"></div>
          <div className="h-4 w-full bg-white/10 rounded"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Attorney Profile Skeletons */}
      <section className="space-y-16">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="grid gap-8 md:grid-cols-[300px_1fr] items-start"
          >
            {/* Photo Skeleton */}
            <div className="relative aspect-[3/4] w-full max-w-[300px] mx-auto md:mx-0 overflow-hidden rounded-lg bg-white/5"></div>

            {/* Bio Skeleton */}
            <div>
              <div className="h-8 w-48 bg-white/10 rounded mb-2"></div>
              <div className="h-4 w-32 bg-white/10 rounded mb-6"></div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded"></div>
                  <div className="h-4 w-full bg-white/10 rounded"></div>
                  <div className="h-4 w-full bg-white/10 rounded"></div>
                  <div className="h-4 w-3/4 bg-white/10 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-white/10 rounded"></div>
                  <div className="h-4 w-full bg-white/10 rounded"></div>
                  <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Firm Philosophy Skeleton */}
      <section>
        <div className="h-8 w-56 bg-white/10 rounded mb-6"></div>
        <div className="space-y-4 max-w-3xl">
          <div className="space-y-2">
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-3/4 bg-white/10 rounded"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-2/3 bg-white/10 rounded"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
