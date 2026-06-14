import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import { cn } from '../../utils/cn'
import styles from './Tooltip.module.css'

export type TooltipSide = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  content: React.ReactNode
  children: React.ReactNode
  side?: TooltipSide
  align?: 'start' | 'center' | 'end'
  delayDuration?: number
  className?: string
}

export function Tooltip({ content, children, side = 'top', align = 'center', delayDuration = 300, className }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delayDuration}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            align={align}
            sideOffset={6}
            className={cn(styles.content, className)}
            dir="rtl"
          >
            {content}
            <RadixTooltip.Arrow className={styles.arrow} />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}

Tooltip.displayName = 'Tooltip'
