export default function Nav() {
  return (
    <nav
      className="glass fixed top-[calc(18px+env(safe-area-inset-top,0px))] left-1/2 z-50 flex -translate-x-1/2 rounded-full p-[5px] max-[820px]:top-[calc(74px+env(safe-area-inset-top,0px))]"
      id="nav"
    >
      <span
        id="bub"
        className="absolute top-[5px] bottom-[5px] z-[1] rounded-full bg-white/55 opacity-0 shadow-[0_2px_12px_rgba(31,95,153,0.3),inset_0_1px_0_#fff] transition-[left,width,opacity] duration-[550ms] ease-[cubic-bezier(0.7,-0.3,0.3,1.3)] [transition-property:left,width,opacity] [transition-duration:550ms,550ms,400ms] [transition-timing-function:cubic-bezier(0.7,-0.3,0.3,1.3),cubic-bezier(0.7,-0.3,0.3,1.3),ease]"
      />
      <a
        className="relative z-[2] px-[18px] py-[11px] text-[13px] font-semibold text-ink no-underline opacity-70 transition-opacity duration-300 hover:opacity-100 max-[820px]:px-[9px] max-[820px]:py-2.5 max-[820px]:text-[11px]"
        href="#especializaciones"
      >
        Especializaciones
      </a>
      <a
        className="relative z-[2] px-[18px] py-[11px] text-[13px] font-semibold text-ink no-underline opacity-70 transition-opacity duration-300 hover:opacity-100 max-[820px]:px-[9px] max-[820px]:py-2.5 max-[820px]:text-[11px]"
        href="#equipo"
      >
        Equipo
      </a>
      <a
        className="relative z-[2] px-[18px] py-[11px] text-[13px] font-semibold text-ink no-underline opacity-70 transition-opacity duration-300 hover:opacity-100 max-[820px]:px-[9px] max-[820px]:py-2.5 max-[820px]:text-[11px]"
        href="#contacto"
      >
        Contacto
      </a>
    </nav>
  );
}
