import React from 'react'
import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import { cn } from '../../utils/cn'
import { CheckIcon, ChevronLeftIcon } from '../Icons'
import styles from './Dropdown.module.css'

export interface DropdownMenuItem {
  type?: 'item' | 'separator' | 'label' | 'sub'
  label?: string
  icon?: React.ReactNode
  shortcut?: string
  disabled?: boolean
  destructive?: boolean
  checked?: boolean
  onClick?: () => void
  subItems?: DropdownMenuItem[]
}

export interface DropdownProps {
  trigger: React.ReactNode
  items: DropdownMenuItem[]
  align?: 'start' | 'center' | 'end'
  side?: 'top' | 'bottom' | 'left' | 'right'
  className?: string
}

export function Dropdown({ trigger, items, align = 'end', side = 'bottom', className }: DropdownProps) {
  return (
    <RadixDropdown.Root dir="rtl">
      <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>
      <RadixDropdown.Portal>
        <RadixDropdown.Content
          align={align}
          side={side}
          sideOffset={6}
          className={cn(styles.content, className)}
          dir="rtl"
        >
          {items.map((item, i) => renderItem(item, i))}
        </RadixDropdown.Content>
      </RadixDropdown.Portal>
    </RadixDropdown.Root>
  )
}

function renderItem(item: DropdownMenuItem, key: number): React.ReactNode {
  if (item.type === 'separator') return <RadixDropdown.Separator key={key} className={styles.separator} />
  if (item.type === 'label') return <RadixDropdown.Label key={key} className={styles.label}>{item.label}</RadixDropdown.Label>

  if (item.type === 'sub' && item.subItems) {
    return (
      <RadixDropdown.Sub key={key}>
        <RadixDropdown.SubTrigger className={cn(styles.item, item.disabled && styles.disabled)}>
          {item.icon && <span className={styles.icon}>{item.icon}</span>}
          <span className={styles.itemLabel}>{item.label}</span>
          <ChevronLeftIcon size={14} className={styles.subArrow} />
        </RadixDropdown.SubTrigger>
        <RadixDropdown.Portal>
          <RadixDropdown.SubContent className={styles.content} dir="rtl">
            {item.subItems.map((sub, si) => renderItem(sub, si))}
          </RadixDropdown.SubContent>
        </RadixDropdown.Portal>
      </RadixDropdown.Sub>
    )
  }

  if (item.checked !== undefined) {
    return (
      <RadixDropdown.CheckboxItem
        key={key}
        className={cn(styles.item, item.disabled && styles.disabled)}
        checked={item.checked}
        onCheckedChange={() => item.onClick?.()}
        disabled={item.disabled}
      >
        <RadixDropdown.ItemIndicator className={styles.checkIndicator}>
          <CheckIcon size={13} />
        </RadixDropdown.ItemIndicator>
        {item.icon && <span className={styles.icon}>{item.icon}</span>}
        <span className={styles.itemLabel}>{item.label}</span>
      </RadixDropdown.CheckboxItem>
    )
  }

  return (
    <RadixDropdown.Item
      key={key}
      className={cn(styles.item, item.destructive && styles.destructive, item.disabled && styles.disabled)}
      onSelect={() => item.onClick?.()}
      disabled={item.disabled}
    >
      {item.icon && <span className={styles.icon}>{item.icon}</span>}
      <span className={styles.itemLabel}>{item.label}</span>
      {item.shortcut && <span className={styles.shortcut}>{item.shortcut}</span>}
    </RadixDropdown.Item>
  )
}

Dropdown.displayName = 'Dropdown'
