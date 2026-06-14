import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cn } from '../../utils/cn'
import { XIcon } from '../Icons'
import styles from './Modal.module.css'

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  size?: ModalSize
  showClose?: boolean
  children: React.ReactNode
  trigger?: React.ReactNode
  footer?: React.ReactNode
}

export function Modal({
  open,
  onOpenChange,
  title,
  description,
  size = 'md',
  showClose = true,
  children,
  trigger,
  footer,
}: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={cn(styles.content, styles[`size-${size}`])}
          dir="rtl"
          aria-describedby={description ? 'modal-desc' : undefined}
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
            <Dialog.Description id="modal-desc" className={styles.description}>
              {description}
            </Dialog.Description>
          )}
          <div className={styles.body}>{children}</div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

Modal.displayName = 'Modal'
