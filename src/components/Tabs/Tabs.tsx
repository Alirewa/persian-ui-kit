import React from 'react'
import * as RadixTabs from '@radix-ui/react-tabs'
import { cn } from '../../utils/cn'
import styles from './Tabs.module.css'

export interface TabItem {
  value: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
  badge?: string | number
  content: React.ReactNode
}

export interface TabsProps {
  tabs: TabItem[]
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
  variant?: 'line' | 'pill' | 'enclosed'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Tabs({ tabs, defaultValue, value, onValueChange, variant = 'line', size = 'md', className }: TabsProps) {
  const initial = defaultValue ?? tabs[0]?.value

  return (
    <RadixTabs.Root
      defaultValue={initial}
      value={value}
      onValueChange={onValueChange}
      dir="rtl"
      className={cn(styles.root, className)}
    >
      <RadixTabs.List className={cn(styles.list, styles[`variant-${variant}`], styles[`size-${size}`])}>
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className={cn(styles.trigger, styles[`variant-${variant}-trigger`])}
          >
            {tab.icon && <span className={styles.icon}>{tab.icon}</span>}
            {tab.label}
            {tab.badge !== undefined && (
              <span className={styles.badge}>{tab.badge}</span>
            )}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>
      {tabs.map((tab) => (
        <RadixTabs.Content key={tab.value} value={tab.value} className={styles.content}>
          {tab.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  )
}

Tabs.displayName = 'Tabs'
