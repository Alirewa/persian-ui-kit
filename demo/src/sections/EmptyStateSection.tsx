import React from 'react'
import { EmptyState, Button } from 'persian-ui-kit'
import { PlusIcon, RefreshIcon } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function EmptyStateSection() {
  return (
    <SectionWrapper title="📭 حالت خالی">
      <SubSection title="پریست‌های آماده">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, width: '100%' }}>
          {(['no-data','no-results','no-connection','no-access','empty-cart','empty-inbox','coming-soon','error'] as const).map(p => (
            <div key={p} style={{ border: '1px solid var(--pui-border)', borderRadius: 'var(--pui-radius-lg)', overflow: 'hidden' }}>
              <EmptyState preset={p} size="sm" />
              <div style={{ padding: '8px 16px 12px', borderTop: '1px solid var(--pui-border)', fontFamily: 'var(--pui-font-family)', fontSize: 11, color: 'var(--pui-muted-foreground)', textAlign: 'center' }}>{p}</div>
            </div>
          ))}
        </div>
      </SubSection>

      <SubSection title="با دکمه عمل">
        <div style={{ width: '100%', border: '1px solid var(--pui-border)', borderRadius: 'var(--pui-radius-lg)' }}>
          <EmptyState
            preset="no-data"
            title="هنوز هیچ محصولی ندارید"
            description="اولین محصول خود را اضافه کنید و فروشگاهتان را راه‌اندازی کنید."
            action={<Button icon={<PlusIcon size={16}/>}>افزودن محصول</Button>}
          />
        </div>
      </SubSection>

      <SubSection title="خطای شبکه با دکمه تلاش مجدد">
        <div style={{ width: '100%', border: '1px solid var(--pui-border)', borderRadius: 'var(--pui-radius-lg)' }}>
          <EmptyState
            preset="no-connection"
            action={<Button variant="outline" icon={<RefreshIcon size={16}/>}>تلاش مجدد</Button>}
          />
        </div>
      </SubSection>
    </SectionWrapper>
  )
}
