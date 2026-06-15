import React, { useState } from 'react'
import { Input } from 'persian-ui-kit'
import { SearchIcon, EyeIcon, EyeOffIcon, UserIcon, LockIcon, MailIcon } from 'persian-ui-kit'
import { SectionWrapper, SubSection } from '../SectionWrapper'

export function InputsSection() {
  const [show, setShow] = useState(false)
  const [val, setVal] = useState('')

  return (
    <SectionWrapper title="✏️ ورودی‌های متن">
      <SubSection title="حالت‌های پایه">
        <Input label="نام" placeholder="نام خود را وارد کنید" fullWidth />
        <Input label="ایمیل" placeholder="example@email.com" type="email" fullWidth />
        <Input label="توضیحات" placeholder="متن خود را بنویسید..." fullWidth hint="حداکثر ۲۰۰ کاراکتر" />
      </SubSection>

      <SubSection title="با آیکن">
        <Input label="جستجو" placeholder="جستجو کنید..." startIcon={<SearchIcon size={16} />} fullWidth />
        <Input label="نام کاربری" placeholder="نام کاربری" startIcon={<UserIcon size={16} />} fullWidth />
        <Input
          label="رمز عبور"
          type={show ? 'text' : 'password'}
          placeholder="رمز عبور"
          startIcon={<LockIcon size={16} />}
          endIcon={
            <button onClick={() => setShow(!show)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', color: 'var(--pui-muted-foreground)' }}>
              {show ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          }
          fullWidth
        />
        <Input label="ایمیل" placeholder="ایمیل" startIcon={<MailIcon size={16} />} fullWidth />
      </SubSection>

      <SubSection title="حالت‌های اعتبارسنجی">
        <Input label="نام" placeholder="نام خود را وارد کنید" error="این فیلد اجباری است" fullWidth />
        <Input label="کد ملی" placeholder="۱۰ رقم" hint="کد ملی ۱۰ رقمی خود را وارد کنید" fullWidth />
        <Input label="ایمیل تأیید شده" defaultValue="user@example.com" fullWidth />
      </SubSection>

      <SubSection title="سایزها">
        <Input placeholder="کوچک" size="sm" />
        <Input placeholder="متوسط" size="md" />
        <Input placeholder="بزرگ" size="lg" />
      </SubSection>

      <SubSection title="حالت Filled">
        <Input label="نام" placeholder="نام خود را وارد کنید" variant="filled" fullWidth />
        <Input label="ایمیل" placeholder="example@email.com" variant="filled" fullWidth />
      </SubSection>
    </SectionWrapper>
  )
}
