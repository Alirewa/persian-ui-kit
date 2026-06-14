import React, { useId } from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { cn } from '../../utils/cn'
import { CheckIcon } from '../Icons'
import styles from './Checkbox.module.css'

export interface CheckboxProps {
  id?: string
  label?: string
  hint?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  indeterminate?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Checkbox({
  id: idProp,
  label,
  hint,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  indeterminate,
  size = 'md',
  className,
}: CheckboxProps) {
  const autoId = useId()
  const id = idProp ?? autoId

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.row}>
        <RadixCheckbox.Root
          id={id}
          className={cn(styles.root, styles[`size-${size}`])}
          checked={indeterminate ? 'indeterminate' : checked}
          defaultChecked={defaultChecked}
          onCheckedChange={(v) => onCheckedChange?.(v === true)}
          disabled={disabled}
        >
          <RadixCheckbox.Indicator className={styles.indicator}>
            {indeterminate
              ? <span className={styles.indeterminate} />
              : <CheckIcon size={size === 'sm' ? 10 : size === 'lg' ? 16 : 13} />
            }
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <label htmlFor={id} className={cn(styles.label, styles[`label-${size}`])}>
            {label}
          </label>
        )}
      </div>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'
