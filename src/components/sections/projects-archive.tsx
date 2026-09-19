"use client";

import { useState } from "react";
import { getYearsOfExperience } from "@/lib/utils";
import { TypesProyect, type ProjectItem } from "@/types/content";
import { CATEGORIES } from "@/lib/constants";
import { ProjectCard } from "@/components/ui/project-card";
import { FadeUp } from "@/components/ui/fade-up";
import ProjectTypesSwitch from "@/components/ui/project-types-switch";

const BAND_PATTERN = [2, 3, 2, 3];
const BAND_COLS: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

function chunkIntoBands(
  projects: ProjectItem[],
  pattern: number[]
): ProjectItem[][] {
  const bands: ProjectItem[][] = [];
  let i = 0,
    p = 0;
  while (i < projects.length) {
    const size = pattern[p % pattern.length];
    bands.push(projects.slice(i, i + size));
    i += size;
    p++;
  }
  return bands;
}

export function ProjectsArchive({ projects }: { projects: ProjectItem[] }) {
  const [active, setActive] = useState<string>(CATEGORIES[0].id);

  // El filtro corre en cliente, sobre los datos que ya llegaron del server.
  const visible = projects.filter((p) => p.typeProject === active);

  // Los contadores se calculan del array COMPLETO, no del filtrado (ver nota).
  const stats = [
    { label: "Proyectos", value: projects.length, color: "text-primary" },
    {
      label: "Personales",
      value: projects.filter((p) => p.typeProject === TypesProyect.personal)
        .length,
      color: "",
    },
    {
      label: "Laborales",
      value: projects.filter((p) => p.typeProject === TypesProyect.work).length,
      color: "",
    },
    {
      label: "Años",
      value: `${getYearsOfExperience()}+`,
      color: "text-success",
    },
  ];

  const bands = chunkIntoBands(visible, BAND_PATTERN);

  return (
    <>
      <div className="relative mb-12 grid grid-cols-1 gap-8 border-b p-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <FadeUp>
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-primary">
              Historial de proyectos
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Mis Proyectos
            </h1>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Colección completa de proyectos de ingeniería de software:
              aplicaciones web y móviles, arquitecturas limpias y soluciones
              enfocadas en resolver problemas reales.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-4 rounded-2xl bg-background-card p-8 sm:grid-cols-4 lg:grid-cols-2">
          {stats.map((stat, i) => (
            <FadeUp delay={100 + i * 90} key={stat.label}>
              <div className="flex flex-col items-center">
                <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dt>
                <dd
                  className={`mt-1 text-2xl font-bold tabular-nums ${
                    stat.color || "text-foreground"
                  }`}
                >
                  {stat.value}
                </dd>
              </div>
            </FadeUp>
          ))}
        </div>

        <ProjectTypesSwitch
          active={active}
          maxVisible={projects.length}
          projects={projects}
          setActive={setActive}
          className="absolute bottom-1 left-0"
        />
      </div>

      <div className="space-y-6">
        {bands.map((band, i) => {
          const colCount = Math.min(
            BAND_PATTERN[i % BAND_PATTERN.length],
            band.length
          );
          return (
            <FadeUp key={i} delay={i === 0 ? 400 : 0}>
              <div className={`grid grid-cols-1 gap-6 ${BAND_COLS[colCount]}`}>
                {band.map((project, j) => (
                  <ProjectCard key={j} project={project} />
                ))}
              </div>
            </FadeUp>
          );
        })}
      </div>
    </>
  );
}
