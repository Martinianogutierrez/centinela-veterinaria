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
    <section id="especializaciones" className="especializaciones">
      <div className="hd">
        <h2 className="rv">
          <span className="script">Nuestras</span>Especializaciones
        </h2>
        <p>Arrastrá →</p>
      </div>
      <div className="track" id="track">
        {SERV.map((service, index) => {
          const isOpen = !!open[index];
          return (
            <button
              key={service.title}
              className={`card${isOpen ? " open" : ""}`}
              type="button"
              onClick={() => {
                if (carousel.isDragging()) return;
                setOpen((prev) => ({
                  ...prev,
                  [index]: !prev[index],
                }));
              }}
            >
              <PhotoSlot imageKey={`s${index}`} label={service.title} />
              <span className="plus glass" />
              <h3>{service.title}</h3>
              <div className="lay glass">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <u>Saber más</u>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
