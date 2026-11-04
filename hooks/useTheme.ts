"use client";

import { useEffect } from "react";

function systemTheme(): "dark" | "light" {
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  useEffect(() => {
    const root = document.documentElement;

    if (!root.dataset.theme) {
      root.dataset.theme = systemTheme();
    }

    const toggle = document.querySelector<HTMLElement>("#tg");
    if (!toggle) return;

    const onClick = () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    };

    toggle.addEventListener("click", onClick);
    return () => toggle.removeEventListener("click", onClick);
  }, []);
}
