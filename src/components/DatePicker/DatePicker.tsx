import React, { useCallback, useId, useMemo, useRef, useState } from 'react'
import * as Popover from '@radix-ui/react-popover'
import * as jalaali from 'jalaali-js'
import { cn } from '../../utils/cn'
import { toPersianDigits, toEnglishDigits } from '../../utils/persian'
import { ChevronRightIcon, ChevronLeftIcon, CalendarIcon } from '../Icons'
import styles from './DatePicker.module.css'

export interface JalaliDateValue {
  jy: number; jm: number; jd: number
}

export interface DatePickerProps {
  value?: JalaliDateValue | null
  onChange?: (value: JalaliDateValue | null) => void
  min?: JalaliDateValue
  max?: JalaliDateValue
  label?: string
  placeholder?: string
  error?: string
  hint?: string
  disabled?: boolean
  persian?: boolean
  fullWidth?: boolean
  id?: string
}

const MONTH_NAMES = ['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند']
const WEEK_DAYS   = ['ش','ی','د','س','چ','پ','ج']

function todayJalali(): JalaliDateValue {
  const d = new Date()
  return jalaali.toJalaali(d.getFullYear(), d.getMonth() + 1, d.getDate())
}

function compareJalali(a: JalaliDateValue, b: JalaliDateValue) {
  if (a.jy !== b.jy) return a.jy - b.jy
  if (a.jm !== b.jm) return a.jm - b.jm
  return a.jd - b.jd
}

function formatJalali(d: JalaliDateValue, persian: boolean) {
  const y = persian ? toPersianDigits(d.jy) : d.jy
  const m = persian ? toPersianDigits(String(d.jm).padStart(2,'0')) : String(d.jm).padStart(2,'0')
  const day = persian ? toPersianDigits(String(d.jd).padStart(2,'0')) : String(d.jd).padStart(2,'0')
  return `${y}/${m}/${day}`
}

function getFirstWeekday(jy: number, jm: number): number {
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, 1)
  const dow = new Date(gy, gm - 1, gd).getDay() // 0=Sun
  // Convert: Sat=0, Sun=1, Mon=2, ..., Fri=6
  return (dow + 1) % 7
}

