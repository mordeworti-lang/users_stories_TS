import { ButtonProps } from '@/types/ui'
import { getButtonVariant, getButtonSize } from '@/utils/styles'

const LoadingSpinner = () => (
  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
)

const ButtonContent = ({ text, loading, leftIcon, rightIcon }: ButtonProps) => (
  <>
    {loading && <LoadingSpinner />}
    {!loading && leftIcon}
    <span>{text}</span>
    {!loading && rightIcon}
  </>
)

export const Button = ({
  text,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  onClick,
}: ButtonProps) => {
  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors duration-200'
  const classes = `${base} ${getButtonVariant(variant, disabled || loading)} ${getButtonSize(size)}`
  return (
    <button className={classes} disabled={disabled || loading} onClick={onClick} type="button">
      <ButtonContent text={text} loading={loading} leftIcon={leftIcon} rightIcon={rightIcon} />
    </button>
  )
}
