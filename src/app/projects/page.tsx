import { getProjects } from "@/lib/data/projects";
import { mapProjects } from "@/lib/serializers";
import { ProjectsArchive } from "@/components/sections/projects-archive";
import { Spotlight } from "@/components/ui/spot-light";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProyectosPage() {
  const items = await getProjects();

  if (!items || items.length === 0) {
    return (
      <main className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-muted-foreground">No hay proyectos para mostrar.</p>
      </main>
    );
  }

  // El fetch, el mapeo y el orden viven aquí (servidor). El filtrado NO.
  const projects = items.map(mapProjects).sort((a, b) => a.order - b.order);

  return (
    <>
      <Spotlight />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <ScrollToTop />
        <Link
          href="/#proyectos"
          className="mb-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Volver
        </Link>
        {/* Toda la parte interactiva, delegada al Client Component: */}
        <ProjectsArchive projects={projects} />
      </main>
    </>
  );
}
