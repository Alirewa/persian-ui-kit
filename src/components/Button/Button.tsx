import React, { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '../../utils/cn'
import { Spinner } from '../Spinner/Spinner'
import styles from './Button.module.css'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'destructive' | 'link'
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'right' | 'left'
  fullWidth?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  asChild = false,
  className,
  disabled,
  children,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : 'button'
  const isDisabled = disabled || loading

  return (
    <Comp
      ref={ref}
      className={cn(
        styles.btn,
        styles[`variant-${variant}`],
        styles[`size-${size}`],
        fullWidth && styles.fullWidth,
        loading && styles.loading,
        className
      )}
      disabled={isDisabled}
      aria-busy={loading}
      {...props}
    >
      {loading && (
        <span className={styles.spinner}>
          <Spinner size="sm" color="current" />
        </span>
      )}
      {icon && iconPosition === 'right' && !loading && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children && <span className={styles.label}>{children}</span>}
      {icon && iconPosition === 'left' && !loading && (
        <span className={styles.icon}>{icon}</span>
      )}
    </Comp>
  )
})

Button.displayName = 'Button'
