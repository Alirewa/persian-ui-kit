import React from 'react'
import { cn } from '../../utils/cn'
import styles from './EmptyState.module.css'

export type EmptyStatePreset =
  | 'no-data' | 'no-results' | 'no-connection' | 'no-access'
  | 'empty-cart' | 'empty-inbox' | 'coming-soon' | 'error'

export interface EmptyStateProps {
  preset?: EmptyStatePreset
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const PRESETS: Record<EmptyStatePreset, { title: string; description: string; emoji: string }> = {
  'no-data':       { title: 'داده‌ای وجود ندارد',         description: 'هنوز هیچ اطلاعاتی ثبت نشده است.',              emoji: '📭' },
  'no-results':    { title: 'نتیجه‌ای پیدا نشد',          description: 'جستجوی شما با هیچ موردی مطابقت ندارد.',         emoji: '🔍' },
  'no-connection': { title: 'اتصال برقرار نشد',           description: 'اتصال اینترنت خود را بررسی کنید و دوباره امتحان کنید.', emoji: '📡' },
  'no-access':     { title: 'دسترسی محدود است',           description: 'شما مجاز به مشاهده این صفحه نیستید.',           emoji: '🔒' },
  'empty-cart':    { title: 'سبد خرید خالی است',          description: 'هنوز محصولی به سبد خرید اضافه نکرده‌اید.',      emoji: '🛒' },
  'empty-inbox':   { title: 'صندوق دریافت خالی است',      description: 'پیامی برای نمایش وجود ندارد.',                  emoji: '📥' },
  'coming-soon':   { title: 'به زودی',                    description: 'این بخش در حال آماده‌سازی است.',                emoji: '🚀' },
  'error':         { title: 'خطایی رخ داده است',          description: 'مشکلی پیش آمده. لطفاً دوباره تلاش کنید.',       emoji: '⚠️' },
}

export function EmptyState({ preset, title, description, icon, action, size = 'md', className }: EmptyStateProps) {
  const presetData = preset ? PRESETS[preset] : null
  const finalTitle = title ?? presetData?.title ?? 'موردی یافت نشد'
  const finalDescription = description ?? presetData?.description
  const finalIcon = icon ?? (presetData ? <span className={styles.emoji}>{presetData.emoji}</span> : null)

  return (
    <div className={cn(styles.wrapper, styles[`size-${size}`], className)}>
      {finalIcon && <div className={styles.iconWrapper}>{finalIcon}</div>}
      <div className={styles.textWrapper}>
        <h3 className={styles.title}>{finalTitle}</h3>
        {finalDescription && <p className={styles.description}>{finalDescription}</p>}
      </div>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  )
}

EmptyState.displayName = 'EmptyState'
