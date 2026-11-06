"use client";

import { BOOKING_ALERT } from "@/lib/booking";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Contacto() {
  const openBooking = () => alert(BOOKING_ALERT);

  return (
    <section id="contacto" className="contacto">
      <PhotoSlot
        imageKey="visit"
        label="Fachada de la clínica"
        className="contacto-ph"
        parallax="-.1"
      />
      <div className="cc glass rv">
        <h2>
          <span className="script">Visitanos</span>Te esperamos.
        </h2>
        <dl>
          <div>
            <dt>Dirección</dt>
            <dd>Maipú 1030 · Tandil</dd>
          </div>
          <div>
            <dt>Horario</dt>
            <dd>Lun a Vie 9–20 h · Sáb 9–13 h</dd>
          </div>
          <div>
            <dt>Contacto</dt>
            <dd>123456789 · @centinela.centroveterinario</dd>
          </div>
        </dl>
        <button
          className="pill"
          id="book-contact"
          type="button"
          onClick={openBooking}
        >
          Reservar turno
        </button>
      </div>
    </section>
  );
}
