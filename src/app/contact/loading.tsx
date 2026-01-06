// app/contact/loading.tsx
export default function Loading() {
  return (
    <main className="py-16 animate-pulse">
      {/* Header Skeleton */}
      <div>
        <div className="h-4 w-24 bg-white/10 rounded mb-4"></div>
        <div className="h-10 w-80 bg-white/10 rounded mb-4"></div>
        <div className="space-y-2 max-w-3xl">
          <div className="h-4 w-full bg-white/10 rounded"></div>
          <div className="h-4 w-full bg-white/10 rounded"></div>
          <div className="h-4 w-2/3 bg-white/10 rounded"></div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Form + Contact Info Skeleton */}
      <section className="mt-12 rounded-lg bg-[var(--brand-navy)]/10 px-6 py-12 grid gap-12 sm:grid-cols-2">
        {/* Form Skeleton */}
        <div>
          <div className="h-7 w-48 bg-white/10 rounded mb-3"></div>
          <div className="h-4 w-full bg-white/10 rounded mb-6"></div>

          <div className="space-y-4">
            {/* Name field */}
            <div>
              <div className="h-4 w-16 bg-white/10 rounded mb-2"></div>
              <div className="h-12 w-full bg-white/10 rounded"></div>
            </div>

            {/* Email field */}
            <div>
              <div className="h-4 w-16 bg-white/10 rounded mb-2"></div>
              <div className="h-12 w-full bg-white/10 rounded"></div>
            </div>

            {/* Message field */}
            <div>
              <div className="h-4 w-20 bg-white/10 rounded mb-2"></div>
              <div className="h-32 w-full bg-white/10 rounded"></div>
            </div>

            {/* Checkbox */}
            <div className="flex gap-3 pt-2">
              <div className="h-4 w-4 bg-white/10 rounded mt-1"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 w-full bg-white/10 rounded"></div>
                <div className="h-3 w-3/4 bg-white/10 rounded"></div>
              </div>
            </div>

            {/* Submit button */}
            <div className="h-12 w-32 bg-white/10 rounded"></div>
          </div>
        </div>

        {/* Contact Details Skeleton */}
        <div>
          <div className="h-8 w-48 bg-white/10 rounded mb-4"></div>
          <div className="space-y-2 mb-6">
            <div className="h-4 w-full bg-white/10 rounded"></div>
            <div className="h-4 w-3/4 bg-white/10 rounded"></div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="h-4 w-20 bg-white/10 rounded"></div>
              <div className="h-3 w-48 bg-white/10 rounded"></div>
              <div className="h-3 w-32 bg-white/10 rounded"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-16 bg-white/10 rounded"></div>
              <div className="h-3 w-32 bg-white/10 rounded"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="my-16 h-px w-full bg-white/10"></div>

      {/* Map Skeleton */}
      <section className="mt-12">
        <div className="h-7 w-48 bg-white/10 rounded mb-3"></div>
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full max-w-xl bg-white/10 rounded"></div>
          <div className="h-4 w-2/3 max-w-xl bg-white/10 rounded"></div>
        </div>
        <div className="h-64 sm:h-80 w-full bg-white/10 rounded-lg"></div>
      </section>
    </main>
  );
}
