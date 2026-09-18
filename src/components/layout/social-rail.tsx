import { SOCIALS } from "@/lib/constants";
const RAIL_START = 650; // cuándo arranca todo el rail
const LINE_DURATION = 500; // lo que tarda la línea en dibujarse
const ICON_STAGGER = 120;

export function SocialRail() {
  return (
    <nav
      aria-label="Redes sociales"
      className="fixed inset-y-0 right-0 z-40 hidden w-20 flex-col items-center justify-end gap-6 lg:flex"
    >
      {SOCIALS.map(({ label, href, Icon }, i) => {
        const isMail = href.startsWith("mailto:");
        const delay = RAIL_START + LINE_DURATION + i * ICON_STAGGER;
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            // target/rel solo para enlaces externos, no para mailto
            {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
            className="animate-fade-up text-muted-foreground transition-colors hover:text-primary"
            style={{ animationDelay: `${delay}ms` }}
          >
            <Icon className="size-5 hover:scale-130 transition transform duration-300" />
          </a>
        );
      })}

      {/* La línea vertical que sube desde el borde inferior */}
      <span
        className="h-32 w-px border border-muted-foreground animate-draw-up"
        style={{ animationDelay: `${RAIL_START}ms` }}
        aria-hidden="true"
      />
    </nav>
  );
}
