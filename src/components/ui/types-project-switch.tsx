import { ProjectItem, TypesProyect } from "@/types/content";
import { Dispatch, SetStateAction } from "react";

function TypesProjectSwtich({
  projects,
  activeTypeProject,
  handleSwitch,
}: {
  projects: ProjectItem[];
  activeTypeProject: TypesProyect;
  handleSwitch: Dispatch<SetStateAction<TypesProyect>>;
}) {
  return (
    <div className="inline-flex gap-1 rounded-lg border border-border bg-background-card p-1">
      {Object.values(TypesProyect).map((item) => {
        const totalOfProject = projects.filter(
          (item) => item.typeProject === activeTypeProject
        ).length;
        const isActive = item === activeTypeProject;
        return (
          <button
            key={`${item}`}
            onClick={() => handleSwitch(item)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors ${
              isActive
                ? "bg-background-stack-icon text-foreground"
                : "text-muted-foreground hover:text-foreground cursor-pointer"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                isActive ? "bg-primary" : "bg-border"
              }`}
            />
            {item}

            {isActive && (
              <span
                className={isActive ? "text-muted-foreground" : "text-border"}
              >
                [{totalOfProject}]
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default TypesProjectSwtich;
