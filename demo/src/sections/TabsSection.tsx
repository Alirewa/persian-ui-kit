import React from 'react'
import { Tabs, Badge, Card, CardContent } from 'persian-ui-kit'
import { UserIcon, BellIcon, SettingsIcon } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

const items = [
  { value: 'profile',  label: 'پروفایل',   icon: <UserIcon size={15}/>,     badge: undefined, content: <p style={{ fontFamily: 'var(--pui-font-family)', color: 'var(--pui-muted-foreground)', margin: 0 }}>اطلاعات پروفایل شما اینجا نمایش داده می‌شود.</p> },
  { value: 'notif',    label: 'اعلان‌ها',  icon: <BellIcon size={15}/>,     badge: 5,          content: <p style={{ fontFamily: 'var(--pui-font-family)', color: 'var(--pui-muted-foreground)', margin: 0 }}>۵ اعلان خوانده نشده دارید.</p> },
  { value: 'settings', label: 'تنظیمات',   icon: <SettingsIcon size={15}/>, badge: undefined, content: <p style={{ fontFamily: 'var(--pui-font-family)', color: 'var(--pui-muted-foreground)', margin: 0 }}>تنظیمات حساب کاربری شما.</p> },
]

export function TabsSection() {
  return (
    <SectionWrapper title="📑 تب‌ها">
      <SubSection title="حالت خطی (Line)">
        <div style={{ width: '100%' }}>
          <Tabs tabs={items} variant="line" />
        </div>
      </SubSection>
      <SubSection title="حالت قرص (Pill)">
        <div style={{ width: '100%' }}>
          <Tabs tabs={items} variant="pill" />
        </div>
      </SubSection>
      <SubSection title="حالت محصور (Enclosed)">
        <div style={{ width: '100%' }}>
          <Tabs tabs={items} variant="enclosed" />
        </div>
      </SubSection>
      <SubSection title="سایزها">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <Tabs tabs={items.slice(0,3)} variant="pill" size="sm" />
          <Tabs tabs={items.slice(0,3)} variant="pill" size="md" />
          <Tabs tabs={items.slice(0,3)} variant="pill" size="lg" />
        </div>
      </SubSection>
    </SectionWrapper>
  )
}
