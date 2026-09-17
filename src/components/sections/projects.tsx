import { getProjects } from "@/lib/data/projects";
import { mapProjects } from "@/lib/serializers";
import { ProjectItem } from "@/types/content";
import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

export async function Projects() {
  const items = await getProjects();
  // const items = MOCK_projects;

  if (!items || items.length === 0) return null;
  const projects: ProjectItem[] = items.map(mapProjects);

  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-24 border-b">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
          Proyectos visibles
        </p>
        <h2 className="text-4xl font-bold tracking-tight text-foreground">
          Proyectos Personales y de Trabajo
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <article
            key={i}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
          >
            {project.image && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-bold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

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
          </article>
        ))}
      </div>
    </section>
  );
}
