import { ReactNode } from "react";

export function Badge({
  children,
  clasName = "",
}: {
  children: ReactNode;
  clasName: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full 
      border border-border bg-card/40 px-3 py-1 ${clasName}`}
    >
      {children}
    </span>
  );
}
