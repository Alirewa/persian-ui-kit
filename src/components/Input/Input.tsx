import React, { forwardRef, useId } from 'react'
import { cn } from '../../utils/cn'
import styles from './Input.module.css'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputVariant = 'default' | 'filled'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  hint?: string
  error?: string
  size?: InputSize
  variant?: InputVariant
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  fullWidth?: boolean
  required?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  label,
  hint,
  error,
  size = 'md',
  variant = 'default',
  startIcon,
  endIcon,
  fullWidth = false,
  required,
  className,
  id: idProp,
  ...props
}, ref) => {
  const autoId = useId()
  const id = idProp ?? autoId

  return (
    <div className={cn(styles.wrapper, fullWidth && styles.fullWidth)}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden>*</span>}
        </label>
      )}
      <div className={cn(styles.inputWrapper, styles[`size-${size}`], styles[`variant-${variant}`], error && styles.hasError)}>
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        <input
          ref={ref}
          id={id}
          className={cn(styles.input, className)}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
          required={required}
          {...props}
        />
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </div>
      {error && (
        <span id={`${id}-error`} className={styles.error} role="alert">{error}</span>
      )}
      {!error && hint && (
        <span id={`${id}-hint`} className={styles.hint}>{hint}</span>
      )}
    </div>
  )
})

Input.displayName = 'Input'
