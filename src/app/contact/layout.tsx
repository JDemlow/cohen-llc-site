import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Cohen, LLC",
  description:
    "Get in touch with Cohen, LLC regarding business, franchise, bankruptcy, and commercial litigation matters. Use our secure contact form to schedule a consultation.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
