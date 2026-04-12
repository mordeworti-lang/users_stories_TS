import { CardProps } from '@/types/ui'
import { getCardType } from '@/utils/styles'
import {
  CardImage,
  CardBadgeList,
  CardHeader,
  CardDescription,
  CardFooter,
} from './'

export const Card = ({
  title,
  type,
  imageUrl,
  footer,
  badges = [],
  description,
}: CardProps) => (
  <div className={`rounded-lg border shadow-sm overflow-hidden ${getCardType(type)}`}>
    {imageUrl && <CardImage url={imageUrl} title={title} />}
    <div className="p-5">
      <CardBadgeList badges={badges} />
      <CardHeader title={title} type={type} />
      <CardDescription description={description} type={type} />
      <CardFooter>{footer}</CardFooter>
    </div>
  </div>
)
