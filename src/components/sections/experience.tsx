import { getExperience } from "@/lib/data/experience";
import { MOCK_EXPERIENCE } from "@/lib/data/mock-data";

export async function Experience() {
  // const items = await getExperience();
  const items = MOCK_EXPERIENCE;

  if (!items || items.length === 0) return null;

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-5xl px-6 py-24 mt-13 border-b"
    >
      <h2 className="mb-12 text-4xl font-bold tracking-tight text-foreground">
        Experiencia Laboral
      </h2>

      <div className="divide-y divide-border">
        {items.map((item, i) => (
          <details key={i} name="experiencia" open={i === 0} className="group">
            <summary className="flex cursor-pointer items-start justify-between gap-4 py-6">
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:gap-8">
                <span className="font-mono text-sm text-muted-foreground sm:w-32 sm:shrink-0">
                  {item.period}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {item.role}
                  </h3>
                  <p className="text-accent">{item.company}</p>
                </div>
              </div>
              {/* +/− : el group-open lo cambia según el estado del <details> padre */}
              <span className="mt-1 text-2xl leading-none text-muted-foreground">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>

            <div className="pb-8 sm:pl-40">
              <p className="text-muted-foreground">{item.description}</p>

              <ul className="mt-4 space-y-2">
                {item.achievements.map((a, j) => (
                  <li key={j} className="flex gap-2 text-muted-foreground">
                    <span className="text-primary">·</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
