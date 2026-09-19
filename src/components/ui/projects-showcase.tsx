"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2 } from "lucide-react";
import type { ProjectItem } from "@/types/content";
import BadgeStack from "./badge-stack";
import { useRouter } from "next/navigation";

const PLATFORM_LABEL: Record<ProjectItem["platform"], string> = {
  mobile: "Mobile",
  web: "Web",
};

// Fallback mientras subes estos campos al backend.
const PLACEHOLDER = {
  role: "Full-Stack dev",
  year: "2025",
  team: "—",
  status: "En producción",
  achievements: ["Detalle de lo realizado (pendiente de subir al backend)."],
};

// Stats de sección (no por proyecto). Hardcodeadas por ahora.
const SECTION = { periodo: "2022 — 2025", stackBase: "React · .NET" };

export function ProjectsShowcase({ projects }: { projects: ProjectItem[] }) {
  const [selected, setSelected] = useState(0);
  const active = projects[selected];
  const total = projects.length;

  function goTo(index: number) {
    if (index < 0 || index >= total || index === selected) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!document.startViewTransition || reduced) return setSelected(index);
    document.startViewTransition(() => setSelected(index));
  }

  const router = useRouter();

  function goToArchive() {
    // Desactiva la restauración ANTES de navegar
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    router.push("/projects", { scroll: false }); // ← scroll:false = Next NO hace su scroll-to-top
  }

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
      {/* IZQUIERDA: master + stats */}
      <div className="flex flex-col">
        <ul className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-0">
          {projects.map((project, i) => {
            const isActive = i === selected;
            const tag = `${PLATFORM_LABEL[project.platform]} · ${
              project.year ?? PLACEHOLDER.year
            }`;
            return (
              <li key={i}>
                <button
                  onClick={() => goTo(i)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-4 py-4 text-left transition-colors border-b-2 lg:border-b-0 lg:border-l-2 lg:w-full lg:pl-4 hover:cursor-pointer
                  ${
                    isActive
                      ? "border-primary bg-muted/40"
                      : "border-transparent hover:bg-muted/20"
                  }`}
                >
                  <span className="flex flex-col">
                    <span
                      className={`text-sm font-bold ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {project.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      {tag}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <dl className="mt-8 space-y-3 border-t border-border pt-6 font-mono text-sm">
          <div className="flex justify-between">
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              Proyectos
            </dt>
            <dd className="text-foreground tabular-nums">
              {String(total).padStart(2, "0")}
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-xs uppercase tracking-wider text-muted-foreground">
              Periodo
            </dt>
            <dd className="text-foreground">{SECTION.periodo}</dd>
          </div>
        </dl>
      </div>

      {/* DERECHA: detalle */}
      <div
        style={{ viewTransitionName: "project-detail" }}
        className="border-l  pl-4"
      >
        <div className="flex gap-3">
          <h3 className="text-3xl font-bold text-foreground">{active.title}</h3>
          <span className="rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
            App {PLATFORM_LABEL[active.platform]}
          </span>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-6 border-b border-border pb-6 sm:grid-cols-4">
          {[
            { label: "Rol", value: active.role ?? PLACEHOLDER.role },
            { label: "Año", value: active.year ?? PLACEHOLDER.year },
            { label: "Equipo", value: active.team ?? PLACEHOLDER.team },
            { label: "Estado", value: active.status ?? PLACEHOLDER.status },
          ].map((m) => (
            <div key={m.label}>
              <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <p className="leading-relaxed text-muted-foreground text-sm">
              {active.description}
            </p>

            <p className="mt-10 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Stack tecnológico
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {active.stack.map((tech) => (
                <BadgeStack label={tech} key={tech} />
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div
              style={{ viewTransitionName: "project-image" }}
              className="relative aspect-4/3 overflow-hidden rounded-xl border border-border bg-card"
            >
              {active.image ? (
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 33vw"
                  className="object-cover"
                />
              ) : (
                <div className="grid h-full place-items-center font-mono text-sm text-muted-foreground">
                  {active.title}
                </div>
              )}
            </div>
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
              <span>{active.title}</span>
              <span className="tabular-nums">
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {(active.demoUrl || active.codeUrl) && (
          <div className="mt-8 flex items-center gap-6 font-mono text-xs">
            {active.demoUrl && (
              <a
                href={active.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary transition-opacity hover:opacity-80 group/demo"
              >
                Ver Demo{" "}
                <ArrowUpRight className="size-3.5 group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5 transition transform" />
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

        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <div className="flex gap-2">
            <button
              onClick={() => goTo(selected - 1)}
              disabled={selected === 0}
              aria-label="Anterior"
              className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={() => goTo(selected + 1)}
              disabled={selected === total - 1}
              aria-label="Siguiente"
              className="grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground disabled:opacity-30"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
          <button
            onClick={goToArchive}
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary transition-opacity hover:opacity-80 hover:cursor-pointer group/projects"
          >
            Ver más proyectos{" "}
            <ArrowRight className="size-3.5 group-hover/projects:translate-x-1 transition transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
