import React, { useId } from 'react'
import * as RadixRadio from '@radix-ui/react-radio-group'
import { cn } from '../../utils/cn'
import styles from './Radio.module.css'

export interface RadioOption {
  value: string
  label: string
  hint?: string
  disabled?: boolean
}

export interface RadioGroupProps {
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  orientation?: 'vertical' | 'horizontal'
  size?: 'sm' | 'md' | 'lg'
  label?: string
  error?: string
  disabled?: boolean
  className?: string
}

export function RadioGroup({
  options,
  value,
  defaultValue,
  onValueChange,
  orientation = 'vertical',
  size = 'md',
  label,
  error,
  disabled,
  className,
}: RadioGroupProps) {
  const groupId = useId()

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && <span className={styles.groupLabel}>{label}</span>}
      <RadixRadio.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        orientation={orientation}
        dir="rtl"
        className={cn(styles.group, styles[`orient-${orientation}`])}
        aria-label={label}
      >
        {options.map((opt) => {
          const id = `${groupId}-${opt.value}`
          return (
            <div key={opt.value} className={styles.item}>
              <RadixRadio.Item
                id={id}
                value={opt.value}
                disabled={opt.disabled}
                className={cn(styles.radio, styles[`size-${size}`])}
              >
                <RadixRadio.Indicator className={styles.indicator} />
              </RadixRadio.Item>
              <div className={styles.labelGroup}>
                <label htmlFor={id} className={cn(styles.label, styles[`label-${size}`])}>
                  {opt.label}
                </label>
                {opt.hint && <span className={styles.hint}>{opt.hint}</span>}
              </div>
            </div>
          )
        })}
      </RadixRadio.Root>
      {error && <span className={styles.error} role="alert">{error}</span>}
    </div>
  )
}
