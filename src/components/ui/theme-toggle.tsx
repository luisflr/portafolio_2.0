"use client";

import { Moon, Sun } from "lucide-react";
import { useThemeTransition } from "@/lib/use-theme-transition";

export function ThemeToggle() {
  const { isDark, handleToggle } = useThemeTransition();

  return (
    <button
      onClick={handleToggle}
      aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
      className="grid size-9 place-items-center rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
