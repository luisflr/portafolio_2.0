"use client";

import { toggleTheme, useTheme } from "@/app/lib/use-theme";

export function ThemeToggle() {
  const theme = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={
        theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
      }
      className="rounded-lg border border-border px-3 py-1.5 text-sm text-foreground hover:bg-muted transition-colors"
    >
      {theme === "dark" ? "Claro" : "Oscuro"}
    </button>
  );
}
