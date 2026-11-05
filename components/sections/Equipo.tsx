"use client";

import { useState } from "react";
import { TEAM } from "@/lib/data";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Equipo() {
  const [active, setActive] = useState(0);

  return (
    <section id="equipo" className="equipo">
      <div className="stage" id="stage" data-p=".04">
        {TEAM.map((member, index) => (
          <PhotoSlot
            key={`photo-${member.name}-${index}`}
            imageKey={`t${index}`}
            label={member.name}
            className={index === active ? "on" : ""}
          />
        ))}
      </div>
      <div className="acc glass rv" id="acc">
        <h2>El equipo</h2>
        {TEAM.map((member, index) => (
          <div
            key={`item-${member.name}-${index}`}
            className={`it${index === active ? " on" : ""}`}
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
            <h3>{member.name}</h3>
            <small>{member.role}</small>
            <div>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
