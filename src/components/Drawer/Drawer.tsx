import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '../../utils/cn'
import { XIcon } from '../Icons'
import styles from './Drawer.module.css'

export type DrawerSide = 'right' | 'left' | 'bottom' | 'top'

export interface DrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  side?: DrawerSide
  title?: string
  description?: string
  showClose?: boolean
  children: React.ReactNode
  trigger?: React.ReactNode
  footer?: React.ReactNode
  width?: string
}

export function Drawer({
  open, onOpenChange, side = 'right', title, description,
  showClose = true, children, trigger, footer, width,
}: DrawerProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={cn(styles.content, styles[`side-${side}`])}
          style={side === 'right' || side === 'left' ? { width: width ?? '360px' } : undefined}
          dir="rtl"
        >
          {(title || showClose) && (
            <div className={styles.header}>
              {title && <Dialog.Title className={styles.title}>{title}</Dialog.Title>}
              {showClose && (
                <Dialog.Close className={styles.closeBtn} aria-label="بستن">
                  <XIcon size={18} />
                </Dialog.Close>
              )}
            </div>
          )}
          {description && (
            <Dialog.Description className={styles.description}>{description}</Dialog.Description>
          )}
          <div className={styles.body}>{children}</div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

Drawer.displayName = 'Drawer'
