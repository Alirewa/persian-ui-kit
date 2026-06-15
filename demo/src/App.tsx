import React, { useState } from 'react'
import { PersianUIProvider, ToastProvider, useTheme } from 'persian-ui-kit'
import { Sidebar } from './Sidebar'
import { ButtonsSection }    from './sections/ButtonsSection'
import { InputsSection }     from './sections/InputsSection'
import { SelectSection }     from './sections/SelectSection'
import { CheckboxRadioSection } from './sections/CheckboxRadioSection'
import { CardsSection }      from './sections/CardsSection'
import { BadgeAvatarSection } from './sections/BadgeAvatarSection'
import { TypographySection } from './sections/TypographySection'
import { DatePickerSection } from './sections/DatePickerSection'
import { OtpPhoneSection }   from './sections/OtpPhoneSection'
import { TableSection }      from './sections/TableSection'
import { ModalDrawerSection } from './sections/ModalDrawerSection'
import { ToastSection }      from './sections/ToastSection'
import { TabsSection }       from './sections/TabsSection'
import { AccordionSection }  from './sections/AccordionSection'
import { PaginationSection } from './sections/PaginationSection'
import { IconsSection }      from './sections/IconsSection'
import { SpinnerSkeletonSection } from './sections/SpinnerSkeletonSection'
import { FileUploadSection } from './sections/FileUploadSection'
import { EmptyStateSection } from './sections/EmptyStateSection'

export const SECTIONS = [
  { id: 'typography',     label: 'تایپوگرافی',      emoji: '🔤' },
  { id: 'buttons',        label: 'دکمه‌ها',           emoji: '🔘' },
  { id: 'inputs',         label: 'ورودی متن',         emoji: '✏️' },
  { id: 'select',         label: 'انتخاب',            emoji: '📋' },
  { id: 'checkbox-radio', label: 'چک‌باکس و رادیو',   emoji: '☑️' },
  { id: 'date-picker',    label: 'تاریخ شمسی',        emoji: '📅' },
  { id: 'otp-phone',      label: 'OTP / موبایل / ملی', emoji: '🇮🇷' },
  { id: 'cards',          label: 'کارت‌ها',            emoji: '🗂️' },
  { id: 'badge-avatar',   label: 'نشانه و آواتار',    emoji: '🏷️' },
  { id: 'table',          label: 'جدول',              emoji: '📊' },
  { id: 'modal-drawer',   label: 'مودال و کشو',       emoji: '🪟' },
  { id: 'toast',          label: 'اعلان',             emoji: '🔔' },
  { id: 'tabs',           label: 'تب‌ها',             emoji: '📑' },
  { id: 'accordion',      label: 'آکاردئون',          emoji: '🪗' },
  { id: 'pagination',     label: 'صفحه‌بندی',         emoji: '📄' },
  { id: 'spinner',        label: 'اسپینر / اسکلتون',  emoji: '⏳' },
  { id: 'file-upload',    label: 'آپلود فایل',        emoji: '📁' },
  { id: 'empty-state',    label: 'حالت خالی',         emoji: '📭' },
  { id: 'icons',          label: 'آیکن‌ها',           emoji: '🎨' },
]

function DemoContent() {
  const [active, setActive] = useState('typography')
  const { resolvedTheme, setTheme, theme } = useTheme()

  const sectionMap: Record<string, React.ReactNode> = {
    'typography':     <TypographySection />,
    'buttons':        <ButtonsSection />,
    'inputs':         <InputsSection />,
    'select':         <SelectSection />,
    'checkbox-radio': <CheckboxRadioSection />,
    'date-picker':    <DatePickerSection />,
    'otp-phone':      <OtpPhoneSection />,
    'cards':          <CardsSection />,
    'badge-avatar':   <BadgeAvatarSection />,
    'table':          <TableSection />,
    'modal-drawer':   <ModalDrawerSection />,
    'toast':          <ToastSection />,
    'tabs':           <TabsSection />,
    'accordion':      <AccordionSection />,
    'pagination':     <PaginationSection />,
    'spinner':        <SpinnerSkeletonSection />,
    'file-upload':    <FileUploadSection />,
    'empty-state':    <EmptyStateSection />,
    'icons':          <IconsSection />,
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--pui-background)', direction: 'rtl' }}>
      <Sidebar active={active} onSelect={setActive} theme={theme} onToggleTheme={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} />
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto', maxWidth: '100%' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {sectionMap[active]}
        </div>
      </main>
    </div>
  )
}

export default function App() {
  const [primaryColor, setPrimaryColor] = useState('#0EA5E9')
  const [secondaryColor, setSecondaryColor] = useState('#F97316')

  return (
    <PersianUIProvider theme="system" colors={{ primary: primaryColor, secondary: secondaryColor }}>
      <ToastProvider position="top-right">
        <DemoContent />
      </ToastProvider>
    </PersianUIProvider>
  )
}
