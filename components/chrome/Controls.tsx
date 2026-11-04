"use client";

import { BOOKING_ALERT } from "@/lib/booking";

export default function Controls() {
  const openBooking = () => alert(BOOKING_ALERT);

  return (
    <div className="ctrl">
      <button
        className="pill glass"
        id="tg"
        type="button"
        aria-label="Cambiar modo claro/oscuro"
      >
        <i />
      </button>
      <button className="pill glass" id="book" type="button" onClick={openBooking}>
        Reservar turno&nbsp;<span>→</span>
      </button>
    </div>
  );
}
