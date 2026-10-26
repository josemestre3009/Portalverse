# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite + React + TypeScript, React Router y Tailwind CSS. Despliegue objetivo: Vercel.

## Users

Estudiantes y seguidores de Rick and Morty que quieren descubrir personajes, consultar sus datos y conservar favoritos.

## Product Purpose

Portalverse permite explorar personajes de Rick and Morty, buscarlos, filtrarlos, abrir su detalle y guardar favoritos. El éxito exige una SPA funcional, accesible y responsive que cumpla la rúbrica académica.

## Positioning

Exploración centrada en personajes mediante la API oficial de Rick and Morty, con favoritos persistentes y estados de interfaz completos.

## Operating Context

Uso web en móvil y escritorio. Navegación entre inicio, exploración, detalle, favoritos y contacto.

## Capabilities and Constraints

- Datos reales desde `https://rickandmortyapi.com/api`.
- Fetch separado para lista y personaje por ID.
- Búsqueda y filtros en tiempo real.
- Favoritos compartidos entre rutas y persistidos en `localStorage`.
- Formulario controlado con validación.
- Toasts de éxito, error e información con cierre automático.
- Confirmación mediante `<dialog>`, `useRef` y `showModal()`.
- Un dark pattern intencional, identificado y explicado en código.
- Estados loading, error y empty visibles.
- Mínimo ocho componentes `.tsx` separados.
- Sin datos de personajes hardcodeados.

## Brand Commitments

Nombre: Portalverse. Español como idioma principal. La referencia visual define vistas, no identidad; los colores deben diferenciarse.

## Evidence on Hand

- Especificación: `05-proyecto-01.md`.
- Referencia de vistas: `proyecto-01.png`.
- No existen testimonios, métricas comerciales ni contenido propietario; no deben inventarse.

## Product Principles

- Funcionalidad evaluable antes que complejidad arquitectónica.
- El contenido remoto siempre comunica su estado.
- Acciones importantes ofrecen respuesta y confirmación clara.
- Navegación, formularios y controles funcionan con teclado y lector de pantalla.
- La experiencia mantiene continuidad entre rutas y recargas.

## Accessibility & Inclusion

HTML semántico, textos alternativos, etiquetas asociadas, foco visible, nombres accesibles, contraste legible y respeto por movimiento reducido.
