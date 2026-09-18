import { ExperienceItem, ProjectItem, derivePlatform } from "@/types/content";
import { formatDate } from "./utils";

export function mapExperienceItem(backendItem: any): ExperienceItem {
  return {
    role: backendItem.role,
    company: backendItem.company,
    initialDate: formatDate(backendItem.initial_date),
    endDate: formatDate(backendItem.end_date),
    description: backendItem.description,
    achievements: backendItem.achievements,
    stack: backendItem.stack,
    order: backendItem.order,
  };
}

export function mapProjects(backendItem: any): ProjectItem {
  return {
    title: backendItem.name,
    description: backendItem.description,
    stack: backendItem.stack,
    typeProject: backendItem.type_project,
    image: backendItem.image,
    demoUrl: backendItem.demo_url,
    codeUrl: backendItem.code_url,
    order: backendItem.order,
    platform: derivePlatform(backendItem.stack),
  };
}
