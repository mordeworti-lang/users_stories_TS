import type { BadgeProps } from '@/types/ui'

export interface SampleItem {
  title: string
  type: 'green' | 'white' | 'black'
  description: string
  badges: BadgeProps[]
  buttonVariant: 'primary' | 'secondary' | 'danger'
  imageUrl?: string
}

export const sampleData: SampleItem[] = [
  {
    title: 'Proyecto E-commerce',
    type: 'green',
    description: 'Plataforma de comercio electronico con React y Node.js',
    badges: [
      { label: 'En progreso', status: 'info' },
      { label: 'Prioridad alta', status: 'warning' },
    ],
    buttonVariant: 'primary',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
  },
  {
    title: 'Dashboard Analytics',
    type: 'white',
    description: 'Panel de visualizacion de datos en tiempo real',
    badges: [
      { label: 'Completado', status: 'success' },
      { label: 'v2.0', status: 'neutral' },
    ],
    buttonVariant: 'secondary',
  },
  {
    title: 'API Gateway',
    type: 'black',
    description: 'Microservicio de enrutamiento con autenticacion JWT',
    badges: [
      { label: 'Produccion', status: 'success' },
      { label: 'Microservicio', status: 'info' },
      { label: 'Estable', status: 'neutral' },
    ],
    buttonVariant: 'danger',
  },
  {
    title: 'Mobile App',
    type: 'green',
    description: 'Aplicacion movil hibrida con React Native',
    badges: [
      { label: 'Beta', status: 'warning' },
      { label: 'Testing', status: 'info' },
    ],
    buttonVariant: 'primary',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
  },
]
