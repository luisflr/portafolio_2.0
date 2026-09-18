import { CSSProperties, ReactNode } from "react";

export function Badge({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className: string;
  style?: CSSProperties | undefined;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full 
      border border-border bg-card/40 px-3 py-1 ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
