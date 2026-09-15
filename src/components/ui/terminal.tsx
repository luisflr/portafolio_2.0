"use client";

import { STATIC_COMMANDS, renderExperience } from "@/lib/terminal-commands";
import { ExperienceItem, TerminalLine } from "@/types/content";
import { ReactNode, useEffect, useRef, useState } from "react";

export function Terminal({
  experience,
}: {
  experience: ExperienceItem[] | null;
}) {
  const commandButtons = [
    "whoami",
    "educacion",
    ...(experience ? ["experiencia"] : []),
    "stack",
    "contacto",
    "clear",
  ];

  const [history, setHistory] = useState<TerminalLine[]>([]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, []);

  function runCommand(cmd: string) {
    if (cmd == "clear") {
      setHistory([]);
      return;
    }

    let output: ReactNode;
    if (cmd == "experiencia" && experience) {
      output = renderExperience(experience);
    } else if (cmd in STATIC_COMMANDS) {
      output = STATIC_COMMANDS[cmd as keyof typeof STATIC_COMMANDS].output;
    } else {
      return;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", content: cmd },
      { type: "output", content: output },
    ]);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card font-mono text-sm shadow-2xl">
      {/* Barra de título */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f56]" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" />
        <span className="size-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 text-xs text-muted-foreground">
          luis@portafolio ~ zsh
        </span>
      </div>

      {/* Salida — región viva para lectores de pantalla */}
      <div
        ref={scrollRef}
        aria-live="polite"
        className="h-72 space-y-0.5 overflow-y-auto p-4 text-foreground"
      >
        {history.map((line, i) =>
          line.type === "command" ? (
            <p key={i} className="text-muted-foreground text-sm mt-2">
              <span className="text-success">$</span> {line.content}
            </p>
          ) : (
            <div key={i} className="pl-2 text-[13px]">
              {line.content}
            </div>
          )
        )}
        {/* Cursor decorativo */}
        <p className="text-success mt-1">
          ➜ <span className="animate-cursor-flicker">|</span>
        </p>
      </div>

      {/* Botones = única entrada */}
      <div className="flex flex-wrap gap-2 border-t border-border p-3">
        {commandButtons.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="rounded-md border border-border px-3 py-1 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}
