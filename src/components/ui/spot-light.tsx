"use client";

import { useEffect, useRef } from "react";

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // reduced-motion: sin spotlight. Un resplandor persiguiendo el cursor
    // es justo el tipo de movimiento que molesta a quien lo desactiva.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Solo dispositivos con puntero fino (mouse). En touch no hay cursor que seguir.
    if (!window.matchMedia("(pointer: fine)").matches) return;

    function handleMove(e: MouseEvent) {
      const el = ref.current;
      if (!el) return;
      // Escribimos la posición en variables CSS. NO usamos estado de React:
      // un setState por cada pixel de movimiento mataría el rendimiento.
      el.style.setProperty("--x", `${e.clientX}px`);
      el.style.setProperty("--y", `${e.clientY}px`);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 transition-opacity"
      style={{
        background:
          "radial-gradient(1000px circle at var(--x) var(--y), color-mix(in srgb, var(--accent) 10%, transparent), transparent 40%)",
      }}
    />
  );
}
