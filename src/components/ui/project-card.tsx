import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { ProjectItem } from "@/types/content";
import BadgeStack from "./badge-stack";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-background-card transition-colors hover:border-primary/50">
      <div className="flex flex-1 flex-col p-6">
        <div className="flex justify-between">
          <div className="flex">
            <h3 className="text-lg text-foreground">{project.title}</h3>
            <span className="ml-4 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              {project.platform}
            </span>
          </div>
          <h3 className="text-sm font-bold text-muted-foreground ">
            {project.year}
          </h3>
        </div>
        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {project.stack.map((stack) => (
            <BadgeStack key={stack} label={stack} />
          ))}
        </div>
        {(project.demoUrl || project.codeUrl) && (
          <div className="mt-6 flex items-center gap-6 border-t border-border pt-4 font-mono text-xs">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80"
              >
                Ver Demo <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                Código <Code2 className="size-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
