import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'
export type Radius = 'sm' | 'md' | 'lg'

export interface ThemeColors {
  primary?: string
  primaryHover?: string
  primaryForeground?: string
  secondary?: string
  secondaryHover?: string
  secondaryForeground?: string
}

export interface PersianUIProviderProps {
  children: React.ReactNode
  theme?: Theme
  colors?: ThemeColors
  radius?: Radius
  /** inject global CSS automatically (default: true) */
  injectStyles?: boolean
}

export interface ThemeContextValue {
  theme: Theme
  resolvedTheme: 'light' | 'dark'
  setTheme: (theme: Theme) => void
  colors: ThemeColors
  radius: Radius
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

const RADIUS_MAP: Record<Radius, string> = {
  sm: '4px',
  md: '8px',
  lg: '14px',
}

function applyColors(el: HTMLElement, colors: ThemeColors) {
  if (colors.primary) {
    el.style.setProperty('--pui-primary', colors.primary)
  }
  if (colors.primaryHover) {
    el.style.setProperty('--pui-primary-hover', colors.primaryHover)
  }
  if (colors.primaryForeground) {
    el.style.setProperty('--pui-primary-foreground', colors.primaryForeground)
  }
  if (colors.secondary) {
    el.style.setProperty('--pui-secondary', colors.secondary)
  }
  if (colors.secondaryHover) {
    el.style.setProperty('--pui-secondary-hover', colors.secondaryHover)
  }
  if (colors.secondaryForeground) {
    el.style.setProperty('--pui-secondary-foreground', colors.secondaryForeground)
  }
}

export function PersianUIProvider({
  children,
  theme: themeProp = 'system',
  colors = {},
  radius = 'md',
  injectStyles = true,
}: PersianUIProviderProps) {
  const [theme, setThemeState] = useState<Theme>(themeProp)
  const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setSystemTheme(mq.matches ? 'dark' : 'light')
    const handler = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? 'dark' : 'light')
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const resolvedTheme: 'light' | 'dark' = theme === 'system' ? systemTheme : theme

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-pui-theme', resolvedTheme)
    root.style.setProperty('--pui-radius', RADIUS_MAP[radius])
    root.style.setProperty('--pui-radius-md', RADIUS_MAP[radius])
    applyColors(root, colors)
  }, [resolvedTheme, radius, colors])

  const setTheme = useCallback((t: Theme) => setThemeState(t), [])

  const value = useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme, colors, radius }),
    [theme, resolvedTheme, setTheme, colors, radius]
  )

  return (
    <ThemeContext.Provider value={value}>
      <div className="pui-root" dir="rtl" lang="fa">
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
