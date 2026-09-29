# Corrección — Sesión 1: TypeScript sintaxis base

**Archivo corregido:** `ejercicios/sesion1/casos-test.ts`
**Resultado:** ✅ Aprobado. Puntos 1 a 8 completos; falta el bonus (punto 9).

## Verificación

- `npx tsx casos-test.ts` → corre sin errores.
- `npx tsc --noEmit` (con `strict: true`) → sin errores de tipos.
  Ojo: `tsx` ejecuta pero **no** chequea tipos; para confirmar el punto 7 hay que usar `tsc`.

## Detalle por punto

| # | Punto | Estado | Comentario |
|---|-------|--------|------------|
| 1 | Crear `casos-test.ts` en `ejercicios/sesion1` | ✅ | |
| 2 | Array de ≥ 5 casos con `id`, `titulo`, `prioridad`, `ejecutado` | ✅ | 6 casos. Buen uso de `type Prioridad` (unión de literales) + `interface CasoPrueba`. |
| 3 | `contarPorPrioridad(casos)` | ✅ | Recorre con `for...of` y devuelve `{ alta: 2, media: 2, baja: 2 }`. `Record<Prioridad, number>` es el tipo ideal. |
| 4 | `listarPendientes(casos)` | ✅ | `filter` correcto; devuelve los casos 1, 3 y 5. |
| 5 | Arrow function `formatearCaso(caso)` | ✅ | Formato idéntico al pedido: `#1 - Login válido (alta) - Pendiente`. |
| 6 | `forEach` imprimiendo los casos formateados | ✅ | |
| 7 | Correr con `npx tsx` sin errores de tipos | ✅ | |
| 8 | Commit + push en rama nueva + PR | ✅ | PR #1 desde `ejercicio-1`, mergeado a `main`. |

## Observaciones menores

- `package.json`, `package-lock.json`, `tsconfig.json` y `.gitignore` no estaban commiteados. Se suben en esta rama.
- `tsx` no está en `devDependencies`; se puede agregar con `npm i -D tsx` para no descargarlo en cada `npx`.