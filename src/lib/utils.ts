import { ExperienceItem } from "@/types/content";

export function formatDate(_date: string): string {
  if (!_date) return "";

  const date = new Date(_date);
  const formatted = date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });

  return formatted;
}

export function mapExperienceItem(backendItem: any): ExperienceItem {
  return {
    role: backendItem.role,
    company: backendItem.company,
    initialDate: formatDate(backendItem.initial_date),
    endDate: formatDate(backendItem.end_date),
    description: backendItem.description,
    achievements: backendItem.achievements,
    stack: backendItem.stack,
  };
}
