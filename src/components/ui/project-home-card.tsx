import { ProjectItem } from "@/types/content";
import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

function ProjectHomeCard({ project }: { project: ProjectItem }) {
  return (
    <>
      {project.image && (
        <div className="group relative aspect-video overflow-hidden bg-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover opacity-60 group-hover:opacity-900 transition-opacity duration-300"
          />

          <div className="absolute top-3 right-3 z-10 rounded-md px-4 py-1 font-mono text-xs text-muted-foreground bg-background-stack-icon flex items-center">
            <span className={`size-1.5 rounded-full bg-success mr-2`} />
            {project.stack.includes("Flutter" || "Ionic" || "Ionic Framework")
              ? "APP MOBILE - FLUTTER"
              : "APP WEB - REACT"}
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg text-foreground">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
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
                Demo <ArrowUpRight className="size-3.5" />
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
    </>
  );
}

export default ProjectHomeCard;
