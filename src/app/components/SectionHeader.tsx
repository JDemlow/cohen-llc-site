import { ReactNode } from "react";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  as?: "h1" | "h2";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  as = "h2",
}: SectionHeaderProps) {
  const HeadingTag = as;

  const headingClasses =
    as === "h1"
      ? "mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
      : "mt-4 text-2xl sm:text-3xl font-semibold leading-tight";

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--brand-gold)]">
        {eyebrow}
      </p>

      <HeadingTag
        className={headingClasses}
        style={{ fontFamily: "var(--playfair)" }}
      >
        {title}
      </HeadingTag>

      {description ? (
        <p className="mt-6 max-w-3xl text-sm sm:text-base text-gray-200/90 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
