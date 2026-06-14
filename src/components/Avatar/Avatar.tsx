import React from 'react'
import { cn } from '../../utils/cn'
import styles from './Avatar.module.css'

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type AvatarShape = 'circle' | 'square'

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: AvatarSize
  shape?: AvatarShape
  status?: 'online' | 'offline' | 'busy' | 'away'
  className?: string
}

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/)
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

function stringToColor(str: string): string {
  const colors = ['#6366F1','#EC4899','#14B8A6','#F59E0B','#EF4444','#8B5CF6','#10B981','#3B82F6']
  let hash = 0
  for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash)
  return colors[Math.abs(hash) % colors.length]
}

export function Avatar({ src, alt, name, size = 'md', shape = 'circle', status, className }: AvatarProps) {
  const [imgError, setImgError] = React.useState(false)
  const showImage = src && !imgError
  const bgColor = name ? stringToColor(name) : 'var(--pui-muted)'

  return (
    <span className={cn(styles.avatar, styles[`size-${size}`], styles[`shape-${shape}`], className)}>
      {showImage ? (
        <img
          src={src}
          alt={alt ?? name ?? 'آواتار'}
          className={styles.img}
          onError={() => setImgError(true)}
        />
      ) : (
        <span className={styles.fallback} style={{ background: bgColor }}>
          {name ? getInitials(name) : (
            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.userIcon}>
              <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.33 0-8 2.67-8 4v1h16v-1c0-1.33-2.67-4-8-4Z"/>
            </svg>
          )}
        </span>
      )}
      {status && <span className={cn(styles.status, styles[`status-${status}`])} aria-label={status} />}
    </span>
  )
}

export interface AvatarGroupProps {
  avatars: AvatarProps[]
  max?: number
  size?: AvatarSize
}

export function AvatarGroup({ avatars, max = 4, size = 'md' }: AvatarGroupProps) {
  const visible = avatars.slice(0, max)
  const overflow = avatars.length - max

  return (
    <div className={styles.group} dir="rtl">
      {overflow > 0 && (
        <span className={cn(styles.avatar, styles[`size-${size}`], styles['shape-circle'], styles.overflow)}>
          +{overflow}
        </span>
      )}
      {[...visible].reverse().map((a, i) => (
        <Avatar key={i} {...a} size={size} />
      ))}
    </div>
  )
}

Avatar.displayName = 'Avatar'
AvatarGroup.displayName = 'AvatarGroup'
