"use client";

import { BOOKING_ALERT } from "@/lib/booking";

const pill =
  "h-[46px] rounded-full flex items-center justify-center text-ink font-semibold text-[13px] tracking-[0.03em] cursor-pointer border border-gb transition-[transform,background] duration-300 hover:-translate-y-0.5 hover:scale-[1.03]";

export default function Controls() {
  const openBooking = () => alert(BOOKING_ALERT);

  return (
    <div className="fixed top-[calc(18px+env(safe-area-inset-top,0px))] right-[18px] z-50 flex gap-2.5">
      <button
        className={`pill glass relative w-[46px] ${pill}`}
        id="tg"
        type="button"
        aria-label="Cambiar modo claro/oscuro"
      >
        <i />
      </button>
      <button
        className={`pill glass group ${pill} border-transparent bg-ink px-5 text-bg backdrop-blur-[14px] max-[820px]:px-3.5`}
        id="book"
        type="button"
        onClick={openBooking}
      >
        Reservar turno&nbsp;
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-[3px]">
          →
        </span>
      </button>
    </div>
  );
}
