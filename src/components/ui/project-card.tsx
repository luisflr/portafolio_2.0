import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import type { ProjectItem } from "@/types/content";
import BadgeStack from "./badge-stack";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-xl bg-background-card transition-colors hover:border-primary/50">
      {project.image && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={`image-${project.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
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
