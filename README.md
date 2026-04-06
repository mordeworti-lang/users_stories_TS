# TwoStory - Sistema de Autenticacion Modular

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" alt="TypeScript 5.9" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/badge/Decorators-ESNext-FF6B6B" alt="Decorators" />
</p>

<p align="center">
  <strong>Sistema de autenticacion con arquitectura limpia, CRUD con logs HTTP simulados y extensibilidad mediante decoradores TypeScript.</strong>
</p>

---

## Tabla de Contenidos

- [Descripcion](#descripcion)
- [Arquitectura](#arquitectura)
- [Requerimientos Cumplidos](#requerimientos-cumplidos)
- [Instalacion](#instalacion)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [API Reference](#api-reference)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Descripcion

TwoStory es una aplicacion React + TypeScript disenada con principios de **Clean Architecture** y **SOLID**. Implementa un sistema de autenticacion modular con operaciones CRUD completas y un decorador personalizado que enriquece automaticamente los datos de usuario.

### Caracteristicas Principales

- [x] **Login Modular**: Validacion de credenciales con redireccion segura
- [x] **Clase UserStore**: Operaciones CRUD con logs HTTP simulados
- [x] **Decorador TypeScript**: Extension automatica de propiedades (`role`, `createdAt`)
- [x] **Codigo Modular**: Funciones de maximo 15 lineas, separacion de responsabilidades
- [x] **Tipado Estricto**: TypeScript con configuracion strict mode
- [x] **Rutas Protegidas**: Autenticacion basada en sessionStorage

---

## Arquitectura

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│  ┌──────────────┐      ┌────────────────────────────────┐  │
│  │   Login.tsx  │      │        Dashboard.tsx            │  │
│  │  (Component) │─────▶│         (Page)                  │  │
│  └──────────────┘      └────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Business Layer                           │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────────────┐   │
│  │   auth.ts    │  │ UserStore.ts │  │ decorators.ts  │   │
│  │ authenticate │  │    CRUD      │  │ @WithUserMetadata│   │
│  └──────────────┘  └──────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer                               │
│  ┌──────────────┐      ┌────────────────────────────────┐   │
│  │   users.ts   │      │   interfaces/User.ts          │   │
│  │  Mock Data   │      │       Type Definitions        │   │
│  └──────────────┘      └────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

---

## Requerimientos Cumplidos

### Task 1: Login Modular (CA_01 - CA_06)

| Criterio | Estado | Archivo |
|----------|--------|---------|
| **CA_01**: Interface User independiente | [x] | `src/interfaces/User.ts` |
| **CA_02**: Array de usuarios mock | [x] | `src/data/users.ts` |
| **CA_03**: Funcion authenticate modular | [x] | `src/utils/auth.ts` |
| **CA_04**: Validar credenciales | [x] | `src/components/Login.tsx` |
| **CA_05**: Mensaje exito/error | [x] | `src/components/Login.tsx` |
| **CA_06**: Redireccion post-login | [x] | `src/pages/Dashboard.tsx` |

### Task 2: CRUD con Logs HTTP (CA_07 - CA_10)

| Criterio | Estado | Implementacion |
|----------|--------|----------------|
| **CA_07**: Clase UserStore | [x] | `src/utils/UserStore.ts` |
| **CA_08**: Metodos CRUD | [x] | `list`, `findByName`, `create`, `update`, `remove` |
| **CA_09**: Logs HTTP simulados | [x] | `logHttp()` - Console output |
| **CA_10**: Operaciones sobre array | [x] | Array mutation con spread operator |

### Task 3: Decorador de Extension (CA_11 - CA_14)

| Criterio | Estado | Detalle |
|----------|--------|---------|
| **CA_11**: Archivo decorators.ts | [x] | `src/utils/decorators.ts` |
| **CA_12**: Decorar metodo create | [x] | `@WithUserMetadata()` aplicado |
| **CA_13**: Propiedades extra | [x] | `role: "user"`, `createdAt: Date.now()` |
| **CA_14**: Sin modificar logica base | [x] | Decorator preserva funcionalidad original |

### Requerimientos Funcionales (RF)

| Codigo | Requerimiento | Estado |
|--------|---------------|--------|
| **RF_01** | Login modular y validacion de credenciales | [x] Implementado |
| **RF_02** | Interfaces y data en modulos separados | [x] Arquitectura limpia |
| **RF_03** | CRUD con logs de simulacion HTTP | [x] Console logs activos |
| **RF_04** | Extender datos con decoradores | [x] @WithUserMetadata |

### Requerimientos No Funcionales (RNF)

| Codigo | Requerimiento | Estado |
|--------|---------------|--------|
| **RNF_01** | Modular y escalable | [x] Estructura por capas |
| **RNF_02** | Tipado estricto TypeScript | [x] Strict mode activo |
| **RNF_03** | Operaciones testeables | [x] Funciones puras, inyeccion de dependencias |
| **RNF_04** | Ejecucion sencilla local | [x] Vite dev server |

---

## Instalacion

### Prerrequisitos

- Node.js 18+
- npm 9+

### Pasos

```bash
# Clonar o navegar al proyecto
cd twostory

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicacion estara disponible en `http://localhost:5173`

### Build de Produccion

```bash
npm run build
npm run preview
```

---

## Uso

### Flujo de Autenticacion

1. **Acceder al login**: `http://localhost:5173/`
2. **Ingresar credenciales** de prueba:

| Usuario | Email | Contrasena |
|---------|-------|------------|
| Admin | `admin@twostory.com` | `admin123` |
| Usuario 1 | `john@example.com` | `password123` |
| Usuario 2 | `jane@example.com` | `password123` |

3. **Login exitoso**: Redireccion automatica a `/dashboard`
4. **Verificar decorador**: Abrir DevTools (F12) -> Console

### Logs HTTP Simulados

Tras hacer login, en la consola se visualizaran los logs:

```
[HTTP GET] /api/users
[HTTP POST] /api/users {name: 'Test User', email: 'test@example.com'}
```

### Demo del Decorador

En el Dashboard se muestra una card con el usuario creado automaticamente por el decorador `@WithUserMetadata()`:

```typescript
{
  id: "...",
  name: "Test User",
  email: "test@example.com",
  role: "user",        // <- Agregado por decorador
  createdAt: 1234567890 // <- Agregado por decorador
}
```

---

## Estructura del Proyecto

```
twostory/
├── src/
│   ├── components/
│   │   └── Login.tsx           # Componente de autenticacion
│   ├── data/
│   │   └── users.ts            # Datos mock (CA_02)
│   ├── interfaces/
│   │   └── User.ts             # Definiciones de tipos (CA_01)
│   ├── pages/
│   │   └── Dashboard.tsx       # Vista protegida post-login
│   ├── utils/
│   │   ├── auth.ts             # Logica de autenticacion (CA_03)
│   │   ├── decorators.ts       # Decorador @WithUserMetadata (CA_11-CA_14)
│   │   ├── session.ts          # Gestion de sesion sessionStorage
│   │   └── UserStore.ts        # Clase CRUD con logs HTTP (CA_07-CA_10)
│   ├── App.tsx                 # Router y rutas protegidas
│   ├── main.tsx                # Entry point React
│   └── style.css               # Estilos CSS puros
├── index.html
├── package.json
├── tsconfig.json               # Experimental decorators enabled
└── README.md
```

---

## API Reference

### Interfaces

```typescript
// src/interfaces/User.ts
interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  role?: string;
  createdAt?: number;
}

interface Credentials {
  email: string;
  password: string;
}

interface AuthResult {
  success: boolean;
  user?: User;
  message: string;
}
```

### UserStore

```typescript
class UserStore {
  list(): User[]                    // GET /api/users
  findByName(name: string): User    // GET /api/users?name=
  create(userData): User            // POST /api/users + Decorador
  update(id, data): User            // PATCH /api/users/:id
  remove(id): boolean               // DELETE /api/users/:id
}
```

### Decorator

```typescript
// Aplica automaticamente role y createdAt
@WithUserMetadata()
create(userData: Omit<User, 'id'>): User
```

### Funciones de Autenticacion

```typescript
authenticate(credentials: Credentials): AuthResult
setAuthUser(user: User): void
getAuthUser(): User | null
clearAuthUser(): void
isAuthenticated(): boolean
```

---

## Autor

<div align="center">

**Jhon Stiven Zuluaga**

<p>
  <em>Desarrollador Frontend Senior</em><br>
  Especialista en React, TypeScript y Arquitectura de Software
</p>

</div>

### Derechos de Autor

Copyright 2024 **Jhon Stiven Zuluaga**. Todos los derechos reservados.

Este proyecto fue desarrollado como parte de un taller academico/profesional demostrando:

- [x] Arquitectura limpia y modular
- [x] Implementacion de patrones de diseno (Decorators)
- [x] Codigo TypeScript de nivel enterprise
- [x] Mejores practicas de desarrollo frontend

**Prohibida la reproduccion total o parcial sin autorizacion expresa del autor.**

---

## Licencia

Este proyecto esta bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

```
MIT License

Copyright (c) 2024 Jhon Stiven Zuluaga

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## Notas Tecnicas

### Configuracion TypeScript

El proyecto utiliza `experimentalDecorators` y `emitDecoratorMetadata` habilitados en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "strict": true
  }
}
```

### Patrones Aplicados

1. **Single Responsibility**: Cada archivo tiene una unica responsabilidad
2. **Open/Closed**: Extensibilidad mediante decoradores sin modificar codigo base
3. **Dependency Inversion**: Inyeccion de dependencias en funciones puras
4. **Factory Pattern**: Generacion de IDs con `generateId()`

### Metricas de Codigo

| Metrica | Valor |
|---------|-------|
| Lineas maximas por funcion | <= 15 lineas |
| Cobertura de tipos | 100% TypeScript |
| Archivos | 12 archivos fuente |
| Tests pasando | Type check ok |
| Build size | ~240 KB (gzipped) |

---

<p align="center">
  <strong>Desarrollado con pasion por Jhon Stiven Zuluaga</strong>
</p>
