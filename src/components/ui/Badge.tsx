import { BadgeProps } from '@/types/ui'
import { getBadgeStatus } from '@/utils/styles'

export const Badge = ({ label, status = 'neutral', icon }: BadgeProps) => {
  const baseStyles = 'inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border'
  return (
    <span className={`${baseStyles} ${getBadgeStatus(status)}`}>
      {icon}
      {label}
    </span>
  )
}
