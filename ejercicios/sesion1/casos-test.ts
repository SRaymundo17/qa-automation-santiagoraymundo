type Prioridad = "alta" | "media" | "baja";

interface CasoPrueba {
  id: number;
  titulo: string;
  prioridad: Prioridad;
  ejecutado: boolean;
}

const casos: CasoPrueba[] = [
  { id: 1, titulo: "Login válido", prioridad: "alta", ejecutado: false },
  { id: 2, titulo: "Compra con descuento", prioridad: "media", ejecutado: true },
  { id: 3, titulo: "Recuperar contraseña", prioridad: "alta", ejecutado: false },
  { id: 4, titulo: "Cambio de idioma", prioridad: "baja", ejecutado: true },
  { id: 5, titulo: "Agregar producto al carrito", prioridad: "media", ejecutado: false },
  { id: 6, titulo: "Cerrar sesión", prioridad: "baja", ejecutado: true }
];

function contarPorPrioridad(casos: CasoPrueba[]): Record<Prioridad, number> {
  const resultado: Record<Prioridad, number> = {
    alta: 0,
    media: 0,
    baja: 0
  };

  for (const caso of casos) {
    resultado[caso.prioridad] += 1;
  }

  return resultado;
}

function listarPendientes(casos: CasoPrueba[]): CasoPrueba[] {
  return casos.filter((caso) => !caso.ejecutado);
}

const formatearCaso = (caso: CasoPrueba): string => {
  const estado = caso.ejecutado ? "Ejecutado" : "Pendiente";
  return `#${caso.id} - ${caso.titulo} (${caso.prioridad}) - ${estado}`;
};

console.log("Conteo por prioridad:", contarPorPrioridad(casos));
console.log("Casos pendientes:", listarPendientes(casos));

casos.forEach((caso) => {
  console.log(formatearCaso(caso));
});
