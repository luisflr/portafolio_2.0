import { ReactNode } from "react";

export enum TypesProyect {
  work = "Trabajo",
  personal = "Personal",
}
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
}
