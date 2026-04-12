import { CardImageProps } from '@/types/ui'

export const CardImage = ({ url, title }: CardImageProps) => (
  <img src={url} alt={title} className="w-full h-48 object-cover" />
)
