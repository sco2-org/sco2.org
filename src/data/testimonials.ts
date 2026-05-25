export interface Testimonial {
  name: string;
  role: string;
  quoteEs: string;
  quoteEn: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dr. Carlos Lopez",
    role: "Investigador – Universidad Nacional",
    quoteEs:
      "El CCC es el evento más importante de la computación en Colombia. Cada edición nos permite compartir avances y generar redes de colaboración invaluables.",
    quoteEn:
      "The CCC is the most important computing event in Colombia. Each edition allows us to share advances and build invaluable collaboration networks.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Ing. Andres Ramirez",
    role: "Estudiante Doctorado – U. del Valle",
    quoteEs:
      "Presentar mi investigación en el CCC fue un punto de inflexión en mi carrera. Las oportunidades de networking son incomparables.",
    quoteEn:
      "Presenting my research at the CCC was a turning point in my career. The networking opportunities are unmatched.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Dra. Laura Martinez",
    role: "Directora TI – Empresa de Tecnología",
    quoteEs:
      "Como profesional de la industria, el CCC me permite mantenerme actualizada con la investigación académica y conectar con talento colombiano de primer nivel.",
    quoteEn:
      "As an industry professional, the CCC allows me to stay up to date with academic research and connect with top-tier Colombian talent.",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Prof. Jorge Hernandez",
    role: "Decano – Universidad del Cauca",
    quoteEs:
      "El congreso refleja la madurez de nuestra comunidad científica. Cartagena de Indias será el escenario perfecto para celebrar 20 ediciones de excelencia.",
    quoteEn:
      "The conference reflects the maturity of our scientific community. Cartagena de Indias will be the perfect setting to celebrate 20 editions of excellence.",
    avatar: "https://i.pravatar.cc/150?img=60",
  },
  {
    name: "Dra. Diana Valencia",
    role: "Investigadora IA – Colciencias",
    quoteEs:
      "La calidad de los artículos y la diversidad de temas hacen del CCC un evento imperdible para cualquier profesional de la computación en Latinoamérica.",
    quoteEn:
      "The quality of the papers and the diversity of topics make the CCC an unmissable event for any computing professional in Latin America.",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];
