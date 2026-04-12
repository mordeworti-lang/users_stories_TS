import { ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps {
  text: string
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  onClick?: () => void
}

export type BadgeStatus = 'success' | 'warning' | 'info' | 'error' | 'neutral'

export interface BadgeProps {
  label: string
  status?: BadgeStatus
  icon?: ReactNode
}

export type CardType = 'green' | 'white' | 'black'

export interface CardProps {
  title: string
  type: CardType
  imageUrl?: string
  description?: string
  badges?: BadgeProps[]
  footer?: ReactNode
}

export interface CardImageProps {
  url: string
  title: string
}

export interface CardBadgeListProps {
  badges?: BadgeProps[]
}

export interface CardHeaderProps {
  title: string
  type: CardType
}

export interface CardDescriptionProps {
  description?: string
  type: CardType
}

export interface CardFooterProps {
  children?: ReactNode
}
