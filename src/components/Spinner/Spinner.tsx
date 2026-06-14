import React from 'react'
import { cn } from '../../utils/cn'
import styles from './Spinner.module.css'

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg'
export type SpinnerColor = 'primary' | 'secondary' | 'white' | 'current'

export interface SpinnerProps {
  size?: SpinnerSize
  color?: SpinnerColor
  className?: string
  label?: string
}

export function Spinner({ size = 'md', color = 'primary', className, label = 'در حال بارگذاری...' }: SpinnerProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn(styles.spinner, styles[`size-${size}`], styles[`color-${color}`], className)}
    >
      <span className={styles.srOnly}>{label}</span>
    </span>
  )
}

Spinner.displayName = 'Spinner'
