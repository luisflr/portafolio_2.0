import { ProjectItem, TypesProyect } from "@/types/content";
import { Dispatch, SetStateAction } from "react";

function TypesProjectSwtich({
  activeTypeProject,
  handleSwitch,
}: {
  projects: ProjectItem[];
  activeTypeProject: TypesProyect;
  handleSwitch: Dispatch<SetStateAction<TypesProyect>>;
}) {
  return (
    <div>
      {Object.values(TypesProyect).map((item) => {
        const isActive = item === activeTypeProject;
        return (
          <button
            key={`${item}`}
            onClick={() => handleSwitch(item)}
            aria-pressed={isActive}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 font-mono text-[11.5px] uppercase tracking-wider transition-colors ${
              isActive
                ? "text-foreground underline underline-offset-8 decoration-primary"
                : "text-muted-foreground hover:text-foreground cursor-pointer"
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default TypesProjectSwtich;
