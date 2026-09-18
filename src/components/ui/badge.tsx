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
      bg-background-stack-icon px-4 py-2 ${className}`}
      style={style}
    >
      {children}
    </span>
  );
}
