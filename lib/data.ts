export const IMG: Record<string, string> = {
  hero: "/assets/veterinarian-check-ing-puppy-s-health-2.jpg",
  video: "",
  c1: "",
  c2: "",
  c3: "",
  visit: "",
  s0: "/assets/clinica.jpg",
  s1: "/assets/cirugia.jpeg",
  s2: "",
  s3: "",
  s4: "",
  s5: "",
  t0: "",
  t1: "/assets/maria_clausse.jpg",
  t2: "",
  t3: "",
};

export type Service = {
  title: string;
  description: string;
};

export const SERV: readonly Service[] = [
  {
    title: "Clínica general",
    description:
      "Controles, vacunación y seguimiento integral para cada etapa de la vida.",
  },
  {
    title: "Cirugía",
    description:
      "Quirófano equipado y monitoreo continuo para procedimientos seguros.",
  },
  {
    title: "Diagnóstico por imágenes",
    description: "Ecografía y radiología con resultados en el momento.",
  },
  {
    title: "Medicina felina",
    description: "Un espacio tranquilo y pensado para gatos.",
  },
  {
    title: "Laboratorio",
    description: "Análisis clínicos para decisiones rápidas y precisas.",
  },
  {
    title: "Peluquería y bienestar",
    description: "Higiene, cuidado de la piel y estética con paciencia.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const TEAM: readonly TeamMember[] = [
  {
    name: "Dra. Nombre Apellido",
    role: "Directora · Clínica médica",
    bio: "Biografía breve: formación, años de experiencia y el motivo que la llevó a la veterinaria.",
  },
  {
    name: "Dra. Maria Clausse",
    role: "Cirugía",
    bio: "Biografía breve: especialidad, intereses y enfoque con los pacientes y sus familias.",
  },
  {
    name: "Dra. Nombre Apellido",
    role: "Medicina felina",
    bio: "Biografía breve: trayectoria en gatos y cuidado de pacientes sensibles.",
  },
  {
    name: "Dr. Nombre Apellido",
    role: "Diagnóstico por imágenes",
    bio: "Biografía breve: ecografía, radiología y trabajo interdisciplinario.",
  },
];
