"use client";

import { useEffect } from "react";

export function useNavSpy() {
  useEffect(() => {
    const links = [
      ...document.querySelectorAll<HTMLAnchorElement>("nav a"),
    ];
    const bubble = document.querySelector<HTMLElement>("#bub");
    if (!bubble || !links.length) return;

    function moveBubble(activeLink: HTMLAnchorElement | null | undefined) {
      if (!bubble) return;
      if (!activeLink) {
        bubble.style.opacity = "0";
        return;
      }
      links.forEach((link) =>
        link.classList.toggle("on", link === activeLink)
      );
      bubble.style.opacity = "1";
      bubble.style.left = activeLink.offsetLeft + "px";
      bubble.style.width = activeLink.offsetWidth + "px";
    }

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const match = links.find(
            (link) => link.hash === "#" + entry.target.id
          );
          links.forEach((link) => link.classList.remove("on"));
          moveBubble(match);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    document
      .querySelectorAll("section")
      .forEach((section) => sectionObserver.observe(section));

    const onResize = () => {
      const active = document.querySelector<HTMLAnchorElement>("nav a.on");
      if (active) moveBubble(active);
    };

    addEventListener("resize", onResize);

    return () => {
      sectionObserver.disconnect();
      removeEventListener("resize", onResize);
    };
  }, []);
}
