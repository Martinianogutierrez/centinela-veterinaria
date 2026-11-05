"use client";

import { useState } from "react";
import { SERV } from "@/lib/data";
import PhotoSlot from "@/components/ui/PhotoSlot";
import type { CarouselApi } from "@/hooks/useCarousel";

type EspecialidadesProps = {
  carousel: CarouselApi;
};

export default function Especialidades({ carousel }: EspecialidadesProps) {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <section
      id="especializaciones"
      className="overflow-hidden bg-bg2 pt-[14vh] pb-[16vh]"
    >
      <div className="hd flex flex-wrap items-end justify-between gap-5 px-[6vw] pb-[5vh]">
        <h2 className="rv text-[clamp(40px,7vw,110px)] leading-[0.95] font-extrabold tracking-[-0.05em]">
          <span className="script block text-[0.7em] text-blue">nuestras</span>
          Especializaciones
        </h2>
        <p className="text-[13px] tracking-[0.15em] text-mute uppercase">
          Arrastrá →
        </p>
      </div>
      <div
        className="track flex cursor-grab gap-[22px] overflow-x-auto px-[6vw] pb-5 snap-x snap-proximity [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        id="track"
      >
        {SERV.map((service, index) => {
          const isOpen = !!open[index];
          return (
            <button
              key={service.title}
              className="group relative h-[min(66vh,560px)] w-[min(78vw,380px)] flex-none cursor-pointer snap-center overflow-hidden rounded-[34px] border-0 text-left font-[inherit] text-white shadow-sh transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2.5"
              type="button"
              onClick={() => {
                if (carousel.isDragging()) return;
                setOpen((prev) => ({
                  ...prev,
                  [index]: !prev[index],
                }));
              }}
            >
              <PhotoSlot
                imageKey={`s${index}`}
                label={service.title}
                className="absolute inset-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-110"
              />
              <span
                className={`plus glass absolute top-5 right-5 z-[3] grid h-11 w-11 place-items-center rounded-full transition-transform duration-500 ${
                  isOpen ? "rotate-[135deg]" : "group-hover:rotate-[135deg]"
                }`}
              />
              <h3
                className={`absolute bottom-[26px] left-[26px] z-[2] text-[26px] font-semibold tracking-[-0.02em] [text-shadow:0_2px_18px_rgba(0,0,0,0.4)] transition-opacity duration-[400ms] ${
                  isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                }`}
              >
                {service.title}
              </h3>
              <div
                className={`lay glass absolute inset-x-3.5 bottom-3.5 z-[2] rounded-[26px] bg-white/20 p-6 transition-all duration-[600ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                }`}
              >
                <h4 className="mb-2 text-[22px]">{service.title}</h4>
                <p className="text-sm leading-[1.55] opacity-[0.92]">
                  {service.description}
                </p>
                <u className="mt-3.5 block text-xs tracking-[0.14em] uppercase">
                  Saber más →
                </u>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
