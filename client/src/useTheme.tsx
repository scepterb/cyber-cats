import {useEffect, useState } from "react";

type Theme = "light" | "dark";
const getSystem = (): Theme =>
    window.matchMedia("prefers-color-scheme: dark").matches ? "dark" : "light";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => 
    (localStorage.getItem("theme") as Theme) || getSystem()
  );

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme])

  const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));
  return { theme, toggle, setTheme };
}