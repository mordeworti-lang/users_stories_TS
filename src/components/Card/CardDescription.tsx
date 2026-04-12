import { getCardDescStyle } from '@/utils/styles'
import { CardDescriptionProps } from '@/types/ui'

export const CardDescription = ({ description, type }: CardDescriptionProps) => {
  if (!description) return null
  return (
    <p className={`text-sm mb-4 ${getCardDescStyle(type)}`}>
      {description}
    </p>
  )
}
