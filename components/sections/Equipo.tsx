"use client";

import { useState } from "react";
import { TEAM } from "@/lib/data";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Equipo() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="equipo"
      className="grid min-h-screen grid-cols-[1.2fr_1fr] items-center gap-[5vw] px-[6vw] py-[14vh] max-[820px]:grid-cols-1"
    >
      <div
        className="stage relative h-[78vh] overflow-hidden rounded-[44px] shadow-sh max-[820px]:h-[50vh]"
        id="stage"
        data-p=".04"
      >
        {TEAM.map((member, index) => (
          <PhotoSlot
            key={`photo-${member.name}-${index}`}
            imageKey={`t${index}`}
            label={member.name}
            className={`absolute inset-0 [transition:opacity_0.9s,transform_1.6s_cubic-bezier(0.2,0.8,0.2,1)] ${
              index === active
                ? "scale-100 opacity-100"
                : "scale-[1.12] opacity-0"
            }`}
          />
        ))}
      </div>
      <div className="acc glass rv rounded-[34px] p-3.5" id="acc">
        <h2 className="px-[18px] pt-[18px] pb-2 text-[clamp(30px,4vw,54px)] font-extrabold tracking-[-0.04em]">
          El equipo
        </h2>
        {TEAM.map((member, index) => (
          <div
            key={`item-${member.name}-${index}`}
            className={`it cursor-pointer rounded-[22px] p-[18px] transition-colors duration-[400ms] hover:bg-white/18 ${
              index === active ? "on bg-white/35" : ""
            }`}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setActive(index);
              }
            }}
            role="button"
            tabIndex={0}
          >
            <h3 className="flex justify-between text-[19px] font-semibold">
              {member.name}
            </h3>
            <small className="text-xs font-semibold tracking-[0.1em] text-blue uppercase">
              {member.role}
            </small>
            <div>
              <p className="text-[15px] leading-[1.6] text-mute">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
