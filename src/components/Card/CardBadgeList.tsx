import { Badge } from '@/components/ui/Badge'
import { CardBadgeListProps } from '@/types/ui'

export const CardBadgeList = ({ badges }: CardBadgeListProps) => {
  if (!badges?.length) return null
  return (
    <div className="flex flex-wrap gap-2 mb-3">
      {badges.map((badge, index) => (
        <Badge
          key={`${badge.label}-${index}`}
          label={badge.label}
          status={badge.status}
          icon={badge.icon}
        />
      ))}
    </div>
  )
}
