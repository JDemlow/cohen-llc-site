// app/practice-areas/loading.tsx
export default function Loading() {
  return (
    <main className="py-16 animate-pulse">
      {/* Header Skeleton */}
      <div>
        <div className="h-4 w-40 bg-white/10 rounded mb-4"></div>
        <div className="h-10 w-64 bg-white/10 rounded mb-4"></div>
        <div className="space-y-2 max-w-3xl">
          <div className="h-4 w-full bg-white/10 rounded"></div>
          <div className="h-4 w-full bg-white/10 rounded"></div>
          <div className="h-4 w-3/4 bg-white/10 rounded"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Practice Area Cards Skeleton */}
      <div className="space-y-12">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="rounded-lg bg-white/5 border border-white/10 p-8"
          >
            {/* Title */}
            <div className="h-6 w-56 bg-white/10 rounded mb-2"></div>
            {/* Divider */}
            <div className="h-0.5 w-16 bg-white/10 rounded mb-4"></div>
            {/* Description */}
            <div className="space-y-2 mb-4">
              <div className="h-4 w-full bg-white/10 rounded"></div>
              <div className="h-4 w-full bg-white/10 rounded"></div>
              <div className="h-4 w-2/3 bg-white/10 rounded"></div>
            </div>
            {/* List items */}
            <div className="space-y-2">
              <div className="h-3 w-4/5 bg-white/10 rounded"></div>
              <div className="h-3 w-3/4 bg-white/10 rounded"></div>
              <div className="h-3 w-4/5 bg-white/10 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
