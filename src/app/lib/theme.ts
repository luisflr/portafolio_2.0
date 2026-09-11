export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "theme";
export const DEFATULT_THEME: Theme = "dark";

export const themeScript = `
  (function() {
    try{
      var stored = localStorage.getItem("${THEME_STORAGE_KEY}");
      var theme = stored === "light" || stored === "dark" ? stored : "${DEFATULT_THEME}";
      document.documentElement.classList.toggle("dark", theme === "dark");
    } catch (e) {
      document.documentElement.classList.add("dark");
    }
  })();
`;
