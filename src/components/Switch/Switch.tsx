import React, { useId } from 'react'
import * as RadixSwitch from '@radix-ui/react-switch'
import { cn } from '../../utils/cn'
import styles from './Switch.module.css'

export interface SwitchProps {
  id?: string
  label?: string
  labelPosition?: 'right' | 'left'
  hint?: string
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Switch({
  id: idProp,
  label,
  labelPosition = 'right',
  hint,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  size = 'md',
  className,
}: SwitchProps) {
  const autoId = useId()
  const id = idProp ?? autoId

  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={cn(styles.row, labelPosition === 'left' && styles.labelLeft)}>
        <RadixSwitch.Root
          id={id}
          className={cn(styles.root, styles[`size-${size}`])}
          checked={checked}
          defaultChecked={defaultChecked}
          onCheckedChange={onCheckedChange}
          disabled={disabled}
        >
          <RadixSwitch.Thumb className={cn(styles.thumb, styles[`thumb-${size}`])} />
        </RadixSwitch.Root>
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

Switch.displayName = 'Switch'
