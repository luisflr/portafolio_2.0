import { ReactNode } from "react";
import { ExperienceItem } from "../types/content";

const startDate: Date = new Date(2021, 7, 1);
const now = new Date();
const years = now.getFullYear() - startDate.getFullYear();

export const STATIC_COMMANDS = {
  whoami: {
    label: "whoami",
    output: (
      <div>
        <p>- Luis Flores Rodríguez</p>
        <p>- Ingeniero de Software · {years}+ años · Arequipa, Perú</p>
      </div>
    ),
  },
  stack: {
    label: "stack",
    output: (
      <div>
        <p>- Frontend: React · Next.js · Tailwind · Typescript</p>
        <p>- Móvil: Flutter · React Native</p>
        <p>- Backend: Django · Laravel</p>
        <p>- BD: PostgreSQL · MongoDB</p>
        <p>- Buenas prácticas: testing · clean code · SOLID</p>
      </div>
    ),
  },
  educacion: {
    label: "educacion",
    output: (
      <div>
        <p>- Ingeniería de Software — Universidad La Salle / 2016 - 2021</p>
        <p>- Platzi (React, SSR) · Udemy (Clean Code, SOLID)</p>
      </div>
    ),
  },
  contacto: {
    label: "contacto",
    output: (
      <div className="space-y-1">
        <p>- Correo · luisflr1997@gmail.com</p>
        <p>- Linkedin · linkedin.com/in/luis-flores-rodriguez/</p>
        <p>- Github · github.com/luisflr</p>
      </div>
    ),
  },
} as const;

export function renderExperience(items: ExperienceItem[]): ReactNode {
  const maxLength = 30;
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i}>
          <p className="text-foreground">
            - {item.role} · {item.company.substring(0, maxLength)}
            {item.company.length > maxLength ? "..." : ""}
          </p>
        </div>
      ))}
    </div>
  );
}
