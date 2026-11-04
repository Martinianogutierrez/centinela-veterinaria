"use client";

import { useEffect } from "react";

export function useParallax() {
  useEffect(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>("[data-p]")];
    if (!nodes.length) return;

    let framePending = 0;

    function updateParallax() {
      framePending = 0;
      const viewportHeight = innerHeight;

      nodes.forEach((el) => {
        const parent = el.parentElement;
        if (!parent) return;
        const parentRect = parent.getBoundingClientRect();
        if (parentRect.bottom < -200 || parentRect.top > viewportHeight + 200) {
          return;
        }
        const factor = parseFloat(el.dataset.p || "0");
        const y =
          (parentRect.top + parentRect.height / 2 - viewportHeight / 2) * factor;
        el.style.translate = `0 ${-y}px`;
      });
    }

    const onScroll = () => {
      if (!framePending) framePending = requestAnimationFrame(updateParallax);
    };

    addEventListener("scroll", onScroll, { passive: true });
    updateParallax();

    return () => {
      removeEventListener("scroll", onScroll);
      if (framePending) cancelAnimationFrame(framePending);
    };
  }, []);
}
