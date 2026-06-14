import { useContext } from 'react'
import { ThemeContext } from '../providers/PersianUIProvider'

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme باید درون PersianUIProvider استفاده شود')
  return ctx
}
