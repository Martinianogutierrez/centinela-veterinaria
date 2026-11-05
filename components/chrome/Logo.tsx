import Image from "next/image";

export default function Logo() {
  return (
    <a
      className="logo glass group fixed top-[calc(14px+env(safe-area-inset-top,0px))] left-5 z-50 h-16 w-16 rounded-full p-[3px]"
      href="#inicio"
      aria-label="Centinela Veterinaria"
    >
      <Image
        src="/assets/logo_centinela.jpg"
        alt="Centinela"
        width={64}
        height={64}
        className="block h-full w-full rounded-full transition-transform duration-1000 group-hover:rotate-[360deg]"
      />
    </a>
  );
}
