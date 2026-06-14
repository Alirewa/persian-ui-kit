import React, { forwardRef, useState } from 'react'
import { Input, InputProps } from '../Input/Input'
import { formatPrice, parsePrice, toPersianDigits, toEnglishDigits } from '../../utils/persian'

export interface PriceInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value?: number | string
  onChange?: (value: number) => void
  currency?: string
  persian?: boolean
  min?: number
  max?: number
}

export const PriceInput = forwardRef<HTMLInputElement, PriceInputProps>(({
  value,
  onChange,
  currency = 'تومان',
  persian = true,
  min,
  max,
  label = 'مبلغ',
  placeholder = '۰',
  endIcon,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false)

  const numericValue = value !== undefined && value !== '' ? Number(toEnglishDigits(String(value))) : undefined

  const displayValue = focused
    ? (numericValue !== undefined && numericValue !== 0 ? (persian ? toPersianDigits(numericValue) : String(numericValue)) : '')
    : (numericValue !== undefined && numericValue !== 0 ? formatPrice(numericValue, { persian }) : '')

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = toEnglishDigits(e.target.value).replace(/[^\d]/g, '')
    const num = raw === '' ? 0 : Number(raw)
    if (min !== undefined && num < min) return
    if (max !== undefined && num > max) return
    onChange?.(num)
  }

  return (
    <Input
      ref={ref}
      type="text"
      inputMode="numeric"
      dir="ltr"
      value={displayValue}
      onChange={handleChange}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      label={label}
      placeholder={placeholder}
      endIcon={endIcon ?? <span style={{ fontSize: '0.75rem', color: 'var(--pui-muted-foreground)', whiteSpace: 'nowrap' }}>{currency}</span>}
      {...props}
    />
  )
})

PriceInput.displayName = 'PriceInput'
