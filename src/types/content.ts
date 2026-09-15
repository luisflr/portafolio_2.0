import { ReactNode } from "react";

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
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
