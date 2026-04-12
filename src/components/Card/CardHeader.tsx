import { getCardTitleStyle } from '@/utils/styles'
import { CardHeaderProps } from '@/types/ui'

export const CardHeader = ({ title, type }: CardHeaderProps) => (
  <h3 className={`text-lg font-semibold mb-2 ${getCardTitleStyle(type)}`}>
    {title}
  </h3>
)
