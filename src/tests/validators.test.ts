import { describe, it, expect } from 'vitest'
import { isValidNationalId, isValidIranPhone, isValidPostalCode, normalizeIranPhone, isValidEmail } from '../utils/validators'
import { toPersianDigits, toEnglishDigits, formatPrice, parsePrice } from '../utils/persian'

describe('کد ملی', () => {
  it('کد ملی معتبر', () => {
    expect(isValidNationalId('0075654428')).toBe(true)
    expect(isValidNationalId('4560134561')).toBe(true)
  })
  it('کد ملی نامعتبر — همه یکسان', () => {
    expect(isValidNationalId('1111111111')).toBe(false)
    expect(isValidNationalId('0000000000')).toBe(false)
  })
  it('کد ملی نامعتبر — طول اشتباه', () => {
    expect(isValidNationalId('123456')).toBe(false)
    expect(isValidNationalId('12345678901')).toBe(false)
  })
  it('کد ملی نامعتبر — رقم کنترل اشتباه', () => {
    expect(isValidNationalId('0075654420')).toBe(false)
  })
})

describe('شماره موبایل', () => {
  it('شماره‌های معتبر', () => {
    expect(isValidIranPhone('09121234567')).toBe(true)
    expect(isValidIranPhone('09351234567')).toBe(true)
    expect(isValidIranPhone('989121234567')).toBe(true)
  })
  it('شماره‌های نامعتبر', () => {
    expect(isValidIranPhone('02121234567')).toBe(false)
    expect(isValidIranPhone('0912123456')).toBe(false)
    expect(isValidIranPhone('abcd')).toBe(false)
  })
  it('نرمال‌سازی شماره', () => {
    expect(normalizeIranPhone('989121234567')).toBe('09121234567')
    expect(normalizeIranPhone('9121234567')).toBe('09121234567')
    expect(normalizeIranPhone('09121234567')).toBe('09121234567')
  })
})

describe('کد پستی', () => {
  it('کد پستی معتبر', () => {
    expect(isValidPostalCode('1234567890')).toBe(true)
  })
  it('کد پستی نامعتبر', () => {
    expect(isValidPostalCode('12345')).toBe(false)
    expect(isValidPostalCode('0123456789')).toBe(false)
  })
})

describe('اعداد فارسی', () => {
  it('تبدیل به فارسی', () => {
    expect(toPersianDigits('1403')).toBe('۱۴۰۳')
    expect(toPersianDigits(12)).toBe('۱۲')
  })
  it('تبدیل به انگلیسی', () => {
    expect(toEnglishDigits('۱۴۰۳')).toBe('1403')
    expect(toEnglishDigits('٤٥')).toBe('45')
  })
})

describe('فرمت قیمت', () => {
  it('فرمت با جداکننده هزار', () => {
    expect(parsePrice('۱۲۳،۴۵۶')).toBe(123456)
    expect(formatPrice(1000000)).toContain('1,000,000')
  })
})

describe('ایمیل', () => {
  it('ایمیل معتبر', () => {
    expect(isValidEmail('test@example.com')).toBe(true)
    expect(isValidEmail('user.name+tag@domain.co.ir')).toBe(true)
  })
  it('ایمیل نامعتبر', () => {
    expect(isValidEmail('notanemail')).toBe(false)
    expect(isValidEmail('@domain.com')).toBe(false)
  })
})
