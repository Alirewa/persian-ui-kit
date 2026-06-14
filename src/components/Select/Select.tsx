import React, { useId } from 'react'
import * as RadixSelect from '@radix-ui/react-select'
import { cn } from '../../utils/cn'
import { ChevronDownIcon, CheckIcon } from '../Icons'
import styles from './Select.module.css'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectGroup {
  label: string
  options: SelectOption[]
}

export interface SelectProps {
  options?: SelectOption[]
  groups?: SelectGroup[]
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  label?: string
  hint?: string
  error?: string
  disabled?: boolean
  fullWidth?: boolean
  size?: 'sm' | 'md' | 'lg'
  id?: string
}

export function Select({
  options,
  groups,
  value,
  defaultValue,
  onValueChange,
  placeholder = 'انتخاب کنید...',
  label,
  hint,
  error,
  disabled,
  fullWidth,
  size = 'md',
  id: idProp,
}: SelectProps) {
  const autoId = useId()
  const id = idProp ?? autoId

  const allOptions: SelectOption[] = options
    ? options
    : groups?.flatMap((g) => g.options) ?? []

  const selectedLabel = allOptions.find((o) => o.value === value)?.label

  return (
    <div className={cn(styles.wrapper, fullWidth && styles.fullWidth)}>
      {label && (
        <label htmlFor={id} className={styles.label}>{label}</label>
      )}
      <RadixSelect.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled}
        dir="rtl"
      >
        <RadixSelect.Trigger
          id={id}
          className={cn(styles.trigger, styles[`size-${size}`], error && styles.hasError)}
          aria-invalid={!!error}
        >
          <RadixSelect.Value placeholder={placeholder}>
            {selectedLabel ?? placeholder}
          </RadixSelect.Value>
          <RadixSelect.Icon className={styles.icon}>
            <ChevronDownIcon size={16} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className={styles.content} position="popper" sideOffset={4} dir="rtl">
            <RadixSelect.Viewport className={styles.viewport}>
              {options && options.map((opt) => (
                <SelectItem key={opt.value} option={opt} />
              ))}
              {groups && groups.map((group) => (
                <RadixSelect.Group key={group.label}>
                  <RadixSelect.Label className={styles.groupLabel}>{group.label}</RadixSelect.Label>
                  {group.options.map((opt) => (
                    <SelectItem key={opt.value} option={opt} />
                  ))}
                </RadixSelect.Group>
              ))}
            </RadixSelect.Viewport>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
      {error && <span className={styles.error} role="alert">{error}</span>}
      {!error && hint && <span className={styles.hint}>{hint}</span>}
    </div>
  )
}

function SelectItem({ option }: { option: SelectOption }) {
  return (
    <RadixSelect.Item
      value={option.value}
      disabled={option.disabled}
      className={styles.item}
    >
      <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className={styles.itemCheck}>
        <CheckIcon size={14} />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}
