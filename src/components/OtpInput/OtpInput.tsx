import React, { forwardRef, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { toEnglishDigits, toPersianDigits } from '../../utils/persian'
import styles from './OtpInput.module.css'

export interface OtpInputProps {
  length?: number
  value?: string
  onChange?: (value: string) => void
  onComplete?: (value: string) => void
  persian?: boolean
  disabled?: boolean
  error?: boolean
  label?: string
  hint?: string
  errorMessage?: string
  className?: string
}

export const OtpInput = forwardRef<HTMLDivElement, OtpInputProps>(({
  length = 6,
  value = '',
  onChange,
  onComplete,
  persian = false,
  disabled,
  error,
  label,
  hint,
  errorMessage,
  className,
}, ref) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])
  const digits = Array.from({ length }, (_, i) => {
    const ch = toEnglishDigits(value)[i] ?? ''
    return persian && ch ? toPersianDigits(ch) : ch
  })

  function handleChange(index: number, raw: string) {
    const char = toEnglishDigits(raw).replace(/\D/g, '').slice(-1)
    const arr = toEnglishDigits(value).split('')
    arr[index] = char
    const next = arr.join('').slice(0, length)
    onChange?.(next)
    if (char && index < length - 1) inputRefs.current[index + 1]?.focus()
    if (next.length === length) onComplete?.(next)
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Backspace') {
      if (!toEnglishDigits(value)[index] && index > 0) {
        inputRefs.current[index - 1]?.focus()
        const arr = toEnglishDigits(value).split('')
        arr[index - 1] = ''
        onChange?.(arr.join(''))
      }
    }
    if (e.key === 'ArrowRight' && index > 0)        inputRefs.current[index - 1]?.focus()
    if (e.key === 'ArrowLeft'  && index < length - 1) inputRefs.current[index + 1]?.focus()
  }

  function handlePaste(e: React.ClipboardEvent) {
    e.preventDefault()
    const pasted = toEnglishDigits(e.clipboardData.getData('text')).replace(/\D/g, '').slice(0, length)
    onChange?.(pasted)
    if (pasted.length === length) onComplete?.(pasted)
    const focusIndex = Math.min(pasted.length, length - 1)
    inputRefs.current[focusIndex]?.focus()
  }

  return (
    <div ref={ref} className={cn(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.inputs} onPaste={handlePaste} dir="ltr">
        {Array.from({ length }).map((_, i) => (
          <input
            key={i}
            ref={(el) => { inputRefs.current[i] = el }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digits[i]}
            disabled={disabled}
            className={cn(styles.input, error && styles.error, digits[i] && styles.filled)}
            onChange={(e) => handleChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            aria-label={`رقم ${persian ? toPersianDigits(i + 1) : i + 1}`}
          />
        ))}
      </div>
      {errorMessage && error && <span className={styles.errorMsg} role="alert">{errorMessage}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  )
})

OtpInput.displayName = 'OtpInput'
