import { getProjects } from "@/lib/data/projects";
import { FadeUp } from "@/components/ui/fade-up";
import { ProjectHomeGrid } from "../ui/project-home-grid";
import { ProjectItem } from "@/types/content";
import { mapProjects } from "@/lib/serializers";

export async function Projects() {
  const items = await getProjects();
  if (!items || items.length === 0) return null;

  const projects: ProjectItem[] = items
    .map(mapProjects)
    .sort((fi, si) => fi.order - si.order);
  return (
    <section id="proyectos" className="mx-auto max-w-6xl border-b px-6 py-24">
      <FadeUp>
        <ProjectHomeGrid projects={projects} />
      </FadeUp>
    </section>
  );
}
