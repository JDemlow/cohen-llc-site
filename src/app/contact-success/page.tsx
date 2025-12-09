export default function ContactSuccessPage() {
  return (
    <main className="py-20 text-center">
      <h1
        className="text-3xl font-semibold"
        style={{ fontFamily: "var(--playfair)" }}
      >
        Thank You
      </h1>

      <p className="mt-4 text-gray-200/80 text-sm leading-relaxed">
        Your message has been sent successfully. We will reply as soon as
        possible.
      </p>
    </main>
  );
}
