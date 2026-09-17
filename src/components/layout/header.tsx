"use client";

import { SECTIONS, SECTION_IDS } from "@/lib/constants";
import { useScroll } from "@/lib/use-scroll";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";

export function Header() {
  const activeId = useScroll(SECTION_IDS);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#sobre-mi"
          className="font-mono text-sm font-bold tracking-widest text-primary"
        >
          LFR
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={activeId === section.id ? "true" : undefined}
              className={`font-mono text-xs uppercase tracking-wider transition-colors ${
                activeId === section.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/luisflr"
            target="_blank"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/luis-flores-rodriguez/"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="#contacto"
            className="hidden rounded-lg bg-foreground px-3 py-1.5 font-mono text-xs uppercase tracking-wider text-background transition-opacity hover:opacity-90 sm:block"
          >
            Contacto
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
