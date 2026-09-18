import { getProjects } from "@/lib/data/projects";
import { mapProjects } from "@/lib/serializers";
import { ProjectItem } from "@/types/content";
import ProjectHomeGrid from "@/components/ui/project-home-grid";

export async function Projects() {
  const items = await getProjects();

  if (!items || items.length === 0) return null;
  const projects: ProjectItem[] = items.map(mapProjects);

  return (
    <section
      id="proyectos"
      className="mx-auto max-w-5xl px-6 border-b min-h-screen py-24 justify-center flex flex-col"
    >
      <ProjectHomeGrid projects={projects} />
    </section>
  );
}
