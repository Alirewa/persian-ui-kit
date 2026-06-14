import React from 'react'
import { cn } from '../../utils/cn'
import { Skeleton } from '../Skeleton/Skeleton'
import { EmptyState } from '../EmptyState/EmptyState'
import styles from './Table.module.css'

export interface TableColumn<T = Record<string, unknown>> {
  key: string
  title: string
  width?: string | number
  align?: 'right' | 'center' | 'left'
  render?: (value: unknown, row: T, index: number) => React.ReactNode
}

export interface TableProps<T = Record<string, unknown>> {
  columns: TableColumn<T>[]
  data: T[]
  rowKey?: keyof T | ((row: T) => string | number)
  loading?: boolean
  emptyText?: string
  striped?: boolean
  hoverable?: boolean
  bordered?: boolean
  size?: 'sm' | 'md' | 'lg'
  stickyHeader?: boolean
  className?: string
  onRowClick?: (row: T, index: number) => void
}

export function Table<T extends Record<string, unknown>>({
  columns, data, rowKey, loading, emptyText,
  striped, hoverable = true, bordered, size = 'md',
  stickyHeader, className, onRowClick,
}: TableProps<T>) {
  function getKey(row: T, i: number): string | number {
    if (!rowKey) return i
    if (typeof rowKey === 'function') return rowKey(row)
    return row[rowKey] as string | number
  }

  return (
    <div className={cn(styles.wrapper, bordered && styles.bordered, className)}>
      <table className={cn(styles.table, styles[`size-${size}`])}>
        <thead className={cn(styles.thead, stickyHeader && styles.sticky)}>
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                className={styles.th}
                style={{ width: col.width, textAlign: col.align ?? 'right' }}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <tr key={i} className={styles.tr}>
                {columns.map(col => (
                  <td key={col.key} className={styles.td}>
                    <Skeleton height={20} />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className={styles.emptyCell}>
                <EmptyState preset="no-data" description={emptyText} size="sm" />
              </td>
            </tr>
          ) : (
            data.map((row, i) => (
              <tr
                key={getKey(row, i)}
                className={cn(
                  styles.tr,
                  striped && i % 2 === 0 && styles.striped,
                  hoverable && styles.hoverable,
                  onRowClick && styles.clickable
                )}
                onClick={() => onRowClick?.(row, i)}
              >
                {columns.map(col => (
                  <td
                    key={col.key}
                    className={styles.td}
                    style={{ textAlign: col.align ?? 'right' }}
                  >
                    {col.render
                      ? col.render(row[col.key], row, i)
                      : (row[col.key] as React.ReactNode)
                    }
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

Table.displayName = 'Table'
