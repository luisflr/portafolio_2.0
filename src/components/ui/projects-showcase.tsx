"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Code2, CircleDot } from "lucide-react";
import type { ProjectItem } from "@/types/content";
import { FadeUp } from "./fade-up";

const PLATFORM_LABEL: Record<ProjectItem["platform"], string> = {
  mobile: "Mobile",
  web: "Web",
};

export function ProjectsShowcase({ projects }: { projects: ProjectItem[] }) {
  const [selected, setSelected] = useState(0);
  const active = projects[selected];

  function selectProject(index: number) {
    if (index === selected) return;

    // Sin soporte o reduced-motion: cambio directo, sin animación.
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!document.startViewTransition || prefersReduced) {
      setSelected(index);
      return;
    }
    document.startViewTransition(() => setSelected(index));
  }

  return (
    <div>
      {/* MASTER: selector numerado */}
      <FadeUp delay={200}>
        <ul className="flex flex-wrap gap-x-9 gap-y-4 justify-center">
          {projects.map((project, i) => {
            const isActive = i === selected;
            return (
              <li key={i}>
                <button
                  onClick={() => selectProject(i)}
                  aria-pressed={isActive}
                  className="flex items-center gap-3 text-left hover:cursor-pointer group/project"
                >
                  <CircleDot
                    className={`size-3 mr-2 ${
                      isActive
                        ? "text-primary block"
                        : "text-muted-foreground hidden"
                    }`}
                  />
                  <span className="flex flex-col">
                    <span
                      className={`text-sm group-hover/project:-translate-y-1 transition transform duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground group-hover/project:-translate-y-1 transition transform duration-300">
                      | {PLATFORM_LABEL[project.platform]}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </FadeUp>

      {/* DETAIL: proyecto activo */}
      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-7 items-center">
        <div
          className="col-span-4 border-l border-l-primary pl-14 h-92.5"
          style={{ viewTransitionName: "project-detail" }}
        >
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
        <div className="h-92.5 col-span-3">
          <div
            style={{ viewTransitionName: "project-image" }}
            className="relative overflow-hidden rounded-xl bg-background-stack-icon h-fit"
          >
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
    </div>
  );
}
