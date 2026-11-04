"use client";

import { useEffect } from "react";

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = prefersDark ? "dark" : "light";

    const toggle = document.querySelector<HTMLElement>("#tg");
    if (!toggle) return;

    const onClick = () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    };

    toggle.addEventListener("click", onClick);
    return () => toggle.removeEventListener("click", onClick);
  }, []);
}
