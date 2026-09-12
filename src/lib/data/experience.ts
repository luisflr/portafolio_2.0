import { ExperienceItem } from "../../../types/content";

export async function getExperienceForTerminal(): Promise<
  ExperienceItem[] | null
> {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/experience-for-terminal/`,
      {
        next: { tags: ["experience"] },
      }
    );
    if (!response.ok) return null;
    return response.json();
  } catch (e) {
    console.error(e);
    return null;
  }
}
