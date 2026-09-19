"use client";

import { useState } from "react";
import type { ProjectItem } from "@/types/content";
import { ProjectsShowcase } from "./projects-showcase";
import { CATEGORIES } from "@/lib/constants";
import ProjectTypesSwitch from "./project-types-switch";

const MAX_VISIBLE = 6;

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
        <ProjectTypesSwitch
          active={active}
          maxVisible={MAX_VISIBLE}
          projects={visible}
          setActive={setActive}
        />
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
