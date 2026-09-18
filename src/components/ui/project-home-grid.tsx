"use client";

import { ProjectItem, TypesProyect } from "@/types/content";
import { useState } from "react";
import TypesProjectSwtich from "./types-project-switch";
import { ProjectsShowcase } from "./projects-showcase";
import { FadeUp } from "./fade-up";

const MAX_VISIBLE = 5;

function ProjectHomeGrid({ projects }: { projects: ProjectItem[] }) {
  const [activeTypeProject, setActiveTypeProject] = useState<TypesProyect>(
    TypesProyect.work
  );

  const currentProjects = projects
    .filter((item) => item.typeProject === activeTypeProject)
    .sort((fi, si) => fi.order - si.order)
    .slice(0, MAX_VISIBLE);

  return (
    <>
      <FadeUp className="mb-12">
        <div className="flex justify-between w-full">
          <h2 className="text-sm tracking-tight text-muted-foreground font-mono">
            03. Proyectos · {activeTypeProject}
          </h2>
          <TypesProjectSwtich
            activeTypeProject={activeTypeProject}
            handleSwitch={setActiveTypeProject}
            projects={projects}
          />
        </div>
      </FadeUp>

      {currentProjects.length > 0 && (
        <ProjectsShowcase key={activeTypeProject} projects={currentProjects} />
      )}
    </>
  );
}

export default ProjectHomeGrid;
