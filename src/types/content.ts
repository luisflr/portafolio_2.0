import { ReactNode } from "react";

export type typesProyect = "work" | "personal";
export interface ExperienceItem {
  role: string;
  company: string;
  initialDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  stack: string[];
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
  typeProject: typesProyect;
  image: string;
  demoUrl: string;
  codeUrl: string;
}
