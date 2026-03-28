# E-Commerce Lite

Proyecto React con TypeScript para demostrar un e-commerce básico con tipado estricto y componentes reutilizables.

## Objetivo

Como desarrollador frontend, crear un proyecto React con TypeScript y definir interfaces de productos y usuarios, para estructurar los datos de un e-commerce y asegurar un tipado estricto, reutilizable y escalable.

## Características

- ✅ React 19.2.4 con TypeScript 4.9.5
- ✅ Interfaces tipadas para Product y User
- ✅ Mock data con 15 productos y 5 usuarios
- ✅ Componentes reutilizables con props tipadas
- ✅ Diseño responsive y premium
- ✅ Sin dependencias innecesarias

## Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ProductCard.tsx # Tarjeta de producto
│   ├── UserCard.tsx    # Tarjeta de usuario
│   └── ProductList.tsx # Listado principal
├── interfaces/          # Definiciones TypeScript
│   └── types.ts        # Interfaces Product, User
├── data/               # Datos mock
│   └── data.ts         # 15 productos, 5 usuarios
├── App.tsx             # Componente principal
├── App.css             # Estilos premium
└── index.tsx           # Punto de entrada
```

## Instalación y Ejecución

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/mordeworti-lang/users_stories_TS.git
   cd users_stories_TS/ecommerce-lite
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar aplicación**
   ```bash
   npm start
   ```

4. **Abrir en navegador**
   Visita [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

- `npm start` - Modo desarrollo
- `npm run build` - Build para producción
- `npm test` - Ejecutar tests (si se agregan)

## Interfaces Definidas

### Product
```typescript
interface Product {
  readonly sku: PropertyKey;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  isActive: Status;
  category: ProductCategory;
  imageUrl: string;
  description?: string;
  dimensions?: string;
  tags?: ProductTags;
  createdAt: Date;
}
```

### User
```typescript
interface User {
  readonly id: PropertyKey;
  fullName: string;
  email: string;
  isActive: Status;
  role: UserRole;
  address: string;
  createdAt: Date;
}
```

## Datos de Ejemplo

### Productos (15)
- **5 Muscle Cars**: Mustang, Challenger, Camaro, Shelby, Pontiac
- **5 Motos Harley**: Street Glide, Fat Boy, Sportster, Road King, Iron 883
- **5 Libros**: Cien Años de Soledad, El Quijote, 1984, Meridiano de Medianoche, Sangre de Campeon

### Usuarios (5)
- **4 Usuarios regulares** con diferentes estados
- **1 Administrador** con permisos elevados

## Tecnologías

- **React 19.2.4** - Librería frontend
- **TypeScript 4.9.5** - Tipado estático
- **CSS Grid/Flexbox** - Layout responsive
- **CSS Variables** - Diseño consistente

## Criterios de Aceptación Cumplidos

- ✅ **CA_01**: Proyecto React con TypeScript creado
- ✅ **CA_02**: Compila y arranca correctamente
- ✅ **CA_03**: Estructura de carpetas configurada
- ✅ **CA_04**: Interface Product con atributos obligatorios
- ✅ **CA_05**: Interface User con atributos obligatorios
- ✅ **CA_06**: Propiedades opcionales incluidas
- ✅ **CA_07**: 15 productos y 5 usuarios creados
- ✅ **CA_08**: Listado con .map() implementado
- ✅ **CA_09**: Nombre, precio, categoría e imagen renderizados
- ✅ **CA_10**: Props tipadas estrictamente

## Contribución

Desarrollado por Jhon Stiven Zuluaga Jaramillo

## Licencia

 2024 E-Commerce Lite. Todos los derechos reservados.
