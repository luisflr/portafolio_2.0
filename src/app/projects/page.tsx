import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getProjects } from "@/lib/data/projects";
import { getYearsOfExperience } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/project-card";
import { TypesProyect, type ProjectItem } from "@/types/content";
import { Spotlight } from "@/components/ui/spot-light";
import { FadeUp } from "@/components/ui/fade-up";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { mapProjects } from "@/lib/serializers";

// Ritmo de bandas: nº de columnas por banda, cíclico. Edita aquí para cambiarlo.
const BAND_PATTERN = [2, 3, 2, 3];

// ⚠️ Tailwind escanea clases ESTÁTICAS en el código: `md:grid-cols-${n}` NO funciona
// (no lo ve, no genera el CSS). Por eso un mapa con las clases literales completas.
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
  let i = 0;
  let p = 0;
  while (i < projects.length) {
    const size = pattern[p % pattern.length];
    bands.push(projects.slice(i, i + size));
    i += size;
    p++;
  }
  return bands;
}

export default async function ProyectosPage() {
  const items = await getProjects();

  if (!items || items.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-muted-foreground">No hay proyectos para mostrar.</p>
      </main>
    );
  }

  const projects: ProjectItem[] = items
    .map(mapProjects)
    .sort((fi, si) => fi.order - si.order);

  const stats = [
    { label: "Proyectos", value: projects.length, color: "text-primary" },
    {
      label: "Personales",
      value: projects.filter((p) => p.typeProject == TypesProyect.personal)
        .length,
      color: "",
    },
    {
      label: "Laborales",
      value: projects.filter((p) => p.typeProject == TypesProyect.work).length,
      color: "",
    },
    {
      label: "Años",
      value: `${getYearsOfExperience()}+`,
      color: "text-success",
    },
  ];

  const bands = chunkIntoBands(projects, BAND_PATTERN);

  return (
    <>
      <Spotlight />
      <main className="mx-auto max-w-6xl px-6 py-16 z-30">
        <ScrollToTop />
        <Link
          href="/#proyectos"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Volver
        </Link>

        {/* Header full-width: título/descripción izquierda, stats derecha */}
        <div className="mb-12 grid grid-cols-1 gap-8 p-8 lg:grid-cols-[1fr_auto] lg:items-center border-b">
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

          <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4 lg:grid-cols-2 bg-background-card p-8 rounded-2xl">
            {stats.map((stat, i) => (
              <FadeUp delay={100 + i * 90} key={stat.label}>
                <div className="flex flex-col items-center">
                  <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </dt>
                  <dd
                    className={`mt-1 text-2xl font-bold text-foreground tabular-nums ${stat.color}`}
                  >
                    {stat.value}
                  </dd>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Mosaico por bandas */}
        <div className="space-y-6">
          {bands.map((band, i) => {
            const intended = BAND_PATTERN[i % BAND_PATTERN.length];
            // La última banda puede tener menos items que el patrón: clamp para no
            // estirar 1 card sola a lo ancho de 3 columnas.
            const colCount = Math.min(intended, band.length);
            return (
              <FadeUp key={i} delay={i === 0 ? 400 : 0}>
                <div
                  className={`grid grid-cols-1 gap-6 ${BAND_COLS[colCount]}`}
                >
                  {band.map((project, j) => (
                    // <FadeUp key={j} delay={j * 100}>
                    <ProjectCard key={j} project={project} />
                    // </FadeUp>
                  ))}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </main>
    </>
  );
}
