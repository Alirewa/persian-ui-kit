import React from 'react'
import { cn } from '../../utils/cn'
import styles from './Typography.module.css'

type TypographyVariant = 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'body1'|'body2'|'caption'|'overline'|'lead'

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant
  as?: keyof JSX.IntrinsicElements
  color?: 'default' | 'muted' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'
  weight?: 'light' | 'regular' | 'medium' | 'bold' | 'black'
  align?: 'right' | 'center' | 'left'
  truncate?: boolean
  noWrap?: boolean
}

const TAG_MAP: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1', h2: 'h2', h3: 'h3', h4: 'h4', h5: 'h5', h6: 'h6',
  body1: 'p', body2: 'p', caption: 'span', overline: 'span', lead: 'p',
}

export function Typography({
  variant = 'body1',
  as,
  color = 'default',
  weight,
  align = 'right',
  truncate,
  noWrap,
  className,
  children,
  ...props
}: TypographyProps) {
  const Tag = (as ?? TAG_MAP[variant]) as React.ElementType

  return (
    <Tag
      className={cn(
        styles.base,
        styles[variant],
        styles[`color-${color}`],
        weight && styles[`weight-${weight}`],
        styles[`align-${align}`],
        truncate && styles.truncate,
        noWrap && styles.noWrap,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

Typography.displayName = 'Typography'
