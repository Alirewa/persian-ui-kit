import React, { createContext, useCallback, useContext, useId, useReducer } from 'react'
import { cn } from '../../utils/cn'
import { CheckCircleIcon, AlertCircleIcon, InfoIcon, XCircleIcon, XIcon } from '../Icons'
import styles from './Toast.module.css'

export type ToastType = 'success' | 'error' | 'warning' | 'info'
export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center'

export interface ToastItem {
  id: string
  type?: ToastType
  title: string
  description?: string
  duration?: number
  action?: { label: string; onClick: () => void }
}

interface ToastState { toasts: ToastItem[] }
type ToastAction =
  | { type: 'ADD'; toast: ToastItem }
  | { type: 'REMOVE'; id: string }

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case 'ADD':    return { toasts: [action.toast, ...state.toasts].slice(0, 5) }
    case 'REMOVE': return { toasts: state.toasts.filter((t) => t.id !== action.id) }
    default:       return state
  }
}

interface ToastContextValue {
  toast: (item: Omit<ToastItem, 'id'>) => void
  success: (title: string, description?: string) => void
  error:   (title: string, description?: string) => void
  warning: (title: string, description?: string) => void
  info:    (title: string, description?: string) => void
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error('useToast باید درون ToastProvider استفاده شود')
  return ctx
}

export interface ToastProviderProps {
  children: React.ReactNode
  position?: ToastPosition
}

export function ToastProvider({ children, position = 'top-right' }: ToastProviderProps) {
  const [state, dispatch] = useReducer(toastReducer, { toasts: [] })

  const toast = useCallback((item: Omit<ToastItem, 'id'>) => {
    const id = Math.random().toString(36).slice(2)
    const duration = item.duration ?? 4000
    dispatch({ type: 'ADD', toast: { ...item, id } })
    if (duration > 0) setTimeout(() => dispatch({ type: 'REMOVE', id }), duration)
  }, [])

  const success = useCallback((title: string, description?: string) => toast({ type: 'success', title, description }), [toast])
  const error   = useCallback((title: string, description?: string) => toast({ type: 'error',   title, description }), [toast])
  const warning = useCallback((title: string, description?: string) => toast({ type: 'warning', title, description }), [toast])
  const info    = useCallback((title: string, description?: string) => toast({ type: 'info',    title, description }), [toast])
  const dismiss = useCallback((id: string) => dispatch({ type: 'REMOVE', id }), [])

  return (
    <ToastContext.Provider value={{ toast, success, error, warning, info, dismiss }}>
      {children}
      <div className={cn(styles.container, styles[`pos-${position}`])} aria-live="polite" dir="rtl">
        {state.toasts.map((t) => (
          <ToastCard key={t.id} item={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

const ICONS: Record<ToastType, React.ReactNode> = {
  success: <CheckCircleIcon size={18} />,
  error:   <XCircleIcon size={18} />,
  warning: <AlertCircleIcon size={18} />,
  info:    <InfoIcon size={18} />,
}

function ToastCard({ item, onDismiss }: { item: ToastItem; onDismiss: () => void }) {
  return (
    <div
      role="alert"
      className={cn(styles.toast, item.type && styles[`type-${item.type}`])}
    >
      {item.type && <span className={styles.toastIcon}>{ICONS[item.type]}</span>}
      <div className={styles.toastBody}>
        <span className={styles.toastTitle}>{item.title}</span>
        {item.description && <span className={styles.toastDesc}>{item.description}</span>}
        {item.action && (
          <button type="button" className={styles.toastAction} onClick={item.action.onClick}>
            {item.action.label}
          </button>
        )}
      </div>
      <button type="button" className={styles.toastClose} onClick={onDismiss} aria-label="بستن">
        <XIcon size={14} />
      </button>
    </div>
  )
}
