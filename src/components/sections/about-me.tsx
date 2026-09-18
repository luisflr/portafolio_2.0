import { getExperience } from "@/lib/data/experience";
import { Terminal } from "../ui/terminal";

export async function AboutMe() {
  const experience = await getExperience();
  return (
    <section
      id="sobre-mi"
      className="mx-auto flex flex-col min-h-screen max-w-6xl justify-center px-6 border-b"
    >
      <h2 className="mb-8 text-sm tracking-tight text-muted-foreground font-mono">
        02. SOBRE MÍ
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
        <div>
          <p className="text-sm text-muted-foreground">
            Mi interés por la programación comenzó durante mis últimos años de
            colegio en{" "}
            <a
              href="https://www.sjbdelasalle.edu.pe/"
              target="_blank"
              className="text-accent underline underline-offset-4"
            >
              San Juan Bautista de La Salle
            </a>
            , donde tuve mi primer contacto con Scratch. Esa curiosidad me llevó
            a estudiar Ingeniería de Software en la{" "}
            <a
              href="https://www.ulasalle.edu.pe/"
              target="_blank"
              className="text-accent underline underline-offset-4"
            >
              Universidad La Salle
            </a>{" "}
            , donde culminé mis estudios. Desde entonces, me ha interesado no
            solo desarrollar software, sino también entender cómo funciona un
            proyecto en conjunto y cómo cada parte contribuye al resultado
            final.
            <br />
            <br />
            Disfruto trabajar en equipo y considero que una buena comunicación
            es clave para lograr buenos resultados. También me gusta mantener mi
            espacio de trabajo organizado, ya que me ayuda a mantener el control
            y adaptarme a los cambios. Además, siempre busco seguir aprendiendo
            mediante cursos en plataformas como Platzi y Udemy para fortalecer
            mis conocimientos y seguir creciendo como desarrollador.
          </p>
        </div>
        <div className="flex order-2 lg:order-2 justify-center">
          <Terminal experience={experience} />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
