import React from 'react'
import * as RadixAccordion from '@radix-ui/react-accordion'
import { cn } from '../../utils/cn'
import { ChevronDownIcon } from '../Icons'
import styles from './Accordion.module.css'

export interface AccordionItem {
  value: string
  title: string
  content: React.ReactNode
  disabled?: boolean
}

export interface AccordionProps {
  items: AccordionItem[]
  type?: 'single' | 'multiple'
  defaultValue?: string | string[]
  collapsible?: boolean
  variant?: 'default' | 'bordered' | 'ghost'
  className?: string
}

export function Accordion({ items, type = 'single', defaultValue, collapsible = true, variant = 'default', className }: AccordionProps) {
  const commonProps = { dir: 'rtl' as const, className: cn(styles.root, styles[`variant-${variant}`], className) }

  const content = items.map((item) => (
    <RadixAccordion.Item key={item.value} value={item.value} disabled={item.disabled} className={styles.item}>
      <RadixAccordion.Header>
        <RadixAccordion.Trigger className={styles.trigger}>
          <span>{item.title}</span>
          <ChevronDownIcon size={16} className={styles.chevron} />
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
      <RadixAccordion.Content className={styles.content}>
        <div className={styles.contentInner}>{item.content}</div>
      </RadixAccordion.Content>
    </RadixAccordion.Item>
  ))

  if (type === 'multiple') {
    return (
      <RadixAccordion.Root type="multiple" defaultValue={defaultValue as string[] | undefined} {...commonProps}>
        {content}
      </RadixAccordion.Root>
    )
  }

  return (
    <RadixAccordion.Root
      type="single"
      defaultValue={defaultValue as string | undefined}
      collapsible={collapsible}
      {...commonProps}
    >
      {content}
    </RadixAccordion.Root>
  )
}

Accordion.displayName = 'Accordion'
