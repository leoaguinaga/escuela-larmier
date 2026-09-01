export type CourseLevel = "operacion" | "mantenimiento";

export interface Course {
  name: string;
  description: string;
  category: "movimiento" | "vialidad" | "mineria";
  categoryLabel: string;
  level: CourseLevel;
  duration: number;
  practice: number;
  image: string;
  imagePosition?: string;
  icon: string;
  badge?: string;
  badgeTone?: "yellow" | "navy";
}

export const courses: Course[] = [
  {
    name: "Excavadora hidráulica",
    description: "Domina excavación, zanjado, carguío y maniobras seguras en frentes de trabajo reales.",
    category: "movimiento",
    categoryLabel: "Movimiento de tierras",
    level: "operacion",
    duration: 120,
    practice: 70,
    image: "/images/courses/excavadora.jpg",
    icon: "construction",
    badge: "Alta demanda",
    badgeTone: "yellow",
  },
  {
    name: "Retroexcavadora",
    description: "Aprende una operación versátil para carga, excavación, obras urbanas y mantenimiento vial.",
    category: "movimiento",
    categoryLabel: "Movimiento de tierras",
    level: "operacion",
    duration: 100,
    practice: 80,
    image: "/images/courses/retroexcavadora.jpg",
    icon: "engineering",
  },
  {
    name: "Motoniveladora",
    description: "Ejecuta nivelación, acabado superficial, conformación de vías y control de pendientes.",
    category: "vialidad",
    categoryLabel: "Vialidad",
    level: "mantenimiento",
    duration: 150,
    practice: 75,
    image: "/images/courses/motoniveladora.jpg",
    icon: "architecture",
    badge: "Nuevo módulo",
    badgeTone: "navy",
  },
  {
    name: "Cargador frontal",
    description: "Practica carga, acarreo corto, abastecimiento y maniobras eficientes en patios de operación.",
    category: "mineria",
    categoryLabel: "Minería y canteras",
    level: "operacion",
    duration: 110,
    practice: 80,
    image: "/images/courses/cargador-frontal.jpg",
    icon: "precision_manufacturing",
  },
  {
    name: "Rodillo compactador",
    description: "Controla compactación de suelos, número de pasadas y criterios técnicos de acabado.",
    category: "vialidad",
    categoryLabel: "Vialidad",
    level: "mantenimiento",
    duration: 90,
    practice: 70,
    image: "/images/courses/rodillo-compactador.jpg",
    icon: "add_road",
  },
  {
    name: "Bulldozer (tractor oruga)",
    description: "Desarrolla empuje, corte y extendido de material para operar con control en terrenos exigentes.",
    category: "movimiento",
    categoryLabel: "Movimiento de tierras",
    level: "mantenimiento",
    duration: 130,
    practice: 75,
    image: "/images/courses/bulldozer.jpg",
    icon: "terrain",
  },
];
