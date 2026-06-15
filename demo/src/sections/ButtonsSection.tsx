import React from 'react'
import { Button } from 'persian-ui-kit'
import { SearchIcon, PlusIcon, TrashIcon, DownloadIcon, ArrowLeftIcon } from 'persian-ui-kit'
import { SectionWrapper, SubSection, Row } from '../SectionWrapper'

export function ButtonsSection() {
  return (
    <SectionWrapper title="🔘 دکمه‌ها">
      <SubSection title="حالت‌ها (Variants)">
        <Button variant="primary">اصلی</Button>
        <Button variant="secondary">فرعی</Button>
        <Button variant="outline">حاشیه‌دار</Button>
        <Button variant="ghost">شفاف</Button>
        <Button variant="destructive">حذف</Button>
        <Button variant="link">لینک</Button>
      </SubSection>

      <SubSection title="سایزها">
        <Button size="xs">خیلی کوچک</Button>
        <Button size="sm">کوچک</Button>
        <Button size="md">متوسط</Button>
        <Button size="lg">بزرگ</Button>
        <Button size="xl">خیلی بزرگ</Button>
      </SubSection>

      <SubSection title="با آیکن">
        <Button icon={<SearchIcon size={16} />}>جستجو</Button>
        <Button variant="outline" icon={<PlusIcon size={16} />}>افزودن</Button>
        <Button variant="destructive" icon={<TrashIcon size={16} />}>حذف کردن</Button>
        <Button variant="secondary" icon={<DownloadIcon size={16} />} iconPosition="left">دانلود</Button>
        <Button variant="ghost" icon={<ArrowLeftIcon size={16} />} iconPosition="left">بازگشت</Button>
      </SubSection>

      <SubSection title="حالت‌های خاص">
        <Button loading>در حال ارسال...</Button>
        <Button disabled>غیرفعال</Button>
        <Button variant="outline" loading>بارگذاری</Button>
        <div style={{ width: '100%' }}>
          <Button fullWidth>دکمه تمام‌عرض</Button>
        </div>
      </SubSection>

      <SubSection title="ترکیب رنگ فرعی">
        <Button variant="secondary" size="lg" icon={<PlusIcon size={18}/>}>ثبت سفارش جدید</Button>
        <Button variant="secondary" size="md">ارسال پیام</Button>
        <Button variant="secondary" size="sm">تأیید</Button>
      </SubSection>
    </SectionWrapper>
  )
}
