import React from 'react'
import { cn } from '../../utils/cn'
import styles from './Badge.module.css'

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'outline'
export type BadgeSize = 'sm' | 'md' | 'lg'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: BadgeSize
  dot?: boolean
  removable?: boolean
  onRemove?: () => void
}

export function Badge({ variant = 'default', size = 'md', dot, removable, onRemove, className, children, ...props }: BadgeProps) {
  return (
    <span className={cn(styles.badge, styles[`variant-${variant}`], styles[`size-${size}`], className)} {...props}>
      {dot && <span className={styles.dot} />}
      {children}
      {removable && (
        <button type="button" className={styles.remove} onClick={onRemove} aria-label="حذف">
          ×
        </button>
      )}
    </span>
  )
}

Badge.displayName = 'Badge'
