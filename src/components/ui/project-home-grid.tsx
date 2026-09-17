"use client";

import { ProjectItem, TypesProyect } from "@/types/content";
import ProjectHomeCard from "@/components/ui/project-home-card";
import { useState } from "react";
import TypesProjectSwtich from "./types-project-switch";

const MAX_VISIBLE = 6;

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
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest text-primary">
          Proyectos visibles
        </p>
        <div className="flex justify-between items-center w-full">
          <h2 className="text-4xl font-bold tracking-tight max-w-lg text-foreground">
            Proyectos · {activeTypeProject}
          </h2>
          <TypesProjectSwtich
            activeTypeProject={activeTypeProject}
            handleSwitch={setActiveTypeProject}
            projects={projects}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project, i) => (
          <article
            key={`${project.typeProject}-${i}`}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-background-card transition-colors hover:border-primary/50"
          >
            <ProjectHomeCard project={project} />
          </article>
        ))}
      </div>
    </>
  );
}

export default ProjectHomeGrid;
