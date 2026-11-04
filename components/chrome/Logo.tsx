import Image from "next/image";

export default function Logo() {
  return (
    <a className="logo glass" href="#inicio" aria-label="Centinela Veterinaria">
      <Image
        src="/assets/logo_centinela.jpg"
        alt="Centinela"
        width={64}
        height={64}
      />
    </a>
  );
}
