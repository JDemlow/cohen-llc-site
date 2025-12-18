import Link from "next/link";
import { ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
}: PrimaryButtonProps) {
  const baseClasses =
    "inline-block rounded-md bg-[var(--brand-gold)] px-8 py-4 text-base font-semibold tracking-wide cursor-pointer text-black transition hover:bg-[var(--brand-gold)]/90";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
