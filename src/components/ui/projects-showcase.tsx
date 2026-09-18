"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Code2, CircleDot } from "lucide-react";
import type { ProjectItem } from "@/types/content";

const PLATFORM_LABEL: Record<ProjectItem["platform"], string> = {
  mobile: "Mobile",
  web: "Web",
};

export function ProjectsShowcase({ projects }: { projects: ProjectItem[] }) {
  const [selected, setSelected] = useState(0);
  const active = projects[selected];

  return (
    <div>
      {/* MASTER: selector numerado */}
      <ul className="flex flex-wrap gap-x-9 gap-y-4 justify-center">
        {projects.map((project, i) => {
          const isActive = i === selected;
          const number = String(i + 1).padStart(2, "0");
          return (
            <li key={i}>
              <button
                onClick={() => setSelected(i)}
                aria-pressed={isActive}
                className="flex items-center gap-3 text-left"
              >
                <CircleDot
                  className={`size-3 mr-2 ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`}
                />
                <span className="flex flex-col">
                  <span
                    className={`text-sm transition-colors  ${
                      isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {project.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    | {PLATFORM_LABEL[project.platform]}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* DETAIL: proyecto activo */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-7 items-center">
        <div className="col-span-4 border-l border-l-primary pl-14">
          <div className="flex space-x-8 items-start">
            <h3 className="text-2xl font-semibold ">{active.title}</h3>
            <div className="inline-flex items-center bg-background-stack-icon rounded-md px-3 py-1 font-mono text-xs uppercase tracking-wider text-success">
              App {PLATFORM_LABEL[active.platform]}
            </div>
          </div>

          <p className="mt-6 leading-relaxed text-muted-foreground text-sm">
            {active.description}
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            Stack tecnológico:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3">
            {active.stack.map((tech) => (
              <li
                key={tech}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary">·</span> {tech}
              </li>
            ))}
          </ul>

          {(active.demoUrl || active.codeUrl) && (
            <div className="mt-8 flex items-center gap-6 font-mono text-xs">
              {active.demoUrl && (
                <a
                  href={active.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80"
                >
                  Ver Demo <ArrowUpRight className="size-3.5" />
                </a>
              )}
              {active.codeUrl && (
                <a
                  href={active.codeUrl}
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

        {/* Imagen del proyecto (tu project.image, no un uploader) */}
        <div className="col-span-3 relative overflow-hidden rounded-xl bg-background-stack-icon h-fit">
          {active.image ? (
            <Image
              src={active.image}
              alt={active.title}
              width={800} // Define un ancho máximo de referencia (requerido por Next.js)
              height={600} // Define un alto de referencia para mantener la proporción inicial
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-auto object-contain opacity-90"
            />
          ) : (
            <div className="grid h-full min-h-50 place-items-center font-mono text-sm text-muted-foreground">
              {active.title}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
