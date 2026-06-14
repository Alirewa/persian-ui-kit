import React from 'react'
import { cn } from '../../utils/cn'
import styles from './Card.module.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'elevated' | 'ghost'
  padding?: 'none' | 'sm' | 'md' | 'lg'
  hoverable?: boolean
  clickable?: boolean
}

export function Card({ variant = 'default', padding = 'md', hoverable, clickable, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        styles.card,
        styles[`variant-${variant}`],
        styles[`padding-${padding}`],
        hoverable && styles.hoverable,
        clickable && styles.clickable,
        className
      )}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.header, className)} {...props}>{children}</div>
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn(styles.title, className)} {...props}>{children}</h3>
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(styles.description, className)} {...props}>{children}</p>
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.content, className)} {...props}>{children}</div>
}

export function CardFooter({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(styles.footer, className)} {...props}>{children}</div>
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardDescription.displayName = 'CardDescription'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'
