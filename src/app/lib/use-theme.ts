"use client";

import { useSyncExternalStore } from "react";
import { DEFATULT_THEME, THEME_STORAGE_KEY, type Theme } from "./theme";

const listeners = new Set<() => void>();
let storageBound = false;

function notify() {
  for (const l of listeners) l();
}

function getSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return DEFATULT_THEME;
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  if (!storageBound) {
    storageBound = true;
    window.addEventListener("storage", (e) => {
      if (e.key != THEME_STORAGE_KEY) return;
      const tm: Theme =
        e.newValue === "light" || e.newValue === "dark"
          ? e.newValue
          : DEFATULT_THEME;
      document.documentElement.classList.toggle("dark", tm === "dark");
      notify();
    });
  }

  return () => listeners.delete(listener);
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (e) {}

  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function toggleTheme() {
  console.log("entra", getServerSnapshot());
  setTheme(getSnapshot() === "dark" ? "light" : "dark");
}

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
