# Portalverse Design

## Direction

Archivo interdimensional: una interfaz de expedientes, señales y coordenadas. Evita el catálogo genérico mediante composición técnica, numeración útil y una presencia gráfica firme.

## Color

- Ink `#101d35`: texto, bordes, navegación y fondos de alto contraste.
- Paper `#f4f6ed`: superficie principal.
- Blue `#2758d8`: señal activa y acciones informativas.
- Lime `#b9f43e`: éxito y acción principal.
- Coral `#ff6b5e`: advertencia, peligro y énfasis.

## Typography

Trebuchet MS y fallback sans-serif. Titulares negros, compactos, en mayúsculas. Cuerpo cómodo y directo. Datos cortos con etiquetas pequeñas de alto peso.

## Components

- Bordes sólidos de 2px definen controles, fichas y regiones.
- Tarjetas de personaje: imagen dominante, código de expediente, estado visible, esquina recortada.
- Botón primario lima; peligro coral; navegación activa en tinta.
- Estados remotos ocupan el área de resultados y explican recuperación.
- Modal nativo con encabezado coral y decisiones explícitas.

## Layout & Responsive

Ancho máximo `7xl`, márgenes móviles de 20px. Grids progresivos: 1, 2, 3 y 4 columnas. Navegación colapsable en móvil. Detalle apilado en móvil, dividido en escritorio.

## Motion

Movimiento limitado a portal, loading, elevación de fichas y zoom de imagen. `prefers-reduced-motion` elimina transiciones y animaciones.

## Accessibility

Foco coral visible, HTML semántico, labels reales, iconos con texto o nombre accesible, contraste alto, estados mediante texto además de color.
