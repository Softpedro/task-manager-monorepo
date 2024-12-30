# Task Manager Monorepo

Este proyecto es una aplicación de gestión de tareas desarrollada con Next.js (frontend), un backend mock creado con Next.js API Routes, y un sistema de diseño compartido en Storybook.

## Características

Autenticación: Simula el inicio de sesión utilizando JWT.

Gestión de Tareas: Crear, leer, actualizar y eliminar tareas.

Responsividad: Diseño adaptable a dispositivos móviles y escritorio.

Storybook: Documentación visual de componentes reutilizables.

Estado Global: Uso de Zustand para manejar el estado global en el frontend.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas:

Node.js (versión 18 o superior recomendada)

pnpm (gestor de paquetes)

```bash
node -v
pnpm -v
```

## Instalación

1. Clona el repositorio:

```python
git clone https://github.com/Softpedro/task-manager-monorepo.git
cd task-manager-monorepo
```

2. Instala las dependencias del proyecto:

```python
pnpm install
```

## Ejecución del Proyecto

### Backend

1. Navega al directorio del backend:

```python
cd apps/backend
```

2. Inicia el servidor:

```python
pnpm dev
```

El backend estará disponible en: [http://localhost:3000]()

### Frontend

1. Navega al directorio del frontend:

```python
cd apps/web
```

2. Inicia la aplicación:

```python
pnpm dev
```

El frontend estará disponible en:[http://localhost:3001]()

###Storybook

1. Navega al directorio de Storybook (dentro del paquete de UI):

```python
cd packages/ui
```

2. Inicia Storybook:

```python
pnpm storybook
```

Storybook estará disponible en: [http://localhost:6006]()

## Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en los archivos .env.local correspondientes:

### Frontend (apps/web/.env.local)

```python
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Backend (apps/backend/.env.local)

No se requieren variables de entorno para este proyecto.

```python
task-manager-monorepo/
├── apps/
│   ├── backend/          # Backend con Next.js API Routes
│   ├── web/              # Frontend con Next.js
├── packages/
│   └── ui/               # Componentes compartidos con Storybook
├── pnpm-workspace.yaml   # Configuración del monorepo
├── package.json          # Configuración global
└── README.md             # Documentación del proyecto

```
