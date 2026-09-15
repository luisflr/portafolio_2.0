import { StackItem } from "@/types/content";

export const STACKS: StackItem[] = [
  {
    name: "React",
    type: "Frontend / Typescript",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-accent">
        Re
      </span>
    ),
  },
  {
    name: "Next.js",
    type: "BFF / SSR",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono">
        Nx
      </span>
    ),
  },
  {
    name: "Tailwind",
    type: "CSS Utilities",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono  text-primary">
        Ta
      </span>
    ),
  },
  {
    name: "Flutter",
    type: "Mobile / Multiplataforma",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-flutter-icon">
        Fl
      </span>
    ),
  },
  {
    name: "Django",
    type: "Backend / Python",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-django-icon">
        Dj
      </span>
    ),
  },
  {
    name: "Laravel",
    type: "Backend / PHP",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-laravel-icon">
        Lv
      </span>
    ),
  },
  {
    name: "PostgreSQL",
    type: "Base de Datos",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-ring">
        Pg
      </span>
    ),
  },
  {
    name: "MongoDB",
    type: "NoSQL Document Store",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-django-icon">
        Mg
      </span>
    ),
  },
  {
    name: "Git",
    type: "Control de versiones",
    icon: (
      <span className="rounded-xl bg-background-stack-icon px-3 py-2 font-bold text-md mr-4 h-10 flex font-mono text-git-icon">
        Gt
      </span>
    ),
  },
];
