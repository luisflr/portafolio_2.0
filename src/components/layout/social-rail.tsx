import { SOCIALS } from "@/lib/constants";

export function SocialRail() {
  return (
    <nav
      aria-label="Redes sociales"
      className="fixed inset-y-0 right-0 z-40 hidden w-20 flex-col items-center justify-end gap-6 lg:flex"
    >
      {SOCIALS.map(({ label, href, Icon }) => {
        const isMail = href.startsWith("mailto:");
        return (
          <a
            key={label}
            href={href}
            aria-label={label}
            // target/rel solo para enlaces externos, no para mailto
            {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })}
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Icon className="size-5 hover:scale-130 transition transform duration-300" />
          </a>
        );
      })}

      {/* La línea vertical que sube desde el borde inferior */}
      <span
        className="h-32 w-px border border-muted-foreground "
        aria-hidden="true"
      />
    </nav>
  );
}
