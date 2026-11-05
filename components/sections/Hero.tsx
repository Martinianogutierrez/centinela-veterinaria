import { IMG } from "@/lib/data";
import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {IMG.video ? (
        <video
          src={IMG.video}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        />
      ) : null}
      <PhotoSlot
        imageKey="hero"
        label="Hero · video o foto 16:9"
        className="hero-ph"
        parallax="-.12"
      />
      <div className="hero-t">
        <h1>Centinela</h1>
        <span className="script">centro veterinario · Tandil</span>
      </div>
      <div className="hint" />
    </section>
  );
}
