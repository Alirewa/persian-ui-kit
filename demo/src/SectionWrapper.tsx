import React from 'react'

export function SectionWrapper({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ direction: 'rtl', fontFamily: 'var(--pui-font-family)' }}>
      <h1 style={{ fontSize: 28, fontWeight: 900, color: 'var(--pui-foreground)', margin: '0 0 8px', borderBottom: '3px solid var(--pui-primary)', paddingBottom: 12 }}>
        {title}
      </h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 24 }}>
        {children}
      </div>
    </div>
  )
}

export function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: 'var(--pui-muted-foreground)', margin: '0 0 16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'flex-start' }}>
        {children}
      </div>
    </div>
  )
}

export function Row({ children, col }: { children: React.ReactNode; col?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: col ? 'stretch' : 'flex-start', flexDirection: col ? 'column' : 'row' }}>
      {children}
    </div>
  )
}
