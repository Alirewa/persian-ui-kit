import React, { useState } from 'react'
import { Select } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

const provinces = [
  { value: 'tehran', label: 'تهران' },
  { value: 'isfahan', label: 'اصفهان' },
  { value: 'mashhad', label: 'مشهد' },
  { value: 'tabriz', label: 'تبریز' },
  { value: 'shiraz', label: 'شیراز' },
  { value: 'ahvaz', label: 'اهواز' },
  { value: 'karaj', label: 'کرج' },
]

const grouped = [
  {
    label: 'بانک‌های دولتی',
    options: [
      { value: 'melli', label: 'بانک ملی' },
      { value: 'sepah', label: 'بانک سپه' },
      { value: 'mellat', label: 'بانک ملت' },
    ],
  },
  {
    label: 'بانک‌های خصوصی',
    options: [
      { value: 'tejarat', label: 'بانک تجارت' },
      { value: 'saderat', label: 'بانک صادرات' },
      { value: 'eghtesad', label: 'اقتصاد نوین' },
    ],
  },
]

export function SelectSection() {
  const [prov, setProv] = useState('')
  const [bank, setBank] = useState('')

  return (
    <SectionWrapper title="📋 کامپوننت انتخاب">
      <SubSection title="انتخاب ساده">
        <Select label="استان" options={provinces} value={prov} onValueChange={setProv} placeholder="استان را انتخاب کنید" fullWidth />
      </SubSection>

      <SubSection title="با گروه‌بندی">
        <Select label="بانک" groups={grouped} value={bank} onValueChange={setBank} placeholder="بانک خود را انتخاب کنید" fullWidth />
      </SubSection>

      <SubSection title="سایزها">
        <Select options={provinces} size="sm" placeholder="کوچک" />
        <Select options={provinces} size="md" placeholder="متوسط" />
        <Select options={provinces} size="lg" placeholder="بزرگ" />
      </SubSection>

      <SubSection title="حالت خطا و غیرفعال">
        <Select options={provinces} error="لطفاً استان را انتخاب کنید" placeholder="خطادار" fullWidth />
        <Select options={provinces} disabled placeholder="غیرفعال" fullWidth />
      </SubSection>
    </SectionWrapper>
  )
}
