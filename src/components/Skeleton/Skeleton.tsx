import React from 'react'
import { cn } from '../../utils/cn'
import styles from './Skeleton.module.css'

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number
  height?: string | number
  circle?: boolean
  lines?: number
}

export function Skeleton({ width, height, circle, lines, className, style, ...props }: SkeletonProps) {
  if (lines && lines > 1) {
    return (
      <div className={styles.lines}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(styles.skeleton, className)}
            style={{ width: i === lines - 1 ? '70%' : '100%', height: height ?? 16, ...style }}
            {...props}
          />
        ))}
      </div>
    )
  }

  return (
    <div
      className={cn(styles.skeleton, circle && styles.circle, className)}
      style={{
        width: width ?? '100%',
        height: height ?? 16,
        borderRadius: circle ? '50%' : undefined,
        ...style,
      }}
      {...props}
    />
  )
}

Skeleton.displayName = 'Skeleton'
