import { createContext, useContext, useEffect, useState } from "react";

const ThemeCtx = createContext({ theme: "dark", toggle: () => {} });
const themeOrder = ["dark", "light", "ocean", "sunset"];

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" && localStorage.getItem("evanoo-theme");
    const initial =
      stored && themeOrder.includes(stored)
        ? stored
        : window.matchMedia?.("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    setTheme(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "theme-ocean", "theme-sunset");
    if (theme === "dark") root.classList.add("dark");
    if (theme === "ocean") root.classList.add("theme-ocean");
    if (theme === "sunset") root.classList.add("theme-sunset");
    localStorage.setItem("evanoo-theme", theme);
  }, [theme]);

  return (
    <ThemeCtx.Provider
      value={{
        theme,
        toggle: () =>
          setTheme(
            (t) => themeOrder[(themeOrder.indexOf(t) + 1) % themeOrder.length],
          ),
      }}
    >
      {children}
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
