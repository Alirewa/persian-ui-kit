import { useMemo } from 'react'
// eslint-disable-next-line @typescript-eslint/no-require-imports
const jalaali = require('jalaali-js') as typeof import('jalaali-js')
import { toPersianDigits } from '../utils/persian'

export interface JalaliDate {
  jy: number
  jm: number
  jd: number
}

export interface UseJalaliReturn {
  toJalali: (date: Date) => JalaliDate
  toGregorian: (jy: number, jm: number, jd: number) => Date
  formatJalali: (date: Date, options?: JalaliFormatOptions) => string
  monthName: (month: number) => string
  dayName: (date: Date) => string
  isLeapYear: (jy: number) => boolean
  monthDays: (jy: number, jm: number) => number
  MONTH_NAMES: string[]
  WEEKDAY_NAMES: string[]
  WEEKDAY_NAMES_SHORT: string[]
}

export interface JalaliFormatOptions {
  persian?: boolean
  includeDay?: boolean
  separator?: string
}

const MONTH_NAMES = [
  'فروردین', 'اردیبهشت', 'خرداد',
  'تیر', 'مرداد', 'شهریور',
  'مهر', 'آبان', 'آذر',
  'دی', 'بهمن', 'اسفند',
]

const WEEKDAY_NAMES = ['شنبه', 'یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه']
const WEEKDAY_NAMES_SHORT = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']

export function useJalali(): UseJalaliReturn {
  return useMemo(() => ({
    MONTH_NAMES,
    WEEKDAY_NAMES,
    WEEKDAY_NAMES_SHORT,

    toJalali(date: Date): JalaliDate {
      return jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate())
    },

    toGregorian(jy: number, jm: number, jd: number): Date {
      const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd)
      return new Date(gy, gm - 1, gd)
    },

    formatJalali(date: Date, options: JalaliFormatOptions = {}): string {
      const { jy, jm, jd } = jalaali.toJalaali(date.getFullYear(), date.getMonth() + 1, date.getDate())
      const sep = options.separator ?? '/'
      const year = options.persian ? toPersianDigits(jy) : String(jy)
      const month = options.persian ? toPersianDigits(String(jm).padStart(2, '0')) : String(jm).padStart(2, '0')
      const day = options.persian ? toPersianDigits(String(jd).padStart(2, '0')) : String(jd).padStart(2, '0')
      if (options.includeDay) {
        const weekday = WEEKDAY_NAMES[(date.getDay() + 1) % 7]
        return `${weekday}، ${day} ${MONTH_NAMES[jm - 1]} ${year}`
      }
      return `${year}${sep}${month}${sep}${day}`
    },

    monthName(month: number): string {
      return MONTH_NAMES[month - 1] ?? ''
    },

    dayName(date: Date): string {
      return WEEKDAY_NAMES[(date.getDay() + 1) % 7]
    },

    isLeapYear(jy: number): boolean {
      return jalaali.isLeapJalaaliYear(jy)
    },

    monthDays(jy: number, jm: number): number {
      return jalaali.jalaaliMonthLength(jy, jm)
    },
  }), [])
}
