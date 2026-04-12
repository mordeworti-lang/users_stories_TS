# UI Components Library

Libreria de componentes React reutilizables con tipado estricto en TypeScript y estilos Tailwind CSS.

---

## Copyright y Autoria

**Desarrollador:** Jhon Stiven Zuluaga Jaramillo  
**Copyright (c) 2024 - Todos los derechos reservados**

Este software es propiedad intelectual de Jhon Stiven Zuluaga Jaramillo.  
Queda prohibida la reproduccion total o parcial, distribucion, modificacion o uso comercial sin autorizacion expresa y por escrito del autor.

Para consultas de licenciamiento: [jstivenzuluaga@gmail.com]

---

## Tabla de Contenidos

- [Instalacion](#instalacion)
- [Arquitectura](#arquitectura)
- [Componentes](#componentes)
  - [Button](#button)
  - [Badge](#badge)
  - [Card](#card)
- [Desarrollo](#desarrollo)
- [Construccion](#construccion)
- [Principios de Diseno](#principios-de-diseno)
- [Licencia](#licencia)

---

## Instalacion

### Requisitos Previos

- Node.js >= 18.0.0
- npm >= 9.0.0 o yarn >= 1.22.0

### Pasos de Instalacion

```bash
# Clonar el repositorio
git clone <repository-url>

# Navegar al directorio
cd ui-components

# Instalar dependencias
npm install
```

---

## Arquitectura

El proyecto implementa una arquitectura modular con separacion de responsabilidades y cero carpetas vacias:

```
src/
├── components/
│   ├── ui/                    # Componentes atómicos (primitivos)
│   │   ├── Button.tsx         # 35 líneas, 4 funciones
│   │   ├── Badge.tsx          # 13 líneas, 1 función
│   │   └── index.ts           # Barrel exports
│   │
│   └── Card/                  # Componente complejo (modularizado)
│       ├── Card.tsx           # 12 líneas
│       ├── CardImage.tsx      # 4 líneas
│       ├── CardBadgeList.tsx  # 10 líneas
│       ├── CardHeader.tsx     # 6 líneas
│       ├── CardDescription.tsx # 6 líneas
│       ├── CardFooter.tsx     # 8 líneas
│       └── index.ts
│
├── constants/
│   ├── styles.ts              # Design tokens (42 líneas)
│   └── demo.ts                # Datos de demostración
│
├── types/
│   └── ui.ts                  # Tipos centralizados (58 líneas)
│
├── utils/
│   └── styles.ts              # Utilidades de estilos (32 líneas)
│
├── views/
│   └── App.tsx                # Vista principal (85 líneas, 5 funciones)
│
├── index.css                  # Tailwind directives
└── main.tsx                   # Entry point
```

### Convenciones

- **Maximo 15 lineas por funcion**: Toda funcion cumple esta regla
- **Single Responsibility**: Cada archivo tiene una responsabilidad unica
- **Zero Waste**: Sin carpetas vacias ni archivos no utilizados
- **Centralized Types**: Todos los tipos en `types/ui.ts`

---

## Componentes

### Button

Componente de accion interactiva con multiples variantes visuales.

#### Props

| Propiedad | Tipo | Por Defecto | Descripcion |
|-----------|------|-------------|-------------|
| text | `string` | Requerido | Texto del boton |
| variant | `'primary' \| 'secondary' \| 'danger'` | `'primary'` | Variante visual |
| size | `'sm' \| 'md' \| 'lg'` | `'md'` | Dimensiones del boton |
| disabled | `boolean` | `false` | Estado deshabilitado |
| loading | `boolean` | `false` | Indicador de carga |
| leftIcon | `ReactNode` | `undefined` | Icono posicionado a la izquierda |
| rightIcon | `ReactNode` | `undefined` | Icono posicionado a la derecha |
| onClick | `() => void` | `undefined` | Handler de evento click |

#### Uso Basico

```tsx
import { Button } from '@/components/ui'

// Variante primaria
<Button text="Guardar Cambios" variant="primary" />

// Variante de peligro con handler
<Button 
  text="Eliminar" 
  variant="danger" 
  onClick={handleDelete}
/>

// Estado de carga
<Button text="Procesando" loading />

// Con iconos
<Button 
  text="Descargar" 
  leftIcon={<DownloadIcon />}
  variant="secondary" 
/>
```

---

### Badge

Componente de etiqueta para representacion de estados y categorias.

#### Props

| Propiedad | Tipo | Por Defecto | Descripcion |
|-----------|------|-------------|-------------|
| label | `string` | Requerido | Texto del badge |
| status | `'success' \| 'warning' \| 'info' \| 'error' \| 'neutral'` | `'neutral'` | Color semantico |
| icon | `ReactNode` | `undefined` | Icono opcional |

#### Variantes de Estado

| Estado | Uso Recomendado |
|--------|-----------------|
| `success` | Estados positivos, completados |
| `warning` | Advertencias, pendientes |
| `info` | Informacion general, en progreso |
| `error` | Errores, fallos |
| `neutral` | Estados genericos |

#### Uso Basico

```tsx
import { Badge } from '@/components/ui'

// Badge de exito
<Badge label="Completado" status="success" />

// Badge con icono
<Badge 
  label="En Proceso" 
  status="info" 
  icon={<ClockIcon />}
/>

// Badge neutral
<Badge label="v2.0.0" status="neutral" />
```

---

### Card

Contenedor composable para presentacion de informacion estructurada.

#### Props

| Propiedad | Tipo | Por Defecto | Descripcion |
|-----------|------|-------------|-------------|
| title | `string` | Requerido | Titulo de la tarjeta |
| type | `'green' \| 'white' \| 'black'` | Requerido | Esquema de color de fondo |
| imageUrl | `string` | `undefined` | URL de imagen de cabecera |
| description | `string` | `undefined` | Contenido descriptivo |
| badges | `BadgeProps[]` | `[]` | Array de badges para mostrar |
| footer | `ReactNode` | `undefined` | Contenido del pie (acciones) |

#### Tipos de Card

| Tipo | Caracteristicas |
|------|-----------------|
| `green` | Fondo emerald-50, usado para contenido destacado positivo |
| `white` | Fondo blanco, uso general por defecto |
| `black` | Fondo oscuro, texto claro, contenido premium |

#### Uso Basico

```tsx
import { Card, Button, Badge } from '@/components/ui'

// Card basica con badge
<Card
  title="Proyecto Alpha"
  type="white"
  description="Descripcion del proyecto implementado"
  badges={[{ label: 'En Progreso', status: 'info' }]}
/>

// Card completa con accion
<Card
  title="Dashboard Analytics"
  type="green"
  imageUrl="https://example.com/image.jpg"
  description="Panel de visualizacion de datos"
  badges={[
    { label: 'Completado', status: 'success' },
    { label: 'v2.0', status: 'neutral' }
  ]}
  footer={
    <Button text="Ver Detalles" variant="primary" size="sm" />
  }
/>

// Card oscura
<Card
  title="API Gateway"
  type="black"
  description="Microservicio de enrutamiento"
  badges={[{ label: 'Produccion', status: 'success' }]}
  footer={<Button text="Documentacion" variant="secondary" />}
/>
```

---

## Desarrollo

### Iniciar Servidor de Desarrollo

```bash
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`

### Scripts Disponibles

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo Vite |
| `npm run build` | Compila para produccion |
| `npm run preview` | Previsualiza build de produccion |

---

## Construccion

### Proceso de Build

```bash
# Compilacion TypeScript + Bundle Vite
npm run build
```

Los archivos compilados se generan en el directorio `dist/`.

---

## Principios de Diseno

### Calidad de Codigo

- **TypeScript Strict Mode**: Tipado fuerte sin implicit any
- **Funciones Puras**: Sin side effects, predecibles y testeables
- **Maximo 15 Lineas**: Funciones pequenas con responsabilidad unica
- **Inmutabilidad**: Datos no mutados, patrones funcionales

### Arquitectura de Componentes

- **Encapsulamiento**: Cada componente gestiona su propia logica
- **Composicion**: Componentes complejos construidos de simples
- **Props Interfaces**: Contratos claros via TypeScript
- **Defaults Explicitos**: Valores por defecto documentados

### Estilos

- **Tailwind CSS**: Clases utilitarias para consistencia
- **Design Tokens**: Colores semanticos (success, warning, etc.)
- **Responsive**: Mobile-first approach
- **Dark Mode**: Soporte para temas oscuros donde aplica

---

## Licencia

Este proyecto esta licenciado bajo la Licencia MIT.

Copyright (c) 2024 Jhon Stiven Zuluaga Jaramillo

Consulte el archivo [LICENSE](LICENSE) para mas informacion.

---

<p align="center">
  <strong>Desarrollado por Jhon Stiven Zuluaga Jaramillo</strong>
</p>
<p align="center">
  <sub>Arquitectura limpia. Codigo robusto. Soluciones escalables.</sub>
</p>
