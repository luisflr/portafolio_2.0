import { ProjectItem } from "@/types/content";
import { baseUrl } from "@/lib/constants";

export async function getProjects(): Promise<ProjectItem[] | null> {
  try {
    const response = await fetch(`${baseUrl}/api/projects/`, {
      next: { tags: ["projects"] },
    });
    if (!response.ok) return null;
    return response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
