"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const THEME_KEY = "theme";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    if (document.documentElement.classList.contains("dark")) return "dark";
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      try {
        localStorage.setItem(THEME_KEY, "dark");
      } catch (e) {
        /* ignore */
      }
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem(THEME_KEY, "light");
      } catch (e) {
        /* ignore */
      }
    }
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? "🌙" : "🌞"}
    </Button>
  );
}
