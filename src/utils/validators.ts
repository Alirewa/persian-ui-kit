/** اعتبارسنجی کد ملی ایرانی */
export function isValidNationalId(code: string): boolean {
  const cleaned = code.replace(/\D/g, '')
  if (cleaned.length !== 10) return false
  if (/^(\d)\1{9}$/.test(cleaned)) return false

  const digits = cleaned.split('').map(Number)
  const check = digits[9]
  const sum = digits.slice(0, 9).reduce((acc, d, i) => acc + d * (10 - i), 0)
  const remainder = sum % 11
  return remainder < 2 ? check === remainder : check === 11 - remainder
}

/** اعتبارسنجی شماره موبایل ایرانی */
export function isValidIranPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '')
  // پشتیبانی از فرمت‌های: 09xx، 989xx، +989xx
  const normalized = cleaned.startsWith('98')
    ? '0' + cleaned.slice(2)
    : cleaned.startsWith('9') && cleaned.length === 10
    ? '0' + cleaned
    : cleaned

  return /^09[0-9]{9}$/.test(normalized)
}

/** نرمال‌سازی شماره موبایل به فرمت 09xxxxxxxxx */
export function normalizeIranPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.startsWith('98') && cleaned.length === 12) return '0' + cleaned.slice(2)
  if (cleaned.startsWith('9') && cleaned.length === 10) return '0' + cleaned
  return cleaned
}

/** اعتبارسنجی کد پستی ۱۰ رقمی ایران */
export function isValidPostalCode(code: string): boolean {
  const cleaned = code.replace(/\D/g, '')
  return /^\d{10}$/.test(cleaned) && !cleaned.startsWith('0')
}

/** اعتبارسنجی شماره شبا */
export function isValidIban(iban: string): boolean {
  const cleaned = iban.replace(/\s/g, '').toUpperCase()
  if (!/^IR\d{24}$/.test(cleaned)) return false
  const rearranged = cleaned.slice(4) + cleaned.slice(0, 4)
  const numeric = rearranged.replace(/[A-Z]/g, (c) => String(c.charCodeAt(0) - 55))
  let remainder = 0
  for (const chunk of numeric.match(/.{1,9}/g) ?? []) {
    remainder = Number(String(remainder) + chunk) % 97
  }
  return remainder === 1
}

/** اعتبارسنجی ایمیل */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
