import { CardFooterProps } from '@/types/ui'

export const CardFooter = ({ children }: CardFooterProps) => {
  if (!children) return null
  return (
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      {children}
    </div>
  )
}
