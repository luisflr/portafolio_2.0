import { ArrowDown, ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";
import { getExperience } from "@/lib/data/experience";
import { Terminal } from "../ui/terminal";

export async function Hero() {
  const startDate: Date = new Date(2021, 7, 1);
  const now = new Date();
  const years = now.getFullYear() - startDate.getFullYear();
  const experience = await getExperience();
  return (
    <section
      id="sobre-mi"
      className="mx-auto grid min-h-screen max-w-6xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 border-b mt-25 lg:mt-0"
    >
      <div className="order-1 lg:order-1">
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

        <p className="my-4 text-[14px] text-primary border-spacing-2">
          Ingeniero de Software · Web & Móvil · {years}+ años{" "}
        </p>

        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground tracking-tight">
          Especializado en tecnologías actuales que forman un FullStack,
          incluyendo también tecnologías para el desarrollo móvil. <br />
          Manteniendo siempre un enfoque en buenas prácticas y Clean Code,
          disfruto asumir concretar y aprender con nuevos retos.
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
        <div className="mt-4 flex flex-wrap items-center gap-4 font-mono">
          <a
            href="https://www.linkedin.com/in/luis-flores-rodriguez/"
            target="_blank"
            aria-label="LinkedIn"
            className="px-1 py-2.5 text-[13px] text-muted-foreground transition hover:scale-105 underline underline-offset-8 font-mono"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/luisflr"
            target="_blank"
            aria-label="GitHub"
            className="px-1 py-2.5 text-[13px] text-muted-foreground transition hover:scale-105 underline underline-offset-8 font-mono"
          >
            Github
          </a>
          <a
            href="mailto:luisflr1997@gmail.com"
            className="px-1 py-2.5 text-[13px] text-muted-foreground transition hover:scale-105 underline underline-offset-8 font-mono"
          >
            Email
          </a>
        </div>
      </div>

      <div className="order-2 lg:order-2">
        <Terminal experience={experience} />
      </div>
    </section>
  );
}
