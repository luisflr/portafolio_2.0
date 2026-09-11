"use client";

import { getTheme, setTheme, useTheme } from "./use-theme";

export function useThemeTransition() {
  const isDark = useTheme() === "dark";

  function handleToggle(event: React.MouseEvent<HTMLButtonElement>) {
    const { top, left, width, height } =
      event.currentTarget.getBoundingClientRect();
    toggleWithTransition({ x: left + width / 2, y: top + height / 2 });
  }

  function toggleWithTransition(origin?: { x: number; y: number }) {
    const next = getTheme() === "dark" ? "light" : "dark";

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!document.startViewTransition || prefersReducedMotion || !origin) {
      setTheme(next);
      return;
    }

    const { x, y } = origin;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => setTheme(next));

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 450,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }

  return { isDark, handleToggle };
}
