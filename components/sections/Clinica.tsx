import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Clinica() {
  return (
    <section
      id="clinica"
      className="min-h-[150vh] overflow-hidden px-[6vw] py-[22vh]"
    >
      <h2 className="rv relative z-[3] max-w-[11em] text-[clamp(34px,6.4vw,100px)] leading-[1.02] font-light tracking-[-0.04em]">
        Un lugar <b className="font-extrabold">pensado</b> para que{" "}
        <em className="text-blue not-italic">ellos</em> se sientan{" "}
        <b className="font-extrabold">bien.</b>
      </h2>
      <PhotoSlot
        imageKey="c1"
        label="Perro · retrato"
        className="fl f1 absolute top-[12vh] right-[8vw] h-[34vw] w-[26vw] rounded-[999px_999px_28px_28px] shadow-sh max-[820px]:h-[56vw] max-[820px]:w-[44vw]"
        parallax=".18"
      />
      <PhotoSlot
        imageKey="c2"
        label="Consultorio"
        className="fl f2 absolute top-[80vh] left-[10vw] h-[16vw] w-[22vw] rounded-[28px] shadow-sh max-[820px]:h-[26vw] max-[820px]:w-[36vw]"
        parallax="-.1"
      />
      <PhotoSlot
        imageKey="c3"
        label="Gato · detalle"
        className="fl f3 absolute top-[96vh] right-[26vw] h-[24vw] w-[18vw] rounded-[28px] shadow-sh max-[820px]:right-[6vw] max-[820px]:h-[40vw] max-[820px]:w-[30vw]"
        parallax=".3"
      />
      <div
        className="chip glass chip--a absolute top-[62vh] right-[30vw] z-[4] animate-bob rounded-full px-5 py-3 text-[13px] font-semibold"
        data-p=".5"
      >
        Atención con calma
      </div>
      <div
        className="chip glass chip--b absolute top-[150vh] left-[30vw] z-[4] animate-bob rounded-full px-5 py-3 text-[13px] font-semibold [animation-delay:-3s]"
        data-p="-.3"
      >
        Tandil, Buenos Aires
      </div>
      <div
        className="note glass rv absolute top-[calc(100vh+18vh)] left-[6vw] z-[4] max-w-[340px] rounded-[24px] px-[26px] py-[22px] text-[15px] leading-[1.6] text-mute max-[820px]:top-[calc(100vh+30vh)]"
        data-p=".08"
      >
        <b className="mb-1.5 block text-xl text-ink">Medicina cercana.</b>
        Cuidamos a cada paciente con tiempo, tecnología y mucho cariño.
      </div>
    </section>
  );
}
