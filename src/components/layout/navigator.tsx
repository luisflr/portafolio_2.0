"use client";

import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { SECTIONS, SECTION_IDS } from "@/lib/constants";
import { useScroll } from "@/lib/use-scroll";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Nav() {
  const activeId = useScroll(SECTION_IDS);

  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-y-0 left-0 z-50 hidden w-16 flex-col items-center justify-between border-r border-border bg-background/80 py-6 backdrop-blur-md lg:flex"
    >
      <a
        href="#sobre-mi"
        className="font-mono text-sm font-bold tracking-widest text-primary"
      >
        LFR
      </a>

      {/* Los puntos numerados, centrados verticalmente */}
      <ul className="flex flex-col gap-2">
        {SECTIONS.map((section, i) => {
          const isActive = activeId === section.id;
          const number = String(i + 1).padStart(2, "0");
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group/nav relative flex items-center hover:bg-background-stack-icon p-2 rounded-lg"
              >
                {/* Número: siempre visible */}
                <span
                  className={`font-mono text-xs tabular-nums transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover/nav:text-foreground"
                  }`}
                >
                  {number}
                </span>

                {/* Label: en el DOM SIEMPRE (accesible), colapsado visualmente,
                    se expande en hover Y focus. El texto es "02. Experiencia Laboral". */}
                <span
                  className={`pointer-events-none absolute left-12 whitespace-nowrap rounded-md border border-border bg-card px-3 py-1.5 font-mono text-xs opacity-0 shadow-lg transition-opacity group-hover/nav:opacity-100 group-focus-visible/nav:opacity-100 ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {number}. {section.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      {/* Acciones abajo */}
      <div className="flex flex-col items-center gap-4">
        <ThemeToggle />
      </div>
    </nav>
  );
}
