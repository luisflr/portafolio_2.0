"use client";
import { useLayoutEffect } from "react";

export function ScrollToTop() {
  useLayoutEffect(() => {
    const prev = history.scrollRestoration;
    // Le quitamos al navegador el control del scroll en navegación de history.
    // Sin esto, él repone la posición DESPUÉS del paint y le gana a React.
    history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    return () => {
      history.scrollRestoration = prev; // se revive al salir de /proyectos
    };
  }, []);
  return null;
}
