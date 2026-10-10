import type { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode;
  label: string;
};

export function SectionHeading({ children, label }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{label}</span>
      <h2>{children}</h2>
    </div>
  );
}