export function DatePicker({
  value, onChange, min, max,
  label, placeholder = 'انتخاب تاریخ', error, hint,
  disabled, persian = true, fullWidth, id: idProp,
}: DatePickerProps) {
  const autoId = useId()
  const id = idProp ?? autoId
  const today = useMemo(todayJalali, [])
  const [open, setOpen] = useState(false)
  const [view, setView] = useState<{ jy: number; jm: number }>(
    value ? { jy: value.jy, jm: value.jm } : { jy: today.jy, jm: today.jm }
  )
  const [mode, setMode] = useState<'day' | 'month' | 'year'>('day')

  const monthDays = jalaali.jalaaliMonthLength(view.jy, view.jm)
  const firstDay  = getFirstWeekday(view.jy, view.jm)

  const prevMonth = useCallback(() => {
    setView(v => v.jm === 1 ? { jy: v.jy - 1, jm: 12 } : { ...v, jm: v.jm - 1 })
  }, [])
  const nextMonth = useCallback(() => {
    setView(v => v.jm === 12 ? { jy: v.jy + 1, jm: 1 } : { ...v, jm: v.jm + 1 })
  }, [])

  function selectDay(jd: number) {
    const selected: JalaliDateValue = { jy: view.jy, jm: view.jm, jd }
    if (min && compareJalali(selected, min) < 0) return
    if (max && compareJalali(selected, max) > 0) return
    onChange?.(selected)
    setOpen(false)
  }

  function isSelected(jd: number) {
    return value?.jy === view.jy && value?.jm === view.jm && value?.jd === jd
  }

  function isToday(jd: number) {
    return today.jy === view.jy && today.jm === view.jm && today.jd === jd
  }

  function isDayDisabled(jd: number) {
    const d: JalaliDateValue = { jy: view.jy, jm: view.jm, jd }
    if (min && compareJalali(d, min) < 0) return true
    if (max && compareJalali(d, max) > 0) return true
    return false
  }

  const displayValue = value ? formatJalali(value, persian) : ''

  const yearOptions = Array.from({ length: 11 }, (_, i) => view.jy - 5 + i)

  return (
    <div className={cn(styles.wrapper, fullWidth && styles.fullWidth)}>
      {label && <label htmlFor={id} className={styles.label}>{label}</label>}
      <Popover.Root open={open} onOpenChange={disabled ? undefined : setOpen}>
        <Popover.Trigger asChild>
          <button
            id={id}
            type="button"
            disabled={disabled}
            aria-haspopup="dialog"
            aria-expanded={open}
            className={cn(styles.trigger, error && styles.triggerError, fullWidth && styles.fullWidth)}
          >
            <span className={displayValue ? styles.triggerValue : styles.triggerPlaceholder}>
              {displayValue || placeholder}
            </span>
            <CalendarIcon size={16} className={styles.triggerIcon} />
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            className={styles.calendar}
            sideOffset={6}
            align="start"
            dir="rtl"
          >
            {/* Header */}
            <div className={styles.calHeader}>
              <button type="button" className={styles.navBtn} onClick={nextMonth} aria-label="ماه قبل">
                <ChevronRightIcon size={16} />
              </button>
              <div className={styles.calTitle}>
                <button type="button" className={styles.titleBtn} onClick={() => setMode(m => m === 'month' ? 'day' : 'month')}>
                  {MONTH_NAMES[view.jm - 1]}
                </button>
                <button type="button" className={styles.titleBtn} onClick={() => setMode(m => m === 'year' ? 'day' : 'year')}>
                  {persian ? toPersianDigits(view.jy) : view.jy}
                </button>
              </div>
              <button type="button" className={styles.navBtn} onClick={prevMonth} aria-label="ماه بعد">
                <ChevronLeftIcon size={16} />
              </button>
            </div>

            {/* Year picker */}
            {mode === 'year' && (
              <div className={styles.yearGrid}>
                {yearOptions.map(y => (
                  <button
                    key={y}
                    type="button"
                    className={cn(styles.yearCell, y === view.jy && styles.selectedYear)}
                    onClick={() => { setView(v => ({ ...v, jy: y })); setMode('day') }}
                  >
                    {persian ? toPersianDigits(y) : y}
                  </button>
                ))}
              </div>
            )}

            {/* Month picker */}
            {mode === 'month' && (
              <div className={styles.monthGrid}>
                {MONTH_NAMES.map((name, i) => (
                  <button
                    key={i}
                    type="button"
                    className={cn(styles.monthCell, (i + 1) === view.jm && styles.selectedMonth)}
                    onClick={() => { setView(v => ({ ...v, jm: i + 1 })); setMode('day') }}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}

            {/* Day picker */}
            {mode === 'day' && (
              <>
                <div className={styles.weekRow}>
                  {WEEK_DAYS.map(d => <span key={d} className={styles.weekDay}>{d}</span>)}
                </div>
                <div className={styles.dayGrid}>
                  {Array.from({ length: firstDay }).map((_, i) => <span key={`e-${i}`} />)}
                  {Array.from({ length: monthDays }, (_, i) => i + 1).map(jd => (
                    <button
                      key={jd}
                      type="button"
                      disabled={isDayDisabled(jd)}
                      className={cn(
                        styles.dayCell,
                        isSelected(jd) && styles.selected,
                        isToday(jd) && !isSelected(jd) && styles.today,
                        isDayDisabled(jd) && styles.disabledDay
                      )}
                      onClick={() => selectDay(jd)}
                    >
                      {persian ? toPersianDigits(jd) : jd}
                    </button>
                  ))}
                </div>
                <div className={styles.calFooter}>
                  <button type="button" className={styles.todayBtn} onClick={() => {
                    setView({ jy: today.jy, jm: today.jm })
                    selectDay(today.jd)
                  }}>امروز</button>
                  {value && (
                    <button type="button" className={styles.clearBtn} onClick={() => { onChange?.(null); setOpen(false) }}>
                      پاک کردن
                    </button>
                  )}
                </div>
              </>
            )}
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
      {error && <span className={styles.error} role="alert">{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  )
}

DatePicker.displayName = 'DatePicker'
