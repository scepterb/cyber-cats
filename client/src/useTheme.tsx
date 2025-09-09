import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const getSystem = (): Theme =>
    window.matchMedia("prefers-color-scheme: dark").matches ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => 
    (localStorage.getItem("theme") as Theme) || getSystem()
    // uses system preference if no theme is found in local storage 
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);     // store theme in local storage
  }, [theme])

  const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));
  return { theme, toggle, setTheme };
}