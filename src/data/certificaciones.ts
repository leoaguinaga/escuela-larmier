export type EstadoCertificado = "vigente" | "revocado";

export interface Certificado {
  maquina: string;
  codigo: string;
  fecha: string;
  instructor: string;
  horasPractica: number;
  estado: EstadoCertificado;
}

export interface PerfilOperador {
  nombre: string;
  dni: string;
  egresado: string;
  certificados: Certificado[];
}

// Datos de demostración: aún no existe el backend (Supabase) de certificaciones.
// Cada código de certificado de un operador apunta a su mismo perfil completo,
// tal como lo hará la búsqueda real más adelante.
const carlos: PerfilOperador = {
  nombre: "Carlos Mendoza Ruiz",
  dni: "4*******2",
  egresado: "2025",
  certificados: [
    { maquina: "Excavadora hidráulica", codigo: "LAR-2026-000347", fecha: "12 mar 2026", instructor: "Ing. Jorge Salazar", horasPractica: 70, estado: "vigente" },
    { maquina: "Retroexcavadora", codigo: "LAR-2026-000348", fecha: "12 mar 2026", instructor: "Ing. Jorge Salazar", horasPractica: 80, estado: "vigente" },
  ],
};

const luis: PerfilOperador = {
  nombre: "Luis Fernández Paredes",
  dni: "7*******0",
  egresado: "2024",
  certificados: [
    { maquina: "Cargador frontal", codigo: "LAR-2025-000112", fecha: "08 ago 2025", instructor: "Ing. Rosa Delgado", horasPractica: 80, estado: "revocado" },
  ],
};

export const demoCertificateIndex: Record<string, PerfilOperador> = {
  "LAR-2026-000347": carlos,
  "LAR-2026-000348": carlos,
  "LAR-2025-000112": luis,
};

export function buscarPorCodigo(codigo: string): PerfilOperador | undefined {
  return demoCertificateIndex[codigo.trim().toUpperCase()];
}
