import React from 'react'
import { useToast, Button } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function ToastSection() {
  const { success, error, warning, info, toast } = useToast()

  return (
    <SectionWrapper title="🔔 سیستم اعلان (Toast)">
      <SubSection title="انواع اعلان">
        <Button variant="outline"  onClick={() => success('موفقیت!', 'عملیات با موفقیت انجام شد')}>موفقیت ✓</Button>
        <Button variant="destructive" onClick={() => error('خطا!', 'مشکلی در انجام عملیات پیش آمد')}>خطا ✗</Button>
        <Button variant="secondary" onClick={() => warning('هشدار!', 'این عملیات قابل بازگشت نیست')}>هشدار ⚠</Button>
        <Button variant="outline"  onClick={() => info('اطلاعات', 'نسخه جدید در دسترس است')}>اطلاعات ℹ</Button>
      </SubSection>

      <SubSection title="اعلان بدون نوع">
        <Button variant="ghost" onClick={() => toast({ title: 'ذخیره شد', description: 'تغییرات شما ذخیره گردید' })}>
          اعلان ساده
        </Button>
      </SubSection>

      <SubSection title="اعلان با دکمه">
        <Button variant="outline" onClick={() =>
          toast({
            type: 'info',
            title: 'آپدیت در دسترس است',
            description: 'نسخه ۲.۰.۰ آماده نصب است',
            action: { label: 'نصب کن', onClick: () => alert('در حال نصب...') },
          })
        }>
          اعلان با دکمه
        </Button>
      </SubSection>

      <SubSection title="اعلان ماندگار">
        <Button variant="ghost" onClick={() => toast({ title: 'آپلود فایل', description: 'در حال پردازش...', duration: 0 })}>
          اعلان ماندگار (باید ببندی)
        </Button>
      </SubSection>
    </SectionWrapper>
  )
}
