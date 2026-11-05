import PhotoSlot from "@/components/ui/PhotoSlot";

export default function Clinica() {
  return (
    <section id="clinica" className="clinica">
      <h2 className="rv">
        Un lugar <b>pensado</b> para que <em>ellos</em> se sientan <b>bien.</b>
      </h2>
      <PhotoSlot
        imageKey="c1"
        label="Perro · retrato"
        className="fl f1"
        parallax=".18"
      />
      <PhotoSlot
        imageKey="c2"
        label="Consultorio"
        className="fl f2"
        parallax="-.1"
      />
      <PhotoSlot
        imageKey="c3"
        label="Gato · detalle"
        className="fl f3"
        parallax=".3"
      />
      <div className="chip glass chip--a" data-p=".5">
        Atención con calma
      </div>
      <div className="chip glass chip--b" data-p="-.3">
        Tandil, Buenos Aires
      </div>
      <div className="note glass rv" data-p=".08">
        <b>Medicina cercana.</b>Cuidamos a cada paciente con tiempo, tecnología y
        mucho cariño.
      </div>
    </section>
  );
}
