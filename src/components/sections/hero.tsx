import { ArrowDown, ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

export function Hero() {
  const startDate: Date = new Date(2021, 7, 1);
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();

  return (
    <section
      id="sobre-mi"
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6"
    >
      {/** Badge sobre mi estado actual */}
      <Badge clasName="mb-8 w-fit">
        <span className="size-1.5 rounded-full bg-success" />
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
          Disponible para nuevos retos
        </span>
      </Badge>

      {/** Mi nombre */}
      <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-5xl md:text-5xl">
        Luis Flores Rodríguez
      </h1>

      <p className="mt-4 text-md font-medium text-primary sm:text-lg font-mono">
        Ingeniero de Software · Web & Móvil · {years}+ años{" "}
      </p>

      <p className="mt-6 max-w-2xl text-base  text-muted-foreground sm:text-md font-mono">
        Especializado en tecnologías actuales que forman un FullStack. En el
        front con React, Typescript, Next; en el backend con Laravel y Django;
        también en desarrollo movil con flutter y finalmente bases de datos
        relacionales y no relacionales con PostgreSQL y MongoDB. Enfocado al
        100% en buenas prácticas, principios SOLID, pruebas unitarias y
        automatizadas.
      </p>

      <div className="mt-9 flex flex-wrap items-center gap-4">
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 font-mono"
        >
          Ver Proyectos
          <ArrowRight className="size-3" />
        </a>
        <button className="inline-flex items-center gap-2 rounded-lg bg-muted/30 border border-border px-5 py-2.5 text-sm font-bold text-muted-foreground transition-opacity hover:opacity-90 cursor-pointer font-mono">
          Descargar CV
          <ArrowDown className="size-3" />
        </button>
      </div>
      <div className="mt-9 flex flex-wrap items-center gap-4 font-mono">
        <a
          href="#proyectos"
          className="px-1 py-2.5 text-sm text-muted-foreground transition hover:scale-105 underline underline-offset-8"
        >
          LinkedIn
        </a>
        <a
          href="#proyectos"
          className="px-1 py-2.5 text-sm text-muted-foreground transition hover:scale-105 underline underline-offset-8"
        >
          Github
        </a>
        <a
          href="#proyectos"
          className="px-1 py-2.5 text-sm text-muted-foreground transition hover:scale-105 underline underline-offset-8"
        >
          Email
        </a>
      </div>
    </section>
  );
}
