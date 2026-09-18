import { GithubIconOutline, LinkedinIconOutline } from "@/components/ui/icons";
import { Mail } from "lucide-react";

export const SECTIONS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia Laboral" },
  { id: "proyectos", label: "Proyectos Personales" },
  { id: "stack", label: "Stack tecnológico" },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export const baseUrl = process.env.BACKEND_URL;

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/luisflr",
    Icon: GithubIconOutline,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luis-flores-rodriguez/",
    Icon: LinkedinIconOutline,
  },
  { label: "Email", href: "mailto:luisflr1997@gmail.com", Icon: Mail },
];
