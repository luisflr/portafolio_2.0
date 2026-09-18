import { ArrowDown, ArrowRight } from "lucide-react";
import { Badge } from "../ui/badge";

export async function Hero() {
  const startDate = new Date(2021, 7, 1); // agosto (0-indexed)
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();
  // Si aún no llega el mes/día de aniversario este año, resta uno
  if (
    now.getMonth() < startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() < startDate.getDate())
  ) {
    years--;
  }

  return (
    <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-20 px-6 border-b mt-25 lg:mt-0">
      <div>
        {/** Badge sobre mi estado actual */}
        <Badge
          className="mb-6 w-fit animate-fade-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="size-1.5 rounded-full bg-success" />
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Disponible para nuevos retos
          </span>
        </Badge>

        {/** Mi nombre */}
        <h1
          className="text-5xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Luis Gonzalo Flores Rodríguez
        </h1>

        <div
          className="mt-1 mb-10 text-sm text-muted-foreground border-spacing-2 flex items-center animate-fade-up"
          style={{ animationDelay: "160ms" }}
        >
          Ingeniero de Software · Web & Móvil · {years}+ años{" "}
        </div>

        <div
          className="flex space-x-10 justify-between pr-13 animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground tracking-tight">
            Especializado en tecnologías actuales que forman un FullStack:
            Frontend, Backend y Base de datos, incluyendo también tecnologías
            para el desarrollo móvil: Flutter, Riverpod, Fastlane. Me enfoco
            siempre en aplicar buenas prácticas, Clean Code y principios SOLID
            para un desarrollo óptimo y escalable. Además disfruto asumir
            concretar y aprender con nuevos retos.
          </p>
          <div>
            <ul className="font-mono divide-y divide-border text-sm border-t border-b">
              <li className="py-3 text-muted-foreground flex items-center">
                <div className="text-xs min-w-30">ROL:</div>
                Ingeniero de Software · FullStack{" "}
              </li>
              <li className="py-3 text-muted-foreground flex items-center">
                <span className="text-xs min-w-30">EXPERIENCIA:</span>
                {years}+ años{" "}
              </li>
              <li className="py-3 text-muted-foreground flex items-center">
                <span className="text-xs min-w-30">BASE:</span>
                Arequipa, Perú · GMT-5 · remoto
              </li>
              <li className="py-3 text-muted-foreground flex items-center">
                <span className="text-xs min-w-30">ESTADO:</span>
                Abierto a nuevas oportunidades{" "}
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-3 flex flex-wrap items-center gap-4 animate-fade-up "
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="#proyectos"
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-5 py-2.5 text-sm font-bold text-primary transition hover:opacity-90 font-mono group/hero hover:scale-105 transform duration-300"
          >
            Ver Proyectos
            <ArrowRight className="size-4 group-hover/hero:translate-x-1 transition transform duration-200" />
          </a>
          <button className="inline-flex items-center gap-2 rounded-lg bg-background-stack-icon px-5 py-3 text-sm font-bold text-foreground hover:opacity-90 cursor-pointer font-mono hover:scale-105 transition transform duration-300">
            Descargar CV
            <ArrowDown className="size-3" />
          </button>
        </div>
        <div
          className="mt-2 flex flex-wrap items-center gap-4 font-mono animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
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
    </section>
  );
}
