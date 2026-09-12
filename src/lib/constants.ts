export const SECTIONS = [
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "experiencia", label: "Experiencia Laboral" },
  { id: "proyectos", label: "Proyectos Personales" },
  { id: "stack", label: "Stack tecnológico" },
];

export const SECTION_IDS = SECTIONS.map((section) => section.id);

export const baseUrl = process.env.BACKEND_URL;
