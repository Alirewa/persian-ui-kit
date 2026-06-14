import React, { forwardRef, useState } from 'react'
import { Input, InputProps } from '../Input/Input'
import { isValidNationalId } from '../../utils/validators'
import { toEnglishDigits } from '../../utils/persian'

export interface NationalIdInputProps extends Omit<InputProps, 'value' | 'onChange' | 'type'> {
  value?: string
  onChange?: (value: string, isValid: boolean) => void
  showValidation?: boolean
}

export const NationalIdInput = forwardRef<HTMLInputElement, NationalIdInputProps>(({
  value = '',
  onChange,
  showValidation = true,
  error: errorProp,
  hint,
  label = 'کد ملی',
  placeholder = '----------',
  ...props
}, ref) => {
  const [touched, setTouched] = useState(false)

  const englishValue = toEnglishDigits(value).replace(/\D/g, '').slice(0, 10)
  const isValid = isValidNationalId(englishValue)
  const showError = touched && showValidation && englishValue.length > 0 && !isValid

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const raw = toEnglishDigits(e.target.value).replace(/\D/g, '').slice(0, 10)
    onChange?.(raw, isValidNationalId(raw))
  }

  return (
    <Input
      ref={ref}
      type="text"
      inputMode="numeric"
      dir="ltr"
      value={englishValue}
      onChange={handleChange}
      onBlur={() => setTouched(true)}
      label={label}
      placeholder={placeholder}
      error={errorProp ?? (showError ? 'کد ملی وارد شده صحیح نیست' : undefined)}
      hint={!showError ? hint : undefined}
      maxLength={10}
      {...props}
    />
  )
})

NationalIdInput.displayName = 'NationalIdInput'
