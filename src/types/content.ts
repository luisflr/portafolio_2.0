import { ReactNode } from "react";

export enum TypesProyect {
  work = "Trabajo",
  personal = "Personal",
}
const MOBILE_SIGNALS = [
  "flutter",
  "ionic",
  "react native",
  "swift",
  "kotlin",
  "android",
  "capacitor",
];
export interface ExperienceItem {
  role: string;
  company: string;
  initialDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  stack: string[];
  order: number;
}

export interface TerminalLine {
  type: "command" | "output";
  content: ReactNode;
}

export interface StackItem {
  name: string;
  type: string;
  icon: ReactNode;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
  typeProject: TypesProyect;
  image: string;
  demoUrl: string;
  codeUrl: string;
  order: number;
  platform: "mobile" | "web";
}

export function derivePlatform(stack: string[]): "mobile" | "web" {
  const normalized = stack.map((s) => s.toLowerCase());
  return normalized.some((tech) =>
    MOBILE_SIGNALS.some((sig) => tech.includes(sig))
  )
    ? "mobile"
    : "web";
}
