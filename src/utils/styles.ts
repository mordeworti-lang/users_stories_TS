/**
 * Utilidades de estilos para componentes
 * @author Jhon Stiven Zuluaga Jaramillo
 */

import {
  BUTTON_VARIANTS,
  BUTTON_SIZES,
  BADGE_STATUS,
  CARD_TYPES,
  CARD_TITLES,
  CARD_DESCRIPTIONS,
} from '@/constants/styles'

export const getButtonVariant = (variant: string, disabled: boolean): string =>
  disabled ? BUTTON_VARIANTS.disabled : BUTTON_VARIANTS[variant] || BUTTON_VARIANTS.primary

export const getButtonSize = (size: string): string =>
  BUTTON_SIZES[size] || BUTTON_SIZES.md

export const getBadgeStatus = (status: string): string =>
  BADGE_STATUS[status] || BADGE_STATUS.neutral

export const getCardType = (type: string): string =>
  CARD_TYPES[type] || CARD_TYPES.white

export const getCardTitleStyle = (type: string): string =>
  type === 'black' ? CARD_TITLES.dark : CARD_TITLES.light

export const getCardDescStyle = (type: string): string =>
  type === 'black' ? CARD_DESCRIPTIONS.dark : CARD_DESCRIPTIONS.light
