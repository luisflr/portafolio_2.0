import { ExperienceItem } from "@/types/content";
import { baseUrl } from "@/lib/constants";

export async function getExperience(): Promise<ExperienceItem[] | null> {
  try {
    const response = await fetch(`${baseUrl}/api/experience-for-terminal/`, {
      next: { tags: ["experience"] },
    });
    if (!response.ok) return null;
    return response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
