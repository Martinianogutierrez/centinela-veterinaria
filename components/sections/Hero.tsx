import { IMG } from "@/lib/data";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative grid h-screen h-svh place-items-center overflow-hidden text-center text-white"
    >
      {IMG.video ? (
        <video
          src={IMG.video}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <PhotoSlot
        imageKey="hero"
        label="Hero · video o foto 16:9"
        className="absolute inset-x-0 -inset-y-[6%] z-0"
        parallax="-.12"
      />
      <div className="hero-t relative z-[2] px-5">
        <h1 className="animate-up text-[clamp(56px,13vw,190px)] leading-[0.9] font-extrabold tracking-[-0.05em]">
          Centinela
        </h1>
        <span className="script mt-2.5 block animate-up text-[clamp(28px,5vw,64px)] [animation-delay:0.25s]">
          centro veterinario · Tandil
        </span>
      </div>
      <div className="hint absolute bottom-[30px] left-1/2 z-[2] h-11 w-[26px] -translate-x-1/2 rounded-[20px] border-[1.5px] border-white/70" />
    </section>
  );
}
