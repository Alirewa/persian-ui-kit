const PERSIAN_DIGITS = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']

/** تبدیل اعداد انگلیسی به فارسی */
export function toPersianDigits(value: string | number): string {
  return String(value).replace(/\d/g, (d) => PERSIAN_DIGITS[Number(d)])
}

/** تبدیل اعداد فارسی/عربی به انگلیسی */
export function toEnglishDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (d) => String(PERSIAN_DIGITS.indexOf(d)))
    .replace(/[٠-٩]/g, (d) => String(ARABIC_DIGITS.indexOf(d)))
}

/** فرمت قیمت با جداکننده هزار */
export function formatPrice(
  value: number | string,
  options: { persian?: boolean; currency?: string } = {}
): string {
  const num = Number(toEnglishDigits(String(value)))
  if (isNaN(num)) return ''
  const formatted = num.toLocaleString('fa-IR')
  if (options.currency) return `${formatted} ${options.currency}`
  return formatted
}

/** حذف جداکننده‌های هزار و تبدیل به عدد */
export function parsePrice(value: string): number {
  return Number(toEnglishDigits(value.replace(/[,،٬]/g, '')))
}

/** فرمت شماره موبایل فارسی با خط تیره */
export function formatIranPhone(phone: string): string {
  const cleaned = toEnglishDigits(phone).replace(/\D/g, '')
  if (cleaned.length === 11) {
    return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 7)}-${cleaned.slice(7)}`
  }
  return cleaned
}

/** تبدیل bytes به فرمت فارسی */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return toPersianDigits('0') + ' بایت'
  const units = ['بایت', 'کیلوبایت', 'مگابایت', 'گیگابایت']
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  const size = (bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0)
  return toPersianDigits(size) + ' ' + units[i]
}
