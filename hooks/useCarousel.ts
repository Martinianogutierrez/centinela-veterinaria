"use client";

import { useEffect, useRef } from "react";

export type CarouselApi = {
  isDragging: () => boolean;
};

export function useCarousel(): CarouselApi {
  const draggingRef = useRef(false);

  useEffect(() => {
    const track = document.querySelector<HTMLElement>("#track");
    if (!track) return;

    let pointerDown = false;
    let startX = 0;
    let startScroll = 0;

    const onPointerDown = (event: PointerEvent) => {
      pointerDown = true;
      draggingRef.current = false;
      startX = event.clientX;
      startScroll = track.scrollLeft;
    };

    const onPointerUp = () => {
      pointerDown = false;
      setTimeout(() => {
        draggingRef.current = false;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!pointerDown) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 5) draggingRef.current = true;
      track.scrollLeft = startScroll - delta;
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointermove", onPointerMove);

    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return {
    isDragging: () => draggingRef.current,
  };
}
