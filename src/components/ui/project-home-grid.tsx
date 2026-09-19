"use client";

import { useState } from "react";
import type { ProjectItem } from "@/types/content";
import { ProjectsShowcase } from "./projects-showcase";

const MAX_VISIBLE = 6;

const CATEGORIES = [
  { id: "Trabajo", label: "Trabajo" },
  { id: "Personal", label: "Personal" },
] as const;

export function ProjectHomeGrid({ projects }: { projects: ProjectItem[] }) {
  const [active, setActive] = useState<string>(CATEGORIES[0].id);

  const visible = projects
    .filter((p) => p.typeProject === active)
    .slice(0, MAX_VISIBLE);
  const activeLabel = CATEGORIES.find((c) => c.id === active)?.label ?? "";

  return (
    <div>
      <div className="mb-10 flex items-center justify-between border-b border-border pb-4">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          03. Proyectos · <span className="text-foreground">{activeLabel}</span>
        </p>
        <div className="flex items-center gap-6">
          {CATEGORIES.map((cat) => {
            const shown = Math.min(
              projects.filter((p) => p.typeProject === cat.id).length,
              MAX_VISIBLE
            );
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                aria-pressed={isActive}
                className={`font-mono text-xs uppercase tracking-wider transition-colors hover:cursor-pointer ${
                  isActive
                    ? "text-foreground underline underline-offset-8"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.label}{" "}
                <span className={isActive ? "text-primary" : "text-border"}>
                  {String(shown).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {visible.length > 0 ? (
        <ProjectsShowcase key={active} projects={visible} />
      ) : (
        <p className="text-muted-foreground">
          No hay proyectos en esta categoría todavía.
        </p>
      )}
    </div>
  );
}
