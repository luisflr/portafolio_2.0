import { getExperience } from "@/lib/data/experience";
import { mapExperienceItem } from "@/lib/serializers";
import { formatDate } from "@/lib/utils";
import { ExperienceItem } from "@/types/content";

export async function Experience() {
  const items = await getExperience();

  if (!items || items.length === 0) return null;
  const experiences: ExperienceItem[] = items
    .map(mapExperienceItem)
    .sort((fi, si) => fi.order - si.order);

  return (
    <section
      id="experiencia"
      className="mx-auto max-w-5xl px-6 py-24 mt-13 border-b"
    >
      <h2 className="mb-7 text-sm tracking-tight text-muted-foreground font-mono">
        02. EXPERIENCIA
      </h2>

      <div className="divide-y divide-border">
        {experiences.map((item, i) => (
          <details key={i} name="experiencia" open={i === 0} className="group">
            <summary className="group-hover:bg-ligth-blue transition transform duration-200 flex cursor-pointer items-start justify-between gap-4 py-6">
              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:gap-8 items-center">
                <span className="group-hover:translate-x-2 group-hover:text-primary transition transform duration-200 font-mono text-xs text-muted-foreground sm:w-36 sm:shrink-0">
                  {formatDate(item.initialDate)} - {formatDate(item.endDate)}
                </span>
                <div className="flex space-x-5 items-center justify-between">
                  <h3 className="group-hover:translate-x-2 transition transform duration-200 text-lg font-semibold text-foreground w-50 lg:w-70">
                    {item.role}
                  </h3>
                  <p className="text-muted-foreground text-xs group-open:underline group-open:underline-offset-8 group-open:decoration-primary">
                    {item.company}
                  </p>
                </div>
              </div>
              {/* +/− : el group-open lo cambia según el estado del <details> padre */}
              <span className="mt-1 text-md leading-none text-muted-foreground pr-3">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>

            <div className="pb-8 sm:pl-40">
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>

              <ul className="mt-4 space-y-2">
                {item.achievements.map((a, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-muted-foreground text-sm"
                  >
                    <span className="text-primary">·</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {item.stack.map((tech, i) => (
                  <span
                    key={`${tech}-${i}`}
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
