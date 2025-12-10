export const metadata = {
  title: "Message Received | Cohen, LLC",
  description:
    "Thank you for contacting Cohen, LLC. Your message has been received, and a member of our team will respond shortly regarding your legal matter.",
};

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
