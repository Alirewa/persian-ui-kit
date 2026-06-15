import React, { useState } from 'react'
import { DatePicker, toPersianDigits } from 'persian-ui-kit'
import type { JalaliDateValue } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function DatePickerSection() {
  const [date1, setDate1] = useState<JalaliDateValue | null>(null)
  const [date2, setDate2] = useState<JalaliDateValue | null>({ jy: 1402, jm: 6, jd: 15 })
  const [date3, setDate3] = useState<JalaliDateValue | null>(null)

  return (
    <SectionWrapper title="📅 تقویم شمسی">
      <SubSection title="انتخاب تاریخ — پایه">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          <DatePicker
            label="تاریخ تولد"
            placeholder="انتخاب تاریخ تولد"
            value={date1}
            onChange={setDate1}
            persian
            fullWidth
            hint="تاریخ شمسی وارد کنید"
          />
          {date1 && (
            <div style={{ padding: '10px 14px', background: 'var(--pui-primary-subtle)', borderRadius: 'var(--pui-radius)', color: 'var(--pui-primary)', fontFamily: 'var(--pui-font-family)', fontSize: 14 }}>
              تاریخ انتخابی: {toPersianDigits(date1.jy)}/{toPersianDigits(String(date1.jm).padStart(2,'0'))}/{toPersianDigits(String(date1.jd).padStart(2,'0'))}
            </div>
          )}
        </div>
      </SubSection>

      <SubSection title="با مقدار پیش‌فرض">
        <DatePicker
          label="تاریخ شروع قرارداد"
          value={date2}
          onChange={setDate2}
          persian
          fullWidth
        />
      </SubSection>

      <SubSection title="با محدودیت تاریخ">
        <DatePicker
          label="تاریخ رزرو (از امروز به بعد)"
          value={date3}
          onChange={setDate3}
          persian
          fullWidth
          min={{ jy: 1403, jm: 1, jd: 1 }}
          max={{ jy: 1403, jm: 12, jd: 29 }}
          hint="فقط تاریخ‌های سال ۱۴۰۳ قابل انتخاب هستند"
        />
      </SubSection>

      <SubSection title="حالت خطا">
        <DatePicker
          label="تاریخ اتمام"
          value={null}
          onChange={() => {}}
          persian
          fullWidth
          error="لطفاً تاریخ را انتخاب کنید"
        />
      </SubSection>
    </SectionWrapper>
  )
}
