import { CATEGORIES } from "@/lib/constants";
import { ProjectItem } from "@/types/content";
import { Dispatch, SetStateAction } from "react";

function ProjectTypesSwitch({
  projects,
  maxVisible = 6,
  active,
  setActive,
  className = "",
}: {
  projects: ProjectItem[];
  maxVisible: number;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-6 ${className}`}>
      {CATEGORIES.map((cat) => {
        const shown = Math.min(
          projects.filter((p) => p.typeProject === cat.id).length,
          maxVisible
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
  );
}

export default ProjectTypesSwitch;
