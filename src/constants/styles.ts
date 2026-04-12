/**
 * Constantes de estilos para componentes UI
 * @author Jhon Stiven Zuluaga Jaramillo
 */

export const BUTTON_VARIANTS: Record<string, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
  disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed',
}

export const BUTTON_SIZES: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

export const BADGE_STATUS: Record<string, string> = {
  success: 'bg-green-100 text-green-800 border-green-200',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  info: 'bg-blue-100 text-blue-800 border-blue-200',
  error: 'bg-red-100 text-red-800 border-red-200',
  neutral: 'bg-gray-100 text-gray-800 border-gray-200',
}

export const CARD_TYPES: Record<string, string> = {
  green: 'bg-emerald-50 border-emerald-200',
  white: 'bg-white border-gray-200',
  black: 'bg-gray-900 border-gray-800 text-white',
}

export const CARD_TITLES: Record<string, string> = {
  dark: 'text-white',
  light: 'text-gray-900',
}

export const CARD_DESCRIPTIONS: Record<string, string> = {
  dark: 'text-gray-300',
  light: 'text-gray-600',
}
