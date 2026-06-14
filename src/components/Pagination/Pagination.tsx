import React from 'react'
import { cn } from '../../utils/cn'
import { toPersianDigits } from '../../utils/persian'
import { ChevronRightIcon, ChevronLeftIcon } from '../Icons'
import styles from './Pagination.module.css'

export interface PaginationProps {
  page: number
  totalPages: number
  onPageChange: (page: number) => void
  siblingCount?: number
  persian?: boolean
  size?: 'sm' | 'md' | 'lg'
  showEdges?: boolean
  className?: string
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
}

export function Pagination({
  page, totalPages, onPageChange, siblingCount = 1, persian = true,
  size = 'md', showEdges = true, className,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const DOTS = '...'
  function getPages(): (number | string)[] {
    const total = siblingCount * 2 + 5
    if (totalPages <= total) return range(1, totalPages)
    const left  = Math.max(page - siblingCount, 1)
    const right = Math.min(page + siblingCount, totalPages)
    const showLeft  = left > 2
    const showRight = right < totalPages - 1
    if (!showLeft && showRight)  return [...range(1, right + 1), DOTS, totalPages]
    if (showLeft && !showRight)  return [1, DOTS, ...range(left - 1, totalPages)]
    return [1, DOTS, ...range(left, right), DOTS, totalPages]
  }

  const pages = getPages()
  const fmt = (n: number) => persian ? toPersianDigits(n) : String(n)

  return (
    <nav className={cn(styles.nav, className)} aria-label="صفحه‌بندی" dir="rtl">
      {/* Next (in RTL, next = right side) */}
      <button
        className={cn(styles.btn, styles[`size-${size}`])}
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        aria-label="صفحه بعد"
      >
        <ChevronRightIcon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      </button>

      {pages.map((p, i) =>
        p === DOTS ? (
          <span key={`dots-${i}`} className={cn(styles.dots, styles[`size-${size}`])}>…</span>
        ) : (
          <button
            key={p}
            className={cn(styles.btn, styles[`size-${size}`], p === page && styles.active)}
            onClick={() => onPageChange(p as number)}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`صفحه ${fmt(p as number)}`}
          >
            {fmt(p as number)}
          </button>
        )
      )}

      {/* Prev */}
      <button
        className={cn(styles.btn, styles[`size-${size}`])}
        disabled={page <= 1}
        onClick={() => onPageChange(page - 1)}
        aria-label="صفحه قبل"
      >
        <ChevronLeftIcon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
      </button>
    </nav>
  )
}

Pagination.displayName = 'Pagination'
