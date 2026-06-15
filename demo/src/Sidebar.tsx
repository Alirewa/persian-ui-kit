import React from 'react'
import { SECTIONS } from './App'
import type { Theme } from 'persian-ui-kit'

interface SidebarProps {
  active: string
  onSelect: (id: string) => void
  theme: Theme
  onToggleTheme: () => void
}

export function Sidebar({ active, onSelect, theme, onToggleTheme }: SidebarProps) {
  return (
    <aside style={{
      width: 240,
      flexShrink: 0,
      background: 'var(--pui-surface)',
      borderLeft: '1px solid var(--pui-border)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      position: 'sticky',
      top: 0,
      overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 16px 12px', borderBottom: '1px solid var(--pui-border)' }}>
        <div style={{ fontFamily: 'var(--pui-font-family)', fontWeight: 900, fontSize: 18, color: 'var(--pui-primary)', marginBottom: 4 }}>
          🇮🇷 Persian UI Kit
        </div>
        <div style={{ fontFamily: 'var(--pui-font-family)', fontSize: 12, color: 'var(--pui-muted-foreground)' }}>
          دمو تمام کامپوننت‌ها
        </div>
      </div>

      {/* Theme toggle */}
      <div style={{ padding: '10px 12px', borderBottom: '1px solid var(--pui-border)' }}>
        <button
          onClick={onToggleTheme}
          style={{
            width: '100%', padding: '8px 12px', borderRadius: 'var(--pui-radius)',
            border: '1.5px solid var(--pui-border)', background: 'var(--pui-muted)',
            color: 'var(--pui-foreground)', fontFamily: 'var(--pui-font-family)',
            cursor: 'pointer', fontSize: 13, display: 'flex', alignItems: 'center',
            gap: 8, justifyContent: 'center', transition: 'all 150ms',
          }}
        >
          {theme === 'dark' ? '☀️ حالت روشن' : '🌙 حالت تاریک'}
        </button>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '8px 8px' }}>
        {SECTIONS.map(s => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            style={{
              width: '100%', textAlign: 'right', padding: '9px 12px',
              borderRadius: 'var(--pui-radius)', border: 'none',
              background: active === s.id ? 'var(--pui-primary-subtle)' : 'transparent',
              color: active === s.id ? 'var(--pui-primary)' : 'var(--pui-foreground)',
              fontFamily: 'var(--pui-font-family)', fontSize: 13, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
              fontWeight: active === s.id ? 700 : 400,
              marginBottom: 2,
              transition: 'all 120ms',
            }}
          >
            <span>{s.emoji}</span>
            <span>{s.label}</span>
            {active === s.id && (
              <span style={{ marginRight: 'auto', width: 4, height: 4, borderRadius: '50%', background: 'var(--pui-primary)', flexShrink: 0 }} />
            )}
          </button>
        ))}
      </nav>

      <div style={{ padding: 12, borderTop: '1px solid var(--pui-border)', fontFamily: 'var(--pui-font-family)', fontSize: 11, color: 'var(--pui-muted-foreground)', textAlign: 'center' }}>
        v0.1.0
      </div>
    </aside>
  )
}
