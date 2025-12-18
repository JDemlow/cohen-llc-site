import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  const base =
    "rounded-lg bg-white/5 border border-white/10 p-8 shadow-lg shadow-black/5";

  const hoverClasses =
    "transition hover:-translate-y-0.5 hover:border-white/20 hover:shadow-black/10";

  return (
    <div className={`${base} ${hover ? hoverClasses : ""} ${className}`}>
      {children}
    </div>
  );
}
