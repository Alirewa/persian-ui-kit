import React, { forwardRef, useState } from 'react'
import { Input, InputProps } from '../Input/Input'
import { isValidIranPhone, normalizeIranPhone } from '../../utils/validators'
import { toEnglishDigits } from '../../utils/persian'

export interface PhoneInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value?: string
  onChange?: (value: string, isValid: boolean) => void
  showValidation?: boolean
}

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(({
  value = '',
  onChange,
  showValidation = true,
  error: errorProp,
  hint,
  label = 'شماره موبایل',
  placeholder = '09xxxxxxxxx',
  ...props
}, ref) => {
  const [touched, setTouched] = useState(false)

  const englishValue = toEnglishDigits(value)
  const isValid = isValidIranPhone(englishValue)
  const showError = touched && showValidation && englishValue.length > 0 && !isValid

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = toEnglishDigits(e.target.value).replace(/\D/g, '').slice(0, 11)
    onChange?.(raw, isValidIranPhone(raw))
  }

  return (
    <Input
      ref={ref}
      type="tel"
      inputMode="numeric"
      dir="ltr"
      value={englishValue}
      onChange={handleChange}
      onBlur={() => setTouched(true)}
      label={label}
      placeholder={placeholder}
      error={errorProp ?? (showError ? 'شماره موبایل معتبر نیست (مثال: ۰۹۱۲۱۲۳۴۵۶۷)' : undefined)}
      hint={!showError ? hint : undefined}
      maxLength={11}
      {...props}
    />
  )
})

PhoneInput.displayName = 'PhoneInput'
