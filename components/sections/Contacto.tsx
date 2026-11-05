"use client";

import { BOOKING_ALERT } from "@/lib/booking";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Contacto() {
  const openBooking = () => alert(BOOKING_ALERT);

  return (
    <section
      id="contacto"
      className="relative grid h-[110vh] place-items-center overflow-hidden px-[6vw]"
    >
      <PhotoSlot
        imageKey="visit"
        label="Fachada de la clínica"
        className="absolute inset-x-0 -inset-y-[10%]"
        parallax="-.1"
      />
      <div className="cc glass rv relative z-[2] grid w-[min(880px,100%)] grid-cols-[1.2fr_1fr] gap-[30px] rounded-[44px] p-[clamp(28px,5vw,60px)] text-ink max-[820px]:grid-cols-1">
        <h2 className="text-[clamp(34px,5vw,64px)] leading-none font-extrabold tracking-[-0.04em]">
          <span className="script block text-[0.8em] text-blue">visitanos</span>
          Te esperamos.
        </h2>
        <dl className="grid gap-3.5 text-[15px]">
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.18em] text-blue uppercase">
              Dirección
            </dt>
            <dd className="mt-0.5">Maipú 1030 · Tandil</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.18em] text-blue uppercase">
              Horario
            </dt>
            <dd className="mt-0.5">Lun a Vie 9–20 h · Sáb 9–13 h</dd>
          </div>
          <div>
            <dt className="text-[11px] font-semibold tracking-[0.18em] text-blue uppercase">
              Contacto
            </dt>
            <dd className="mt-0.5">123456789 · @centinela.centroveterinario</dd>
          </div>
        </dl>
        <button
          className="pill col-span-full flex h-14 cursor-pointer items-center justify-center rounded-full border-transparent bg-ink text-[15px] font-semibold tracking-[0.03em] text-bg transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:scale-[1.03]"
          id="book-contact"
          type="button"
          onClick={openBooking}
        >
          Reservar turno →
        </button>
      </div>
    </section>
  );
}
